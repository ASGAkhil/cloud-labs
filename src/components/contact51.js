import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './contact51.css'

const Contact51 = (props) => {
  return (
    <div className="contact51-container thq-section-padding">
      <div className="contact51-max-width thq-section-max-width">
        <div className="contact51-section-title">
          <div className="contact51-content1">
            <h2 className="thq-heading-2">
              {props.heading1 ?? (
                <Fragment>
                  <span className="contact51-text21">Contact Us</span>
                </Fragment>
              )}
            </h2>
            <p className="thq-body-large">
              {props.content1 ?? (
                <Fragment>
                  <span className="contact51-text25">
                    We value your feedback and are here to help.
                  </span>
                </Fragment>
              )}
            </p>
          </div>
        </div>
        <div className="contact51-content2 thq-flex-row">
          <div className="contact51-content3">
            <div className="contact51-content4">
              <svg viewBox="0 0 1024 1024" className="thq-icon-medium">
                <path d="M854 342v-86l-342 214-342-214v86l342 212zM854 170q34 0 59 26t25 60v512q0 34-25 60t-59 26h-684q-34 0-59-26t-25-60v-512q0-34 25-60t59-26h684z"></path>
              </svg>
              <div className="contact51-contact-info1">
                <h3 className="contact51-text12 thq-heading-3">Email</h3>
                <p className="thq-body-large">
                  {props.content2 ?? (
                    <Fragment>
                      <span className="contact51-text22">
                        For any inquiries or support, feel free to reach out to
                        us via email.
                      </span>
                    </Fragment>
                  )}
                </p>
                <span className="thq-body-small">
                  {props.email ?? (
                    <Fragment>
                      <span className="contact51-text20">
                        info@cloudlabs.com
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
            <div className="contact51-content5">
              <svg viewBox="0 0 1024 1024" className="thq-icon-medium">
                <path d="M282 460q96 186 282 282l94-94q20-20 44-10 72 24 152 24 18 0 30 12t12 30v150q0 18-12 30t-30 12q-300 0-513-213t-213-513q0-18 12-30t30-12h150q18 0 30 12t12 30q0 80 24 152 8 26-10 44z"></path>
              </svg>
              <div className="contact51-contact-info2">
                <h3 className="contact51-text14 thq-heading-3">Phone</h3>
                <p className="thq-body-large">
                  {props.content3 ?? (
                    <Fragment>
                      <span className="contact51-text24">
                        You can also contact us by phone during business hours.
                      </span>
                    </Fragment>
                  )}
                </p>
                <span className="thq-body-small">
                  {props.phone1 ?? (
                    <Fragment>
                      <span className="contact51-text26">+1-123-456-7890</span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
            <div className="contact51-content6">
              <svg viewBox="0 0 1024 1024" className="thq-icon-medium">
                <path d="M512 0c-176.732 0-320 143.268-320 320 0 320 320 704 320 704s320-384 320-704c0-176.732-143.27-320-320-320zM512 512c-106.040 0-192-85.96-192-192s85.96-192 192-192 192 85.96 192 192-85.96 192-192 192z"></path>
              </svg>
              <div className="contact51-contact-info3">
                <h3 className="contact51-text17 thq-heading-3">Office</h3>
                <p className="thq-body-large">
                  {props.content5 ?? (
                    <Fragment>
                      <span className="contact51-text23">
                        Our team will be happy to assist you with any questions
                        or concerns.
                      </span>
                    </Fragment>
                  )}
                </p>
                <span className="thq-body-small">
                  {props.address1 ?? (
                    <Fragment>
                      <span className="contact51-text19">
                        123 Cloud Way, Cloud City
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
            className="contact51-image thq-img-ratio-1-1"
          />
        </div>
      </div>
    </div>
  )
}

Contact51.defaultProps = {
  imageSrc:
    'https://images.unsplash.com/photo-1667372335879-9b5c551232e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0NTYyNTkyMHw&ixlib=rb-4.0.3&q=80&w=1080',
  address1: undefined,
  email: undefined,
  heading1: undefined,
  content2: undefined,
  content5: undefined,
  content3: undefined,
  content1: undefined,
  imageAlt: 'CloudLabs Logo',
  phone1: undefined,
}

Contact51.propTypes = {
  imageSrc: PropTypes.string,
  address1: PropTypes.element,
  email: PropTypes.element,
  heading1: PropTypes.element,
  content2: PropTypes.element,
  content5: PropTypes.element,
  content3: PropTypes.element,
  content1: PropTypes.element,
  imageAlt: PropTypes.string,
  phone1: PropTypes.element,
}

export default Contact51
