import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

import { User } from '../../types/user';
import { setIsAuthorized } from '../../redux';

import eye from '../../assets/images/eye.svg';
import openEye from '../../assets/images/open-eye.svg';

import './auth.scss';

export const Auth = () => {
    const user: any = localStorage.getItem('user');
    const isUser: User = JSON.parse(user);
    const [isEye, setIsEye] = useState<boolean>(false);
    const [login, setLogin] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const switchEye = () => {
        setIsEye(!isEye)
    }

    const onSubmit = () => {
        if (login === isUser.login && password === isUser.password) {
            dispatch(setIsAuthorized(true))
            navigate('/home')
        } else {
            dispatch(setIsAuthorized(false))
        }
    }

    return (
        <div className="authPage">
            <div className="logoModalWindow">
                <div className="logo">CircleDevs</div>
                <div className="modalWindow">
                    <div className="modalHeader">Вход в личный кабинет</div>
                    <form>
                        <input
                            value={login}
                            onChange={(e) => setLogin(e.target.value)}
                            type="text"
                            placeholder='Логин'
                            name='login' />
                        <label htmlFor="login"></label>
                        <input
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            type={(!isEye) ? "password" : "text"}
                            placeholder='Пароль'
                            name='password' />
                        <img src={(!isEye) ? eye : openEye} alt="" onClick={switchEye} />
                        <label htmlFor="password"></label>
                        <Link to='/'>Забыли логин или пароль?</Link>
                        <button type="button" onClick={onSubmit}>вход</button>
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