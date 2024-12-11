import {useForm} from './use-form.js';
import {Counter} from '../counter/counter.jsx';
import style from './review-form.module.css'
import {ButtonWithText} from '../buttonWithText/buttonWithText.jsx';

export const ReviewForm = () => {
  const {form, setName, setText, increment, decrement, reset} = useForm()
  const {name, text, rating} = form

  return (
    <div className={style.form}>
      <h4>Leave your review</h4>
      <form onSubmit={event => event.preventDefault()}>
        <fieldset>
          <div className={style.blockInForm}>
            <label htmlFor='reviewName' className={style.titleLabel}>Name:</label>
            <input
              className={style.input}
              type='text'
              id='reviewName'
              name='reviewName'
              value={name}
              placeholder='Enter your name'
              onChange={(event) => setName(event.target.value)}
            />
          </div>
          <div className={style.blockInForm}>
            <label htmlFor='reviewText' className={style.titleText}>Review:</label>
            <textarea
              className={style.textarea}
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
              order='reverse'
            />
          </div>
          <div>
            <ButtonWithText text='Publish review' type='submit'/>
            <ButtonWithText text='Clear' type='button' onClick={reset}/>
          </div>
        </fieldset>
      </form>
    </div>
  )
}