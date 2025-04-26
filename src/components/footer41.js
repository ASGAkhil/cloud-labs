import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './footer41.css'

const Footer41 = (props) => {
  return (
    <footer className="footer41-footer7 thq-section-padding">
      <div className="footer41-max-width thq-section-max-width">
        <div className="footer41-content">
          <div className="footer41-logo"></div>
          <div className="footer41-links">
            <a
              href="https://example.com"
              target="_blank"
              rel="noreferrer noopener"
              className="thq-body-small"
            >
              {props.link1 ?? (
                <Fragment>
                  <span className="footer41-text14">About Us</span>
                </Fragment>
              )}
            </a>
            <a
              href="https://example.com"
              target="_blank"
              rel="noreferrer noopener"
              className="thq-body-small"
            >
              {props.link2 ?? (
                <Fragment>
                  <span className="footer41-text20">Contact Us</span>
                </Fragment>
              )}
            </a>
            <a
              href="https://example.com"
              target="_blank"
              rel="noreferrer noopener"
              className="thq-body-small"
            >
              {props.link3 ?? (
                <Fragment>
                  <span className="footer41-text19">FAQs</span>
                </Fragment>
              )}
            </a>
            <a
              href="https://example.com"
              target="_blank"
              rel="noreferrer noopener"
              className="thq-body-small"
            >
              {props.link4 ?? (
                <Fragment>
                  <span className="footer41-text15">Support</span>
                </Fragment>
              )}
            </a>
            <a
              href="https://example.com"
              target="_blank"
              rel="noreferrer noopener"
              className="thq-body-small"
            >
              {props.link5 ?? (
                <Fragment>
                  <span className="footer41-text17">Blog</span>
                </Fragment>
              )}
            </a>
          </div>
        </div>
        <div className="footer41-credits">
          <div className="thq-divider-horizontal"></div>
          <div className="footer41-row">
            <div className="footer41-container">
              <span className="thq-body-small">© 2025 CloudLabs</span>
            </div>
            <div className="footer41-footer-links">
              <span className="footer41-text11 thq-body-small">
                {props.privacyLink ?? (
                  <Fragment>
                    <span className="footer41-text18">Privacy Policy</span>
                  </Fragment>
                )}
              </span>
              <span className="thq-body-small">
                {props.termsLink ?? (
                  <Fragment>
                    <span className="footer41-text16">Terms of Service</span>
                  </Fragment>
                )}
              </span>
              <span className="thq-body-small">
                {props.cookiesLink ?? (
                  <Fragment>
                    <span className="footer41-text21">Cookies Policy</span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

Footer41.defaultProps = {
  link1: undefined,
  link4: undefined,
  termsLink: undefined,
  link5: undefined,
  privacyLink: undefined,
  link3: undefined,
  link2: undefined,
  cookiesLink: undefined,
}

Footer41.propTypes = {
  link1: PropTypes.element,
  link4: PropTypes.element,
  termsLink: PropTypes.element,
  link5: PropTypes.element,
  privacyLink: PropTypes.element,
  link3: PropTypes.element,
  link2: PropTypes.element,
  cookiesLink: PropTypes.element,
}

export default Footer41
