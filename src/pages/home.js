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
        <section ref={intro}>
        <img  className={introIsVisible ? 'standard-image delay show' : 'standard-image delay hidden'} src={walkingMan} alt="walking-man"></img>
        <div className='text-layout'>
          <h1 className={introIsVisible ? 'delay show' : 'delay hidden'} >Introduction</h1>
          <p className={introIsVisible ? 'delay text show' : 'delay text hidden'}>Welcome to our website dedicated to helping you achieve your fitness and health goals. 
          Our mission is to provide you with the most up-to-date information, latest technologies and mental approaches 
          to ensure that you can stick to your fitness journey long term. We believe that fitness and health is not just 
          about working out, but also about having a balanced lifestyle. That's why we use information from the latest 
          studies and cutting-edge technologies to give you the most accurate and effective advice. We also focus on the 
          mental aspects of fitness, like motivation and discipline, to make sure that you can maintain a healthy 
          lifestyle in the long run. Whether you're just starting out on your fitness journey or looking to take your 
          training to the next level, we have something for everyone. Join us today, and let's achieve your fitness and 
          health goals together.</p>
        </div>
      </section>
      <div ref={bnf}>
        <section className={bnfIsVisible ? 'show' : 'hidden'}>
          <div className='logos'>
            <div className={bnfIsVisible ? 'logo show' : 'logo hidden'}>
            <p1>test1</p1>
            </div>
            <div className={bnfIsVisible ? 'logo show' : 'logo hidden'}>
            <p1>test2</p1>
            </div>
            <div className={bnfIsVisible ? 'logo show' : 'logo hidden'}>
            <p1>test3</p1>
            </div>
          </div>
        </section>
      </div>
      <div ref={ment}>
        <section className={mentIsVisible ? 'show' : 'hidden'}>
          <h1>Mentality</h1>
          <p>The mentality of most is flawed, here you will learn that it doesn't have to be so difficult</p>
        </section>
      </div>
      <div ref={tam}>
        <section className={tamIsVisible ? 'show' : 'hidden'}>
          <h1>Tamura</h1>
          <p>Tamura is the creator of this website, here is a little background information on him</p>
        </section>
      </div>
      <div ref={gl}>
        <section className={glIsVisible ? 'show' : 'hidden'}>
          <h1>Good luck</h1>
          <p>We hope you enjoy this website and get the most out of it!</p>
        </section>
      </div>
    </div>
  )
}

export default Home
