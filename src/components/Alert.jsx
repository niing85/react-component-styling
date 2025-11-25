/** @jsxImportSource @emotion/react */ 
import { css } from "@emotion/react";

export function Alert(prop) {
  return (
    <div className="alert"
        css = {css`
        background-color: ${prop.backgroundColor};
        width: 650px;
        height: 76px;
        padding: 8px;   
        margin: 50px;
        text-align: left;
        font-weight: 700;
        font-size: 20px;
        color: black;
        display: flex;
        flex-direction: colum;
        justify-content: flex-start;
        align-items: center;
        border: none;
        border-radius: 10px;
        `}
    >
      <img src={prop.alertPicture} alt="error"
        css = {css`
        max-width: 24px;
        max-height: 24px; 
        margin: 5px;     
        `} 
      />
      <p>{prop.textAlert}</p>
    </div>
  );
}


