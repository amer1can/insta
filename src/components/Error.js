import React from 'react';
import img from '../error.png'

const ErrorMessage = () => {
    return (
        // react fragment - если нужно отрендерить несколько эл-ов не оборачивая в лишние div'ы
        <>  
        <img src={img} alt="error"></img>
        </>
    )
}

export default ErrorMessage;