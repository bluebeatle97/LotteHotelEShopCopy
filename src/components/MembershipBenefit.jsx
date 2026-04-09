import React from 'react';
import "../App.css";

const MembershipBenefit = () => {
  return (
    <section className="benefits">
      <div className="benefits_tit">
        <h2>
          Membership<font>&nbsp;Benefit</font>
          <span>멤버십 혜택</span>
        </h2>
      </div>

      <div className="mamber_bene_cont">
        {/* 왼쪽: 혜택 리스트 영역 [cite: 2026-03-25] */}
        <div className="member_bene_list">
          <div>
            <ul>
              <li>
                <div>
                  <div className="icon_box">
                    <img src="https://eshop01.cdn-nhncommerce.com/data/skin/front/lottehotel/img/main/benefits/icon01.png" className="icon1" alt="혜택 아이콘1" />
                  </div>
                  <strong>멤버십 혜택</strong>
                  <p>
                    리워즈 회원 대상 할인 혜택 적용<br />
                    생일 쿠폰 제공
                  </p>
                </div>
              </li>
              <li>
                <div>
                  <div className="icon_box">
                    <img src="https://eshop01.cdn-nhncommerce.com/data/skin/front/lottehotel/img/main/benefits/icon02.png" className="icon2" alt="혜택 아이콘2" />
                  </div>
                  <strong>포인트 적립/사용</strong>
                  <p>
                    가입 즉시 $5(500P) 적립<br />
                    리워즈 포인트로 상품 즉시 구매 가능
                  </p>
                </div>
              </li>
              <li>
                <div>
                  <div className="icon_box">
                    <img src="https://eshop01.cdn-nhncommerce.com/data/skin/front/lottehotel/img/main/benefits/icon03.png" className="icon3" alt="혜택 아이콘3" />
                  </div>
                  <strong>특별 이벤트</strong>
                  <p>
                    회원 전용 상품<br />
                    프로모션 특전
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* 오른쪽: 멤버십 배너 영역 [cite: 2026-03-25] */}
        <div className="bene_banner">
          <div>
            <img src="https://eshop01.cdn-nhncommerce.com/data/skin/front/lottehotel/img/banner/2819a26caeee650aba11bb6361405e1f_74348.png" className="pc" alt="멤버십 배너 PC" />
            <img src="https://eshop01.cdn-nhncommerce.com/data/skin/front/lottehotel/img/banner/a275098a1f8dca1fed4be2855f8e5e7d_78975.png" className="mo" alt="멤버십 배너 MO" />
            <div className="inner">
              <div>
                <p>
                  롯데호텔 리워즈가 당신의 여정과 함께합니다.<br />
                  롯데호텔 이숍에서 누리는 리워즈 혜택으로 <br className="mo" />더 특별해지는 경험<br />
                  지금 바로 만나보세요.
                </p>
                <a href="https://www.lottehotel.com/global/ko/membership" target="_blank" rel="noopener noreferrer">
                  혜택 확인하기
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MembershipBenefit;