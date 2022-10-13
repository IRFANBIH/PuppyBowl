import React from "react";
import {Navbar} from './';
import {Components} from './';

const Main = () => {
  return (
    <div id="main">
      <div id="navbar">
        <h2>The Puppy Bowl </h2>
        <Navbar />
      </div>
      <div id="components">
        <Components />
      </div>
    </div>
  );
};

export default Main;
