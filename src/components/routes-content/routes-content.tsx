import { Route, Routes } from 'react-router-dom'

import { Home } from '../../pages/home';
import { Offer } from '../../pages/offer';
import { Terms } from '../../pages/terms';

import './routes-content.scss';

export const RoutesContent = () => {

    return (
        <div className="routes-content">
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/offer' element={<Offer />} />
                <Route path='/terms' element={<Terms />} />
            </Routes>
        </div>
    )
}