import { Link } from 'react-router-dom';

import burger from '../../assets/images/burger.png';
import avatar from '../../assets/images/avatar.png';
import logo from '../../assets/images/logo.svg';

import './header.scss';

export const Header = () => {
    const user: any = localStorage.getItem('user');
    const isUser = JSON.parse(user);

    return (
        <div className="header">
            <Link to='/home' className="circleDevs">
                <div className="logo">
                    <div className="logo"><img src={logo} alt="logo" /></div>
                    <div className="logoName">CircleDevs</div>
                </div>
            </Link>
            <button type="button" className='burger'>
                <img src={burger} alt='burger' />
            </button>
            <div className="nameOfPage">Библиотека</div>
            <div className="person">
                <div className="hiName">
                    {`Привет, ${isUser.name}!`}
                </div>
                <div className="avatar"><img src={avatar} alt="avatar" /></div>
            </div>
        </div>
    )
}