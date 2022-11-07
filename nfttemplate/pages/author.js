import React,{useState,useEffect} from 'react'

import Style from '../styles/author.module.css';
import {Banner, NFTCardTwo} from '../collectionPage/collectionIndex';
import { Brand, Title} from '../components/componentindex';
import images from '../img'
import {AuthorProfileCard,AuthorTags,AuthorNFTCardBox} from '../authorPage/componentIndex';
import FollowerTabCard from '../components/Followertab/FollowerTabCard/FollowerTabCard';
const author = () => {
  const followerArray=[
   
    {
      background: images.creatorbackground2,
      user: images.user2 
    },
    {
      background: images.creatorbackground4,
      user: images.user4 
    },
    {
      background: images.creatorbackground5,
      user: images.user5 
    },
    {
      background: images.creatorbackground1,
      user: images.user1 
    },
    {
      background: images.creatorbackground3,
      user: images.user3 
    },
    {
      background: images.creatorbackground6,
      user: images.user6 
    }
  ]
    const [collectiables, setcollectiables] = useState(true);
    const [created, setcreated] = useState(false);
    const [like, setlike] = useState(false);
    const [follower, setfollower] = useState(false);
    const [following, setfollowing] = useState(false);

  return (
    <div className={Style.author}>
        <Banner bannerImage={images.creatorbackground1}/>
        <AuthorProfileCard/>
        <AuthorTags 
          setcollectiables={setcollectiables} 
          setcreated={setcreated}
          setlike={setlike} 
          setfollower={setfollower}
          setfollowing={setfollowing}/>
        <AuthorNFTCardBox
          collectiables={collectiables}
          created={created}
          follower={follower}
          following={following}
          like={like}
        />
        <Title heading="Popular Creators"
        paragraph = "click on music icon and enjoy NFT music or audio"/> 
        {/* {
          popularArray.map((el,i)=>(
            <FollowerTabCard key={i+1} i={i} el={el}/>
          ))
        } */}
        <div className={Style.author_box}>
            {
              followerArray.map((el,i)=>(
                <FollowerTabCard i={i} el={el}/>

              ))
            }
        </div>
        <Brand/> 
    </div>
  )
}

export default author;