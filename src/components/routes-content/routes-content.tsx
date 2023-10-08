import { Navigate, Route, Routes, useLocation } from 'react-router-dom'

import { Home } from '../../pages/home';
import { Offer } from '../../pages/offer';
import { Terms } from '../../pages/terms';
import { Auth } from '../../pages/auth';

import './routes-content.scss';

export const RoutesContent = () => {
    const { pathname } = useLocation();

    return (
        <div className="routes-content">
            <Routes>
                <Route path='/' element={(pathname === '/') ? <Navigate to='/auth' /> : <Navigate to='/home' />} />
                <Route path='/home' element={<Home />} />
                <Route path='/offer' element={<Offer />} />
                <Route path='/terms' element={<Terms />} />
                <Route path='/auth' element={<Auth />} />
            </Routes>
        </div>
    )
}