/// external modules ///
import React from 'react';

/***************************************
  COMPONENT
***************************************/
const WelcomePage = (props) => {
  return (
    <section className="welcome-page">
      <header>
        <h1>Welcome to the ultimate fan site!</h1>
        <img
          className="main-img"
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="rick"
        />
      </header>
    </section>
  );
};

/**************************************/
export default WelcomePage;
