import React from "react";

import "./button.scss";

export interface Props
{
    id: string;
    style: Style;
    message: any;
    iconImage?: any;
}

export enum Style
{
    Transparent = "transparent",
    Green = "green",
}

const Button: React.FunctionComponent<Props> = (props) =>
{
    return <div id={props.id} className={`button ${props.style}`}>
        {props.iconImage ?
            <div className="icon-image">
                {props.iconImage}
            </div> :
            null
        }
        <div className="message">
            {props.message}
        </div>
    </div>;
};

export default Button;