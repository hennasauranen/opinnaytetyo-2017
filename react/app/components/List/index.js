/* eslint-disable react/sort-comp */
/* @flow */

import React from 'react';
import Helmet from 'react-helmet';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class List extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor() {
    super();
    this.state = {
      animals: [],
      gotAnimals: false,
    };
  }

  componentWillMount() {
    axios.get('https://api.myjson.com/bins/1aeuin').then((res) => {
      const result = res.data;
      this.setState({ animals: result, gotAnimals: true });
      // console.log(this.state.animals);
    });
  }
  render() {
    return (
      <div className="container">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Eläinsivu, jossa eläimiä</title>
          <meta name="description" content="Eläinsivulla on listattu eläimiä" />
        </Helmet>
        <div className="breadcrumb">
          Olet tässä:
          <Link to={'/'}>Etusivu</Link>
          &raquo;
          <Link to={'/elaimet'}>Eläimet</Link>
        </div>
        <h1>Eläinlista</h1>
        { this.state.animals.map((animalData) => (
          <Link className="listname" key={animalData.id} to={`/elaimet/${animalData.id}`}>
            <h2>{animalData.name}</h2>
          </Link>
        )) }
      </div>
    );
  }
}
