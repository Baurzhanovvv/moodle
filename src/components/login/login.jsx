import React from "react";
import './login.css';
import avatar from './avatar.png'
import lock from './lock.png'

export default function Login() {
    return (
        <div className="login">
            <div className="container">
                <div className="login-menu">
                    <div className="login-text">ВХОД</div>
                    <div className="input-menu-login">
                        <div className="input-card">
                            <div className="avatar-login">
                                <img src={avatar} alt="" />
                            </div>
                            <div className="input-login">
                                <input type="text" placeholder="Username" />
                            </div>
                        </div>
                        <div className="input-card2">
                            <div className="avatar-login">
                                <img src={lock} alt="" />
                            </div>
                            <div className="input-login">
                                <input type="text" placeholder="Password" />
                            </div>
                        </div>
                        <div className="btns-remember-login">
                            <div className="remember">
                                <input type="checkbox" name="check"/>
                                <label htmlFor="check" className="remember-text">Запомнить меня</label>
                            </div>
                            <div className="btn-login">
                                <button className="btn-login-text">Вход</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}