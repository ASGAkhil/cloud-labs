import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './features1.css'

const Features1 = (props) => {
  return (
    <div className="features1-layout251 thq-section-padding">
      <div className="features1-max-width thq-section-max-width">
        <div className="thq-flex-row features1-section-title">
          <div className="features1-column thq-flex-column">
            <span className="thq-body-small">
              {props.slogan ?? (
                <Fragment>
                  <span className="features1-text22">
                    Empowering hands-on learning in the cloud
                  </span>
                </Fragment>
              )}
            </span>
            <h2 className="thq-heading-2 features1-text11">
              {props.sectionTitle ?? (
                <Fragment>
                  <span className="features1-text17">Key Features</span>
                </Fragment>
              )}
            </h2>
          </div>
          <span className="thq-body-small">
            {props.sectionDescription ?? (
              <Fragment>
                <span className="features1-text14">
                  Explore the key features that make CloudLabs the ultimate
                  platform for practicing DevOps, Cloud, and Linux concepts.
                </span>
              </Fragment>
            )}
          </span>
        </div>
        <div className="features1-content1">
          <div className="features1-row thq-flex-row">
            <div className="features1-feature1 thq-flex-column">
              <img
                alt={props.feature1ImageAlt}
                src={props.feature1ImageSrc}
                className="thq-img-ratio-4-3 features1-feature1-image"
              />
              <div className="features1-content2 thq-flex-column">
                <h3 className="thq-heading-3">
                  {props.feature1Title ?? (
                    <Fragment>
                      <span className="features1-text21">
                        Red Hat OpenShift Sandboxes
                      </span>
                    </Fragment>
                  )}
                </h3>
                <span className="thq-body-small">
                  {props.feature1Description ?? (
                    <Fragment>
                      <span className="features1-text19">
                        Access Red Hat OpenShift sandboxes to practice and
                        experiment with real-world scenarios.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
            <div className="features1-feature2 thq-flex-column">
              <img
                alt={props.feature2ImageAlt}
                src={props.feature2ImageSrc}
                className="thq-img-ratio-4-3 features1-feature2-image"
              />
              <div className="features1-content3 thq-flex-column">
                <h3 className="thq-heading-3">
                  {props.feature2Title ?? (
                    <Fragment>
                      <span className="features1-text23">
                        Secure Firebase Auth Integration
                      </span>
                    </Fragment>
                  )}
                </h3>
                <span className="thq-body-small">
                  {props.feature2Description ?? (
                    <Fragment>
                      <span className="features1-text13">
                        Enjoy secure login and authentication with Firebase Auth
                        integration for a seamless user experience.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
            <div className="features1-feature3 thq-flex-column">
              <img
                alt={props.feature3ImageAlt}
                src={props.feature3ImageSrc}
                className="thq-img-ratio-4-3 features1-feature3-image"
              />
              <div className="features1-content4 thq-flex-column">
                <h3 className="thq-heading-3">
                  {props.feature3Title ?? (
                    <Fragment>
                      <span className="features1-text18">
                        Testimonials Showcase
                      </span>
                    </Fragment>
                  )}
                </h3>
                <span className="thq-body-small">
                  {props.feature3Description ?? (
                    <Fragment>
                      <span className="features1-text20">
                        Read testimonials from users who have benefited from
                        CloudLabs in their learning and work experiences.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="features1-actions">
          <button className="thq-button-filled features1-button1">
            <span className="thq-body-small">
              {props.mainAction ?? (
                <Fragment>
                  <span className="features1-text15">
                    Launch and manage cloud-based labs remotely
                  </span>
                </Fragment>
              )}
            </span>
          </button>
          <button className="thq-button-outline features1-button2">
            <span className="thq-body-small">
              {props.secondaryAction ?? (
                <Fragment>
                  <span className="features1-text16">
                    Practice various labs using a user-friendly interface
                  </span>
                </Fragment>
              )}
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}

Features1.defaultProps = {
  feature2Description: undefined,
  feature2ImageAlt: 'Firebase Auth Integration Image',
  feature3ImageSrc:
    'https://images.unsplash.com/photo-1565328975505-3206569e2e4b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0NTQ0MDUwNnw&ixlib=rb-4.0.3&q=80&w=1080',
  sectionDescription: undefined,
  mainAction: undefined,
  secondaryAction: undefined,
  sectionTitle: undefined,
  feature3Title: undefined,
  feature1Description: undefined,
  feature2ImageSrc:
    'https://images.unsplash.com/photo-1622954732839-8c91e228c774?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0NTQ0MDUwNXw&ixlib=rb-4.0.3&q=80&w=1080',
  feature1ImageSrc: 'https://play.teleporthq.io/static/svg/default-img.svg',
  feature3Description: undefined,
  feature1ImageAlt: 'Red Hat OpenShift Sandboxes Image',
  feature1Title: undefined,
  slogan: undefined,
  feature2Title: undefined,
  feature3ImageAlt: 'Testimonials Showcase Image',
}

Features1.propTypes = {
  feature2Description: PropTypes.element,
  feature2ImageAlt: PropTypes.string,
  feature3ImageSrc: PropTypes.string,
  sectionDescription: PropTypes.element,
  mainAction: PropTypes.element,
  secondaryAction: PropTypes.element,
  sectionTitle: PropTypes.element,
  feature3Title: PropTypes.element,
  feature1Description: PropTypes.element,
  feature2ImageSrc: PropTypes.string,
  feature1ImageSrc: PropTypes.string,
  feature3Description: PropTypes.element,
  feature1ImageAlt: PropTypes.string,
  feature1Title: PropTypes.element,
  slogan: PropTypes.element,
  feature2Title: PropTypes.element,
  feature3ImageAlt: PropTypes.string,
}

export default Features1
