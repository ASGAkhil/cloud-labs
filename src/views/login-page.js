import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import Banner1 from '../components/banner1'
import SignIn5 from '../components/sign-in5'
import Footer41 from '../components/footer41'
import './login-page.css'

const LoginPage = (props) => {
  return (
    <div className="login-page-container1">
      <Helmet>
        <title>LoginPage - Cloud Labs</title>
        <meta property="og:title" content="LoginPage - Cloud Labs" />
      </Helmet>
      <Link to="/" className="login-page-navlink">
        <Banner1
          action1={
            <Fragment>
              <span className="login-page-text10">Get Started</span>
            </Fragment>
          }
          content1={
            <Fragment>
              <span className="login-page-text11">
                Access cloud-based labs powered by Red Hat OpenShift sandboxes
                to enhance your skills remotely.
              </span>
            </Fragment>
          }
          heading1={
            <Fragment>
              <span className="login-page-text12">
                Practice DevOps, Cloud, and Linux Concepts with CloudLabs
              </span>
            </Fragment>
          }
          className="login-page-component1"
        ></Banner1>
      </Link>
      <SignIn5
        heading1={
          <Fragment>
            <span className="login-page-text13">Sign In to CloudLabs</span>
          </Fragment>
        }
      ></SignIn5>
      <div>
        <div className="login-page-container3">
          <Script
            html={`<script>
              (function(){
  // Google Login
  function loginWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider)
      .then((result) => {
        alert("Logged in as: " + result.user.displayName);
        // window.location.href = "/dashboard.html"; // Redirect if needed
      })
      .catch((error) => {
        alert("Login failed: " + error.message);
      });
  }

  // Facebook Login
  function loginWithFacebook() {
    const provider = new firebase.auth.FacebookAuthProvider();
    firebase.auth().signInWithPopup(provider)
      .then((result) => {
        alert("Welcome " + result.user.displayName);
      })
      .catch((error) => {
        alert("Facebook login error: " + error.message);
      });
  }

  // Email Login (Simple version)
  function loginWithEmail() {
    const email = prompt("Enter your email:");
    const password = prompt("Enter your password:");
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((result) => {
        alert("Logged in: " + result.user.email);
      })
      .catch((error) => {
        alert("Email login failed: " + error.message);
      });
  }
})()
              </script>`}
          ></Script>
        </div>
      </div>
      <Footer41
        link1={
          <Fragment>
            <span className="login-page-text14">About Us</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="login-page-text15">Contact Us</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="login-page-text16">FAQs</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="login-page-text17">Support</span>
          </Fragment>
        }
        link5={
          <Fragment>
            <span className="login-page-text18">Blog</span>
          </Fragment>
        }
        termsLink={
          <Fragment>
            <span className="login-page-text19">Terms of Service</span>
          </Fragment>
        }
        cookiesLink={
          <Fragment>
            <span className="login-page-text20">Cookies Policy</span>
          </Fragment>
        }
        privacyLink={
          <Fragment>
            <span className="login-page-text21">Privacy Policy</span>
          </Fragment>
        }
      ></Footer41>
    </div>
  )
}

export default LoginPage
