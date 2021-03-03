import React from "react"
import "./transactionError.css"

export const TransactionError = (props) => {
    const {transactionError} = props;
    return(
        <>
            {transactionError ? (
                <div className={"transactionError"}>Recipient not found check the correctness of the entered data</div>
            )  :<div></div>
            }
            </>
    )
}