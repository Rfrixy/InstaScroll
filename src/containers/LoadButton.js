import React from 'react'
import { connect } from 'react-redux'
import { getInstaData } from '../actions'
import styled from 'styled-components';


const Button = styled.div`
  margin:auto;
  align-content: center;
  margin-bottom:2em;
  text-align: center;

  .button {
      background-color: #4CAF50; /* Green */
      border: none;
      color: white;
      padding: 16px 32px;
      text-align: center;
      text-decoration: none;
      display: inline-block;
      font-size: 16px;
      margin: 2px 2px;
      -webkit-transition-duration: 0.4s; /* Safari */
      transition-duration: 0.4s;
      cursor: pointer;
  }

  .button2 {
      background-color: white;
      color: black;
      border: 2px solid #008CBA;
  }

  .button2:hover {
      background-color: #008CBA;
      color: white;
  }
`;

const LoadButton = ({ infiniteView, dispatch }) => {

  const loadfunc = ()=>{
    dispatch(getInstaData());
  }
  return (
    <div>
      { infiniteView===false && <Button>
      <button onClick= {loadfunc} className="button button2">
        Load More
      </button>
    </Button>}
  </div>
  )
}
const mapStateToProps = state => ({
  infiniteView: state.infiniteView,
})

export default connect(mapStateToProps,null)(LoadButton)
