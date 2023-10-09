import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { View } from '../../types/view';
import { ratingOff, ratingOn } from '../../redux/rating-slice';
import { filterSearch } from '../../redux';

import searchIcon from '../../assets/images/search.png';
import filterButton from '../../assets/images/filter-button.png';
import blocksButton from '../../assets/images/blocks-button.png';
import rowsButton from '../../assets/images/lines-button.png';

import './filter.scss';

interface FilterProps {
    view: View,
    setView: (view: View) => void,
    ratingSort: boolean,
    setRatingSort: (ratingSort: boolean) => void,
    search: string,
    setSearch: (search: string) => void
}

export const Filter = ({ view, setView, ratingSort, setRatingSort, search, setSearch }: FilterProps) => {
    const dispatch = useDispatch();

    const blocksView = () => {
        setView(View.Blocks)
    }
    const rowsView = () => {
        setView(View.Rows)
    }
    const ratingSortSwitch = (): void => {
        setRatingSort(!ratingSort);

        if (ratingSort) {
            dispatch(ratingOn())
        } else {
            dispatch(ratingOff())
        }
    }

    useEffect(() => {
        const debounce = setTimeout(() => {
            dispatch(filterSearch(search));
        }, 1000)

        return () => (clearTimeout(debounce))
    }, [search]);

    return (
        <div className="filter">
            <div className="searchWithRating">
                <div className="search">
                    <img src={searchIcon} alt="" />
                    <input
                        type="text"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder='Поиск книги или автора…' />
                </div>
                <div className={(ratingSort) ? 'On rating' : 'Off rating'}>
                    <button type="button" onClick={ratingSortSwitch}>
                        <img src={filterButton} alt="" />
                        По рейтингу
                    </button>
                </div>
            </div>
            <div className="view">
                <button
                    className={(view === View.Blocks) ? 'blocksView active' : 'blocksView'}
                    type='button'
                    onClick={blocksView}>
                    <img src={blocksButton} alt="" />
                </button>
                <button
                    className={(view === View.Rows) ? 'rowsView active' : 'rowsView'}
                    type='button'
                    onClick={rowsView}>
                    <img src={rowsButton} alt="" />
                </button>
            </div>
        </div>
    )
}