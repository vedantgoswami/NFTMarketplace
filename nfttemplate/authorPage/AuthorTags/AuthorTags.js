import React,{useState} from 'react'
import Image from 'next/image';
import { TiArrowSortedDown,TiArrowSortedUp,TiTick} from 'react-icons/ti';
import Style from './AuthorTags.module.css';
const AuthorTags = ({setcollectiables,setcreated,setlike,setfollowing,setfollower}) => {
  const [openList, setopenList] = useState(false);
  const [activeBtn, setactiveBtn] = useState(1);
  const [selectedMenu, setselectedMenu] = useState("Most Recent")
  const listArray = [
    "Created By Admin",
    "Most Appreciated",
    "Most Discussed",
    "Most View"
  ];
  const openDropDownList=()=>{
    if(!openList){
      setopenList(true);
    }
    else{
      setopenList(false);
    }
  };
  const openTab=(e)=>{
    const btnText = e.target.innerText;
    
    if(btnText=="Collectiables"){
      setcollectiables(true);
      setcreated(false);
      setfollowing(false);
      setfollower(false);
      setlike(false);
      setactiveBtn(1);
  }
  else if(btnText=="Created"){
      setcollectiables(false);
      setcreated(true);
      setfollowing(false);
      setfollower(false);
      setlike(false);
      setactiveBtn(2);
  }
  else if(btnText=="Following"){
    setcollectiables(false);
      setcreated(false);
      setfollowing(true);
      setfollower(false);
      setlike(false);
      setactiveBtn(3);
  }
  else if(btnText=="Follower"){
    setcollectiables(false);
      setcreated(false);
      setfollowing(false);
      setfollower(true);
      setlike(false);
      setactiveBtn(4);
  }
  else if(btnText=="Liked"){
    setcollectiables(false);
      setcreated(false);
      setfollowing(false);
      setfollower(false);
      setlike(true);
      setactiveBtn(5);
  }
  }
  return (
    
    <div className={Style.AuthorTaps}>
      <div className={Style.AuthorTaps_box}>
        <div className={Style.AuthorTaps_box_left}>
          <div className={Style.AuthorTaps_box_left_btn}>
            <button className={`${activeBtn==1?Style.active: ""}`} onClick={(e)=>openTab(e)}>Collectiables</button>
            <button className={`${activeBtn==2?Style.active: ""}`} onClick={(e)=>openTab(e)}>Created</button>
            <button className={`${activeBtn==3?Style.active: ""}`} onClick={(e)=>openTab(e)}>Following</button>
            <button className={`${activeBtn==4?Style.active: ""}`} onClick={(e)=>openTab(e)}>Follower</button>
            <button className={`${activeBtn==5?Style.active: ""}`} onClick={(e)=>openTab(e)}>Liked</button>

          </div>
        </div>

        <div className={Style.AuthorTaps_box_right}>
          <div className={Style.AuthorTaps_box_right_para}
          onClick={()=>openDropDownList()}>
            <p>{selectedMenu}</p>
            {
              openList ?
              <TiArrowSortedUp/>:<TiArrowSortedDown/>
            }
          </div>
          {
            openList && (
              <div className={Style.AuthorTaps_box_right_list}>
                {
                  listArray.map((el,i)=>(
                    <div key={i+1} onClick={()=>setselectedMenu(el)}
                    className={Style.AuthorTaps_box_right_list_item}>
                      <p>{el} </p>
                      <span>{selectedMenu==el && <TiTick/>}</span>
                    </div>
                  ))
                }
              </div>
            )
          }
        </div>
      </div>
    </div>
  )
}

export default AuthorTags;