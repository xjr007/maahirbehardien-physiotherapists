import React from 'react';
import { Card, CardFlip } from '../../layout/Card';
import prof from '../../assets/img/prof.jpg';

const AboutSection = () => {
  return (
    <section className='about-us'>
      <div id='about-us' className='about-container'>
        <div className='about-top'>
          <h1 id='header'>
            <span id='scnd-header'>About</span> us
          </h1>
          <p id='header-text'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident,
            velit necessitatibus? Inventore, similique perspiciatis ea neque
            ipsam vero delectus maxime quibusdam! Doloremque quaerat,
            consectetur magnam fuga eveniet fugit natus officia aut
            exercitationem molestiae facere, inventore quod, corporis ad.
          </p>
        </div>
        <div className='about-profiles'>
          <h1 id='header'>
            Our <span id='scnd-header'>Team</span>
          </h1>
          {}
          <Card
            img={prof}
            title={'Aaqiel Behardien'}
            role={'Student'}
            text={
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, velit necessitatibus? Inventore, similique perspiciatis ea neque ipsam vero delectus maxime quibusdam! Doloremque quaerat, consectetur magnam fuga eveniet fugit natus officia aut exercitationem molestiae facere, inventore quod, corporis ad consequatur quis ipsa iste. Animi omnis quas maxime ullam at officia ea!'
            }
          />
          <CardFlip
            img={prof}
            title={'Aaqiel Behardien'}
            role={'Student'}
            text={
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, velit necessitatibus? Inventore, similique perspiciatis ea neque ipsam vero delectus maxime quibusdam! Doloremque quaerat, consectetur magnam fuga eveniet fugit natus officia aut exercitationem molestiae facere, inventore quod, corporis ad consequatur quis ipsa iste. Animi omnis quas maxime ullam at officia ea!'
            }
          />
          <Card
            img={prof}
            title={'Aaqiel Behardien'}
            role={'Student'}
            text={
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, velit necessitatibus? Inventore, similique perspiciatis ea neque ipsam vero delectus maxime quibusdam! Doloremque quaerat, consectetur magnam fuga eveniet fugit natus officia aut exercitationem molestiae facere, inventore quod, corporis ad consequatur quis ipsa iste. Animi omnis quas maxime ullam at officia ea!'
            }
          />
          <CardFlip
            img={prof}
            title={'Aaqiel Behardien'}
            role={'Student'}
            text={
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, velit necessitatibus? Inventore, similique perspiciatis ea neque ipsam vero delectus maxime quibusdam! Doloremque quaerat, consectetur magnam fuga eveniet fugit natus officia aut exercitationem molestiae facere, inventore quod, corporis ad consequatur quis ipsa iste. Animi omnis quas maxime ullam at officia ea!'
            }
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
