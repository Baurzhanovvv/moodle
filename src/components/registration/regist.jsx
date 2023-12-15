import React, { useState } from "react";
import "./regist.css";
import user from "./user.svg";
import email from "./email.svg";
import year from "./year.svg";
import major from "./major.svg";
import birth from "./birth.svg";
import gender from "./gender.svg";
import univer from "./university.svg";
import phone from "./phone.svg";
import password from "./password.svg";
import * as Yup from "yup";
import { Formik, Form, Field } from "formik";

const SuggestionsList = ({ suggestions, onSelect }) => (
    <ul className="suggestions-list">
        {suggestions.map((suggestion, index) => (
            <li key={index} onClick={() => onSelect(suggestion)}>
                {suggestion}
            </li>
        ))}
    </ul>
);

export default function Registration(props) {
    const initialValues = {
        username: "",
        email: "",
        password: "",
        university: "",
    };

    const [universitySuggestions, setUniversitySuggestions] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const universityList = ['Astana IT University', 'Nazarbayev University', 'АИТУ', 'Назарбаев Университет', 'ЕНУ', 'КазГЮУ'];

    const validationSchema = Yup.object({
        username: Yup.string().required("Required"),
        email: Yup.string().email("Invalid email address").required("Required"),
        password: Yup.string().required("Invalid password"),
    });

    const onSubmit = (values) => {
        props.register(values);
    };

    const handleUniversityChange = (event, formik) => {
        const value = event.target.value;
        formik.handleChange(event);
        setSearchTerm(value);

        if (value.trim() === "") {
            setUniversitySuggestions([]);
        } else {
            setUniversitySuggestions(
                universityList.filter((university) =>
                    university.toLowerCase().startsWith(value.toLowerCase())
                )
            );
        }
    };

    const handleSuggestionSelect = (value) => {
        setSearchTerm(value);
        setUniversitySuggestions([]);
    };

    return (
        <div className="register">
            <div className="container">
                <div className="register-menu">
                    <div className="reg-text">РЕГИСТРАЦИЯ</div>
                    <div className="input-menu-reg">
                        <Formik
                            initialValues={initialValues}
                            validationSchema={validationSchema}
                            onSubmit={onSubmit}
                        >
                            {(formik) => {
                                return (
                                    <Form>
                                        <div className="input-card-reg">
                                            <div className="avatar-reg">
                                                <img src={email} alt="" />
                                            </div>
                                            <div className="input-reg">
                                                <Field
                                                    component="input"
                                                    name="email"
                                                    type="text"
                                                    placeholder="Email@email.com"
                                                />
                                            </div>
                                        </div>
                                        <div className="input-card-reg">
                                            <div className="avatar-reg">
                                                <img src={user} alt="" />
                                            </div>
                                            <div className="input-reg">
                                                <Field
                                                    component="input"
                                                    name="username"
                                                    type="text"
                                                    placeholder="Username"
                                                />
                                            </div>
                                        </div>
                                        <div className="input-card-reg">
                                            <div className="avatar-reg">
                                                <img src={user} alt="" />
                                            </div>
                                            <div className="input-reg">
                                                <Field
                                                    component="input"
                                                    name="firstname"
                                                    type="text"
                                                    placeholder="Имя"
                                                />
                                            </div>
                                        </div>
                                        <div className="input-card-reg">
                                            <div className="avatar-reg">
                                                <img src={user} alt="" />
                                            </div>
                                            <div className="input-reg">
                                                <Field
                                                    component="input"
                                                    name="lastname"
                                                    type="text"
                                                    placeholder="Фамилия"
                                                />
                                            </div>
                                        </div>
                                        <div className="input-card-reg">
                                            <div className="avatar-reg">
                                                <img src={univer} alt="" />
                                            </div>
                                            <div className="input-reg">
                                                <Field
                                                    component="input"
                                                    name="university"
                                                    type="text"
                                                    placeholder="Университет"
                                                    value={searchTerm}
                                                    onChange={(e) => handleUniversityChange(e, formik)}
                                                />
                                                {universitySuggestions.length > 0 && (
                                                    <SuggestionsList
                                                        suggestions={universitySuggestions}
                                                        onSelect={handleSuggestionSelect}
                                                    />
                                                )}
                                            </div>
                                        </div>
                                        <div className="input-card-reg">
                                            <div className="avatar-reg">
                                                <img src={year} alt="" />
                                            </div>
                                            <div className="input-reg">
                                                <Field
                                                    component="input"
                                                    name="year"
                                                    type="text"
                                                    placeholder="Курс"
                                                />
                                            </div>
                                        </div>
                                        <div className="input-card-reg">
                                            <div className="avatar-reg">
                                                <img src={major} alt="" />
                                            </div>
                                            <div className="input-reg">
                                                <Field
                                                    component="input"
                                                    name="major"
                                                    type="text"
                                                    placeholder="Специальность"
                                                />
                                            </div>
                                        </div>
                                        <div className="input-card-reg">
                                            <div className="avatar-reg">
                                                <img src={birth} alt="" />
                                            </div>
                                            <div className="input-reg">
                                                <Field
                                                    component="input"
                                                    name="birth-date"
                                                    type="date"
                                                    placeholder="Дата рождения"
                                                />
                                            </div>
                                        </div>
                                        <div className="input-card-reg">
                                            <div className="avatar-reg">
                                                <img src={gender} alt="" />
                                            </div>
                                            <div className="input-reg-gender">
                                                <Field
                                                    component="input"
                                                    name="gender"
                                                    type="radio"
                                                    value="male"
                                                    id="male"
                                                />
                                                <label htmlFor="male">М</label>

                                                <Field
                                                    component="input"
                                                    name="gender"
                                                    type="radio"
                                                    value="female"
                                                    id="female"
                                                />
                                                <label htmlFor="female">Ж</label>
                                            </div>
                                        </div>
                                        <div className="input-card-reg">
                                            <div className="avatar-reg">
                                                <img src={phone} alt="" />
                                            </div>
                                            <div className="input-reg">
                                                <Field
                                                    component="input"
                                                    name="phone"
                                                    type="text"
                                                    placeholder="Номер телефона"
                                                />
                                            </div>
                                        </div>
                                        <div className="input-card-reg">
                                            <div className="avatar-reg">
                                                <img src={password} alt="" />
                                            </div>
                                            <div className="input-reg">
                                                <Field
                                                    component="input"
                                                    name="password"
                                                    type="text"
                                                    placeholder="Пароль"
                                                />
                                            </div>
                                        </div>
                                        <div className="btns-remember-reg">
                                            <div className="remember-reg">
                                                <input type="checkbox" name="check" />
                                                <label htmlFor="check" className="remember-text">
                                                    Запомнить меня
                                                </label>
                                            </div>
                                            <div className="btn-reg">
                                                <button
                                                    type="submit"
                                                    disabled={!formik.isValid}
                                                    className="btn-reg-text"
                                                >
                                                    Вход
                                                </button>
                                            </div>
                                        </div>
                                    </Form>
                                );
                            }}
                        </Formik>
                    </div>
                </div>
            </div>
        </div>
    );
}
