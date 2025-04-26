import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './sign-in5.css'

const SignIn5 = (props) => {
  return (
    <div className="sign-in5-container1 thq-section-padding">
      <div className="sign-in5-max-width thq-section-max-width">
        <div className="sign-in5-container2 thq-section-padding">
          <div className="sign-in5-form-root">
            <div className="sign-in5-container3">
              <h2 className="sign-in5-text1 thq-heading-2">
                {props.heading1 ?? (
                  <Fragment>
                    <span className="sign-in5-text6">Sign In to CloudLabs</span>
                  </Fragment>
                )}
              </h2>
              <p className="sign-in5-text2 thq-body-large">
                Don&apos;t have an account? Sign up
              </p>
            </div>
            <div className="sign-in5-container4">
              <button className="sign-in5-button1 thq-button-outline">
                <svg
                  viewBox="0 0 877.7142857142857 1024"
                  className="sign-in5-icon1"
                >
                  <path d="M713.143 73.143c90.857 0 164.571 73.714 164.571 164.571v548.571c0 90.857-73.714 164.571-164.571 164.571h-107.429v-340h113.714l17.143-132.571h-130.857v-84.571c0-38.286 10.286-64 65.714-64l69.714-0.571v-118.286c-12-1.714-53.714-5.143-101.714-5.143-101.143 0-170.857 61.714-170.857 174.857v97.714h-114.286v132.571h114.286v340h-304c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571z"></path>
                </svg>
                <span className="thq-body-small">Continue with Facebook</span>
              </button>
              <a
                href="https://cloudlabd.web.app"
                target="_blank"
                rel="noreferrer noopener"
                className="sign-in5-button2 thq-button-outline"
              >
                <svg
                  viewBox="0 0 860.0137142857142 1024"
                  className="sign-in5-icon3"
                >
                  <path d="M438.857 449.143h414.286c4 22.286 6.857 44 6.857 73.143 0 250.286-168 428.571-421.143 428.571-242.857 0-438.857-196-438.857-438.857s196-438.857 438.857-438.857c118.286 0 217.714 43.429 294.286 114.857l-119.429 114.857c-32.571-31.429-89.714-68-174.857-68-149.714 0-272 124-272 277.143s122.286 277.143 272 277.143c173.714 0 238.857-124.571 249.143-189.143h-249.143v-150.857z"></path>
                </svg>
                <span className="thq-body-small">Continue with Google</span>
              </a>
              <button className="sign-in5-button3 thq-button-outline">
                <svg viewBox="0 0 1024 1024" className="sign-in5-icon5">
                  <path d="M854 342v-86l-342 214-342-214v86l342 212zM854 170q34 0 59 26t25 60v512q0 34-25 60t-59 26h-684q-34 0-59-26t-25-60v-512q0-34 25-60t59-26h684z"></path>
                </svg>
                <span className="thq-body-small">Continue with Email</span>
              </button>
            </div>
          </div>
        </div>
        <div className="sign-in5-container5">
          <img
            alt={props.image2Alt}
            src={props.image2Src}
            className="sign-in5-image thq-img-ratio-4-6"
          />
        </div>
      </div>
      <img
        alt={props.image1Alt}
        src={props.image1Src}
        className="sign-in5-sign-up-image thq-img-ratio-16-9"
      />
      <div className="sign-in5-container6"></div>
    </div>
  )
}

SignIn5.defaultProps = {
  heading1: undefined,
  image2Src:
    'https://images.unsplash.com/photo-1565799284935-da1e43e7944e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0NTQyNTk0OXw&ixlib=rb-4.0.3&q=80&w=1080',
  image2Alt: 'Image',
  image1Alt: 'CloudLabs Sign In Image',
  image1Src:
    'https://images.unsplash.com/photo-1523726491678-bf852e717f6a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0NTQyNTk1MHw&ixlib=rb-4.0.3&q=80&w=1080',
}

SignIn5.propTypes = {
  heading1: PropTypes.element,
  image2Src: PropTypes.string,
  image2Alt: PropTypes.string,
  image1Alt: PropTypes.string,
  image1Src: PropTypes.string,
}

export default SignIn5
