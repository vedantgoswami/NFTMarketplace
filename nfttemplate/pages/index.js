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
NFTCard} from '../components/componentindex';
const Home = () => {
  return (
    <div className={Style.homePage}>
      <HeroSection/>
      <Service/>
      <BigNFTSlider/>
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
