import React from 'react';
import './Button.css';

const Button = (props) => {
    const tg = window.Telegram.WebApp
    return (
        <button {...props} className={'button ' + props.className}/>
    );
};

export default Button;