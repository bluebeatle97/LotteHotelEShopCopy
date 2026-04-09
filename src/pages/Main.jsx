import React from "react";
import "../App.css";
import MainSlider from"../components/MainSlider";
import QuickMenu from '../components/QuickMenu';
import MainBestItem from '../components/MainBestItem';
import MainReview from '../components/MainReview';
import LifestyleEvent from '../components/LifestyleEvent';
import MembershipBenefit from '../components/MembershipBenefit';

function Main() {
  return (
  <>
    <div className="mainBox"> 
      <MainSlider />
      <QuickMenu />
      <MainBestItem />
      <MainReview />
      <LifestyleEvent/>
      <MembershipBenefit/>
    </div>
  </>
  );
}

export default Main;
