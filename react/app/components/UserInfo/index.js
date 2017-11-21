/* eslint-disable react/sort-comp */
/* @flow */
import React, {PureComponent} from 'react';
import type {Element}
from 'react';
import axios from 'axios';
import Helmet from 'react-helmet';
import { Link, Route } from 'react-router-dom';

import NotFoundPage from '../NotFoundPage';


// Export this for unit testing more easily
export default class UserInfo extends React.PureComponent {
  constructor(props) {
    super();
    this.state = {
      animals: [],
      gotAnimals: false
    };
  }
  componentWillMount() {
    axios.get('https://api.myjson.com/bins/1aeuin').then((res) => {
      const result = res.data;

      this.setState({ animals: result, gotAnimals: true });
      // console.log(animals);
    });
  }

  filterAnimal(array) {
    const url = window.location.pathname;
    const urlsplit = url.split('/').slice(-1)[0];
    const id = urlsplit;
    console.log(id);
    let i = 0;
    const animalArray = array.length;
    for (i = 0; i < animalArray; i++) {
      //  console.log(array[i].id);
      if (array[i].id === id) {
        const returnAnimal = array[i];
        //  console.log(returnAnimal);
        return returnAnimal;
      }
    }
  }

  render() {
    let animal = this.filterAnimal(this.state.animals);

    if (this.state.gotAnimals === false) {
      return (
        <div>'loading...'</div>
      )
    } else {
      if (!animal)
        return (
          <div><NotFoundPage/></div>
        )
      return (
        <div className="container">
          <Helmet>
            <meta charSet="utf-8"/>
            <title>{animal.name}</title>
            <meta name="description" content={animal.kuvaus}/>
          </Helmet>
          <div className="breadcrumb">
            Olet tässä:
            <Link to={'/'}>Etusivu</Link>
            &raquo;
            <Link to={'/elaimet'}>Eläimet</Link>
            &raquo;
            <Link to={`/elaimet/${animal.id}`}>{animal.id}</Link>

          </div>
          <div className="picture-container">
            <h1 className="name">{animal.name}</h1>
          </div>

          <p>{animal.intro}</p>
          <a href={animal.link}>wikipedia</a>
        </div>
      );
    }
  }
}
