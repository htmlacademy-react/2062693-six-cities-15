import {ChangeEvent, Fragment} from 'react';

type TReviewRatingStars = {
  rating: number;
  setRating: (rating: number) => void;
};

const STARS_COUNT = 5;

export default function ReviewRatingStars({rating, setRating}: TReviewRatingStars) {

  const ratingArr: number[] = [];
  for (let i = STARS_COUNT; i >= 1; i--) {
    ratingArr.push(i);
  }

  const clickStarHandler = (evt: ChangeEvent<HTMLInputElement>) => {
    setRating(Number(evt.target.value));
  };

  return (
    <div className="reviews__rating-form form__rating">
      {ratingArr.map((item) => (
        <Fragment key={item}>
          <input className="form__rating-input visually-hidden" name="rating" value={item} id={`${item}-stars`} type="radio" checked={item === rating} onChange={clickStarHandler}/>
          <label htmlFor={`${item}-stars`} className="reviews__rating-label form__rating-label" title="perfect">
            <svg className="form__star-image" width="37" height="33">
              <use xlinkHref="#icon-star"></use>
            </svg>
          </label>
        </Fragment>
      ))}
    </div>
  );
}
