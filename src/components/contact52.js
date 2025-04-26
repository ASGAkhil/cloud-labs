import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './contact52.css'

const Contact52 = (props) => {
  return (
    <div className="contact52-container thq-section-padding">
      <div className="contact52-max-width thq-section-max-width">
        <div className="contact52-section-title">
          <div className="contact52-content1">
            <h2 className="thq-heading-2">
              {props.heading1 ?? (
                <Fragment>
                  <span className="contact52-text21">Co-Founder</span>
                </Fragment>
              )}
            </h2>
            <p className="thq-body-large">
              {props.content1 ?? (
                <Fragment>
                  <span className="contact52-text25">
                    Have questions or need assistance? Drop us a message!
                  </span>
                </Fragment>
              )}
            </p>
          </div>
        </div>
        <div className="contact52-content2 thq-flex-row">
          <div className="contact52-content3">
            <div className="contact52-content4">
              <svg viewBox="0 0 1024 1024" className="thq-icon-medium">
                <path d="M854 342v-86l-342 214-342-214v86l342 212zM854 170q34 0 59 26t25 60v512q0 34-25 60t-59 26h-684q-34 0-59-26t-25-60v-512q0-34 25-60t59-26h684z"></path>
              </svg>
              <div className="contact52-contact-info1">
                <h3 className="contact52-text12 thq-heading-3">Email</h3>
                <p className="thq-body-large">
                  {props.content2 ?? (
                    <Fragment>
                      <span className="contact52-text22">
                        For any inquiries or support, feel free to reach out to
                        us.
                      </span>
                    </Fragment>
                  )}
                </p>
                <span className="thq-body-small">
                  {props.email ?? (
                    <Fragment>
                      <span className="contact52-text20">
                        akhil@cloudlabs.com
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
            <div className="contact52-content5">
              <svg viewBox="0 0 1024 1024" className="thq-icon-medium">
                <path d="M282 460q96 186 282 282l94-94q20-20 44-10 72 24 152 24 18 0 30 12t12 30v150q0 18-12 30t-30 12q-300 0-513-213t-213-513q0-18 12-30t30-12h150q18 0 30 12t12 30q0 80 24 152 8 26-10 44z"></path>
              </svg>
              <div className="contact52-contact-info2">
                <h3 className="contact52-text14 thq-heading-3">Phone</h3>
                <p className="thq-body-large">
                  {props.content3 ?? (
                    <Fragment>
                      <span className="contact52-text24">
                        You can also connect with us on social media.
                      </span>
                    </Fragment>
                  )}
                </p>
                <span className="thq-body-small">
                  {props.phone1 ?? (
                    <Fragment>
                      <span className="contact52-text26">+91 9918517398</span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
            <div className="contact52-content6">
              <svg viewBox="0 0 1024 1024" className="thq-icon-medium">
                <path d="M512 0c-176.732 0-320 143.268-320 320 0 320 320 704 320 704s320-384 320-704c0-176.732-143.27-320-320-320zM512 512c-106.040 0-192-85.96-192-192s85.96-192 192-192 192 85.96 192 192-85.96 192-192 192z"></path>
              </svg>
              <div className="contact52-contact-info3">
                <h3 className="contact52-text17 thq-heading-3">Office</h3>
                <p className="thq-body-large">
                  {props.content5 ?? (
                    <Fragment>
                      <span className="contact52-text23">
                        We aim to respond to all messages within 24 hours.
                      </span>
                    </Fragment>
                  )}
                </p>
                <span className="thq-body-small">
                  {props.address1 ?? (
                    <Fragment>
                      <span className="contact52-text19">
                        H1297 Avas Vikas 1 Kanpur 
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
          <a
            href="https://www.linkedin.com/in/akhil-singh-gautam/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <img
              alt={props.imageAlt}
              src={props.imageSrc}
              className="contact52-image thq-img-ratio-1-1"
            />
          </a>
        </div>
      </div>
    </div>
  )
}

Contact52.defaultProps = {
  imageSrc: '/4ed0f653-6c41-40f4-a56c-b0fb2791251c-800w.png',
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

Contact52.propTypes = {
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

export default Contact52
