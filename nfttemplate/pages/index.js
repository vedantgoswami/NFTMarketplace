import React from 'react'
import Style from '../styles/index.module.css';
// import earn from "./earn.png";

import { 
  Title,
  HeroSection,
  Service,
  BigNFTSlider,
  Subscribe,
Category,
Filter,
NFTCard,
Collection,FollowerTab,
Audio,Slider,
Brand,
Video} from '../components/componentindex';
const Home = () => {
  return (
    <div className={Style.homePage}>
      <HeroSection/>
      <Service/>
      <BigNFTSlider/>
      <Title 
        heading="Latest Audio Collection"
        paragraph="Discover the most outstanding NFTs in all topics of life."
        />
      <Audio/>
      <Title 
        heading="New Collection"
        paragraph="Discover the most outstanding NFTs in all topics of life."
        />
        <FollowerTab/>
        {/* <Title 
        heading="Explore NFTs Video"
        paragraph="Click on play icon and enjoy NFTs video."
        /> */}
        <Slider />
        <Title 
        heading="Featured NFTs"
        paragraph="Discover the most outstanding NFTs in all topics of life."
        />
      <Filter/>
      <Collection/>
      
      <NFTCard/>
      <Title 
        heading="Browse by category"
        paragraph="Explore the NFTs in the most featured categories."
        />
      <Category/>
      <Subscribe/>  
      <Brand/>
      <Video/>
    </div>
  )
}

export default Home;
