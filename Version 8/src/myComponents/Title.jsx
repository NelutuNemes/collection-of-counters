import React from "react";
import { MY_TITLE } from "../data.jsx";
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'


export default function Title ()
{
    const { title, description } = MY_TITLE[0];
    return (
        <div>
            <div id="title-and-logo">
                <div id="title">
                    <h2 id="subtitle1" >{ title } </h2>
                    <h3 id="subtitle2">{description} </h3>
                </div>

                <div id='inherit-logo'>
                    <a href="https://vitejs.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo" />
                    </a>
                    <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo" />
                    </a>
                </div>

            </div>      

        </div>
    );
}