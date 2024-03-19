import React from "react";
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
  return (
    <div>
      <div className="darkBG">
        <div className="darkBGTop">
          <div className="grid grid-cols-2">
            <div>
              <h1 className=" darkHeadText text-[27px] leading-7">
                Social Media Dashboard
              </h1>
              <p className="darkText2">Total Followers: 23,064</p>
            </div>
            <div className="grid justify-end my-auto">
              <div className="darkToggleBtn">
                <span className="me-3 inline">Dark Mode</span>
                <label className="switch">
                  <input type="checkbox" />
                  <span className="slider"></span>
                </label>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-4">
            <div className="mx-5">
              <TopRowCardsComponent
                statsColor="statsTextUp"
                statLogo={up}
                stats="12 Today"
                type="FOLLOWERS"
                followers="1987"
                logo={facebook}
                username="@nathanf"
                topBorder="facebook"
              />
            </div>
            <div className="mx-5">
              <TopRowCardsComponent
                statsColor="statsTextUp"
                statLogo={up}
                stats="99 Today"
                type="FOLLOWERS"
                followers="1044"
                logo={twitter}
                username="@nathanf"
                topBorder="twitter"
              />
            </div>
            <div className="mx-5">
              <TopRowCardsComponent
                statsColor="statsTextUp"
                statLogo={up}
                stats="1099 Today"
                type="FOLLOWERS"
                followers="11k"
                logo={instagram}
                username="@realnathanf"
                topBorder="instagram"
              />
            </div>
            <div className="mx-5">
              <TopRowCardsComponent
                statsColor="statsTextDown"
                statLogo={down}
                stats="144 Today"
                type="SUBSCRIBERS"
                followers="8239"
                logo={youtube}
                username="Nathan F."
                topBorder="youtube"
              />
            </div>
          </div>

          <div>
            <h1 className="darkHeadText text-[24px]">Overview - Today</h1>
          </div>

          <div className="grid grid-cols-4">
            <div className="mx-5">
                <BottomRowCardsComponent statsColor='statsTextUp' statLogo={up} stats='3%' logo={facebook} followers='87' type='Page Views'/>
            </div>
            <div className="mx-5">
                <BottomRowCardsComponent statsColor='statsTextDown' statLogo={down} stats='2%' logo={facebook} followers='52' type='Likes'/>
            </div>
            <div className="mx-5">
                <BottomRowCardsComponent statsColor='statsTextUp' statLogo={up} stats='2257%' logo={instagram} followers='5462' type='Likes'/>
            </div>
            <div className="mx-5">
                <BottomRowCardsComponent statsColor='statsTextUp' statLogo={up} stats='1375%' logo={instagram} followers='52k' type='Profile Views'/>
            </div>
            <div className="mx-5">
                <BottomRowCardsComponent statsColor='statsTextUp' statLogo={up} stats='303%' logo={twitter} followers='117' type='Retweets'/>
            </div>
            <div className="mx-5">
                <BottomRowCardsComponent statsColor='statsTextUp' statLogo={up} stats='553%' logo={twitter} followers='507' type='Likes'/>
            </div>
            <div className="mx-5">
                <BottomRowCardsComponent statsColor='statsTextDown' statLogo={down} stats='19%' logo={youtube} followers='107' type='Likes'/>
            </div>
            <div className="mx-5">
                <BottomRowCardsComponent statsColor='statsTextDown' statLogo={down} stats='12%' logo={youtube} followers='1407' type='Total Views'/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderComponent;
