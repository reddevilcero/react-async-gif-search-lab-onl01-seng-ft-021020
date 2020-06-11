import React, { Component } from "react";

export default class GifList extends Component {
  render() {
    return (
      <div>
        <ul>{this.props.gifs.map(({ id, images:{original}, title }) => {
          return <li key={id}><img src={original.url} alt={title}/></li>
        })}</ul>
      </div>
    );
  }
}
