import React from 'react'
import Style from "../styles/searchPage.module.css";
import {Slider,Brand} from '../components/componentindex';
import {SearchBar} from '../SearchPage/SearchPageIndex'
import {Filter} from '../components/componentindex';
import {NFTCardTwo,Banner} from '../collectionPage/collectionIndex';
import images from '../img'
const searchPage = () => {
  const collectionArray=[
    images.nft_image_1,
    images.nft_image_2,
    images.nft_image_3,
    images.nft_image_1,
    images.nft_image_2,
    images.nft_image_3,
    images.nft_image_1,
    images.nft_image_2
  ]
  return (
    <div className={Style.searchPage}>
        <Banner bannerImage={images.creatorbackground3}/>
        <Filter/>
        <NFTCardTwo NFTData={collectionArray}/>
        <SearchBar/>
        <Slider/>
        <Brand/>
    </div>
  )
}

export default searchPage;