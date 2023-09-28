import { Link, useLocation } from 'react-router-dom';

import arrow from '../../assets/images/arrow.png';

import './menu.scss';

export const Menu = () => {
    const { pathname } = useLocation();

    return (
        <div className="menu">
            <div className="tab1">
                <div className={(pathname === '/') ? "active" : ''}>
                    <div className="linkAndArrow">
                        <Link to='/'>Витрина книг</Link>
                        <button type="button" className='arrowBtn'>
                            <div className="arrowBtn"><img src={arrow} alt="arrow" /></div>
                        </button>
                    </div>
                </div>
                <div className='categories'>
                    {/* <AllBooks /> */}
                </div>
            </div>
            <div className="tab2">
                <div className={(pathname === '/terms') ? "active" : ''}>
                    <Link to='/terms'>Правила пользования</Link>
                </div>
            </div>
            <div className="tab3">
                <div className={(pathname === '/offer') ? "active" : ''}>
                    <Link to='/offer'>Договор оферты</Link>
                </div>
            </div>
        </div>
    )
}