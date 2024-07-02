import background from "../plant-grid/background.jpg";
import {Button} from "@nextui-org/react";
import Description from "./description/Description";
import React from 'react';

function PlantDescription(){
    return(    
        <div>
            <div className="flex items-center justify-center mt-16">
                <div className="space-y-8  md:space-y-0 md:space-x-8 rtl:space-x-reverse md:flex md:items-center">
                    <div className="flex items-center justify-center w-full h-48 bg-gray-300 rounded sm:w-96 dark:bg-gray-700">
                        <img className="rounded-t-lg w-80 h-60" src={background} alt="" />
                    </div>
                    <div className="w-full">
                        <h6 className="h-6 rounded-full w-48 mb-4 font-bold text-xl text-gray-700 dark:text-gray-400">title</h6>
                        <p className="h-6 rounded-full  mb-4 font-bold text-lg text-gray-700 dark:text-gray-400">Price</p>
                        <p className="h-4 rounded-full mb-4 text-base">description1</p>
                        <p className="h-4 rounded-full mb-4 text-base">description2</p>
                        <Button className="bg-black m-4 p-2 text-white text-center ">
                            <span>Add to Cart </span>
                        </Button>  
                    </div>
                    <span className="sr-only">Loading...</span>
                </div>
            </div> 
            <Description />
        </div>  
    )
}

export default PlantDescription;