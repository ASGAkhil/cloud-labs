import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './testimonial17.css'

const Testimonial17 = (props) => {
  return (
    <div className="thq-section-padding">
      <div className="testimonial17-max-width thq-section-max-width">
        <div className="testimonial17-container10">
          <h2 className="thq-heading-2">
            {props.heading1 ?? (
              <Fragment>
                <span className="testimonial17-text32">Testimonials</span>
              </Fragment>
            )}
          </h2>
          <span className="testimonial17-text11 thq-body-small">
            {props.content1 ?? (
              <Fragment>
                <span className="testimonial17-text37">
                  See what our users have to say about CloudLabs.
                </span>
              </Fragment>
            )}
          </span>
        </div>
        <div className="thq-grid-2">
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div
                data-animated="true"
                className="thq-card testimonial17-card1"
              >
                <div className="testimonial17-container12">
                  <img
                    alt={props.author1Alt}
                    src={props.author1Src}
                    className="testimonial17-image1"
                  />
                  <div className="testimonial17-container13">
                    <strong className="thq-body-large">
                      {props.author1Name ?? (
                        <Fragment>
                          <span className="testimonial17-text29">John Doe</span>
                        </Fragment>
                      )}
                    </strong>
                    <span className="thq-body-small">
                      {props.author1Position ?? (
                        <Fragment>
                          <span className="testimonial17-text33">
                            Software Engineer
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
                <span className="testimonial17-text14 thq-body-small">
                  {props.review1 ?? (
                    <Fragment>
                      <span className="testimonial17-text31">
                        CloudLabs has been an invaluable tool for me to practice
                        DevOps concepts without the need for expensive hardware.
                        Highly recommended!
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div
                data-animated="true"
                className="thq-card testimonial17-card2"
              >
                <div className="testimonial17-container14">
                  <img
                    alt={props.author2Alt}
                    src={props.author2Src}
                    className="testimonial17-image2"
                  />
                  <div className="testimonial17-container15">
                    <strong className="thq-body-large">
                      {props.author2Name ?? (
                        <Fragment>
                          <span className="testimonial17-text24">
                            Jane Smith
                          </span>
                        </Fragment>
                      )}
                    </strong>
                    <span className="thq-body-small">
                      {props.author2Position ?? (
                        <Fragment>
                          <span className="testimonial17-text30">Student</span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
                <span className="testimonial17-text17 thq-body-small">
                  {props.review2 ?? (
                    <Fragment>
                      <span className="testimonial17-text35">
                        As a student with limited resources, CloudLabs has
                        provided me with the opportunity to experiment with
                        cloud technologies in a hassle-free manner.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div
                data-animated="true"
                className="thq-card testimonial17-card3"
              >
                <div className="testimonial17-container16">
                  <img
                    alt={props.author3Alt}
                    src={props.author3Src}
                    className="testimonial17-image3"
                  />
                  <div className="testimonial17-container17">
                    <strong className="thq-body-large">
                      {props.author3Name ?? (
                        <Fragment>
                          <span className="testimonial17-text34">
                            David Johnson
                          </span>
                        </Fragment>
                      )}
                    </strong>
                    <span className="thq-body-small">
                      {props.author3Position ?? (
                        <Fragment>
                          <span className="testimonial17-text27">
                            DevOps Specialist
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
                <span className="testimonial17-text20 thq-body-small">
                  {props.review3 ?? (
                    <Fragment>
                      <span className="testimonial17-text28">
                        I use CloudLabs to quickly spin up Red Hat labs for
                        testing new configurations. It&apos;s a game-changer for
                        my workflow.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div
                data-animated="true"
                className="thq-card testimonial17-card4"
              >
                <div className="testimonial17-container18">
                  <img
                    alt={props.author4Alt}
                    src={props.author4Src}
                    className="testimonial17-image4"
                  />
                  <div className="testimonial17-container19">
                    <strong className="thq-body-large">
                      {props.author4Name ?? (
                        <Fragment>
                          <span className="testimonial17-text26">
                            Sarah Lee
                          </span>
                        </Fragment>
                      )}
                    </strong>
                    <span className="thq-body-small">
                      {props.author4Position ?? (
                        <Fragment>
                          <span className="testimonial17-text36">
                            IT Professional
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
                <span className="testimonial17-text23 thq-body-small">
                  {props.review4 ?? (
                    <Fragment>
                      <span className="testimonial17-text25">
                        CloudLabs has simplified the process of setting up lab
                        environments for my team. It&apos;s user-friendly and
                        efficient.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Testimonial17.defaultProps = {
  author2Name: undefined,
  review4: undefined,
  author4Name: undefined,
  author2Src:
    'https://images.unsplash.com/photo-1529068755536-a5ade0dcb4e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0NTQxOTc2MHw&ixlib=rb-4.0.3&q=80&w=1080',
  author3Src:
    'https://images.unsplash.com/photo-1580489944761-15a19d654956?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0NTQxOTc2MHw&ixlib=rb-4.0.3&q=80&w=1080',
  author3Position: undefined,
  review3: undefined,
  author1Name: undefined,
  author2Position: undefined,
  author2Alt: 'Jane Smith Image',
  author4Alt: 'Sarah Lee Image',
  author1Src:
    'https://images.unsplash.com/photo-1495568995596-9e40959aa178?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0NTQxOTc1OXw&ixlib=rb-4.0.3&q=80&w=1080',
  review1: undefined,
  author4Src:
    'https://images.unsplash.com/photo-1489514427794-bb4f67f45c7e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0NTQxOTc1OXw&ixlib=rb-4.0.3&q=80&w=1080',
  heading1: undefined,
  author3Alt: 'David Johnson Image',
  author1Position: undefined,
  author3Name: undefined,
  review2: undefined,
  author1Alt: 'John Doe Image',
  author4Position: undefined,
  content1: undefined,
}

Testimonial17.propTypes = {
  author2Name: PropTypes.element,
  review4: PropTypes.element,
  author4Name: PropTypes.element,
  author2Src: PropTypes.string,
  author3Src: PropTypes.string,
  author3Position: PropTypes.element,
  review3: PropTypes.element,
  author1Name: PropTypes.element,
  author2Position: PropTypes.element,
  author2Alt: PropTypes.string,
  author4Alt: PropTypes.string,
  author1Src: PropTypes.string,
  review1: PropTypes.element,
  author4Src: PropTypes.string,
  heading1: PropTypes.element,
  author3Alt: PropTypes.string,
  author1Position: PropTypes.element,
  author3Name: PropTypes.element,
  review2: PropTypes.element,
  author1Alt: PropTypes.string,
  author4Position: PropTypes.element,
  content1: PropTypes.element,
}

export default Testimonial17
