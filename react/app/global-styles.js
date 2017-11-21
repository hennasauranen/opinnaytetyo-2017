import { injectGlobal } from 'styled-components';

/* eslint no-unused-expressions: 0 */
injectGlobal`
/* unvisited link */
body {
  background-color: #red;
}
.container{
    margin: 10px 15%;
}
a:link {
  text-decoration: none;
  color: #717070;
  margin: 0 5px;
  font-size: 0.9em;
}
.navimg{
float: left;
height: 90px;
margin-left: 30px;
}

a:visited {
  text-decoration: none;
  color: #717070;
}

/* mouse over link */

a:hover {
  color: #37e2cd;
}

/* selected link */

a:active {
  color: #37e2cd;
}

hr {
  margin-bottom: 10;
  margin-top: 0;
  opacity: 0.15;
}

nav {
  overflow: hidden;
  margin-top: 30;
  height:100px;
  padding-top: 40px;
}

nav a {
  color: #717070;
  text-decoration: none;
  font-size: 1.2em !important;
  margin-right: 15px !important;
}

/*
	a:hover {
		color: #13dec5;
	}*/

.dropdown {
  position: absolute;
  display: inline-block;
}

.dropdowncontent {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  z-index: 1;
  padding-top: 5px;
  opacity: 0.96;
  min-width: 100px;
}

.dropdowncontent a {
  display: block;
  padding: 4px 19px 4px 10px;
}

.dropdown:hover .dropdowncontent {
  display: block;
}

.breadcrumb a {
  color: #0fddc4;
}
.listname{
  margin: 0 !important;
}
`;
