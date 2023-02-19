import Image from 'next/image';

import classes from './hero.module.css';

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src='/images/site/luca.jpg'
          alt='An image showing Luca'
          width={300}
          height={300}
        />
      </div>
      <h1>Heyo, My name is Luca</h1>
      <p>
        I am a student at Thomas More Geel and this is a blog I made for my PPP in Next Js & React!
        In this blog, I will post about sessions I had with my Pathfinder 2e group.
      </p>
    </section>
  );
}

export default Hero;
