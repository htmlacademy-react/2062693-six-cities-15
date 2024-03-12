import {Review} from '../../types/review.ts';
import ReviewItem from './review-item.tsx';

type TReviewList = {
  reviews: Review[];
};

export default function ReviewList({reviews}: TReviewList) {

  return (
    <>
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
      <ul className="reviews__list">
        {reviews.map((review) => <ReviewItem review={review} key={review.id}/>)}
      </ul>
    </>
  );
}
