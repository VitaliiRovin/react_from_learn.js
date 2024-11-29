import {ReviewForm} from '../review-form/review-form.jsx';

export const Reviews = ({reviews}) => (
  <>
    <h3>Reviews</h3>
    {reviews.length > 0 &&
      <ul>
        {reviews.map((review) => (
          <li key={review.id}>{review.text}</li>
        ))}
      </ul>}
    <ReviewForm />
  </>
)