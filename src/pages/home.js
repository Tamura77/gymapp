import {React} from 'react'
import {useInView} from 'react-intersection-observer'
import "./css/home.css"

//Images
import walkingMan from "../img/walking-man.jpg"


function Home() {

const {ref: intro, inView: introIsVisible} = useInView({threshold: 0.5,});
const {ref: bnf, inView: bnfIsVisible} = useInView({threshold: 0.5,});
const {ref: ment, inView: mentIsVisible} = useInView({threshold: 0.5,});
const {ref: tam, inView: tamIsVisible} = useInView({threshold: 0.5,});
const {ref: gl, inView: glIsVisible} = useInView({threshold: 0.5,});

  return (
    <div>
      <div ref={intro}> 
      <section  className={introIsVisible ? 'show' : 'hidden'}>
      <img  className="standard-image" src={walkingMan}></img>
        <h1 >Introduction</h1>
        <p1 className="text">Welcome to our website dedicated to helping you achieve your fitness and health goals. 
        Our mission is to provide you with the most up-to-date information, latest technologies and mental approaches 
        to ensure that you can stick to your fitness journey long term. We believe that fitness and health is not just 
        about working out, but also about having a balanced lifestyle. That's why we use information from the latest 
        studies and cutting-edge technologies to give you the most accurate and effective advice. We also focus on the 
        mental aspects of fitness, like motivation and discipline, to make sure that you can maintain a healthy 
        lifestyle in the long run. Whether you're just starting out on your fitness journey or looking to take your 
        training to the next level, we have something for everyone. Join us today, and let's achieve your fitness and 
        health goals together.</p1>
      </section>
      </div>
      <div ref={bnf}>
        <section className={bnfIsVisible ? 'show' : 'hidden'}>
          <h1>Benefits</h1>
          <p1>There are many benefits to working out and living a healthy lifestyle</p1>
        </section>
      </div>
      <div ref={ment}>
        <section className={mentIsVisible ? 'show' : 'hidden'}>
          <h1>Mentality</h1>
          <p1>The mentality of most is flawed, here you will learn that it doesn't have to be so difficult</p1>
        </section>
      </div>
      <div ref={tam}>
        <section className={tamIsVisible ? 'show' : 'hidden'}>
          <h1>Tamura</h1>
          <p1>Tamura is the creator of this website, here is a little background information on him</p1>
        </section>
      </div>
      <div ref={gl}>
        <section className={glIsVisible ? 'show' : 'hidden'}>
          <h1>Good luck</h1>
          <p1>We hope you enjoy this website and get the most out of it!</p1>
        </section>
      </div>
    </div>
  )
}

export default Home
