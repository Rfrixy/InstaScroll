import React from 'react'

const Card = ({ index, imgsrc, caption,onclick,likes, likeclick, hasliked }) => (
  <div className="card" onClick = {onclick}>
    <div className="container">
      <h4><b>{caption}</b></h4>
    </div>
    <img src={imgsrc} alt="Avatar" style={{width:'100%'}}/>
    <p>{likes} Likes</p>
    { !hasliked && <button onClick= {likeclick}> Like </button>}
    { hasliked && <button onClick= {likeclick}> Unlike </button>}

  </div>)



export default Card
