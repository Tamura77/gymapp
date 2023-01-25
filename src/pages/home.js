import {React, useState} from 'react'
import {useInView} from 'react-intersection-observer'
import "./css/home.css"

//icons
import {FaWeight} from 'react-icons/fa'
import {FaHeartbeat} from 'react-icons/fa'
import {MdHealing} from 'react-icons/md'
import {FaBed} from 'react-icons/fa'
import {MdLocalPharmacy} from 'react-icons/md'
import {FaHourglassHalf} from 'react-icons/fa'

//Images
import walkingMan from "../img/walking-man.jpg"
import weight from "../img/weight.jpg"
import cardio from "../img/cardio.jpg"
import immune from "../img/immune.jpg"
import sleep from "../img/sleep.jpg"
import disease from "../img/disease.jpg"
import oldman from "../img/oldman.jpg"

function Home() {

const [img, setImg] =useState(walkingMan);

const imgWeight = () => {
  setImg(weight);
}
const imgCardio = () => {
  setImg(cardio);
}
const imgImmune = () => {
  setImg(immune);
}
const imgSleep = () => {
  setImg(sleep);
}
const imgDisease = () => {
  setImg(disease);
}
const imgOldman = () => {
  setImg(oldman);
}
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
        <section ref = {bnf} className="bnf">
          <div className='bnf-div-left'>
              <p className='bnf-vert'>Benefits</p>
          </div>
          <div className='bnf-div-mid'>
            <div className='bnf-flex'>
              <FaWeight className={bnfIsVisible ? 'show bnf-icon' : 'hidden bnf-icon'} onClick={imgWeight}/>
              <p className='bnf-text'>Weight management: A healthy lifestyle can help you maintain a healthy weight, reduce your risk of obesity and associated health problems, such as diabetes and heart disease.</p>
            </div>
            <div className='bnf-flex'>
              <FaHeartbeat className={bnfIsVisible ? 'show bnf-icon' : 'hidden bnf-icon'} onClick={imgCardio}/>
              <p className='bnf-text'>Improved cardiovascular health: Eating a healthy diet, getting regular exercise and avoiding smoking can all help improve your heart health and reduce your risk of heart disease.</p>
            </div>
            <div className='bnf-flex'>
              <MdHealing className={bnfIsVisible ? 'show bnf-icon' : 'hidden bnf-icon'} onClick={imgImmune}/>
              <p className='bnf-text'>Stronger immune system: Eating a balanced diet and getting regular exercise can help boost your immune system, making you less susceptible to illnesses and infections.</p>
            </div>
            <div className='bnf-flex'>
              <FaBed className={bnfIsVisible ? 'show bnf-icon' : 'hidden bnf-icon'} onClick={imgSleep}/>
              <p className='bnf-text'>Better sleep: Regular exercise and a healthy diet can help improve the quality of your sleep, so you can wake up feeling more refreshed and energized.</p>
            </div>
            <div className='bnf-flex'>
              <MdLocalPharmacy className={bnfIsVisible ? 'show bnf-icon' : 'hidden bnf-icon'} onClick={imgDisease}/>
              <p className='bnf-text'>Reduced risk of chronic diseases: Eating a healthy diet, getting regular exercise, avoiding smoking and limiting alcohol intake can all help reduce your risk of developing chronic diseases such as cancer, diabetes, and heart disease.</p>
            </div>
            <div className='bnf-flex'>
              <FaHourglassHalf className={bnfIsVisible ? 'show bnf-icon' : 'hidden bnf-icon'} onClick={imgOldman}/>
              <p className='bnf-text'>Increased lifespan: Living a healthy lifestyle can help increase the length of your life and reduce the risk of premature death.</p>
            </div>
          </div>
          <div className='bnf-div-right'>
            <img src={img} className="bnf-img" alt="benefits.img"></img>
          </div>
        </section>
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
