import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ListItem from '../../components/ListItem';
import SearchForm from '../../components/SearchForm';
import { errorSelector, warningSelector, isFetchingSelector, weatherSelector } from './selectors';
import { fetchWeather } from './actions';
import './Widget.css';

class Widget extends Component {
  componentWillMount() {
    this.props.fetchWeather(this.props.match.params.city);
  }

  search = (text) => {
    this.props.fetchWeather(text);
  }

  render() {
    const { weather, isFetching, error, warning } = this.props;
    return (
      <div className="widget">
        {isFetching ? (
          <div className="widget__loader">
            Getting weather...
          </div>
        ) : (
          <div>
            {error ? (
              <div className="widget__error">
                <p>{error}</p>
              </div>
            ) : warning ? (
                  <div className="widget__warning">
                    <p>{warning}</p>
                  </div>
            ) : (
              <div>
                <ListItem className="widget__item widget__item--header" text="Weather in" data={weather.city} />
                <ListItem className="widget__item" text="Temperature" data={weather.temperature} />
                <ListItem className="widget__item" text="Humidity" data={weather.humidity} />
                <ListItem className="widget__item" text="Wind" data={weather.wind} />
              </div>
            )}
            <SearchForm search={this.search} />
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  weather: weatherSelector(state),
  error: errorSelector(state),
  warning: warningSelector(state),
  isFetching: isFetchingSelector(state, ownProps),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({
    fetchWeather,
  }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Widget);
