import React, {Component} from 'react'

import styled from 'styled-components';
import Card from './Card'

const Wrapper = styled.div`
-webkit-text-stroke: 0.45px rgba(0, 0, 0, 0.1);
font-family: Arial;
  .card {
    /* Add shadows to create the "card" effect */
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    padding:2.5em;
    max-width: 480px;
    margin: auto;
    margin-bottom: 2em;
    padding-top: 0.25em;
    background-color: white;

  }

  .interactions {
    text-align: center;
  }


  /* On mouse-over, add a deeper shadow */
  .card:hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
  }

  /* Add some padding inside the card container */
  .instaList {
    padding: 2px 16px;
    padding-top:8em;
  }
`

export default class CardList extends Component {
  componentDidMount() {
    this.props.getData();

    window.addEventListener('scroll', this.onScroll, false);

  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll, false);
  }

  onScroll = () => {
    if (
      (window.innerHeight + window.scrollY) >= (document.body.offsetHeight - 500) &&
      !this.props.isLoading &&
      this.props.infiniteView
    ) {
      this.props.loadingData();
      this.props.getData();
    }
  }

  render() {
      return (
        <Wrapper>
          <div className="instaList">
            {this.props.instaData.map((item, index) =>
              <Card key={item.id}
                imgsrc = {item.imgsrc}
                caption = {item.caption}
                onclick={() => this.props.cardClick(item.id)}
                likes = {item.likes}
                likeclick={() => this.props.cardLike(item.id)}
                hasliked= {item.user_liked}
              />
                )}
              <div className="interactions">
                {this.props.isLoading && <span>Loading...</span>}
              </div>
          </div>
        </Wrapper>
      )
    }
}
