import React, { useState, useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

function ServicesExperience() {
    useEffect(() => {
        AOS.init();
      }, [])
  const [services] = useState([
    {
      icon: "fa-paintbrush",
      title: "UI Design",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing.",
      active: false,
    },
    {
      icon: "fa-pen-to-square",
      title: "Product Design",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing.",
      active: true,
    },
    {
      icon: "fa-ruler",
      title: "Branding",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing.",
      active: false,
    },
  ]);
  return (
    <section className="services-experience">
      <div className="container">
        <div className="services" id="services">
          {services.map((service, i) => (
            <div
            
            data-aos="zoom-in"
              key={i}
              className={`service ${service.active ? "active" : ""}`}
            >
              <i className={`fas ${service.icon}`} />
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
              <button className="btn">Know More</button>
            </div>
          ))}
        </div>
        <div className="experiences" id="experiences">
          <div className="experience">
            <h3 data-aos="fade-right" data-aos-duration="1000">12</h3>
            <p data-aos="fade-right" data-aos-duration="1000">Year Experience</p>
          </div>
          <div className="portfolios" data-aos="zoom-in">
            <div className="portfolio">
              <h4>60+</h4>
              <p>Clients</p>
            </div>
            <div className="portfolio">
              <h4>08</h4>
              <p>Years Experience</p>
            </div>
            <div className="portfolio">
              <h4>122+</h4>
              <p>Completed Projects</p>
            </div>
            <div className="portfolio">
              <h4>10</h4>
              <p>Achievements</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicesExperience;