// Start coding here
/** @jsxImportSource @emotion/react */ 
import { css } from "@emotion/react";

export function Button(prop) {
    return (
    <button 
    css = {css`
    background-color: ${prop.backgroundColor};
    color: white;
    width: 150px;
    padding: 10px 20px;
    margin: 3px;
    border-radius: 4px;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    border: none;
    display: flex;
    flex-direction: column;
    `}
    >
        Large
    </button>
    )    
}
