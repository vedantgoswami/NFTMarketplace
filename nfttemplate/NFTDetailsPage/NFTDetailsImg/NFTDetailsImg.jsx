import React,{useState,useEffect} from 'react'
import Style from './NFTDetailsImg.module.css'
import { BsImage } from 'react-icons/bs'
import Image from 'next/image'
import { AiFillHeart,AiOutlineHeart } from 'react-icons/ai'
import { TiArrowSortedDown, TiArrowSortedUp } from 'react-icons/ti'
import images from '../../img';
const NFTDetailsImg = () => {
  const [description, setdescription] = useState(true);
  const [details, setdetails] = useState(true);
  const [like, setlike] = useState(false);
  const openDescription=()=>{
    if(!description){
      setdescription(true);
    }
    else
    setdescription(false);
  }
  const openDetails=()=>{
    if(!details){
      setdetails(true);
    }
    else{
      setdetails(false);
    }
  };
  const likeNFT = ( )=>{
    if(!like){
      setlike(true);
    }
    else{
      setlike(false);
    }
  }
  return (
    <div className={Style.NFTDetailsImg}>
       <div className={Style.NFTDetailsImg_box}>
          <div className={Style.NFTDetailsImg_box_NFT}>
            <div className={Style.NFTDetailsImg_box_NFT_like}>
              <BsImage className={Style.NFTDetailsImg_box_NFT_like_icon}/>
              <p onClick={()=>likeNFT()}>
                {
                  like?
                  (
                    <AiOutlineHeart className={Style.NFTDetailsImg_box_NFT_like_icon}/>
                  ):(
                    <AiFillHeart className={Style.NFTDetailsImg_box_NFT_like_icon}/>
                  )
                }
                <span>23</span>
              </p>  
            </div>
            <div className={Style.NFTDetailsImg_box_NFT_img}>
              <Image
              src={images.nft_image_1}
              className={Style.NFTDetailsImg_box_NFT_img_img}
              alt="NFT image"
              width={700}
              height={800}
              objectFit='cover'
              />
            </div>
          </div>
          <div className={Style.NFTDetailsImg_box_description}
          onClick={()=>openDescription()}>
            <p>Description</p>
            {description?<TiArrowSortedUp/>:<TiArrowSortedDown/>}
          </div>
          {
            description && (
              <div className={Style.NFTDetailsImg_box_description}>
                <p>
                  Tattooed Kitty Gang("TKG") 
                </p>
              </div>
            )
          }
          <div className={Style.NFTDetailsImg_box_details} 
            onClick={()=>openDetails()}
          >
            <p>Details</p>
            {details?<TiArrowSortedUp/>:<TiArrowSortedDown/>}
          </div>
          {
            details && (
            <div className={Style.NFTDetailsImg_box_details_box}>
            <small>2000 x 2000px. Image(685KB)</small>
            <p>
              <small>Contract Address</small>
              <br />
              0x0f3bBcBf35894Cd3cf235e95c5fE1e776087cA63
           </p>
           <p>
            <small>Token ID</small>
            1003300256

           </p>
          </div>
            )
          }
          
       </div>
    </div>
  )
}

export default NFTDetailsImg
