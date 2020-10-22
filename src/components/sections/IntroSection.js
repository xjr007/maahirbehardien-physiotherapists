import React from 'react';
import Button from '@material-ui/core/Button';

const IntroSection = () => {
  return (
    <section id='home' className='landing'>
      <div className='landing-intro'>
        <h1 id='landing-head'>Maahir Behardien</h1>

        <h1 id='landing-sub'>Physiotherapists</h1>

        <p id='landing-motto'>"This is our motto"</p>
        <Button id='button' variant='contained' href='#about-us'>
          About us
        </Button>
      </div>
      <div className='landing-img'></div>
    </section>
  );
};

export default IntroSection;
