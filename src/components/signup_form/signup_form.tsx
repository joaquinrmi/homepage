import React from "react";
import { Link } from "react-router-dom";

import Input, { Type as InputType } from "../input/";
import Icon from "../../icon";
import Button, { Style } from "../button/";

import "./signup_form.scss";

export interface Props
{
    id: string;
}

const SignupForm: React.FunctionComponent<Props> = (props) =>
{
    return <div className="signup-form">
        <span className="title">
            Registrarse
        </span>

        <form action="">
            <Input id={`email-${props.id}`} type={InputType.Email} placeholder="Correo electrónico" icon={Icon.At} />

            <Input id={`username-${props.id}`} type={InputType.Text} placeholder="Nombre de usuario" icon={Icon.User} />
            
            <Input id={`password-${props.id}`} type={InputType.Password} placeholder="Contraseña" icon={Icon.Password} />
            
            <Input id={`repassword-${props.id}`} type={InputType.Password} placeholder="Repetir contraseña" icon={Icon.Password} />

            <footer>
                <Button id={`submit-${props.id}`} style={Style.Green} message="Crear cuenta" />
                
                <span className="login-question">
                    ¿Ya tienes una cuenta? <Link to="/login">Iniciar sesión</Link>.
                </span>
            </footer>
        </form>
    </div>;
};

export default SignupForm;