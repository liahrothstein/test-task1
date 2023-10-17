import { useSelector } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom'

import { Home } from '../../pages/home';
import { Offer } from '../../pages/offer';
import { Terms } from '../../pages/terms';
import { Auth } from '../../pages/auth';

import './routes-content.scss';

export const RoutesContent = () => {
    const isAuth: boolean = useSelector((state: any) => state.isAuth);

    return (
        <div className="routes-content">
            <Routes>
                <Route path='/' element={(!isAuth) ? <Navigate to='/auth' /> : <Navigate to='/home' />} />
                <Route path='/home' element={(!isAuth) ? <Navigate to='/auth' /> : <Home />} />
                <Route path='/offer' element={(!isAuth) ? <Navigate to='/auth' /> : <Offer />} />
                <Route path='/terms' element={(!isAuth) ? <Navigate to='/auth' /> : <Terms />} />
                <Route path='/auth' element={<Auth />} />
            </Routes>
        </div>
    )
}