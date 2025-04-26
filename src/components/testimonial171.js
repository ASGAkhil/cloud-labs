import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './testimonial171.css'

const Testimonial171 = (props) => {
  return (
    <div className="thq-section-padding">
      <div className="testimonial171-max-width thq-section-max-width">
        <div className="testimonial171-container10">
          <h2 className="thq-heading-2">
            {props.heading1 ?? (
              <Fragment>
                <span className="testimonial171-text37">Testimonials</span>
              </Fragment>
            )}
          </h2>
          <span className="testimonial171-text11 thq-body-small">
            {props.content1 ?? (
              <Fragment>
                <span className="testimonial171-text27">
                  Using CloudLabs has been a game-changer for me. The hands-on
                  experience I gained through the labs helped me solidify my
                  understanding of DevOps practices.
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
                className="thq-card testimonial171-card1"
              >
                <div className="testimonial171-container12">
                  <img
                    alt={props.author1Alt}
                    src={props.author1Src}
                    className="testimonial171-image1"
                  />
                  <div className="testimonial171-container13">
                    <strong className="thq-body-large">
                      {props.author1Name ?? (
                        <Fragment>
                          <span className="testimonial171-text31">
                            John Doe
                          </span>
                        </Fragment>
                      )}
                    </strong>
                    <span className="thq-body-small">
                      {props.author1Position ?? (
                        <Fragment>
                          <span className="testimonial171-text36">
                            Software Engineer
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
                <span className="testimonial171-text14 thq-body-small">
                  {props.review1 ?? (
                    <Fragment>
                      <span className="testimonial171-text26">
                        I highly recommend CloudLabs to anyone looking to
                        enhance their skills in cloud computing and Linux.
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
                className="thq-card testimonial171-card2"
              >
                <div className="testimonial171-container14">
                  <img
                    alt={props.author2Alt}
                    src={props.author2Src}
                    className="testimonial171-image2"
                  />
                  <div className="testimonial171-container15">
                    <strong className="thq-body-large">
                      {props.author2Name ?? (
                        <Fragment>
                          <span className="testimonial171-text28">
                            Jane Smith
                          </span>
                        </Fragment>
                      )}
                    </strong>
                    <span className="thq-body-small">
                      {props.author2Position ?? (
                        <Fragment>
                          <span className="testimonial171-text35">
                            Systems Administrator
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
                <span className="testimonial171-text17 thq-body-small">
                  {props.review2 ?? (
                    <Fragment>
                      <span className="testimonial171-text30">
                        The Red Hat OpenShift sandboxes provided by CloudLabs
                        are excellent for practicing deployment strategies. I
                        found the platform easy to navigate and very
                        user-friendly.
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
                className="thq-card testimonial171-card3"
              >
                <div className="testimonial171-container16">
                  <img
                    alt={props.author3Alt}
                    src={props.author3Src}
                    className="testimonial171-image3"
                  />
                  <div className="testimonial171-container17">
                    <strong className="thq-body-large">
                      {props.author3Name ?? (
                        <Fragment>
                          <span className="testimonial171-text25">
                            Michael Johnson
                          </span>
                        </Fragment>
                      )}
                    </strong>
                    <span className="thq-body-small">
                      {props.author3Position ?? (
                        <Fragment>
                          <span className="testimonial171-text34">
                            DevOps Specialist
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
                <span className="testimonial171-text20 thq-body-small">
                  {props.review3 ?? (
                    <Fragment>
                      <span className="testimonial171-text24">
                        CloudLabs is a fantastic resource for honing your DevOps
                        skills. The variety of labs available cater to different
                        levels of expertise, making it suitable for beginners
                        and advanced users alike.
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
                className="thq-card testimonial171-card4"
              >
                <div className="testimonial171-container18">
                  <img
                    alt={props.author4Alt}
                    src={props.author4Src}
                    className="testimonial171-image4"
                  />
                  <div className="testimonial171-container19">
                    <strong className="thq-body-large">
                      {props.author4Name ?? (
                        <Fragment>
                          <span className="testimonial171-text29">
                            Sarah Lee
                          </span>
                        </Fragment>
                      )}
                    </strong>
                    <span className="thq-body-small">
                      {props.author4Position ?? (
                        <Fragment>
                          <span className="testimonial171-text32">
                            Cloud Architect
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
                <span className="testimonial171-text23 thq-body-small">
                  {props.review4 ?? (
                    <Fragment>
                      <span className="testimonial171-text33">
                        As a Cloud Architect, I appreciate the convenience of
                        being able to access Red Hat labs remotely. CloudLabs
                        has helped me stay up-to-date with the latest
                        technologies in the cloud industry.
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

Testimonial171.defaultProps = {
  review3: undefined,
  author3Name: undefined,
  review1: undefined,
  content1: undefined,
  author2Name: undefined,
  author2Src:
    'https://images.unsplash.com/photo-1543269664-56d93c1b41a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0NTQyMjMxOHw&ixlib=rb-4.0.3&q=80&w=1080',
  author4Name: undefined,
  review2: undefined,
  author1Name: undefined,
  author4Position: undefined,
  review4: undefined,
  author2Alt: 'Image of Jane Smith',
  author3Alt: 'Image of Michael Johnson',
  author4Alt: 'Image of Sarah Lee',
  author1Alt: 'Image of John Doe',
  author3Src:
    'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0NTQyMjMxOHw&ixlib=rb-4.0.3&q=80&w=1080',
  author3Position: undefined,
  author2Position: undefined,
  author1Src:
    'https://images.unsplash.com/photo-1636041263374-dff82464f619?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0NTQyMjMxN3w&ixlib=rb-4.0.3&q=80&w=1080',
  author1Position: undefined,
  author4Src:
    'https://images.unsplash.com/photo-1615538786254-ad8b50de17dc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0NTQyMjMxN3w&ixlib=rb-4.0.3&q=80&w=1080',
  heading1: undefined,
}

Testimonial171.propTypes = {
  review3: PropTypes.element,
  author3Name: PropTypes.element,
  review1: PropTypes.element,
  content1: PropTypes.element,
  author2Name: PropTypes.element,
  author2Src: PropTypes.string,
  author4Name: PropTypes.element,
  review2: PropTypes.element,
  author1Name: PropTypes.element,
  author4Position: PropTypes.element,
  review4: PropTypes.element,
  author2Alt: PropTypes.string,
  author3Alt: PropTypes.string,
  author4Alt: PropTypes.string,
  author1Alt: PropTypes.string,
  author3Src: PropTypes.string,
  author3Position: PropTypes.element,
  author2Position: PropTypes.element,
  author1Src: PropTypes.string,
  author1Position: PropTypes.element,
  author4Src: PropTypes.string,
  heading1: PropTypes.element,
}

export default Testimonial171
