import star from '../../assets/images/star.svg';
import notStar from '../../assets/images/not-star.svg';

import './rating-stars.scss';

interface RatingStarsProps {
    count: number | null
}

export const RatingStars = ({ count }: RatingStarsProps) => {
    const array = [];

    if (count !== null) {
        for (let i = 0; i < count; i++) {
            array.push(<div key={i + 15} className="star">
                <img src={star} alt="star" />
            </div>)
        };
        for (let i = 0; i < (5 - count); i++) {
            array.push(<div key={i + 10} className="star">
                <img src={notStar} alt="star" />
            </div>)
        };
        return <div className="stars">{array}</div>;
    } else {
        return <div className='noStars'>ещё нет оценок</div>
    }
}