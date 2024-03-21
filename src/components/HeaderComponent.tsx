import React, { useEffect, useState } from "react";
import "../App.css";
import TopRowCardsComponent from "./TopRowCardsComponent";
import facebook from "../images/icon-facebook.svg";
import twitter from "../images/icon-twitter.svg";
import instagram from "../images/icon-instagram.svg";
import youtube from "../images/icon-youtube.svg";
import up from "../images/icon-up.svg";
import down from "../images/icon-down.svg";
import BottomRowCardsComponent from "./BottomRowCardsComponent";

const HeaderComponent = () => {

  const [toggle, setToggle] = useState<boolean>(false);
  const [BGTop, setBGTop] = useState<string>('darkBGTop');
  const [headText, setHeadText] = useState<string>('darkHeadText');
  const [text2, setText2] = useState<string>('darkText2');
  const [toggleBtn, setToggleBtn] = useState<string>('darkToggleBtn');
  const [card, setCard] = useState<string>('darkCard');
  const [hr, setHr] = useState<string>('hrDark');

  useEffect(()=> {

    if(toggle === false){
      setBGTop('darkBGTop');
      setHeadText('darkHeadText');
      setText2('darkText2');
      setToggleBtn('darkToggleBtn');
      setCard('darkCard');
      setHr('hrDark');
      document.body.style.backgroundColor = '#1E202A';
    }else{
      setBGTop('lightBGTop');
      setHeadText('lightHeadText');
      setText2('lightText2');
      setToggleBtn('lightToggleBtn');
      setCard('lightCard');
      setHr('hrLight');
      document.body.style.backgroundColor = '#FFFFFF';
    }

  }, [toggle])

  const handleToggle = () => {
    setToggle(!toggle);
  }

  return (
    <div>
      <div>
        <div className={`${BGTop} px-6 xl:px-[165px]`}>
          <div className="grid xl:grid-cols-2 py-10">
            <div>
              <h1 className={`${headText} text-[27px] leading-7`}>
                Social Media Dashboard
              </h1>
              <p className={`${text2} inter`}>Total Followers: 23,004</p>
            </div>
            <div className={`block xl:hidden my-4 h-[1px] ${hr}`}></div>
            <div className="grid xl:justify-end my-auto">
              <div className={`${toggleBtn} grid grid-cols-2`}>
                <div className="my-auto">
                  <span>Dark Mode</span>
                </div>
                <div className="grid justify-end">
                  <label className="switch">
                    <input type="checkbox" />
                    <span className="slider" onClick={handleToggle}></span>
                  </label>
                </div>
                
              </div>
            </div>
          </div>

          <div className="grid xl:grid-cols-4 gap-7">
            <div className="w-full mx-auto">
              <TopRowCardsComponent
                statsColor="statsTextUp"
                statLogo={up}
                stats="12 Today"
                type="FOLLOWERS"
                followers="1987"
                logo={facebook}
                username="@nathanf"
                topBorder="facebook"
                text={text2} headText={headText} card={card}
              />
            </div>
            <div className="w-full mx-auto">
              <TopRowCardsComponent
                statsColor="statsTextUp"
                statLogo={up}
                stats="99 Today"
                type="FOLLOWERS"
                followers="1044"
                logo={twitter}
                username="@nathanf"
                topBorder="twitter"
                text={text2} headText={headText} card={card}
              />
            </div>
            <div className="w-full mx-auto">
              <TopRowCardsComponent
                statsColor="statsTextUp"
                statLogo={up}
                stats="1099 Today"
                type="FOLLOWERS"
                followers="11k"
                logo={instagram}
                username="@realnathanf"
                topBorder="instagram"
                text={text2} headText={headText} card={card}
              />
            </div>
            <div className="w-full mx-auto">
              <TopRowCardsComponent
                statsColor="statsTextDown"
                statLogo={down}
                stats="144 Today"
                type="SUBSCRIBERS"
                followers="8239"
                logo={youtube}
                username="Nathan F."
                topBorder="youtube"
                text={text2} headText={headText} card={card}
              />
            </div>
          </div>

          <div>
            <h1 className={`${headText} text-[24px] mt-11 mb-6`}>Overview - Today</h1>
          </div>

          <div className="grid xl:grid-cols-4 gap-7">
            <div className="w-full mx-auto">
                <BottomRowCardsComponent statsColor='statsTextUp' statLogo={up} stats='3%' logo={facebook} followers='87' type='Page Views' text={text2} headText={headText} card={card}/>
            </div>
            <div className="w-full mx-auto">
                <BottomRowCardsComponent statsColor='statsTextDown' statLogo={down} stats='2%' logo={facebook} followers='52' type='Likes' text={text2} headText={headText} card={card}/>
            </div>
            <div className="w-full mx-auto">
                <BottomRowCardsComponent statsColor='statsTextUp' statLogo={up} stats='2257%' logo={instagram} followers='5462' type='Likes' text={text2} headText={headText} card={card}/>
            </div>
            <div className="w-full mx-auto">
                <BottomRowCardsComponent statsColor='statsTextUp' statLogo={up} stats='1375%' logo={instagram} followers='52k' type='Profile Views' text={text2} headText={headText} card={card}/>
            </div>
            <div className="w-full mx-auto">
                <BottomRowCardsComponent statsColor='statsTextUp' statLogo={up} stats='303%' logo={twitter} followers='117' type='Retweets' text={text2} headText={headText} card={card}/>
            </div>
            <div className="w-full mx-auto">
                <BottomRowCardsComponent statsColor='statsTextUp' statLogo={up} stats='553%' logo={twitter} followers='507' type='Likes' text={text2} headText={headText} card={card}/>
            </div>
            <div className="w-full mx-auto">
                <BottomRowCardsComponent statsColor='statsTextDown' statLogo={down} stats='19%' logo={youtube} followers='107' type='Likes' text={text2} headText={headText} card={card}/>
            </div>
            <div className="w-full mx-auto mb-[45px] xl:mb-[75px]">
                <BottomRowCardsComponent statsColor='statsTextDown' statLogo={down} stats='12%' logo={youtube} followers='1407' type='Total Views' text={text2} headText={headText} card={card}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderComponent;
