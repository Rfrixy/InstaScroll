import React from 'react'
// import PropTypes from 'prop-types'

const Card = ({ index, imgsrc, caption,onclick,likes, likeclick, hasliked }) => (
  <div className="card" onClick = {onclick}>
    <div className="container">
      <h4><b>{caption}</b></h4>
    </div>
    <img src={imgsrc} alt="Avatar" style={{width:'100%'}}/>
    <p>{likes} Likes</p>
    { !hasliked && <button onClick= {likeclick}> Like </button>}
    { hasliked && <button onClick= {likeclick}> Unlike </button>}

    <a><i className="fas fa-heart"></i></a>

  </div>)


// Todo.propTypes = {
//   onClick: PropTypes.func.isRequired,
//   completed: PropTypes.bool.isRequired,
//   text: PropTypes.string.isRequired
// }

export default Card
