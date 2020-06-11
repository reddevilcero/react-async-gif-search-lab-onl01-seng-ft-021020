import React, { Component } from "react";
import GifSearch from "../components/GifSearch";
import GifList from "../components/GifList";

export default class GifListContainer extends Component {
  state = {
    query: "random",
    gifs: [],
  };

  componentDidMount() {
    this.fetchGifs(this.state.query)
  }

  fetchGifs = (query) => {
    fetch(
      `https://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g`
    )
      .then((res) => res.json())
      .then((json) => this.setState({ query:query, gifs: json.data }));
  };

  changeQuery = (query) => {
    this.fetchGifs(query);
  };

  render() {
    return (
      <div>
        <GifSearch onChangeQuery={this.changeQuery} />
        <GifList gifs={this.state.gifs} />
      </div>
    );
  }
}
