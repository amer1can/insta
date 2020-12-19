import React from 'react';
import User from './User';

export default function Users() {
    return (
        <div className="right">
            <User 
                src="https://bipbap.ru/wp-content/uploads/2017/05/VOLKI-krasivye-i-ochen-umnye-zhivotnye.jpg" 
                alt="user" 
                name="Valera"/>
            <div className="users__block">
            <User 
                    src="https://bipbap.ru/wp-content/uploads/2017/05/VOLKI-krasivye-i-ochen-umnye-zhivotnye.jpg" 
                    alt="user" 
                    name="Valera"
                    min/>
            <User 
                    src="https://bipbap.ru/wp-content/uploads/2017/05/VOLKI-krasivye-i-ochen-umnye-zhivotnye.jpg" 
                    alt="user" 
                    name="Valera"
                    min/>
            <User 
                    src="https://bipbap.ru/wp-content/uploads/2017/05/VOLKI-krasivye-i-ochen-umnye-zhivotnye.jpg" 
                    alt="user" 
                    name="Valera"
                    min/>
            <User 
                    src="https://bipbap.ru/wp-content/uploads/2017/05/VOLKI-krasivye-i-ochen-umnye-zhivotnye.jpg" 
                    alt="user" 
                    name="Valera"
                    min/>
            </div>
        </div>
    )
}