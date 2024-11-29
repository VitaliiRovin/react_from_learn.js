import {useReducer} from 'react';

const DEFAULT_FORM_VALUE = {
  name: '',
  text: '',
  rating: 5,
}

const SET_NAME = 'SET_NAME'
const SET_TEXT = 'SET_TEXT'
const INCREMENT = 'INCREMENT'
const DECREMENT = 'DECREMENT'
const RESET = 'RESET'

const reducer = (state, {type, payload}) => {
  switch (type) {
    case SET_NAME:
      return {...state, name: payload};
    case SET_TEXT:
      return {...state, text: payload};
    case INCREMENT:
      return {...state, rating: Math.min(state.rating + 1, DEFAULT_FORM_VALUE.rating)}
    case DECREMENT:
      return {...state, rating: Math.max(state.rating - 1, 1)}
    case RESET:
      return DEFAULT_FORM_VALUE
    default:
      return state;
  }
}

export const useForm = () => {
  const [form, dispatch] = useReducer(reducer, DEFAULT_FORM_VALUE)

  const setName = (name) => dispatch({type: SET_NAME, payload: name})
  const setText = (text) => dispatch({type: SET_TEXT, payload: text})
  const increment = () => dispatch({type: INCREMENT})
  const decrement = () => dispatch({type: DECREMENT})
  const reset = () => dispatch({type: RESET})

  return {
    form,
    setName,
    setText,
    increment,
    decrement,
    reset,
  }
}