import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Navbar8 from '../components/navbar8'
import Hero17 from '../components/hero17'
import Features24 from '../components/features24'
import CTA26 from '../components/cta26'
import Features25 from '../components/features25'
import Steps2 from '../components/steps2'
import Footer4 from '../components/footer4'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Cloud Labs</title>
        <meta property="og:title" content="Cloud Labs" />
      </Helmet>
      <Navbar8
        link1={
          <Fragment>
            <span className="home-text10">Dashboard</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="home-text11">About Us</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="home-text12">Profile</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="home-text13">Logout</span>
          </Fragment>
        }
        page1={
          <Fragment>
            <span className="home-text14">Dashboard</span>
          </Fragment>
        }
        page2={
          <Fragment>
            <span className="home-text15">Launch Lab</span>
          </Fragment>
        }
        page3={
          <Fragment>
            <span className="home-text16">Profile</span>
          </Fragment>
        }
        page4={
          <Fragment>
            <span className="home-text17">Logout</span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="home-text18">Search Labs</span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="home-text19">Help Center</span>
          </Fragment>
        }
        logoSrc="/chatgpt%20image%20apr%2024%2C%202025%2C%2006_36_48%20am-1500h.png"
        link1Url="/login-page"
        link2Url="/about"
        link3Url="#CTA26"
        page1Description={
          <Fragment>
            <span className="home-text20">View and manage your labs</span>
          </Fragment>
        }
        page2Description={
          <Fragment>
            <span className="home-text21">Start a new lab session</span>
          </Fragment>
        }
        page3Description={
          <Fragment>
            <span className="home-text22">Update your profile settings</span>
          </Fragment>
        }
        page4Description={
          <Fragment>
            <span className="home-text23">Sign out of CloudLabs</span>
          </Fragment>
        }
      ></Navbar8>
      <Hero17
        action1={
          <Fragment>
            <span className="home-text24">Get Started</span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="home-text25">Learn More</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text26">
              Practice DevOps, Cloud, and Linux remotely with our cloud-based
              labs powered by Red Hat OpenShift sandboxes. No powerful computer
              required.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text27">Welcome to CloudLabs</span>
          </Fragment>
        }
      ></Hero17>
      <Features24
        feature1Title={
          <Fragment>
            <span className="home-text28">Secure Login</span>
          </Fragment>
        }
        feature2Title={
          <Fragment>
            <span className="home-text29">Cloud-Based Labs</span>
          </Fragment>
        }
        feature3Title={
          <Fragment>
            <span className="home-text30">Red Hat Lab Launching</span>
          </Fragment>
        }
        feature1Description={
          <Fragment>
            <span className="home-text31">
              Firebase Auth integration for secure user login
            </span>
          </Fragment>
        }
        feature2Description={
          <Fragment>
            <span className="home-text32">
              Access a variety of cloud-based labs using free Red Hat OpenShift
              sandboxes
            </span>
          </Fragment>
        }
        feature3Description={
          <Fragment>
            <span className="home-text33">
              Launch Red Hat Labs directly from the dashboard
            </span>
          </Fragment>
        }
      ></Features24>
      <CTA26
        action1={
          <Fragment>
            <span className="home-text34">Sign Up</span>
          </Fragment>
        }
        cTA26Id="CTA26"
        content1={
          <Fragment>
            <span className="home-text35">
              Sign up now to access our cloud-based labs and start practicing
              DevOps, Cloud, and Linux today!
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text36">Ready to level up your skills?</span>
          </Fragment>
        }
      ></CTA26>
      <Features25
        feature1Title={
          <Fragment>
            <span className="home-text37">Cloud-Based Labs</span>
          </Fragment>
        }
        feature2Title={
          <Fragment>
            <span className="home-text38">Remote Practice</span>
          </Fragment>
        }
        feature3Title={
          <Fragment>
            <span className="home-text39">User-Friendly Interface</span>
          </Fragment>
        }
        feature1Description={
          <Fragment>
            <span className="home-text40">
              Access labs on the cloud using Red Hat OpenShift sandboxes.
            </span>
          </Fragment>
        }
        feature2Description={
          <Fragment>
            <span className="home-text41">
              Practice DevOps, Cloud, and Linux remotely from anywhere.
            </span>
          </Fragment>
        }
        feature3Description={
          <Fragment>
            <span className="home-text42">
              Easy-to-use interface for seamless lab launching and management.
            </span>
          </Fragment>
        }
      ></Features25>
      <Steps2
        step1Title={
          <Fragment>
            <span className="home-text43">Sign Up for CloudLabs</span>
          </Fragment>
        }
        step2Title={
          <Fragment>
            <span className="home-text44">Explore Lab Dashboard</span>
          </Fragment>
        }
        step3Title={
          <Fragment>
            <span className="home-text45">Launch Red Hat Lab</span>
          </Fragment>
        }
        step4Title={
          <Fragment>
            <span className="home-text46">Practice and Learn</span>
          </Fragment>
        }
        step1Description={
          <Fragment>
            <span className="home-text47">
              Create an account on CloudLabs using your email address and set a
              secure password.
            </span>
          </Fragment>
        }
        step2Description={
          <Fragment>
            <span className="home-text48">
              Once logged in, navigate to the lab dashboard to discover various
              Red Hat OpenShift labs available for practice.
            </span>
          </Fragment>
        }
        step3Description={
          <Fragment>
            <span className="home-text49">
              Select a Red Hat lab from the dashboard and launch it to start
              practicing DevOps, Cloud, and Linux concepts.
            </span>
          </Fragment>
        }
        step4Description={
          <Fragment>
            <span className="home-text50">
              Follow the instructions within the lab environment, experiment
              with different configurations, and enhance your skills.
            </span>
          </Fragment>
        }
      ></Steps2>
      <Footer4
        link1={
          <Fragment>
            <span className="home-text51">About Us</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="home-text52">Contact Us</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="home-text53">FAQ</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="home-text54">Terms of Service</span>
          </Fragment>
        }
        link5={
          <Fragment>
            <span className="home-text55">Privacy Policy</span>
          </Fragment>
        }
        termsLink={
          <Fragment>
            <span className="home-text56">Terms of Service</span>
          </Fragment>
        }
        cookiesLink={
          <Fragment>
            <span className="home-text57">Cookies Policy</span>
          </Fragment>
        }
        privacyLink={
          <Fragment>
            <span className="home-text58">Privacy Policy</span>
          </Fragment>
        }
      ></Footer4>
    </div>
  )
}

export default Home
