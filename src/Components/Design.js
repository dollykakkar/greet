import React from 'react'
import './Design.css'
import gift from './img/giftremove.png'
import balloon from './img/gift.png'
import balloon2 from './img/bgremove.png'
import banner from './img/banner-removebg-preview.png'
import { useState } from 'react'
// import { greetings } from './GreetingList'
const Design = (props) => {

    const [wish, setWish] = useState(props.data[0]);

    const generateRandomQuote = () => {
      const randomIndex = Math.floor(Math.random() * props.data.length);
      setWish (props.data[randomIndex]);
    };

  return (
    <div>
      
      <div className='div1'>
      <img src={banner} className='img5'/>
        <img src={gift} className='img1'/>
        <img src={balloon} className='img2'/>
        <img src={balloon2} className='img3'/>
        <img src={balloon2} className='img4'/>
        
        <p className='wish'>{wish.Wish}</p>
        <p className='lines'>{wish.Lines}</p>
        <p className='create'>{wish.Creator}</p>
      </div>
      <h1>Birthday</h1>
      <h1 className='head'>Wishes</h1>
      <button className='btn1' onClick={generateRandomQuote}>Get more wishes</button>
      <button className='btn2'>Create your own</button>
    </div>
  )
}

export default Design
