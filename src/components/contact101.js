import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './contact101.css'

const Contact101 = (props) => {
  return (
    <div className="contact101-container1 thq-section-padding">
      <div className="contact101-max-width thq-section-max-width">
        <div className="contact101-content1 thq-flex-row">
          <div className="contact101-content2">
            <h2 className="thq-heading-2">
              {props.heading1 ?? (
                <Fragment>
                  <span className="contact101-text20">Locations</span>
                </Fragment>
              )}
            </h2>
            <p className="thq-body-large">
              {props.content1 ?? (
                <Fragment>
                  <span className="contact101-text19">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in ero.
                  </span>
                </Fragment>
              )}
            </p>
          </div>
        </div>
        <div className="contact101-content3 thq-flex-row">
          <div className="contact101-container2">
            <img
              alt={props.location1ImageAlt}
              src={props.location1ImageSrc}
              className="contact101-image1 thq-img-ratio-16-9"
            />
            <h3 className="contact101-text12 thq-heading-3">
              {props.location1 ?? (
                <Fragment>
                  <span className="contact101-text16">Bucharest</span>
                </Fragment>
              )}
            </h3>
            <p className="thq-body-large">
              {props.location1Description ?? (
                <Fragment>
                  <span className="contact101-text21">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in ero.
                  </span>
                </Fragment>
              )}
            </p>
            <div className="contact101-container3">
              <a
                href="https://example.com"
                target="_blank"
                rel="noreferrer noopener"
                className="thq-body-small thq-button-flat"
              >
                Get directions
              </a>
            </div>
          </div>
          <div className="contact101-container4">
            <img
              alt={props.location2ImageAlt}
              src={props.location2ImageSrc}
              className="contact101-image2 thq-img-ratio-16-9"
            />
            <h3 className="contact101-text14 thq-heading-3">
              {props.location2 ?? (
                <Fragment>
                  <span className="contact101-text18">Cluj - Napoca</span>
                </Fragment>
              )}
            </h3>
            <p className="thq-body-large">
              {props.location2Description ?? (
                <Fragment>
                  <span className="contact101-text17">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in ero.
                  </span>
                </Fragment>
              )}
            </p>
            <div className="contact101-container5">
              <a
                href="https://example.com"
                target="_blank"
                rel="noreferrer noopener"
                className="thq-body-small thq-button-flat"
              >
                Get directions
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Contact101.defaultProps = {
  location1ImageSrc:
    'https://images.unsplash.com/photo-1526996233918-d7059afc59bf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0NTQyMjMxN3w&ixlib=rb-4.0.3&q=80&w=1080',
  location1: undefined,
  location1ImageAlt: 'image1Alt',
  location2Description: undefined,
  location2: undefined,
  location2ImageSrc:
    'https://images.unsplash.com/photo-1522441815192-d9f04eb0615c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0NTQyMjMxN3w&ixlib=rb-4.0.3&q=80&w=1080',
  content1: undefined,
  heading1: undefined,
  location2ImageAlt: 'image2Alt',
  location1Description: undefined,
}

Contact101.propTypes = {
  location1ImageSrc: PropTypes.string,
  location1: PropTypes.element,
  location1ImageAlt: PropTypes.string,
  location2Description: PropTypes.element,
  location2: PropTypes.element,
  location2ImageSrc: PropTypes.string,
  content1: PropTypes.element,
  heading1: PropTypes.element,
  location2ImageAlt: PropTypes.string,
  location1Description: PropTypes.element,
}

export default Contact101
