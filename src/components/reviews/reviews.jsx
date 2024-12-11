import {ReviewForm} from '../review-form/review-form.jsx';
import style from '../reviews/reviews.module.css';
import Rating from '@mui/material/Rating';


export const Reviews = ({reviews}) => (
  <>
    <button
      className={style.title}
      type='button'
    >
      Reviews
    </button>
    {reviews.length > 0 &&
      <ul className={style.list}>
        {reviews.map((review) => (
          <li className={style.item} key={review.id}>
            <div className={style.containerReview}>
              <h4>{review.user}</h4>
              <p>{review.text}</p>
            </div>
            <Rating name="read-only" value={review.rating} readOnly/>
          </li>
        ))}
      </ul>}
    <ReviewForm/>
  </>
)