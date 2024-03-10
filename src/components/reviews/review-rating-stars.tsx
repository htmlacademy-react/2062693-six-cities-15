import {ChangeEvent, Fragment} from 'react';

type TReviewRatingStars = {
  rating: boolean[];
  setRating: (rating: boolean[]) => void;
};

export default function ReviewRatingStars({rating, setRating}: TReviewRatingStars) {

  const checkedStar = rating.filter((item) => item).length;
  const clickStarHandler = (evt: ChangeEvent<HTMLInputElement>) => {
    const newRating: boolean[] = [];
    for (let i = 0; i < rating.length; i++) {
      newRating.push(Number(evt.target.value) > i);
    }
    setRating(newRating);
  };

  return (
    <div className="reviews__rating-form form__rating">
      {rating.map((item, id) => {
        const ratingId = 5 - id;
        return (
          <Fragment key={ratingId}>
            <input className="form__rating-input visually-hidden" name="rating" value={ratingId} id={`${ratingId}-stars`} type="radio" checked={checkedStar === ratingId ? item : false} onChange={clickStarHandler}/>
            <label htmlFor={`${ratingId}-stars`} className="reviews__rating-label form__rating-label" title="perfect">
              <svg className="form__star-image" width="37" height="33">
                <use xlinkHref="#icon-star"></use>
              </svg>
            </label>
          </Fragment>
        );
      })}
    </div>
  );
}
