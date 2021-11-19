import React, { useEffect } from "react";

import Icon from "../../icon";

import "./input.scss";

export interface Props
{
    id: string;
    type: Type;
    placeholder: string;
    icon?: Icon;
}

export interface InputElement extends HTMLDivElement
{
    getValue(): string;
}

export enum Type
{
    Text = "text",
    Email = "email",
    Password = "password",
}

const Input: React.FunctionComponent<Props> = (props) =>
{
    useEffect(() =>
    {
        const element = document.getElementById(props.id) as InputElement;
        const input = document.getElementById(`input-${props.id}`) as HTMLInputElement;

        element.getValue = () =>
        {
            return input.value;
        };

        input.onfocus = () =>
        {
            element.classList.add("active");
        };

        input.onblur = () =>
        {
            element.classList.remove("active");
        };
    },
    []);

    return <div id={props.id} className="input-container">
        <div className="icon-container">
            <i className={`fi ${props.icon}`}></i>
        </div>

        <input id={`input-${props.id}`} type={props.type} placeholder={props.placeholder} />
    </div>;
};

export default Input;