import React from "react";
import "../App.css";
function Footer() {
  const pUrl = process.env.PUBLIC_URL;
  return (
    <div className="footerBox">
      <div className="footerCont">
        <div className="footerLogo">
          <img
            src="/img/cbde9d2fe3dfd047b392b92b1acd1b66_73911.png"
            alt="로고"
          />
        </div>
        <ul>
          <strong>개인정보 처리방침</strong>
          <li>
            <a>이용약관</a>
          </li>
          <li>
            <a>리워드 회원약관</a>
          </li>
        </ul>
        <ul>
          <li>
            <a>공지사항</a>
          </li>
          <li>
            <a>FAQ</a>
          </li>
          <li>
            <a>1:1문의</a>
          </li>
          <li>
            <a>대량구매 문의</a>
          </li>
        </ul>
        <div className="footerCs">
          <strong>고객센터</strong>
          <a>02-759-7700</a>
          <p>
            평일 10:00~17:00
            <br />
            점심 12:00~13:00
          </p>
        </div>

        <div className="footerBottom">
          <div className="footerCompanyInfo">
            <div className="footerCompanyInfoCont">
              ㈜호텔롯데 대표이사: 장호석 주소:(04533)서울특별시 중구 을지로 30
              사업자등록번호: 104-81-25980 <a>[사업자정보확인]</a>
              <br />
              통신판매신고번호: 2004-서울중구-2802호 공정거래 위원회 사업자{" "}
              <a>[신원정보 확인]</a>
            </div>
            <span className="copyr">
              © Copyright 2025 Lotte. All Rights Reserved.
            </span>
          </div>
          <div className="footerSelectBox">
            <div className="footerSelectBoxCont">
              <div className="footerSelectSelected">Family site</div>
            </div>
          </div>
          <div className="footerSnsBox">
            <ul className="footerSnspc">
              <li><img src="/img/ico_footer_facebook.png" alt="facebook" /></li>
              <li><img src="/img/ico_footer_insta.png" alt="instargram" /></li>
              <li><img src="/img/ico_footer_ytb.png" alt="youtube" /></li>
            </ul>
          </div>
          <div className="footerGettopBox">
            <div className="footerGettopGo">
              <img src="/img/icon_top_pc.png" alt="goTop" />
            </div>
            </div>
          
        </div>
      </div>
    </div>
  );
}

export default Footer;
