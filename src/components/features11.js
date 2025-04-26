import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './features11.css'

const Features11 = (props) => {
  return (
    <div className="features11-layout349 thq-section-padding">
      <div className="thq-flex-column thq-section-max-width features11-max-width">
        <img
          alt={props.featureImageAlt}
          src={props.featureImageSrc}
          className="thq-img-ratio-4-3"
        />
        <div className="thq-flex-column">
          <span className="features11-text1 thq-body-small">
            {props.feature1Slogan ?? (
              <Fragment>
                <span className="features11-text5">
                  Practice Anytime, Anywhere
                </span>
              </Fragment>
            )}
          </span>
          <h2 className="features11-text2 thq-heading-2">
            {props.feature1Title ?? (
              <Fragment>
                <span className="features11-text8">Remote Lab Access</span>
              </Fragment>
            )}
          </h2>
          <p className="features11-text3 thq-body-large">
            {props.feature1Description ?? (
              <Fragment>
                <span className="features11-text4">
                  CloudLabs provides cloud-based labs that can be accessed
                  remotely, allowing users to practice DevOps, Cloud, and Linux
                  concepts at their convenience.
                </span>
              </Fragment>
            )}
          </p>
          <div className="thq-flex-row features11-actions">
            <button className="features11-button1 thq-button-filled">
              <span className="thq-body-small">
                {props.mainAction ?? (
                  <Fragment>
                    <span className="features11-text7">Access Labs</span>
                  </Fragment>
                )}
              </span>
            </button>
            <button className="features11-button2 thq-button-outline">
              <span className="thq-body-small">
                {props.secondaryAction ?? (
                  <Fragment>
                    <span className="features11-text6">
                      Launch Red Hat Labs
                    </span>
                  </Fragment>
                )}
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

Features11.defaultProps = {
  feature1Description: undefined,
  featureImageSrc:
    'https://images.unsplash.com/photo-1640552435388-a54879e72b28?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0NTQyMjc1NXw&ixlib=rb-4.0.3&q=80&w=1080',
  featureImageAlt: 'CloudLabs Remote Lab Access',
  feature1Slogan: undefined,
  secondaryAction: undefined,
  mainAction: undefined,
  feature1Title: undefined,
}

Features11.propTypes = {
  feature1Description: PropTypes.element,
  featureImageSrc: PropTypes.string,
  featureImageAlt: PropTypes.string,
  feature1Slogan: PropTypes.element,
  secondaryAction: PropTypes.element,
  mainAction: PropTypes.element,
  feature1Title: PropTypes.element,
}

export default Features11
