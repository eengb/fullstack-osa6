import React from 'react'
import { useDispatch } from 'react-redux'
import {createnewanecdote} from '../reducers/anecdoteReducer'

const AnecdoteForm=()=>{
   
    const dispatch = useDispatch()



    const addAnecdote = (event) => {
        event.preventDefault()
        const anecdote = event.target.textField.value
        event.target.textField.value = ''    
        dispatch(createnewanecdote(anecdote))
      }


    return (
        <div>
        <h2>create new</h2>
        <form onSubmit={addAnecdote}>
          <div><input type='text' name='textField' /></div>
          <button>create</button>
        </form>
      </div>
    )
}

export default AnecdoteForm

