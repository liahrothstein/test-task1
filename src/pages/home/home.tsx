import { Books } from '../../components/books';
import { Filter } from '../../components/filter';

import './home.scss';

export const Home = () => {

    return (
        <div className="homePage">
            <Filter />
            <Books />
        </div>
    )
}