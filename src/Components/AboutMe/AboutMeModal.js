import { Fragment } from "react";

import styles from "./AboutMeModal.module.css";
import picture from "../../Static/fitz.jpg"

const Backdrop = (props) => {
  return <div className={styles.backdrop} onClick={props.onClose} />;
};

const ModalOverlay = (props) => {
  return (
    <div className={styles.modal}>
      <h3>Personal History</h3>
        <p>Born and raised in Arizona, I grew up with two of the most wonderful parents and a sister that I can always rely on, and she can rely on me in turn. I am extremely grateful to have my family there to laugh with me in the best of times, and to pick me up in the worst of times. Having lived in Arizona all my life, 28 years, has given me a unique perspective on it and how times have changed. I can remember a time when it actually snowed in the winter in the valley!</p>
        <img src={picture} alt="My dog Fitz" align="left" hspace="50" vspace="50"></img>
      <h3>Professional History</h3>
        <p>When I made my way through high school, I’ve always heard “Figure out what you want to do in life.” I.E. To find a career you want to work at every day. It took me a while to find this, as in the past I’ve wanted to be a veterinarian, a pharmacist, and a writer among other things. Through trial and error, I found that I didn’t want to devote myself to these particular professions, but I value the experiences gained in exploring them. It was only when I realized that I’ve been doing what I wanted to do in life all along; work with computers!</p>
        <h4>University</h4>
          <p>After going to community college to save a few bucks on core classes, I actually took a semester up in Flagstaff at NAU. I knew I wanted to work with computers, but I was still exploring what I wanted to do with them. At the time, I took some more core classes, and some initial computer design and management courses. Transferring from NAU to ASU and going to their beautiful polytechnic campus, I homed in on a degree in Information Technology, where I learned a variety of technical skills including Networking, Big Data, Web Development and Design, and Network Security. Even though I found interest in them all, the two areas that really caught my eye were Data and Web Dev.</p>
        <h4>Capstone Project</h4>
          <p>During my last year in university, the course had to take a year-long project known as our ‘Capstone’ project. It could have been a variety of things, but my team and I decided on a Web application. It was a four man team, each made up of different roles using Agile methodology. This was when I knew I loved to make web apps! </p>
        <h4>Mindbody</h4>
          <p>Straight out of college, I got a job at Mindbody as a Data Specialist which involved one out of my two passions for data. I never got tired of processing, uploading, and analyzing data, and each day was new and exciting. Unfortunately, due to the Covid-19 pandemic hitting the industry hard, I was laid off. Though I see this as a chance to experience new careers and people!</p>
        <h4>Nowadays</h4>
          <p>During and after the pandemic, I’ve been taking various courses of interest, mostly through a great website recommended to me called Udemy. I’ve taken a course on Django, a python based web framework that involves both the front-end and back-end, and am currently taking a complete course on React, a javascript framework that makes building websites faster and more responsive. In fact, this portfolio website is built completely using React and CSS!</p>
      <h3>Hobbies</h3>
        <p>In the scorching Arizona heat, I can safely say that I prefer to spend my time indoors! I’ve always loved being on the computer, whether it's to play video games or work on projects and browse the internet. I also have a corgi who loves to play, pictured above is when he was a puppy. Otherwise, when we have time (and aren’t in a pandemic), I love to travel with my girlfriend. I have to also mention my passion for writing, and I’m working (slowly) on a novel that I’ve been plotting for many years now. </p>
      <button className={styles.button} onClick={props.onClose}>OK</button>
    </div>
  );
};

const AboutMeModal = (props) => {
  return (
    <Fragment>
        <Backdrop onClose={props.onClose}/>
        <ModalOverlay onClose={props.onClose}/>
    </Fragment>
  );
};

export default AboutMeModal;
