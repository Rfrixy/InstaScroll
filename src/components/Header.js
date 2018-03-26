import React from 'react'
import styled from 'styled-components';
import { generator } from 'uigradients';


const Styles = styled.div`
  ${generator({gradient: 'electric_violet'})}
    margin:0px;
    position: fixed;
    width: 100%;
  b{
    font-size: 1.5em;
  }
  .header {
    margin: 0;
    font-family: Arial;
    padding: 0.5em;
    color: #f1f1f1;
    top: 0;
    float:left;
    width: 100%;
    padding:1.5em;
  }

  .contain{
    padding-left: 2em;
    vertical-align: baseline ;
    display: inline-block;
    width: 100%;
  }
  .buttonContainer{
    float:right;
    text-align:center
    padding-right: 8em;
  }
  `
  const Button = styled.div`
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

const Header = ({infiniteView, setPaginated, setInfinite }) => {
  return(
    <Styles>
    <div className="header" id="myHeader">
      <div className="contain">
        <b>Probably not Instagram</b>
        <div className="buttonContainer">
          { infiniteView===true && <Button><button className="button button2" onClick={()=>setPaginated()}>Infinite On</button>  </Button>}
          { infiniteView===false && <Button><button className="button button2" onClick={()=>setInfinite()}>Infinite Off</button>  </Button>}

        </div>
      </div>
    </div>
    </Styles>
  )
}

export default Header
