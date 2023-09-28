import data from '../../data.json';

import { RatingStars } from '../rating-stars';

import './books.scss';

export const Books = () => {

    return (
        <div className="books">
            {data.map((e) => (
                <div className="book" key={e.id}>
                    <img src={e.image} alt="bookImage" />
                    <RatingStars count={e.rating} />
                    <div className="bookTitle">{e.title}</div>
                    <div className="bookAuthorAndIssueYear">{`${e.author}, ${e.issueYear}`}</div>
                    <button type="button">Забронировать</button>
                </div>
            ))}
        </div>
    )
}