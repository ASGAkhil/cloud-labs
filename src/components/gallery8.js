import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './gallery8.css'

const Gallery8 = (props) => {
  return (
    <div className="gallery8-gallery3 thq-section-padding">
      <div className="gallery8-max-width thq-section-max-width">
        <div className="gallery8-section-title">
          <h2 className="gallery8-text1 thq-heading-2">
            {props.heading1 ?? (
              <Fragment>
                <span className="gallery8-text3">CloudLabs Gallery</span>
              </Fragment>
            )}
          </h2>
          <span className="gallery8-text2 thq-body-large">
            {props.content1 ?? (
              <Fragment>
                <span className="gallery8-text4">
                  Explore our state-of-the-art labs designed for hands-on
                  learning and skill enhancement.
                </span>
              </Fragment>
            )}
          </span>
        </div>
        <div className="gallery8-container">
          <div className="gallery8-content">
            <div
              data-thq="slider"
              data-navigation="true"
              data-pagination="true"
              className="gallery8-slider swiper"
            >
              <div data-thq="slider-wrapper" className="swiper-wrapper">
                <div
                  data-thq="slider-slide"
                  className="gallery8-slider-slide1 swiper-slide"
                ></div>
                <div
                  data-thq="slider-slide"
                  className="gallery8-slider-slide2 swiper-slide"
                >
                  <img
                    alt={props.image2Alt}
                    src={props.image2Src}
                    className="gallery8-image1 thq-img-ratio-4-3"
                  />
                </div>
                <div
                  data-thq="slider-slide"
                  className="gallery8-slider-slide3 swiper-slide"
                >
                  <img
                    alt={props.image3Alt}
                    src={props.image3Src}
                    className="gallery8-image2 thq-img-ratio-4-3"
                  />
                </div>
              </div>
              <div
                data-thq="slider-button-prev"
                className="swiper-button-prev"
              ></div>
              <div
                data-thq="slider-button-next"
                className="swiper-button-next"
              ></div>
              <div
                data-thq="slider-pagination"
                className="gallery8-slider-pagination swiper-pagination swiper-pagination-bullets swiper-pagination-horizontal"
              >
                <div
                  data-thq="slider-pagination-bullet"
                  className="swiper-pagination-bullet swiper-pagination-bullet-active"
                ></div>
                <div
                  data-thq="slider-pagination-bullet"
                  className="swiper-pagination-bullet"
                ></div>
                <div
                  data-thq="slider-pagination-bullet"
                  className="swiper-pagination-bullet"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Gallery8.defaultProps = {
  image3Src: 'https://play.teleporthq.io/static/svg/default-img.svg',
  image2Alt: 'Cloud Computing Lab',
  image2Src:
    'https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0NTQ1Mzc5Nnw&ixlib=rb-4.0.3&q=80&w=1080',
  heading1: undefined,
  content1: undefined,
  image3Alt: 'Linux Lab',
}

Gallery8.propTypes = {
  image3Src: PropTypes.string,
  image2Alt: PropTypes.string,
  image2Src: PropTypes.string,
  heading1: PropTypes.element,
  content1: PropTypes.element,
  image3Alt: PropTypes.string,
}

export default Gallery8
