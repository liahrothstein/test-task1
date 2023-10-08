import { useState } from 'react';
import { Link } from 'react-router-dom';

import eye from '../../assets/images/eye.svg';
import openEye from '../../assets/images/open-eye.svg';

import './auth.scss';

export const Auth = () => {
    const [isEye, setIsEye] = useState<boolean>(false);

    const switchEye = () => {
        setIsEye(!isEye)
    }

    return (
        <div className="authPage">
            <div className="logoModalWindow">
                <div className="logo">CircleDevs</div>
                <div className="modalWindow">
                    <div className="modalHeader">Вход в личный кабинет</div>
                    <form action="" method="post">
                        <input type="text" placeholder='Логин' name='login' />
                        <label htmlFor="login"></label>
                        <input type={(!isEye) ? "password" : "text"} placeholder='Пароль' name='password' />
                        <img src={(!isEye) ? eye : openEye} alt="" onClick={switchEye} />
                        <label htmlFor="password"></label>
                        <Link to='/'>Забыли логин или пароль?</Link>
                        <button type="submit">вход</button>
                    </form>
                    <div className="toRegistration">
                        Нет учётной записи?
                        <Link to='/'>Регистрация</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}