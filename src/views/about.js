import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Hero8 from '../components/hero8'
import Stats2 from '../components/stats2'
import Features1 from '../components/features1'
import Contact52 from '../components/contact52'
import Footer4 from '../components/footer4'
import './about.css'

const About = (props) => {
  return (
    <div className="about-container">
      <Helmet>
        <title>About - Cloud Labs</title>
        <meta property="og:title" content="About - Cloud Labs" />
      </Helmet>
      <Hero8
        action1={
          <Fragment>
            <span className="about-text10">Learn More</span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="about-text11">Get Started</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="about-text12">
              Practice DevOps, Cloud, and Linux concepts with ease
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="about-text13">Welcome to CloudLabs</span>
          </Fragment>
        }
        image1Src="https://images.unsplash.com/photo-1506399558188-acca6f8cbf41?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDEyfHxzdXBlcmNvbXB1dGVyfGVufDB8fHx8MTc0NTQ0MDY0Mnww&amp;ixlib=rb-4.0.3&amp;w=1500"
      ></Hero8>
      <Stats2
        stat1={
          <Fragment>
            <span className="about-text14">100+</span>
          </Fragment>
        }
        stat2={
          <Fragment>
            <span className="about-text15">95%</span>
          </Fragment>
        }
        stat3={
          <Fragment>
            <span className="about-text16">24/7</span>
          </Fragment>
        }
        stat4={
          <Fragment>
            <span className="about-text17">5000+</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="about-text18">
              Users can access a wide range of labs covering various topics in
              DevOps, Cloud, and Linux.
            </span>
          </Fragment>
        }
        content2={
          <Fragment>
            <span className="about-text19">
              Practice hands-on exercises remotely with ease and convenience.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="about-text20">CloudLabs Statistics</span>
          </Fragment>
        }
        image1Src="/chatgpt%20image%20apr%2024%2C%202025%2C%2006_36_48%20am-1400w.png"
        stat1Description={
          <Fragment>
            <span className="about-text21">Cloud-based labs available</span>
          </Fragment>
        }
        stat2Description={
          <Fragment>
            <span className="about-text22">User satisfaction rate</span>
          </Fragment>
        }
        stat3Description={
          <Fragment>
            <span className="about-text23">
              Access to labs anytime, anywhere
            </span>
          </Fragment>
        }
        stat4Description={
          <Fragment>
            <span className="about-text24">
              Happy users benefiting from CloudLabs
            </span>
          </Fragment>
        }
      ></Stats2>
      <Features1
        slogan={
          <Fragment>
            <span className="about-text25">
              Empowering hands-on learning in the cloud
            </span>
          </Fragment>
        }
        mainAction={
          <Fragment>
            <span className="about-text26">
              Launch and manage cloud-based labs remotely
            </span>
          </Fragment>
        }
        sectionTitle={
          <Fragment>
            <span className="about-text27">Key Features</span>
          </Fragment>
        }
        feature1Title={
          <Fragment>
            <span className="about-text28">Red Hat OpenShift Sandboxes</span>
          </Fragment>
        }
        feature2Title={
          <Fragment>
            <span className="about-text29">
              Secure Firebase Auth Integration
            </span>
          </Fragment>
        }
        feature3Title={
          <Fragment>
            <span className="about-text30">Testimonials Showcase</span>
          </Fragment>
        }
        secondaryAction={
          <Fragment>
            <span className="about-text31">
              Practice various labs using a user-friendly interface
            </span>
          </Fragment>
        }
        feature1ImageSrc="https://images.unsplash.com/photo-1466992133056-ae8de8e22809?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDI1fHxyZWQlMjBjYXB8ZW58MHx8fHwxNzQ1NDUwODc4fDA&amp;ixlib=rb-4.0.3&amp;w=1500"
        sectionDescription={
          <Fragment>
            <span className="about-text32">
              Explore the key features that make CloudLabs the ultimate platform
              for practicing DevOps, Cloud, and Linux concepts.
            </span>
          </Fragment>
        }
        feature1Description={
          <Fragment>
            <span className="about-text33">
              Access Red Hat OpenShift sandboxes to practice and experiment with
              real-world scenarios.
            </span>
          </Fragment>
        }
        feature2Description={
          <Fragment>
            <span className="about-text34">
              Enjoy secure login and authentication with Firebase Auth
              integration for a seamless user experience.
            </span>
          </Fragment>
        }
        feature3Description={
          <Fragment>
            <span className="about-text35">
              Read testimonials from users who have benefited from CloudLabs in
              their learning and work experiences.
            </span>
          </Fragment>
        }
      ></Features1>
      <Contact52
        address1={
          <Fragment>
            <span className="about-text36">H1297 Avas Vikas 1 Kanpur </span>
          </Fragment>
        }
        email={
          <Fragment>
            <span className="about-text37">akhil@cloudlabs.com</span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="about-text38">Co-Founder</span>
          </Fragment>
        }
        content2={
          <Fragment>
            <span className="about-text39">
              For any inquiries or support, feel free to reach out to us.
            </span>
          </Fragment>
        }
        content5={
          <Fragment>
            <span className="about-text40">
              We aim to respond to all messages within 24 hours.
            </span>
          </Fragment>
        }
        content3={
          <Fragment>
            <span className="about-text41">
              You can also connect with us on social media.
            </span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="about-text42">
              Have questions or need assistance? Drop us a message!
            </span>
          </Fragment>
        }
        phone1={
          <Fragment>
            <span className="about-text43">+91 9918517398</span>
          </Fragment>
        }
        imageSrc="/4ed0f653-6c41-40f4-a56c-b0fb2791251c-800w.png"
      ></Contact52>
      <Footer4
        link1={
          <Fragment>
            <span className="about-text44">About Us</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="about-text45">Contact Us</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="about-text46">FAQ</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="about-text47">Terms of Service</span>
          </Fragment>
        }
        link5={
          <Fragment>
            <span className="about-text48">Privacy Policy</span>
          </Fragment>
        }
        termsLink={
          <Fragment>
            <span className="about-text49">Terms of Service</span>
          </Fragment>
        }
        cookiesLink={
          <Fragment>
            <span className="about-text50">Cookies Policy</span>
          </Fragment>
        }
        privacyLink={
          <Fragment>
            <span className="about-text51">Privacy Policy</span>
          </Fragment>
        }
      ></Footer4>
    </div>
  )
}

export default About
