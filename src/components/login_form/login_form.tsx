import React from "react";
import { Link } from "react-router-dom";

import Input, { Type as InputType } from "../input/";
import Icon from "../../icon";
import Button, { Style } from "../button/";

import "./login_form.scss";

export interface Props
{
    id: string;
}

const LoginForm: React.FunctionComponent<Props> = (props) =>
{
    return <div className="login-form">
        <span className="title">
            Iniciar sesión
        </span>

        <form action="">
            <Input id={`email-or-username-${props.id}`} type={InputType.Text} placeholder="Correo o nombre de usuario" icon={Icon.User} />
            
            <Input id={`password-${props.id}`} type={InputType.Password} placeholder="Contraseña" icon={Icon.Password} />

            <footer>
                <Button id={`submit-${props.id}`} style={Style.Green} message="Entrar" />
                
                <span className="login-question">
                    ¿No tienes una cuenta? <Link to="/signup">Crear una</Link>.
                </span>
            </footer>
        </form>
    </div>;
};

export default LoginForm;