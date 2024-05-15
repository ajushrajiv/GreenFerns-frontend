import React, { useEffect } from "react";

function ErrorPopOver({ message , onClose}){
    const possibleErrors = {
        "400": "Bad request. Please check your input data.",
        "403": "Forbidden. You do not have permission to access this resource.",
        "409": "Conflict. The resource you are trying to access is in a conflicted state."
      };

    const errorMessage = possibleErrors[message] || " Registration successful ";

    useEffect(() => {
        const timer = setTimeout(() => {
          onClose(); 
        }, 10000);
        return () => clearTimeout(timer);
      }, [onClose]);

    return(
        <div>
            <p>{errorMessage}</p>
        </div>
    )
}

export default ErrorPopOver;