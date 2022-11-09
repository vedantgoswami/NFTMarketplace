import React from 'react'
import Style from './NFTDescription.module.css'
import Image from 'next/image';
import {
    MdVerified,
    MdCloudUpload,
    MdTimer,
    MdReportProblem,
    MdOutlineDeleteSweep
} from "react-icons/md";
import { BsThreeDots } from 'react-icons/bs';
import { FaWallet,FaPercentage } from 'react-icons/fa';
import {
    TiSocialFacebook,
    TiSocialLinkedin,
    TiSocialTwitter,
    TiSocialYoutube,
    TiSocialInstagram,
  
  } from "react-icons/ti";
import {BiTransfer,BiDollar, BiTransferAlt} from 'react-icons/bi'
import images from '../../img';
import { Button } from '../../components/componentindex';
import { NFTTabs } from '../NFTDetailsIndex';

const NFTDescription = () => {
  const [social, setSocial] = useState(false);
  const [NFTMenu, setNFTMenu] = useState(false);

    return (
    <div className={Style.NFTDescription}>
        <div className={Style.NFTDescription_box}>
            <div className={Style.NFTDescription_box_share}>
                <p>Virtual Worlds</p>
                <div className={Style.NFTDescription_box_share_box}>
                    <MdCloudUpload className={Style.NFTDescription_box_share_box_icon}
                    onClick={()=>openSocial()}/>
                    {
                        social && (
                            <div className={Style.NFTDescription_box_share_box_social}>
                                <a href="#">
                                    <TiSocialFacebook/> Facebook
                                </a>
                                <a href="#">
                                    <TiSocialInstagram/> Instagram
                                </a>
                                <a href="#">
                                    <TiSocialTwitter/> Twitter
                                </a>
                                <a href="#">
                                    <TiSocialLinkedin/> LinkedIn
                                </a>
                                <a href="#">
                                    <TiSocialFacebook/> Facebook
                                </a>

                            </div>
                        )
                    }
                    <BsThreeDots className={Style.NFTDescription_box_share_box_icon}
                    onClick={()=>openNFTMenu()}/>
                    {
                        NFTMenu && 
                        (
                            <div className={Style.NFTDescription_box_share_box_social}>
                                <a href="#">
                                    <BiDollar/> change Price
                                </a>
                                <a href="#">
                                    <BiTransferAlt/> Transfer
                                </a>
                                <a href="#">
                                    <MdReportProblem/> Report Abuse
                                </a>
                                <a href="#">
                                    <MdOutlineDeleteSweep/> Delete Item
                                </a>
                            </div>
                        )
                    }
                </div>
            </div>
        <div className={Style.NFTDescription_box_profile}>
            <h1>BearX #23453</h1>
            <div className={Style.NFTDescription_box_profile_box}>
                <div className={Style.NFTDescription_box_profile_box_left}>
                    <Image src={images.user1} alt="profile" width={40} height={40}
                    className={Style.NFTDescription_box_profile_box_left_img}/>
                    <div className={Style.NFTDescription_box_profile_box_left_info}>
                        <small>Creator</small>
                        <br/>
                        <span>Karli Costa<MdVerified/></span>
                    </div>
                </div>
                <div className={Style.NFTDescription_box_profile_box_right}>
                <Image 
                    src={images.user2} 
                    alt="profile" 
                    width={40} 
                    height={40}
                    className={Style.NFTDescription_box_profile_box_left_img}/>
                <div className={Style.NFTDescription_box_profile_box_right_info}>
                    <small>Creator</small>
                    <span>
                        Karli Costa <MdVerified/>
                    </span>
                </div>
                </div>
            </div>
        </div>  
        <div className={Style.NFTDescription_box_profile_bidding}>
            <p>
                <MdVerified/>
                <span>Auction Ending in: </span>
            </p>
            <div className={Style.NFTDescription_box_profile_bidding_box_timer}>
                <div className={Style.NFTDescription_box_profile_bidding_box_timer_item}>
                    <p>2</p>
                    <span>Days</span>
                </div>
                <div className={Style.NFTDescription_box_profile_bidding_box_timer_item}>
                    <p>22</p>
                    <span>Hours</span>
                </div>
                <div className={Style.NFTDescription_box_profile_bidding_box_timer_item}>
                    <p>32</p>
                    <span>Minutes</span>
                </div>
                <div className={Style.NFTDescription_box_profile_bidding_box_timer_item}>
                    <p>10</p>
                    <span>Seconds</span>
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default NFTDescription
