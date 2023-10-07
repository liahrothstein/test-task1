import { useSelector } from 'react-redux';

import { RatingStars } from '../rating-stars';

import { Book } from '../../types/book';
import { View } from '../../types/view';

import './books.scss';

interface BooksProps {
    view: View,
    search: string
}

export const Books = ({ view, search }: BooksProps) => {
    const ratingData: Book[] = useSelector((state: any) => state.rating);
    const searchData: Book[] = useSelector((state: any) => state.search);

    const data = ((!search) ? ratingData : searchData);

    return (
        <div className={(view === View.Blocks) ? "blocksBooks" : "rowsBooks"}>
            {(view === View.Blocks) ?
                (data.map((e) => (
                    <div className="book" key={e.id}>
                        <img src={e.image} alt="bookImage" />
                        <RatingStars count={e.rating} />
                        <div className="bookTitle">{e.title}</div>
                        <div className="bookAuthorAndIssueYear">{`${e.author}, ${e.issueYear}`}</div>
                        <button type="button">Забронировать</button>
                    </div>
                ))) : (data.map((e) => (
                    <div className="book" key={e.id}>
                        <div className="imgAndOther">
                            <img src={e.image} alt="bookImage" />
                            <div className="other">
                                <div className="bookTitle">{e.title}</div>
                                <div className="bookAuthorAndIssueYear">{`${e.author}, ${e.issueYear}`}</div>
                                <div className="ratingAndButton">
                                    <RatingStars count={e.rating} />
                                    <button type="button">Забронировать</button>
                                </div>
                            </div>
                        </div>
                    </div>
                )))
            }
        </div>
    )
}