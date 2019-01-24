import React, { Component } from 'react';
import './SearchForm.css';

export default class Search extends Component {
  state = {
    searchText: '',
  }

  search = (e, text) => {
    e.preventDefault();
    this.props.search(text)
  }

  handleChange = (e) => {
    this.setState({
      searchText: e.target.value
    });
  }

  render() {
    return (
      <form className="search-form">
        <input
          onChange={this.handleChange}
          value={this.state.searchText}
          className="search-form__input"
          type="text"
          placeholder="City"
        />
        <button onClick={(e) => this.search(e, this.state.searchText)} className="search-form__submit" type="submit">Search</button>
      </form>
    )
  }
}
