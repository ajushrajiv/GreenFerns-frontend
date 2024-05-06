import { createContext, useState,useEffect } from "react";
import AuthMutations from "../../api/mutations-queries/auth/AuthMutations";
import { deleteAccessToken,getAccessToken } from '../../utils/TokenHandler';
import UserQueries from "../../api/mutations-queries/user/UserQueries"

const UserContext = createContext();

export const UserProvider = ({children}) => {

    const [ user, setUser ] = useState(null);

    async function loginUser (email, password) {
        try {
            const{ user, accessToken } = await AuthMutations.currentLoginUser(email, password);
            setUser(user);
            console.log("Login successful from user context",user.username);
            console.log("Login successful from user context ACCESS TOKEN",accessToken);
            validateUser(accessToken);
            return user;
        } catch (error) {
            console.error("Login failed", error);
            throw error; 
        }
    };

    async function dataSignUpUser (username, password, email) {
      try {
          const{ user, accessToken } = await AuthMutations.signUpUser(username, password, email);
          setUser(user);
          console.log("SignUp successful from user context",user.username);
          console.log("SignUp successful from user context ACCESS TOKEN",accessToken);
          validateUser(accessToken);
          return user;
      } catch (error) {
          console.error("SignUp failed", error);
          throw error; 
      }
  };

    async function loadCurrentUser() {
      try{
        const result = await UserQueries.currentUser();
    
        if (result.user) {
          setUser(result.user);
        }
      }catch(e){
        if(e.response.status === 403){
          logOutUser();
        }
        console.log("Error from loadCurrentUser", e.response)
      }
    }
  
    useEffect(() => {
      loadCurrentUser();
    }, []);
    
    function validateUser(accessToken){
        const storedAccessToken = getAccessToken();
        
        // Compare the access tokens
        if (storedAccessToken === accessToken) {
            console.log("Access token matches. User is valid.");
            // Proceed with your application logic for a valid user
        } else {
            console.log("Access token mismatch. User is not valid.");
            // Handle the case where the access tokens don't match
        }
    }

    function logOutUser() {
        setUser(null);
        deleteAccessToken();
        console.log("Logged out successfully");
    };

    return (
        <UserContext.Provider value={{ user, loginUser, logOutUser, dataSignUpUser }}>
          {children}
        </UserContext.Provider>
      );
}
  
export default UserContext;