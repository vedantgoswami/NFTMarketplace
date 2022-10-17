import React,{useState,useEffect} from 'react'
import Style from './FollowerTab.module.css'
import FollowerTabCard from './FollowerTabCard/FollowerTabCard'
import { 
    RiUserFollowFill,
    RiUserUnfollowFill,
    RiAwardLine } from 'react-icons/ri'


const FollowerTab = () => {
    const CardArray = [1,2,3,4,5,6,7,8];
    const FollowingArray = [1,2,3,4,5,6];
    const NewsArray = [1,2,3,4,5]
    const [popular, setpopular] = useState(true);
    const [follower, setfollower] = useState(false);
    const [news, setnews] = useState(false);
    const openPopular = () =>{
        console.log("clicked")
        if(!popular)
        {
            setpopular(true);
            setfollower(false);
            setnews(false);
        }
    }
    const openFollower = () =>{
        if(!follower)
        {
            setpopular(false);
            setfollower(true);
            setnews(false);
        }
    }
    const openNews = () =>{
        if(!news)
        {
            setpopular(false);
            setfollower(false);
            setnews(true);
        }
    }
    return (
    <div className={Style.followerTab}>
        <div className={Style.followerTab_title}>
            <h2>Top Creators List...</h2>
            <div className={Style.followerTab_tabs}>
                <div className={Style.followerTab_tabs_btn}>
                    <button onClick={()=>openPopular()}>
                        <RiUserFollowFill/> Popular
                    </button>
                    <button onClick={()=>openFollower()}>
                        <RiUserFollowFill/> Following
                    </button>
                    <button onClick={()=>openNews()}>
                        <RiAwardLine/> NoteWorthy
                    </button>
                </div>
            </div>

        </div>
        {
            popular && (
                <div className={Style.followerTab_box}>
                    {
                        CardArray.map((el,i)=>(
                            <FollowerTabCard key={i+1} i={i} el ={el}/>
                        ))
                    }
                </div>
            )
        }
        {
            follower && (
                <div className={Style.followerTab_box}>
                    {
                        FollowingArray.map((el,i)=>(
                            <FollowerTabCard key={i+1} i={i} el ={el}/>
                        ))
                    }
                </div>
            )
        }
        {
            news && (
                <div className={Style.followerTab_box}>
                    {
                        NewsArray.map((el,i)=>(
                            <FollowerTabCard key={i+1} i={i} el ={el}/>
                        ))
                    }
                </div>
            )
        }
        <div className={Style.followerTab_member}>
            <div className={Style.followerTab_member_box}>
                <a href="#">Show me more</a>
                <a href="#">Become, Author</a>
            </div>
        </div>
    </div>
  )
}

export default FollowerTab;
