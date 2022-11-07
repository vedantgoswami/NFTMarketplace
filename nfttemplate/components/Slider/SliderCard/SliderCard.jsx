import React from 'react'
import Style from './SliderCard.module.css';
import images from "../../../img"
import LikeProfile from '../../LikeProfile/LikeProfile';
import {motion} from 'framer-motion'
import Image from 'next/image';
const SliderCard = ({el,i}) => {
  return (
    // <div>slidercard</div>
    <motion.div className={Style.sliderCard}>
      <div className={Style.sliderCard_box}>
        <motion.div className={Style.sliderCard_box_img}>
            <Image
            src={el.background}
            alt="slider profile"
            width={500}
            height={300}
            className={Style.sliderCard_box_img_img}
            objectFit="cover"/>
        </motion.div>
        <div className={Style.sliderCard_box_title}>
            <p>NFT Video #1234</p>
            <div className={Style.sliderCard_box_title_like}>
              {/* <LikeProfile/> */}
              <small>1 of 100</small>
            </div>
        </div>
        <div className={Style.sliderCard_box_price}>
            <div className={Style.sliderCard_box_price_box}>
              <small>Current Bid</small>
              <p>1.000ETH</p>
            </div>
            <div className={Style.sliderCard_box_price_time}>
              <small>Remaining Time</small>
              <p>3h : 15m : 20s </p>
            </div>
        </div>
      </div>
      </motion.div>
    
  );
};

export default SliderCard;