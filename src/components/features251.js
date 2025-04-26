import React, { useState, Fragment } from 'react'

import PropTypes from 'prop-types'

import './features251.css'

const Features251 = (props) => {
  const [activeTab, setActiveTab] = useState(0)
  return (
    <div className="thq-section-padding">
      <div className="features251-container2 thq-section-max-width">
        <div className="features251-tabs-menu">
          <div
            onClick={() => setActiveTab(0)}
            className="features251-tab-horizontal1"
          >
            <div className="features251-divider-container1">
              {activeTab === 0 && (
                <div className="features251-container3"></div>
              )}
            </div>
            <div className="features251-content1">
              <h2 className="thq-heading-2">
                {props.feature1Title ?? (
                  <Fragment>
                    <span className="features251-text5">Easy Lab Launch</span>
                  </Fragment>
                )}
              </h2>
              <span className="thq-body-small">
                {props.feature1Description ?? (
                  <Fragment>
                    <span className="features251-text4">
                      Launch labs with a click, no setup required
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
          <div
            onClick={() => setActiveTab(1)}
            className="features251-tab-horizontal2"
          >
            <div className="features251-divider-container2">
              {activeTab === 1 && (
                <div className="features251-container4"></div>
              )}
            </div>
            <div className="features251-content2">
              <h2 className="thq-heading-2">
                {props.feature2Title ?? (
                  <Fragment>
                    <span className="features251-text1">
                      Red Hat Sandbox Access
                    </span>
                  </Fragment>
                )}
              </h2>
              <span className="thq-body-small">
                {props.feature2Description ?? (
                  <Fragment>
                    <span className="features251-text6">
                      Access a variety of Red Hat labs for hands-on practice
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
          <div
            onClick={() => setActiveTab(2)}
            className="features251-tab-horizontal3"
          >
            <div className="features251-divider-container3">
              {activeTab === 2 && (
                <div className="features251-container5"></div>
              )}
            </div>
            <div className="features251-content3">
              <h2 className="thq-heading-2">
                {props.feature3Title ?? (
                  <Fragment>
                    <span className="features251-text2">
                      User-Friendly Interface
                    </span>
                  </Fragment>
                )}
              </h2>
              <span className="thq-body-small">
                {props.feature3Description ?? (
                  <Fragment>
                    <span className="features251-text3">
                      Intuitive interface for seamless lab management
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
        </div>
        <div className="features251-image-container">
          {activeTab === 0 && (
            <img
              alt={props.feature1ImgAlt}
              src={props.feature1ImgSrc}
              className="features251-image1 thq-img-ratio-16-9"
            />
          )}
          {activeTab === 1 && (
            <img
              alt={props.feature2ImgAlt}
              src={props.feature2ImgSrc}
              className="features251-image2 thq-img-ratio-16-9"
            />
          )}
          {activeTab === 2 && (
            <img
              alt={props.feature3ImgAlt}
              src={props.feature3ImgSrc}
              className="features251-image3 thq-img-ratio-16-9"
            />
          )}
        </div>
      </div>
    </div>
  )
}

Features251.defaultProps = {
  feature1ImgSrc:
    'https://images.unsplash.com/photo-1604079681864-c6fbd7eb109c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0NTQyMjMxN3w&ixlib=rb-4.0.3&q=80&w=1080',
  feature2Title: undefined,
  feature3Title: undefined,
  feature3ImgAlt: 'Illustration of User-Friendly Interface',
  feature3Description: undefined,
  feature2ImgAlt: 'Illustration of Red Hat Sandbox Access',
  feature1Description: undefined,
  feature3ImgSrc:
    'https://images.unsplash.com/photo-1557849340-31e6525f03c6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0NTQyMjMxN3w&ixlib=rb-4.0.3&q=80&w=1080',
  feature2ImgSrc: 'https://play.teleporthq.io/static/svg/default-img.svg',
  feature1ImgAlt: 'Illustration of Easy Lab Launch',
  feature1Title: undefined,
  feature2Description: undefined,
}

Features251.propTypes = {
  feature1ImgSrc: PropTypes.string,
  feature2Title: PropTypes.element,
  feature3Title: PropTypes.element,
  feature3ImgAlt: PropTypes.string,
  feature3Description: PropTypes.element,
  feature2ImgAlt: PropTypes.string,
  feature1Description: PropTypes.element,
  feature3ImgSrc: PropTypes.string,
  feature2ImgSrc: PropTypes.string,
  feature1ImgAlt: PropTypes.string,
  feature1Title: PropTypes.element,
  feature2Description: PropTypes.element,
}

export default Features251
