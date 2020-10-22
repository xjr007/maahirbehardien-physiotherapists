import React from 'react';
import CardTemplate from '../../layout/CardTemplate';
const AboutSection = () => {
  return (
    <section id='about-us'>
      <div className='about-container'>
        <div className='about-top'>
          <h1 id='header'>About us</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident,
            velit necessitatibus? Inventore, similique perspiciatis ea neque
            ipsam vero delectus maxime quibusdam! Doloremque quaerat,
            consectetur magnam fuga eveniet fugit natus officia aut
            exercitationem molestiae facere, inventore quod, corporis ad
            consequatur quis ipsa iste. Animi omnis quas maxime ullam at officia
            ea! Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Provident, velit necessitatibus? Inventore, similique perspiciatis
            ea neque ipsam vero delectus maxime quibusdam! Doloremque quaerat,
            consectetur magnam fuga eveniet fugit natus officia aut
            exercitationem molestiae facere, inventore quod, corporis ad
            consequatur quis ipsa iste. Animi omnis quas maxime ullam at officia
            ea!
          </p>
        </div>
        <div className='about-profiles'>
          <CardTemplate
            img={'prof.jpg'}
            name={'Aaqiel'}
            surname={'Behardien'}
            role={'Student'}
            bio={
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, velit necessitatibus? Inventore, similique perspiciatis ea neque ipsam vero delectus maxime quibusdam! Doloremque quaerat, consectetur magnam fuga eveniet fugit natus officia aut exercitationem molestiae facere, inventore quod, corporis ad consequatur quis ipsa iste. Animi omnis quas maxime ullam at officia ea!'
            }
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
