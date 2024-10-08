import React from "react";
import MonthlyIncomeChart from "./SpanishFiestaPackages/SFMIncomeChart";
import MyRankIcon1 from "../assets/img/1.png";
import MyRankIcon2 from "../assets/img/2.png";
import MyRankIcon3 from "../assets/img/3.png";
import MyRankIcon4 from "../assets/img/4.png";
import { FaCalendarAlt, FaSpinner } from "react-icons/fa";
import Border from "../assets/img/left-top.png";

const SpanishFiestaPackages = ({
  isFiestaVisible,
  PreAuthorizeSpanishFiesta,
  ClaimSpanishFiestaMonthlyBonus,
  spanishFiestaPackData,
}) => {
  return (
    <>
      <section className="services-two-2">
        <div className="container">
          <div className="row">
            {isFiestaVisible && (
              <div className="col-md-12 " id="spanishFiestaPackge">
                <div className="new_item">
                  <div className="new_item_bg" />
                  <div className="level-item bordered new_item_inner">
                    <div className="bordered__inner bordered--double_angled bordered--bg_top">
                      <div id="upgrade">
                        <div className="row">
                          <div className="col-md-6 mb-4">
                            <div className="section-title">
                              <h2 className="title-line-center title package_main_heading pb-0t">
                                Spanish Fiesta Packages
                              </h2>
                            </div>
                          </div>
                          <MonthlyIncomeChart />
                          <div className="col-md-6">
                            <div
                              id="divspanishfiestaone"
                              className={
                                spanishFiestaPackData
                                  .SpanishFiestaPackFlag[0] === 1
                                  ? "purchased"
                                  : "not-purchased"
                              }
                            >
                              <div className="package_content">
                                <div className="package_content_inner">
                                  <img
                                    src={MyRankIcon1}
                                    className="rank_icon_box"
                                    alt="rank_icon"
                                  />
                                  <h4>$250</h4>
                                  <button
                                    href="#"
                                    className="new_joining_btn purchasesection"
                                    style={{
                                      display:
                                        spanishFiestaPackData
                                          .SpanishFiestaPackFlag[0] === 1
                                          ? "none"
                                          : "block",
                                    }}
                                    onClick={(e) => {
                                      e.preventDefault();
                                      PreAuthorizeSpanishFiesta(0, 250);
                                    }}
                                  >
                                    <div className="hover_shape_wrapper">
                                      <span className="btn_hover_shape btn_hover_shape-1" />
                                      <span className="btn_hover_shape btn_hover_shape-2" />
                                      <span className="btn_hover_shape btn_hover_shape-3" />
                                    </div>
                                    Purchase
                                  </button>
                                  <ul className="package_info">
                                    <li>
                                      <span className="d-flex">
                                        <FaCalendarAlt className="fa-regular" />
                                        Remaining Months:{" "}
                                        {
                                          spanishFiestaPackData
                                            .remainingMonth[0]
                                        }
                                      </span>
                                      <span className="remainingmonth">
                                        <FaSpinner className="fa-solid loading_sapn" />
                                      </span>
                                    </li>
                                    <li>
                                      <span className="d-flex">
                                        <FaCalendarAlt className="fa-regular" />
                                        Claimed Months:{" "}
                                        {spanishFiestaPackData.claimedMonth[0]}
                                      </span>
                                      <span className="claimedmonth">
                                        <FaSpinner className="fa-solid loading_sapn" />
                                      </span>
                                    </li>
                                    <li>
                                      <span className="d-flex">
                                        <FaCalendarAlt className="fa-regular" />
                                        Remaining Days For Claim:{" "}
                                        {spanishFiestaPackData.remainingDays[0]}
                                      </span>
                                      <span className="remainingdays">
                                        <FaSpinner className="fa-solid loading_sapn" />
                                      </span>
                                    </li>
                                    <li
                                      className="claimsection"
                                      style={{
                                        display: spanishFiestaPackData
                                          .claimable[0]
                                          ? "block"
                                          : "none",
                                      }}
                                    >
                                      <button
                                        href="#"
                                        className="new_joining_btn"
                                        onClick={(e) => {
                                          e.preventDefault();
                                          ClaimSpanishFiestaMonthlyBonus(0);
                                        }}
                                      >
                                        <div className="hover_shape_wrapper">
                                          <span className="btn_hover_shape btn_hover_shape-1" />
                                          <span className="btn_hover_shape btn_hover_shape-2" />
                                          <span className="btn_hover_shape btn_hover_shape-3" />
                                        </div>
                                        Claim Now
                                      </button>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="col-md-6">
                            <div
                              id="divspanishfiestatwo"
                              className={
                                spanishFiestaPackData
                                  .SpanishFiestaPackFlag[1] === 1
                                  ? "purchased"
                                  : "not-purchased"
                              }
                            >
                              <div className="package_content">
                                <div className="package_content_inner">
                                  <img
                                    src={MyRankIcon2}
                                    className="rank_icon_box"
                                    alt="MyRankIcon2"
                                  />
                                  <h4>$450</h4>
                                  <button
                                    href="#"
                                    className="new_joining_btn purchasesection"
                                    style={{
                                      display:
                                        spanishFiestaPackData
                                          .SpanishFiestaPackFlag[1] === 1
                                          ? "none"
                                          : "block",
                                    }}
                                    onClick={(e) => {
                                      e.preventDefault();
                                      PreAuthorizeSpanishFiesta(1, 450);
                                    }}
                                  >
                                    <div className="hover_shape_wrapper">
                                      <span className="btn_hover_shape btn_hover_shape-1" />
                                      <span className="btn_hover_shape btn_hover_shape-2" />
                                      <span className="btn_hover_shape btn_hover_shape-3" />
                                    </div>
                                    Purchase
                                  </button>
                                  <ul className="package_info">
                                    <li>
                                      <span className="d-flex">
                                        <FaCalendarAlt className="fa-regular" />
                                        Remaining Months:{" "}
                                        {
                                          spanishFiestaPackData
                                            .remainingMonth[1]
                                        }
                                      </span>
                                      <span className="remainingmonth">
                                        <FaSpinner className="fa-solid loading_sapn" />
                                      </span>
                                    </li>
                                    <li>
                                      <span className="d-flex">
                                        <FaCalendarAlt className="fa-regular" />
                                        Claimed Months:{" "}
                                        {spanishFiestaPackData.claimedMonth[1]}
                                      </span>
                                      <span className="claimedmonth">
                                        <FaSpinner className="fa-solid loading_sapn" />
                                      </span>
                                    </li>
                                    <li>
                                      <span className="d-flex">
                                        <FaCalendarAlt className="fa-regular" />
                                        Remaining Days For Claim:{" "}
                                        {spanishFiestaPackData.remainingDays[1]}
                                      </span>
                                      <span className="remainingdays">
                                        <FaSpinner className="fa-solid loading_sapn" />
                                      </span>
                                    </li>
                                    <li
                                      className="claimsection"
                                      style={{
                                        display: spanishFiestaPackData
                                          .claimable[1]
                                          ? "block"
                                          : "none",
                                      }}
                                    >
                                      <button
                                        href="#"
                                        className="new_joining_btn"
                                        onClick={(e) => {
                                          e.preventDefault();
                                          ClaimSpanishFiestaMonthlyBonus(1);
                                        }}
                                      >
                                        <div className="hover_shape_wrapper">
                                          <span className="btn_hover_shape btn_hover_shape-1" />
                                          <span className="btn_hover_shape btn_hover_shape-2" />
                                          <span className="btn_hover_shape btn_hover_shape-3" />
                                        </div>
                                        Claim Now
                                      </button>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="col-md-6 mt-10">
                            <div
                              id="divspanishfiestathree"
                              className={
                                spanishFiestaPackData
                                  .SpanishFiestaPackFlag[2] === 1
                                  ? "purchased"
                                  : "not-purchased"
                              }
                            >
                              <div className="package_content">
                                <div className="package_content_inner">
                                  <img
                                    src={MyRankIcon3}
                                    className="rank_icon_box"
                                    alt="MyRankIcon3"
                                  />
                                  <h4>$750</h4>
                                  <button
                                    href="#"
                                    className="new_joining_btn purchasesection"
                                    style={{
                                      display:
                                        spanishFiestaPackData
                                          .SpanishFiestaPackFlag[2] === 1
                                          ? "none"
                                          : "block",
                                    }}
                                    onClick={(e) => {
                                      e.preventDefault();
                                      PreAuthorizeSpanishFiesta(2, 750);
                                    }}
                                  >
                                    <div className="hover_shape_wrapper">
                                      <span className="btn_hover_shape btn_hover_shape-1" />
                                      <span className="btn_hover_shape btn_hover_shape-2" />
                                      <span className="btn_hover_shape btn_hover_shape-3" />
                                    </div>
                                    Purchase
                                  </button>
                                  <ul className="package_info">
                                    <li>
                                      <span className="d-flex">
                                        <FaCalendarAlt className="fa-regular" />
                                        Remaining Months:{" "}
                                        {
                                          spanishFiestaPackData
                                            .remainingMonth[2]
                                        }
                                      </span>
                                      <span className="remainingmonth">
                                        <FaSpinner className="fa-solid loading_sapn" />
                                      </span>
                                    </li>
                                    <li>
                                      <span className="d-flex">
                                        <FaCalendarAlt className="fa-regular" />
                                        Claimed Months:{" "}
                                        {spanishFiestaPackData.claimedMonth[2]}
                                      </span>
                                      <span className="claimedmonth">
                                        <FaSpinner className="fa-solid loading_sapn" />
                                      </span>
                                    </li>
                                    <li>
                                      <span className="d-flex">
                                        <FaCalendarAlt className="fa-regular" />
                                        Remaining Days For Claim:{" "}
                                        {spanishFiestaPackData.remainingDays[2]}
                                      </span>
                                      <span className="remainingdays">
                                        <FaSpinner className="fa-solid loading_sapn" />
                                      </span>
                                    </li>
                                    <li
                                      className="claimsection"
                                      style={{
                                        display: spanishFiestaPackData
                                          .claimable[2]
                                          ? "block"
                                          : "none",
                                      }}
                                    >
                                      <button
                                        href="#"
                                        className="new_joining_btn"
                                        onClick={(e) => {
                                          e.preventDefault();
                                          ClaimSpanishFiestaMonthlyBonus(2);
                                        }}
                                      >
                                        <div className="hover_shape_wrapper">
                                          <span className="btn_hover_shape btn_hover_shape-1" />
                                          <span className="btn_hover_shape btn_hover_shape-2" />
                                          <span className="btn_hover_shape btn_hover_shape-3" />
                                        </div>
                                        Claim Now
                                      </button>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="col-md-6 mt-10">
                            <div
                              id="divspanishfiestafour"
                              className={
                                spanishFiestaPackData
                                  .SpanishFiestaPackFlag[3] === 1
                                  ? "purchased"
                                  : "not-purchased"
                              }
                            >
                              <div className="package_content">
                                <div className="package_content_inner">
                                  <img
                                    src={MyRankIcon4}
                                    className="rank_icon_box"
                                    alt=""
                                  />
                                  <h4>$850 </h4>
                                  <button
                                    href="#"
                                    className="new_joining_btn purchasesection"
                                    style={{
                                      display:
                                        spanishFiestaPackData
                                          .SpanishFiestaPackFlag[3] === 1
                                          ? "none"
                                          : "block",
                                    }}
                                    onClick={(e) => {
                                      e.preventDefault();
                                      PreAuthorizeSpanishFiesta(3, 850);
                                    }}
                                  >
                                    <div className="hover_shape_wrapper">
                                      <span className="btn_hover_shape btn_hover_shape-1" />
                                      <span className="btn_hover_shape btn_hover_shape-2" />
                                      <span className="btn_hover_shape btn_hover_shape-3" />
                                    </div>
                                    Purchase
                                  </button>
                                  <ul className="package_info">
                                    <li>
                                      <span className="d-flex">
                                        <FaCalendarAlt className="fa-regular" />
                                        Remaining Months:{" "}
                                        {
                                          spanishFiestaPackData
                                            .remainingMonth[3]
                                        }
                                      </span>
                                      <span className="remainingmonth">
                                        <FaSpinner className="fa-solid loading_sapn" />
                                      </span>
                                    </li>
                                    <li>
                                      <span className="d-flex">
                                        <FaCalendarAlt className="fa-regular" />
                                        Claimed Months:{" "}
                                        {spanishFiestaPackData.claimedMonth[3]}
                                      </span>
                                      <span className="claimedmonth">
                                        <FaSpinner className="fa-solid loading_sapn" />
                                      </span>
                                    </li>
                                    <li>
                                      <span className="d-flex">
                                        <FaCalendarAlt className="fa-regular" />
                                        Remaining Days For Claim:{" "}
                                        {spanishFiestaPackData.remainingDays[3]}
                                      </span>
                                      <span className="remainingdays">
                                        <FaSpinner className="fa-solid loading_sapn" />
                                      </span>
                                    </li>
                                    <li
                                      className="claimsection"
                                      style={{
                                        display: spanishFiestaPackData
                                          .claimable[3]
                                          ? "block"
                                          : "none",
                                      }}
                                    >
                                      <button
                                        href="#"
                                        className="new_joining_btn"
                                        onClick={(e) => {
                                          e.preventDefault();
                                          ClaimSpanishFiestaMonthlyBonus(3);
                                        }}
                                      >
                                        <div className="hover_shape_wrapper">
                                          <span className="btn_hover_shape btn_hover_shape-1" />
                                          <span className="btn_hover_shape btn_hover_shape-2" />
                                          <span className="btn_hover_shape btn_hover_shape-3" />
                                        </div>
                                        Claim Now
                                      </button>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <img
                      className="position-pic l-t"
                      src={Border}
                      alt="boredr"
                    />
                    <img
                      className="position-pic r-t"
                      src={Border}
                      alt="boredr"
                    />
                    <img
                      className="position-pic l-b"
                      src={Border}
                      alt="boredr"
                    />
                    <img
                      className="position-pic r-b"
                      src={Border}
                      alt="boredr"
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default SpanishFiestaPackages;
