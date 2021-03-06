import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {voting} from '../reducers/anecdoteReducer'

const AnecdoteList = () => {

    const dispatch = useDispatch()
    const anecdotes = useSelector(state => state)

    const vote = (id) => {
        console.log('VOTE', id)
        dispatch(voting(id)) 
      }




return(

<div>
<h2>Anecdotes</h2>
      {anecdotes.sort((a,b)=> b.votes - a.votes).map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => (vote(anecdote.id))}>vote</button>
          </div>
        </div>
      )}</div>)







}

export default AnecdoteList