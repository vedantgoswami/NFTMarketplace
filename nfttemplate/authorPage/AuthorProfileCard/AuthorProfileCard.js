import React,{useState} from 'react'
import Image from 'next/image';
import { MdVerified,MdCloudUpload,MdOutlineReportProblem } from 'react-icons/md';
import {FiCopy} from 'react-icons/fi';
import { BsThreeDots } from "react-icons/bs";
import {
  TiSocialFacebook,
  TiSocialLinkedin,
  TiSocialTwitter,
  TiSocialYoutube,
  TiSocialInstagram,
  TiArrowSortedDown,
  TiArrowSortedUp
} from "react-icons/ti";
import Style from './AuthorProfileCard.module.css';
import images from '../../img';
import { Button } from '../../components/componentindex';

const authorProfileCard = () => {
  const [share, setshare] = useState(false);
  const [report, setreport] = useState(false);

  const copyAddress=()=>{
    const copyText = document.getElementById("myInput");
    console.log(copyText);
    // copyText[0].select();
    navigator.clipboard.writeText(copyText.value);
  };
  const openShare=()=>{
    if(!share)
    {
      setshare(true);
      setreport(false);
    }
    else{
      setshare(false);
    }
  }
  const openReport=()=>{
    if(!share)
    {
      setreport(true);
      setshare(false);
    }
    else{
      setreport(false);
    }
  }
  return (
    <div className={Style.AuthorProfileCard}>
        <div className={Style.AuthorProfileCard_box}>
          <div className={Style.AuthorProfileCard_box_img}>
            <Image 
            src={images.nft_image_1} 
            className={Style.AuthorProfileCard_box_img_img}
            width={220}
            height={220 }/>
          </div>
        <div className={Style.AuthorProfileCard_box_info}>
          <h2>
            Dony Herrera{""}{" "} 
            <span>
              <MdVerified/>
            </span>{" "}
          </h2>
          <div className={Style.AuthorProfileCard_box_info_address}>
            <input type="text" value="0x829BD824B092293333..A830"
            id="myInput"/>
            <FiCopy onClick={()=>copyAddress()}
            className={Style.AuthorProfileCard_box_info_address_icon}/>
          </div>
          <p>
            Punk #4786 / An OG Cryptopunk Collector, hoarder of NFTs.
            Contributing to @ether_cards, an NFT Monetization Platform.
          </p>
          <div className={Style.AuthorProfileCard_box_info_social}>
            <a href="#">
              <TiSocialFacebook/>
            </a>
            <a href="#">
              <TiSocialInstagram/>
            </a>
            <a href="#">
              <TiSocialLinkedin/>
            </a>
            <a href="#">
              <TiSocialTwitter/>
            </a>

          </div>
        </div>
        <div className={Style.AuthorProfileCard_box_share}>
          <Button btnName="Follow" handleClick={()=>{}}/>
          <MdCloudUpload onClick={()=>openShare()} 
          className={Style.AuthorProfileCard_box_share_icon}/>
          {share && (
            <div className={Style.AuthorProfileCard_box_share_upload}>
                <p>
                  <span>
                    <TiSocialFacebook/>
                  </span>{" "}
                  {""}
                  Facebook
                </p>
                <p>
                  <span>
                    <TiSocialInstagram/>
                  </span>{" "}
                  {""}
                  Instagram
                </p>
                <p>
                  <span>
                    <TiSocialLinkedin/>
                  </span>{" "}
                  {""}
                  Linkedin
                </p>
                <p>
                  <span>
                    <TiSocialTwitter/>
                  </span>{" "}
                  {""}
                  Twitter
                </p>
            </div>
          )}
          <BsThreeDots onClick={()=>openReport()}
          className={Style.AuthorProfileCard_box_share_icon}/>
          {
            report && (
              <p className={Style.AuthorProfileCard_box_share_report}>
                <span>
                  <MdOutlineReportProblem/>
                </span>{" "}
                {" "}
                Report Abuse
              </p>
            )
          }
        </div>

        </div>
    </div>
  )
}

export default authorProfileCard