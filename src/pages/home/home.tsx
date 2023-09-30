import { useState } from 'react';

import { Books } from '../../components/books';
import { Filter } from '../../components/filter';

import { View } from '../../types/view';

import './home.scss';

export const Home = () => {
    const [view, setView] = useState<View>(View.Blocks);

    return (
        <div className="homePage">
            <Filter view={view} setView={setView} />
            <Books view={view} />
        </div>
    )
}