import React from "react";
import { Link } from "react-router-dom";
import Heading from "../../common/heading/Heading";
import "./Hero.css";

const Hero = () => {
  return (
    <>
      <section className='hero'>
        <div className='container'>
          <div className='row'>
            <Heading subtitle='RENTIFY EXCHANGE' title='Best Rental Online For All Items' />
            <p>Providing a Wide Range of High-Quality Rental Items with Unmatched Convenience and Comfort.</p>
            <div className='button'>
              <button className='primary-btn'>
                LOGIN <i className='fa fa-long-arrow-alt-right'></i>
              </button>
              <Link to="/login">
                <button className='primary-btn2'>
                  REGISTER <i className='fa fa-long-arrow-alt-right'></i>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <div className='margin'></div>
    </>
  );
};

export default Hero;