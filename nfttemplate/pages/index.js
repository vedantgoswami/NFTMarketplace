import React from 'react'
import Style from '../styles/index.module.css';
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
Audio,Slider} from '../components/componentindex';
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
        <Title 
        heading="Explore NFTs Video"
        paragraph="Click on play icon and enjoy NFTs video."
        />
        <Slider />
      <Collection/>
      <Title 
        heading="Featured NFTs"
        paragraph="Discover the most outstanding NFTs in all topics of life."
        />
      <Filter/>
      <NFTCard/>
      <Title 
        heading="Browse by category"
        paragraph="Explore the NFTs in the most featured categories."
        />
      <Category/>
      <Subscribe/>  
    </div>
  )
}

export default Home;
