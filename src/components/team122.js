import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './team122.css'

const Team122 = (props) => {
  return (
    <div className="thq-section-padding team122-team8">
      <div className="team122-max-width thq-section-max-width">
        <div className="team122-section-title">
          <div className="team122-content10">
            <h2 className="thq-heading-2">
              {props.heading1 ?? (
                <Fragment>
                  <span className="team122-text62">Welcome</span>
                </Fragment>
              )}
            </h2>
          </div>
        </div>
        <div
          data-thq="slider"
          data-loop="true"
          data-autoplay="true"
          data-navigation="true"
          data-pagination="true"
          className="team122-slider1 swiper"
        >
          <div data-thq="slider-wrapper" className="swiper-wrapper">
            <div
              data-thq="slider-slide"
              className="team122-slider-slide1 swiper-slide"
            >
              <div className="team122-card10">
                <img
                  alt={props.member1Alt}
                  src={props.member1Src}
                  className="team122-placeholder-image10 thq-img-round thq-img-ratio-1-1"
                />
                <div className="team122-content11">
                  <div className="team122-title10">
                    <span className="team122-text11 thq-body-small">
                      {props.member1 ?? (
                        <Fragment>
                          <span className="team122-text76">John Doe</span>
                        </Fragment>
                      )}
                    </span>
                    <span className="team122-text12 thq-body-small">
                      {props.member1Job ?? (
                        <Fragment>
                          <span className="team122-text75">
                            CEO &amp; Co-Founder
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <span className="team122-text13 thq-body-small">
                    {props.member1Content ?? (
                      <Fragment>
                        <span className="team122-text70">
                          John is a visionary leader with a passion for
                          technology and innovation.
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
                <div className="team122-social-icons10">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="thq-icon-small"
                  >
                    <path d="M135.429 808h132v-396.571h-132v396.571zM276 289.143c-0.571-38.857-28.571-68.571-73.714-68.571s-74.857 29.714-74.857 68.571c0 37.714 28.571 68.571 73.143 68.571h0.571c46.286 0 74.857-30.857 74.857-68.571zM610.286 808h132v-227.429c0-121.714-65.143-178.286-152-178.286-70.857 0-102.286 39.429-119.429 66.857h1.143v-57.714h-132s1.714 37.143 0 396.571v0h132v-221.714c0-11.429 0.571-23.429 4-32 9.714-23.429 31.429-48 68-48 47.429 0 66.286 36 66.286 89.714v212zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"></path>
                  </svg>
                  <svg
                    viewBox="0 0 950.8571428571428 1024"
                    className="thq-icon-small"
                  >
                    <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                  </svg>
                </div>
              </div>
            </div>
            <div
              data-thq="slider-slide"
              className="team122-slider-slide2 swiper-slide"
            >
              <div className="team122-card11">
                <img
                  alt={props.member3Alt}
                  src={props.member3Src}
                  className="team122-placeholder-image11 thq-img-round thq-img-ratio-1-1"
                />
                <div className="team122-content12">
                  <div className="team122-title11">
                    <span className="team122-text14 thq-body-small">
                      {props.member3 ?? (
                        <Fragment>
                          <span className="team122-text60">Alex Johnson</span>
                        </Fragment>
                      )}
                    </span>
                    <span className="team122-text15 thq-body-small">
                      {props.member3Job ?? (
                        <Fragment>
                          <span className="team122-text80">Lead Developer</span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <span className="team122-text16 thq-body-small">
                    {props.member3Content ?? (
                      <Fragment>
                        <span className="team122-text72">
                          Alex is a coding wizard who brings projects to life
                          with clean code.
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
                <div className="team122-social-icons11">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="thq-icon-small"
                  >
                    <path d="M135.429 808h132v-396.571h-132v396.571zM276 289.143c-0.571-38.857-28.571-68.571-73.714-68.571s-74.857 29.714-74.857 68.571c0 37.714 28.571 68.571 73.143 68.571h0.571c46.286 0 74.857-30.857 74.857-68.571zM610.286 808h132v-227.429c0-121.714-65.143-178.286-152-178.286-70.857 0-102.286 39.429-119.429 66.857h1.143v-57.714h-132s1.714 37.143 0 396.571v0h132v-221.714c0-11.429 0.571-23.429 4-32 9.714-23.429 31.429-48 68-48 47.429 0 66.286 36 66.286 89.714v212zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"></path>
                  </svg>
                  <svg
                    viewBox="0 0 950.8571428571428 1024"
                    className="thq-icon-small"
                  >
                    <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                  </svg>
                </div>
              </div>
              <div className="team122-card12">
                <img
                  alt={props.member4Alt}
                  src={props.member4Src}
                  className="team122-placeholder-image12 thq-img-round thq-img-ratio-1-1"
                />
                <div className="team122-content13">
                  <div className="team122-title12">
                    <span className="team122-text17 thq-body-small">
                      {props.member4 ?? (
                        <Fragment>
                          <span className="team122-text66">Sarah Lee</span>
                        </Fragment>
                      )}
                    </span>
                    <span className="team122-text18 thq-body-small">
                      {props.member4Job ?? (
                        <Fragment>
                          <span className="team122-text71">UX/UI Designer</span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <span className="team122-text19 thq-body-small">
                    {props.member4Content ?? (
                      <Fragment>
                        <span className="team122-text73">
                          Sarah has an eye for design and creates beautiful user
                          experiences.
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
                <div className="team122-social-icons12">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="thq-icon-small"
                  >
                    <path d="M135.429 808h132v-396.571h-132v396.571zM276 289.143c-0.571-38.857-28.571-68.571-73.714-68.571s-74.857 29.714-74.857 68.571c0 37.714 28.571 68.571 73.143 68.571h0.571c46.286 0 74.857-30.857 74.857-68.571zM610.286 808h132v-227.429c0-121.714-65.143-178.286-152-178.286-70.857 0-102.286 39.429-119.429 66.857h1.143v-57.714h-132s1.714 37.143 0 396.571v0h132v-221.714c0-11.429 0.571-23.429 4-32 9.714-23.429 31.429-48 68-48 47.429 0 66.286 36 66.286 89.714v212zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"></path>
                  </svg>
                  <svg
                    viewBox="0 0 950.8571428571428 1024"
                    className="thq-icon-small"
                  >
                    <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                  </svg>
                </div>
              </div>
            </div>
            <div
              data-thq="slider-slide"
              className="team122-slider-slide3 swiper-slide"
            >
              <div className="team122-card13">
                <img
                  alt={props.member5Alt}
                  src={props.member5Src}
                  className="team122-placeholder-image13 thq-img-round thq-img-ratio-1-1"
                />
                <div className="team122-content14">
                  <div className="team122-title13">
                    <span className="team122-text20 thq-body-small">
                      {props.member5 ?? (
                        <Fragment>
                          <span className="team122-text77">Michael Brown</span>
                        </Fragment>
                      )}
                    </span>
                    <span className="team122-text21 thq-body-small">
                      {props.member5Job ?? (
                        <Fragment>
                          <span className="team122-text67">
                            Cloud Architect
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <span className="team122-text22 thq-body-small">
                    {props.member5Content ?? (
                      <Fragment>
                        <span className="team122-text59">
                          Michael specializes in cloud infrastructure and
                          scalable solutions.
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
                <div className="team122-social-icons13">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="thq-icon-small"
                  >
                    <path d="M135.429 808h132v-396.571h-132v396.571zM276 289.143c-0.571-38.857-28.571-68.571-73.714-68.571s-74.857 29.714-74.857 68.571c0 37.714 28.571 68.571 73.143 68.571h0.571c46.286 0 74.857-30.857 74.857-68.571zM610.286 808h132v-227.429c0-121.714-65.143-178.286-152-178.286-70.857 0-102.286 39.429-119.429 66.857h1.143v-57.714h-132s1.714 37.143 0 396.571v0h132v-221.714c0-11.429 0.571-23.429 4-32 9.714-23.429 31.429-48 68-48 47.429 0 66.286 36 66.286 89.714v212zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"></path>
                  </svg>
                  <svg
                    viewBox="0 0 950.8571428571428 1024"
                    className="thq-icon-small"
                  >
                    <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                  </svg>
                </div>
              </div>
              <div className="team122-card14">
                <img
                  alt={props.member6Alt}
                  src={props.member6Src}
                  className="team122-placeholder-image14 thq-img-round thq-img-ratio-1-1"
                />
                <div className="team122-content15">
                  <div className="team122-title14">
                    <span className="team122-text23 thq-body-small">
                      {props.member6 ?? (
                        <Fragment>
                          <span className="team122-text63">Emily Davis</span>
                        </Fragment>
                      )}
                    </span>
                    <span className="team122-text24 thq-body-small">
                      {props.member6Job ?? (
                        <Fragment>
                          <span className="team122-text78">
                            Marketing Manager
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <span className="team122-text25 thq-body-small">
                    {props.member6Content ?? (
                      <Fragment>
                        <span className="team122-text79">
                          Emily is a creative marketer who loves connecting with
                          our community.
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
                <div className="team122-social-icons14">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="thq-icon-small"
                  >
                    <path d="M135.429 808h132v-396.571h-132v396.571zM276 289.143c-0.571-38.857-28.571-68.571-73.714-68.571s-74.857 29.714-74.857 68.571c0 37.714 28.571 68.571 73.143 68.571h0.571c46.286 0 74.857-30.857 74.857-68.571zM610.286 808h132v-227.429c0-121.714-65.143-178.286-152-178.286-70.857 0-102.286 39.429-119.429 66.857h1.143v-57.714h-132s1.714 37.143 0 396.571v0h132v-221.714c0-11.429 0.571-23.429 4-32 9.714-23.429 31.429-48 68-48 47.429 0 66.286 36 66.286 89.714v212zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"></path>
                  </svg>
                  <svg
                    viewBox="0 0 950.8571428571428 1024"
                    className="thq-icon-small"
                  >
                    <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div
            data-thq="slider-pagination"
            className="team122-slider-pagination1 swiper-pagination swiper-pagination-bullets swiper-pagination-horizontal"
          >
            <div
              data-thq="slider-pagination-bullet"
              className="swiper-pagination-bullet swiper-pagination-bullet-active"
            ></div>
            <div
              data-thq="slider-pagination-bullet"
              className="swiper-pagination-bullet"
            ></div>
            <div
              data-thq="slider-pagination-bullet"
              className="swiper-pagination-bullet"
            ></div>
          </div>
          <div
            data-thq="slider-button-prev"
            className="swiper-button-prev"
          ></div>
          <div
            data-thq="slider-button-next"
            className="swiper-button-next"
          ></div>
        </div>
        <div
          data-thq="slider"
          data-navigation="true"
          data-pagination="true"
          className="team122-slider2 swiper"
        >
          <div data-thq="slider-wrapper" className="swiper-wrapper">
            <div
              data-thq="slider-slide"
              className="team122-slider-slide4 swiper-slide"
            >
              <div className="team122-card15">
                <img
                  alt={props.member1Alt}
                  src={props.member1Src}
                  className="team122-placeholder-image15 thq-img-round thq-img-ratio-1-1"
                />
                <div className="team122-content16">
                  <div className="team122-title15">
                    <span className="team122-text26 thq-body-small">
                      <span>Full name</span>
                      {props.member1 ?? (
                        <Fragment>
                          <span className="team122-text76">John Doe</span>
                        </Fragment>
                      )}
                    </span>
                    <span className="team122-text28 thq-body-small">
                      <span>Job title</span>
                      {props.member1Job ?? (
                        <Fragment>
                          <span className="team122-text75">
                            CEO &amp; Co-Founder
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <span className="team122-text30 thq-body-small">
                    <span>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse varius enim in eros elementum tristique.
                    </span>
                    {props.member1Content ?? (
                      <Fragment>
                        <span className="team122-text70">
                          John is a visionary leader with a passion for
                          technology and innovation.
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
                <div className="team122-social-icons15">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="thq-icon-small"
                  >
                    <path d="M135.429 808h132v-396.571h-132v396.571zM276 289.143c-0.571-38.857-28.571-68.571-73.714-68.571s-74.857 29.714-74.857 68.571c0 37.714 28.571 68.571 73.143 68.571h0.571c46.286 0 74.857-30.857 74.857-68.571zM610.286 808h132v-227.429c0-121.714-65.143-178.286-152-178.286-70.857 0-102.286 39.429-119.429 66.857h1.143v-57.714h-132s1.714 37.143 0 396.571v0h132v-221.714c0-11.429 0.571-23.429 4-32 9.714-23.429 31.429-48 68-48 47.429 0 66.286 36 66.286 89.714v212zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"></path>
                  </svg>
                  <svg
                    viewBox="0 0 950.8571428571428 1024"
                    className="thq-icon-small"
                  >
                    <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                  </svg>
                </div>
              </div>
            </div>
            <div
              data-thq="slider-slide"
              className="team122-slider-slide5 swiper-slide"
            >
              <div className="team122-card16">
                <img
                  alt={props.member2Alt}
                  src={props.member2Src}
                  className="team122-placeholder-image16 thq-img-round thq-img-ratio-1-1"
                />
                <div className="team122-content17">
                  <div className="team122-title16">
                    <span className="team122-text32 thq-body-small">
                      Full name
                    </span>
                    <span className="team122-text33 thq-body-small">
                      Job title
                    </span>
                  </div>
                  <span className="team122-text34 thq-body-small">
                    <span>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse varius enim in eros elementum tristique.
                    </span>
                    {props.member2Content ?? (
                      <Fragment>
                        <span className="team122-text69">
                          Jane is a tech guru who loves solving complex problems
                          with elegant solutions.
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
                <div className="team122-social-icons16">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="thq-icon-small"
                  >
                    <path d="M135.429 808h132v-396.571h-132v396.571zM276 289.143c-0.571-38.857-28.571-68.571-73.714-68.571s-74.857 29.714-74.857 68.571c0 37.714 28.571 68.571 73.143 68.571h0.571c46.286 0 74.857-30.857 74.857-68.571zM610.286 808h132v-227.429c0-121.714-65.143-178.286-152-178.286-70.857 0-102.286 39.429-119.429 66.857h1.143v-57.714h-132s1.714 37.143 0 396.571v0h132v-221.714c0-11.429 0.571-23.429 4-32 9.714-23.429 31.429-48 68-48 47.429 0 66.286 36 66.286 89.714v212zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"></path>
                  </svg>
                  <svg
                    viewBox="0 0 950.8571428571428 1024"
                    className="thq-icon-small"
                  >
                    <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                  </svg>
                </div>
              </div>
            </div>
            <div
              data-thq="slider-slide"
              className="team122-slider-slide6 swiper-slide"
            >
              <div className="team122-card17">
                <img
                  alt={props.member3Alt}
                  src={props.member3Src}
                  className="team122-placeholder-image17 thq-img-round thq-img-ratio-1-1"
                />
                <div className="team122-content18">
                  <div className="team122-title17">
                    <span className="team122-text36 thq-body-small">
                      <span>Full name</span>
                      {props.member3 ?? (
                        <Fragment>
                          <span className="team122-text60">Alex Johnson</span>
                        </Fragment>
                      )}
                    </span>
                    <span className="team122-text38 thq-body-small">
                      <span>Job title</span>
                      {props.member3Job ?? (
                        <Fragment>
                          <span className="team122-text80">Lead Developer</span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <span className="team122-text40 thq-body-small">
                    <span>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse varius enim in eros elementum tristique.
                    </span>
                    {props.member3Content ?? (
                      <Fragment>
                        <span className="team122-text72">
                          Alex is a coding wizard who brings projects to life
                          with clean code.
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
                <div className="team122-social-icons17">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="thq-icon-small"
                  >
                    <path d="M135.429 808h132v-396.571h-132v396.571zM276 289.143c-0.571-38.857-28.571-68.571-73.714-68.571s-74.857 29.714-74.857 68.571c0 37.714 28.571 68.571 73.143 68.571h0.571c46.286 0 74.857-30.857 74.857-68.571zM610.286 808h132v-227.429c0-121.714-65.143-178.286-152-178.286-70.857 0-102.286 39.429-119.429 66.857h1.143v-57.714h-132s1.714 37.143 0 396.571v0h132v-221.714c0-11.429 0.571-23.429 4-32 9.714-23.429 31.429-48 68-48 47.429 0 66.286 36 66.286 89.714v212zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"></path>
                  </svg>
                  <svg
                    viewBox="0 0 950.8571428571428 1024"
                    className="thq-icon-small"
                  >
                    <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                  </svg>
                </div>
              </div>
            </div>
            <div
              data-thq="slider-slide"
              className="team122-slider-slide7 swiper-slide"
            >
              <div className="team122-card18">
                <img
                  alt={props.member4Alt}
                  src={props.member4Src}
                  className="team122-placeholder-image18 thq-img-round thq-img-ratio-1-1"
                />
                <div className="team122-content19">
                  <div className="team122-title18">
                    <span className="team122-text42 thq-body-small">
                      <span>Full name</span>
                      {props.member4 ?? (
                        <Fragment>
                          <span className="team122-text66">Sarah Lee</span>
                        </Fragment>
                      )}
                    </span>
                    <span className="team122-text44 thq-body-small">
                      <span>Job title</span>
                      {props.member4Job ?? (
                        <Fragment>
                          <span className="team122-text71">UX/UI Designer</span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <span className="team122-text46 thq-body-small">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in eros elementum tristique.
                  </span>
                </div>
                <div className="team122-social-icons18">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="thq-icon-small"
                  >
                    <path d="M135.429 808h132v-396.571h-132v396.571zM276 289.143c-0.571-38.857-28.571-68.571-73.714-68.571s-74.857 29.714-74.857 68.571c0 37.714 28.571 68.571 73.143 68.571h0.571c46.286 0 74.857-30.857 74.857-68.571zM610.286 808h132v-227.429c0-121.714-65.143-178.286-152-178.286-70.857 0-102.286 39.429-119.429 66.857h1.143v-57.714h-132s1.714 37.143 0 396.571v0h132v-221.714c0-11.429 0.571-23.429 4-32 9.714-23.429 31.429-48 68-48 47.429 0 66.286 36 66.286 89.714v212zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"></path>
                  </svg>
                  <svg
                    viewBox="0 0 950.8571428571428 1024"
                    className="thq-icon-small"
                  >
                    <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                  </svg>
                </div>
              </div>
            </div>
            <div
              data-thq="slider-slide"
              className="team122-slider-slide8 swiper-slide"
            >
              <div className="team122-card19">
                <img
                  alt={props.member5Alt}
                  src={props.member5Src}
                  className="team122-placeholder-image19 thq-img-round thq-img-ratio-1-1"
                />
                <div className="team122-content20">
                  <div className="team122-title19">
                    <span className="team122-text47 thq-body-small">
                      Full name
                    </span>
                    <span className="team122-text48 thq-body-small">
                      Job title
                    </span>
                  </div>
                  <span className="team122-text49 thq-body-small">
                    <span>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse varius enim in eros elementum tristique.
                    </span>
                    {props.member5Content ?? (
                      <Fragment>
                        <span className="team122-text59">
                          Michael specializes in cloud infrastructure and
                          scalable solutions.
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
                <div className="team122-social-icons19">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="thq-icon-small"
                  >
                    <path d="M135.429 808h132v-396.571h-132v396.571zM276 289.143c-0.571-38.857-28.571-68.571-73.714-68.571s-74.857 29.714-74.857 68.571c0 37.714 28.571 68.571 73.143 68.571h0.571c46.286 0 74.857-30.857 74.857-68.571zM610.286 808h132v-227.429c0-121.714-65.143-178.286-152-178.286-70.857 0-102.286 39.429-119.429 66.857h1.143v-57.714h-132s1.714 37.143 0 396.571v0h132v-221.714c0-11.429 0.571-23.429 4-32 9.714-23.429 31.429-48 68-48 47.429 0 66.286 36 66.286 89.714v212zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"></path>
                  </svg>
                  <svg
                    viewBox="0 0 950.8571428571428 1024"
                    className="thq-icon-small"
                  >
                    <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                  </svg>
                </div>
              </div>
            </div>
            <div
              data-thq="slider-slide"
              className="team122-slider-slide9 swiper-slide"
            >
              <div className="team122-card20">
                <img
                  alt={props.member6Alt}
                  src={props.member6Src}
                  className="team122-placeholder-image20 thq-img-round thq-img-ratio-1-1"
                />
                <div className="team122-content21">
                  <div className="team122-title20">
                    <span className="team122-text51 thq-body-small">
                      <span>Full name</span>
                      {props.member6 ?? (
                        <Fragment>
                          <span className="team122-text63">Emily Davis</span>
                        </Fragment>
                      )}
                    </span>
                    <span className="team122-text53 thq-body-small">
                      Job title
                    </span>
                  </div>
                  <span className="team122-text54 thq-body-small">
                    <span>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse varius enim in eros elementum tristique.
                    </span>
                    {props.member6Content ?? (
                      <Fragment>
                        <span className="team122-text79">
                          Emily is a creative marketer who loves connecting with
                          our community.
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
                <div className="team122-social-icons20">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="thq-icon-small"
                  >
                    <path d="M135.429 808h132v-396.571h-132v396.571zM276 289.143c-0.571-38.857-28.571-68.571-73.714-68.571s-74.857 29.714-74.857 68.571c0 37.714 28.571 68.571 73.143 68.571h0.571c46.286 0 74.857-30.857 74.857-68.571zM610.286 808h132v-227.429c0-121.714-65.143-178.286-152-178.286-70.857 0-102.286 39.429-119.429 66.857h1.143v-57.714h-132s1.714 37.143 0 396.571v0h132v-221.714c0-11.429 0.571-23.429 4-32 9.714-23.429 31.429-48 68-48 47.429 0 66.286 36 66.286 89.714v212zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"></path>
                  </svg>
                  <svg
                    viewBox="0 0 950.8571428571428 1024"
                    className="thq-icon-small"
                  >
                    <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div
            data-thq="slider-pagination"
            className="team122-slider-pagination2 swiper-pagination swiper-pagination-bullets swiper-pagination-horizontal"
          >
            <div
              data-thq="slider-pagination-bullet"
              className="swiper-pagination-bullet swiper-pagination-bullet-active"
            ></div>
            <div
              data-thq="slider-pagination-bullet"
              className="swiper-pagination-bullet"
            ></div>
            <div
              data-thq="slider-pagination-bullet"
              className="swiper-pagination-bullet"
            ></div>
            <div
              data-thq="slider-pagination-bullet"
              className="swiper-pagination-bullet"
            ></div>
            <div
              data-thq="slider-pagination-bullet"
              className="swiper-pagination-bullet"
            ></div>
            <div
              data-thq="slider-pagination-bullet"
              className="swiper-pagination-bullet"
            ></div>
          </div>
          <div
            data-thq="slider-button-prev"
            className="swiper-button-prev"
          ></div>
          <div
            data-thq="slider-button-next"
            className="swiper-button-next"
          ></div>
        </div>
        <div className="team122-content22">
          <div className="team122-content23">
            <h2 className="team122-text56 thq-heading-2">
              {props.heading2 ?? (
                <Fragment>
                  <span className="team122-text64">We’re hiring!</span>
                </Fragment>
              )}
            </h2>
            <span className="thq-body-small team122-text57">
              {props.content3 ?? (
                <Fragment>
                  <span className="team122-text65">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </Fragment>
              )}
            </span>
          </div>
          <button className="team122-button thq-button-filled">
            <span className="thq-body-small">
              {props.actionContent ?? (
                <Fragment>
                  <span className="team122-text68">Open positions</span>
                </Fragment>
              )}
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}

Team122.defaultProps = {
  member5Content: undefined,
  member3: undefined,
  member2Job: undefined,
  heading1: undefined,
  member3Alt: 'Image of Alex Johnson',
  member6: undefined,
  member6Alt: 'Image of Emily Davis',
  member5Alt: 'Image of Michael Brown',
  member2Alt: 'Image of Jane Smith',
  heading2: undefined,
  content3: undefined,
  member4: undefined,
  member6Src:
    'https://images.unsplash.com/photo-1527525443983-6e60c75fff46?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0NTQ0OTY4MHw&ixlib=rb-4.0.3&q=80&w=1080',
  member5Job: undefined,
  actionContent: undefined,
  member2Content: undefined,
  member1Alt: 'Image of John Doe',
  member5Src:
    'https://images.unsplash.com/photo-1624561187289-198fc6eee90b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0NTQ0OTY4Mnw&ixlib=rb-4.0.3&q=80&w=1080',
  member1Content: undefined,
  member4Job: undefined,
  member3Content: undefined,
  member2Src:
    'https://images.unsplash.com/photo-1592002414452-3a8cec0e7a79?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0NTQ0OTY4MXw&ixlib=rb-4.0.3&q=80&w=1080',
  member4Content: undefined,
  member2: undefined,
  member4Alt: 'Image of Sarah Lee',
  member1Job: undefined,
  member1: undefined,
  member5: undefined,
  member6Job: undefined,
  member3Src:
    'https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0NTQ0OTY4MXw&ixlib=rb-4.0.3&q=80&w=1080',
  member6Content: undefined,
  member1Src:
    'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0NTQ0OTY4MXw&ixlib=rb-4.0.3&q=80&w=1080',
  member4Src:
    'https://images.unsplash.com/photo-1549068106-b024baf5062d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0NTQ0OTY4Mnw&ixlib=rb-4.0.3&q=80&w=1080',
  member3Job: undefined,
}

Team122.propTypes = {
  member5Content: PropTypes.element,
  member3: PropTypes.element,
  member2Job: PropTypes.element,
  heading1: PropTypes.element,
  member3Alt: PropTypes.string,
  member6: PropTypes.element,
  member6Alt: PropTypes.string,
  member5Alt: PropTypes.string,
  member2Alt: PropTypes.string,
  heading2: PropTypes.element,
  content3: PropTypes.element,
  member4: PropTypes.element,
  member6Src: PropTypes.string,
  member5Job: PropTypes.element,
  actionContent: PropTypes.element,
  member2Content: PropTypes.element,
  member1Alt: PropTypes.string,
  member5Src: PropTypes.string,
  member1Content: PropTypes.element,
  member4Job: PropTypes.element,
  member3Content: PropTypes.element,
  member2Src: PropTypes.string,
  member4Content: PropTypes.element,
  member2: PropTypes.element,
  member4Alt: PropTypes.string,
  member1Job: PropTypes.element,
  member1: PropTypes.element,
  member5: PropTypes.element,
  member6Job: PropTypes.element,
  member3Src: PropTypes.string,
  member6Content: PropTypes.element,
  member1Src: PropTypes.string,
  member4Src: PropTypes.string,
  member3Job: PropTypes.element,
}

export default Team122
