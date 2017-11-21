/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
*/
import React from 'react';
import Helmet from 'react-helmet';
import { Link } from 'react-router-dom';

export default class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="container">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Opinnäytetyötuotos</title>
          <meta name="description" content="Työ on tuotettu osana tietojenkäsittelyn koulutusohjelmaa. Kyseessä on opinnäytetyön tuotos" />
        </Helmet>
        <div className="breadcrumb">
          Olet tässä:
          <Link to={'/'}>Etusivu</Link>
        </div>
        <h1>Opinnäytetyötuotos</h1>
        <p>Työ on tuotettu osana Jyväskylän ammattikorkeakoulun tietojenkäsittelyn koulutusohjelmaa. Kyseessä on opinnäytetyön oheistuotos, jonka avulla voidaan havainnoida React sovelluksen indeksoitumista Googleen</p>
      </div>
    );
  }
}
