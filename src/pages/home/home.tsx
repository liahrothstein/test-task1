import { useState } from 'react';

import { Books } from '../../components/books';
import { Filter } from '../../components/filter';

import { View } from '../../types/view';

import './home.scss';

export const Home = () => {
    const [view, setView] = useState<View>(View.Blocks);
    const [ratingSort, setRatingSort] = useState<boolean>(false);
    const [search, setSearch] = useState<string>('');

    return (
        <div className="homePage">
            <Filter
                view={view}
                setView={setView}
                ratingSort={ratingSort}
                setRatingSort={setRatingSort}
                search={search}
                setSearch={setSearch} />
            <Books view={view} search={search} />
        </div>
    )
}