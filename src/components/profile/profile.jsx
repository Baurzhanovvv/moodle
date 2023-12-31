import React from 'react';
import './profile.css';
import logo from './profile-logo.png'

export default function Profile() {
    return (
        <div className="profile">
            <div className="container">
                <div className="main">
                    <div className="profile-text">
                        <div className="text1">
                            <a href="#">ГЛАВНАЯ / ПРОФИЛЬ</a>
                        </div>
                        <div className="text2">ПРОФИЛЬ</div>
                    </div>
                    <div className="profile-main">
                        <div className="avatar-menu">
                            <div className="avatar">
                                <img src={logo} alt="" />
                            </div>
                            <div className="avatar-text">
                                <div className="name-text">ASLAN ZHARTYBAEV</div>
                                <div className="uni-text">ASTANA IT COLLEGE</div>
                            </div>
                        </div>
                        <div className="info-main">
                            <div className="info-menu">
                                <div className="info-card">
                                    <div className="base-text">Адрес электронной почты</div>
                                    <div className="gmail-text">
                                        <a href="#">student@gmail.com</a>
                                    </div>
                                </div>
                                <div className="info-card">
                                    <div className="base-text">Дата рождения</div>
                                    <div className="info-text">12.12.2006</div>
                                </div>
                                <div className="info-card">
                                    <div className="base-text">Адрес</div>
                                    <div className="info-text">Астана</div>
                                </div>
                            </div>
                            <div className="edit-menu">
                                <div className="btns">
                                    <div className="btn-edit">
                                        <a href="#">Edit </a>
                                    </div>
                                    <div className="btn-grades">
                                        <a href="#">Grades </a>
                                    </div>
                                </div>
                                <div className="update-menu">
                                    <div className="update-text">Profile update</div>
                                    <div className="edit-input">
                                        <div className="edit-text">Phone Number</div>
                                        <div className="input">
                                            <input type="text" placeholder='Enter phone number' />
                                        </div>
                                    </div>
                                    <div className="edit-input">
                                        <div className="edit-text">Email</div>
                                        <div className="input">
                                            <input type="text" placeholder='Enter email' />
                                        </div>
                                    </div>
                                    <div className="update-text">Change Password</div>
                                    <div className="edit-input">
                                        <div className="edit-text">Password</div>
                                        <div className="input">
                                            <input type="text" placeholder='Enter password' />
                                        </div>
                                    </div>
                                    <div className="edit-input">
                                        <div className="edit-text">Confirm password</div>
                                        <div className="input">
                                            <input type="text" placeholder='Renter password' />
                                        </div>
                                    </div>
                                    <div className="button-update">
                                        <button className='button-update-text'>Update</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}