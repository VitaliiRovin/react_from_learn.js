import {useForm} from './use-form.js';
import {Counter} from '../counter/counter.jsx';

export const ReviewForm = () => {
  const {form, setName, setText, increment, decrement, reset} = useForm()
  const {name, text, rating} = form

  return (
    <form onSubmit={event=>event.preventDefault()}>
      <fieldset>
        <legend>Review form</legend>
        <div>
          <label htmlFor='reviewName'>Name:</label>
          <input
            type='text'
            id='reviewName'
            name='reviewName'
            value={name}
            placeholder='Enter your name'
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div>
          <label htmlFor='reviewText'>Review:</label>
          <textarea
            id='reviewText'
            name='reviewText'
            value={text}
            placeholder='Enter your review text'
            onChange={(event) => setText(event.target.value)}
          ></textarea>
          <Counter
            increment={increment}
            decrement={decrement}
            count={rating}
          />
        </div>
        <div>
          <button
            type='button'
            onClick={reset}
          >
            Clear
          </button>
        </div>
      </fieldset>
    </form>
  )
}