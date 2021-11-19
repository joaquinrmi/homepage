import React from "react";
import { Routes, Route } from "react-router";

import Button, { Style } from "../../components/button/";
import SignupForm from "../../components/signup_form/";
import LoginForm from "../../components/login_form/";

import GitHubLogo from "../../res/GitHub-Mark-Light-32px.png";

import "./home.scss";

export interface Props
{}

const Home: React.FunctionComponent<Props> = (props) =>
{
    return <div className="home">
        <Routes>
            <Route path="/login" element={<>
                <div className="form-section single">
                    <div className="content-wrapper">
                        <div className="form-container">
                            <LoginForm id="main-login" />
                        </div>
                    </div>
                </div>
            </>} />

            <Route path="/signup" element={<>
                <div className="form-section single">
                    <div className="content-wrapper">
                        <div className="form-container">
                            <SignupForm id="main-signup" />
                        </div>
                    </div>
                </div>
            </>} />

            <Route path="/*" element={<>
                <div className="title-container">
                    <div className="content-wrapper">
                        <div className="message-container">
                            <span className="title">
                                ¡Bienvenid@!
                            </span>

                            <span className="subtitle">
                                Soy una simple página de inicio.
                            </span>
                        </div>

                        <div className="button-container">
                            <a className="home-link" href="https://github.com/joaquinrmi/homepage" target="_blank">
                                <Button
                                    id="github-button"
                                    style={Style.Transparent}
                                    message={
                                        <>REPOSITORIO</>
                                    }
                                    iconImage={
                                        <img src={GitHubLogo} />
                                    }
                                />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="form-section">
                    <div className="content-wrapper">
                        <div className="form-container">
                            <SignupForm id="home-signup" />
                        </div>
                    </div>
                </div>
            </>} />
        </Routes>
    </div>;
};

export default Home;