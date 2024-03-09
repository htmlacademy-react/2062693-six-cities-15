import {ChangeEvent, FormEvent, useEffect, useState} from 'react';
import ReviewRatingStars from './review-rating-stars.tsx';

export default function ReviewForm() {

  const [inputFields, setInputFields] = useState({rating: [false, false, false, false, false], message: ''});
  const [submitDisabled, setSubmitDisabled] = useState(true);

  const setRating = (newRating: boolean[]) => {
    setInputFields(prevState => {
      return {...prevState, rating: newRating};
    });
  };

  const onChangeMessageValue = (evt: ChangeEvent<HTMLTextAreaElement>) => {
    setInputFields(prevState => ({...prevState, message: evt.target.value}))
  };

  const submitForm = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    console.log(inputFields)
  };

    useEffect(() => {
      setSubmitDisabled(inputFields.message.length < 50 || !inputFields.rating.includes(true));
    }, [inputFields]);

  return (
    <form className="reviews__form form" method="post" onSubmit={submitForm}>
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <ReviewRatingStars rating={inputFields.rating} setRating={setRating}/>
      <textarea className="reviews__textarea form__textarea" id="review" name="review"
                placeholder="Tell how was your stay, what you like and what can be improved" value={inputFields.message}
                onChange={onChangeMessageValue}></textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe
          your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={submitDisabled}>Submit</button>
      </div>
    </form>
  );
};
