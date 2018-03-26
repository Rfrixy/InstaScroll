import React from 'react'
import { connect } from 'react-redux'
import { LoadingTrue } from '../actions'

const LoadButton = ({ dispatch }) => {

  const loadfunc = ()=>{
    dispatch(LoadingTrue());
  }

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        dispatch(LoadingTrue())
      }}>
        <button type="submit">
          Toggle Loading
        </button>
      </form>

      <button onClick= {loadfunc}>
        Toggle Loading 2
      </button>
    </div>
  )
}

export default connect()(LoadButton)
