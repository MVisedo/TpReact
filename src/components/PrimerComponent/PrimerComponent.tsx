import { FC } from "react";

interface IPropsPrimerComponent{
    text:String;
    color: String;
}


export const PrimerConponent : FC<IPropsPrimerComponent> = ({text, color}) =>{
    return <div style={{color: `${color}`}}><p>{text}</p></div>;
}