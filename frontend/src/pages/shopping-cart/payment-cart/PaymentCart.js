import {Button} from "@nextui-org/react";
import React from 'react';

function PaymentCard(){
    return(
        <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                <h5 className="mb-2 text-2xl font-medium tracking-tight text-gray-900 dark:text-white">Total</h5>
                <Button className="bg-black p-1 text-white text-center ">
                        Proceed to checkout
                </Button>   
            </div>
    )
}

export default PaymentCard;