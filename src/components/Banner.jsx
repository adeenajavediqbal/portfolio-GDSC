
import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

function Banner() {
    useEffect(() => {
        AOS.init();
      }, [])
  return (
    <section className="banner" id="banner">
      <div className="container">
        <div className="banner-wrapper">
          <div className="banner-img">
            <img src="/person.png" alt="" className="myPicture" data-aos="zoom-in" data-aos-duration="1000"/>
          </div>
          <div className="banner-content">
            <h6 data-aos="zoom-in-down" data-aos-duration="1000">Hello, I'm Adeena Javed</h6>
            <h3 data-aos="zoom-in-left" data-aos-duration="1000">Web Developer</h3>
            <p data-aos="zoom-in-left" data-aos-duration="1000">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum,
              magni possimus in architecto repellat perspiciatis cum recusandae
              adipisci culpa voluptatem dolorem laudantium temporibus quos
              laborum, beatae sint delectus expedita quo.
            </p>
            <a className="btn" href="#projects" data-aos="fade-up" data-aos-duration="1000">
              About Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;