import React, { Component } from 'react'

export default class GifSearch extends Component {

  state = {
    query: ''
  }


  handleChange = (event) => {
    this.setState({query: event.target.value})
  }

  handleSubmit = (event)=>{
    event.preventDefault()
    this.props.onChangeQuery(this.state.query)
    this.setState({query:''})
  }
  


  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="gifSearch">Seach a Gif</label>
          <input
            type="search"
            name="gifSearch"
            id="GifSeach"
            className="form-control"
            onChange={this.handleChange}
            value={this.state.query}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>

    );
  }
}
