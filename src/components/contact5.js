import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './contact5.css'

const Contact5 = (props) => {
  return (
    <div
      className={`contact5-container thq-section-padding ${props.rootClassName} `}
    >
      <div className="contact5-max-width thq-section-max-width">
        <div className="contact5-section-title">
          <div className="contact5-content1">
            <h2 className="thq-heading-2">
              {props.heading1 ?? (
                <Fragment>
                  <span className="contact5-text23">Contact Us</span>
                </Fragment>
              )}
            </h2>
            <p className="thq-body-large">
              {props.content1 ?? (
                <Fragment>
                  <span className="contact5-text21">
                    We are here to assist you with any questions or concerns.
                  </span>
                </Fragment>
              )}
            </p>
          </div>
        </div>
        <div className="contact5-content2 thq-flex-row">
          <div className="contact5-content3">
            <div className="contact5-content4">
              <svg viewBox="0 0 1024 1024" className="thq-icon-medium">
                <path d="M854 342v-86l-342 214-342-214v86l342 212zM854 170q34 0 59 26t25 60v512q0 34-25 60t-59 26h-684q-34 0-59-26t-25-60v-512q0-34 25-60t59-26h684z"></path>
              </svg>
              <div className="contact5-contact-info1">
                <h3 className="contact5-text12 thq-heading-3">Email</h3>
                <p className="thq-body-large">
                  {props.content2 ?? (
                    <Fragment>
                      <span className="contact5-text22">
                        For any inquiries or support, feel free to reach out to
                        us.
                      </span>
                    </Fragment>
                  )}
                </p>
                <span className="thq-body-small">
                  {props.email ?? (
                    <Fragment>
                      <span className="contact5-text26">
                        info@cloudlabs.com
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
            <div className="contact5-content5">
              <svg viewBox="0 0 1024 1024" className="thq-icon-medium">
                <path d="M282 460q96 186 282 282l94-94q20-20 44-10 72 24 152 24 18 0 30 12t12 30v150q0 18-12 30t-30 12q-300 0-513-213t-213-513q0-18 12-30t30-12h150q18 0 30 12t12 30q0 80 24 152 8 26-10 44z"></path>
              </svg>
              <div className="contact5-contact-info2">
                <h3 className="contact5-text14 thq-heading-3">Phone</h3>
                <p className="thq-body-large">
                  {props.content3 ?? (
                    <Fragment>
                      <span className="contact5-text24">
                        You can also follow us on social media for updates and
                        news.
                      </span>
                    </Fragment>
                  )}
                </p>
                <span className="thq-body-small">
                  {props.phone1 ?? (
                    <Fragment>
                      <span className="contact5-text20">+1-123-456-7890</span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
            <div className="contact5-content6">
              <svg viewBox="0 0 1024 1024" className="thq-icon-medium">
                <path d="M512 0c-176.732 0-320 143.268-320 320 0 320 320 704 320 704s320-384 320-704c0-176.732-143.27-320-320-320zM512 512c-106.040 0-192-85.96-192-192s85.96-192 192-192 192 85.96 192 192-85.96 192-192 192z"></path>
              </svg>
              <div className="contact5-contact-info3">
                <h3 className="contact5-text17 thq-heading-3">Office</h3>
                <p className="thq-body-large">
                  {props.content5 ?? (
                    <Fragment>
                      <span className="contact5-text19">
                        Our team will get back to you as soon as possible.
                      </span>
                    </Fragment>
                  )}
                </p>
                <span className="thq-body-small">
                  {props.address1 ?? (
                    <Fragment>
                      <span className="contact5-text25">
                        123 Cloud Way, Tech City, USA
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
          <img
            alt={props.imageAlt}
            src={props.imageSrc}
            className="contact5-image thq-img-ratio-1-1"
          />
        </div>
      </div>
    </div>
  )
}

Contact5.defaultProps = {
  content5: undefined,
  rootClassName: '',
  imageSrc:
    'https://images.unsplash.com/photo-1724390309062-bdf526859f61?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0NTQ1MjkwOXw&ixlib=rb-4.0.3&q=80&w=800',
  phone1: undefined,
  content1: undefined,
  content2: undefined,
  heading1: undefined,
  content3: undefined,
  imageAlt: 'CloudLabs Logo',
  address1: undefined,
  email: undefined,
}

Contact5.propTypes = {
  content5: PropTypes.element,
  rootClassName: PropTypes.string,
  imageSrc: PropTypes.string,
  phone1: PropTypes.element,
  content1: PropTypes.element,
  content2: PropTypes.element,
  heading1: PropTypes.element,
  content3: PropTypes.element,
  imageAlt: PropTypes.string,
  address1: PropTypes.element,
  email: PropTypes.element,
}

export default Contact5
