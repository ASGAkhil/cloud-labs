import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './cta26.css'

const CTA26 = (props) => {
  return (
    <div id={props.cTA26Id} className="thq-section-padding">
      <div className="thq-section-max-width">
        <div className="cta26-accent2-bg">
          <div className="cta26-accent1-bg">
            <div className="cta26-container2">
              <div className="cta26-content">
                <span className="thq-heading-2">
                  {props.heading1 ?? (
                    <Fragment>
                      <span className="cta26-text5">
                        Ready to level up your skills?
                      </span>
                    </Fragment>
                  )}
                </span>
                <p className="thq-body-large">
                  {props.content1 ?? (
                    <Fragment>
                      <span className="cta26-text4">
                        Sign up now to access our cloud-based labs and start
                        practicing DevOps, Cloud, and Linux today!
                      </span>
                    </Fragment>
                  )}
                </p>
              </div>
              <div className="cta26-actions">
                <button
                  type="button"
                  className="thq-button-filled cta26-button"
                >
                  <span>
                    {props.action1 ?? (
                      <Fragment>
                        <span className="cta26-text6">Sign Up</span>
                      </Fragment>
                    )}
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

CTA26.defaultProps = {
  content1: undefined,
  cTA26Id: '',
  heading1: undefined,
  action1: undefined,
}

CTA26.propTypes = {
  content1: PropTypes.element,
  cTA26Id: PropTypes.string,
  heading1: PropTypes.element,
  action1: PropTypes.element,
}

export default CTA26
