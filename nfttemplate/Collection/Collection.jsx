import React,{useState,useEffect} from 'react'
import Style from './Collection.module.css'
import {
    BsFillAlarmFill,
    BsFillCalendarDateFill,
    BsCalendar3,
    BsAlarmFill
} from 'react-icons/bs';
import DaysComponents from './DaysComponents/DaysComponents';
const Collection = () => {
    const [popular, setPopular] = useState(true)
    const [following, setFollowing] = useState(false)
    const [news, setNews] = useState(false)
    const CardArray = [1,2,3,4,5,6,7,8];
    const followingArray = [1,2,3,4];
    const newsArray = [1,2,3,4,5,6];
    const openPopular = ()=>{
        if(!popular)
        {
            setFollowing(false);
            setNews(false);
            setPopular(true);
        }
        
    }
    const openFollower = ()=>{
        if(!following)
        {
            setFollowing(true);
            setNews(false);
            setPopular(false);
        }
        
    }
    const openNews = ()=>{
        if(!news)
        {
            setFollowing(false);
            setNews(true);
            setPopular(false);
        }
        
    }
    return (
        <div className={Style.collection}>
        <div className={Style.collection_title}>
          <h2>Top List Creators</h2>
          <div className={Style.collection_collections}>
            <div className={Style.collection_collections_btn}>
              <button onClick={() => openPopular()}>
                <BsFillAlarmFill /> 24 hours
              </button>
              <button onClick={() => openFollower()}>
                <BsCalendar3 /> 7 days
              </button>
              <button onClick={() => openNews()}>
                <BsFillCalendarDateFill /> 30 days
              </button>
            </div>
          </div>
        </div>
        {popular && (
          <div className={Style.collection_box}>
            {CardArray.map((el, i) => (
              <DaysComponents key={i + 1} i={i} el={el} />
            ))}
          </div>
        )}
  
        {following && (
          <div className={Style.collection_box}>
            {followingArray.map((el, i) => (
              <DaysComponents key={i + 1} i={i} el={el} />
            ))}
          </div>
        )}
  
        {news && (
          <div className={Style.collection_box}>
            {newsArray.map((el, i) => (
              <DaysComponents key={i + 1} i={i} el={el} />
            ))}
          </div>
        )}
      </div>
    );
}

export default Collection