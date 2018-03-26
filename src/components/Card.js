import React from 'react'
// import PropTypes from 'prop-types'

const Card = ({ index, imgsrc, caption,onclick }) => (
  <div className="card" onClick = {onclick}>
    <img src={imgsrc} alt="Avatar" style={{width:'100%'}}/>
    <div className="container">
      <h4><b>{caption}</b></h4>
      <p>Architect & Engineer</p>
    </div>
  </div>)


// Todo.propTypes = {
//   onClick: PropTypes.func.isRequired,
//   completed: PropTypes.bool.isRequired,
//   text: PropTypes.string.isRequired
// }

export default Card
