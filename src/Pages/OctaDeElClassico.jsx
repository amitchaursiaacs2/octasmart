import React from "react";
import ODECMIncomeChart from "./OctaDeElClassico/ODECMIncomeChart";
import ODEClassicoChart from "./OctaDeElClassico/ODEClassicoChart";
import MyRankIcon1 from "../assets/img/1.png";
import MyRankIcon2 from "../assets/img/2.png";
import MyRankIcon3 from "../assets/img/3.png";
import MyRankIcon4 from "../assets/img/4.png";
import MyRankIcon5 from "../assets/img/5.png";
import MyRankIcon6 from "../assets/img/6.png";
import MyRankIcon7 from "../assets/img/7.png";
import MyRankIcon8 from "../assets/img/8.png";
import { FaCalendarAlt, FaSpinner } from "react-icons/fa";
import Border from "../assets/img/left-top.png";

const OctaDeElClassico = ({
  isProPackgeVisible,
  PreAuthorizeUpgrade,
  ClaimProMonthlyBonus,
  proPoolData,
}) => {
  return (
    <>
      <section className="services-two-2">
        <div className="container">
          <div className="row">
            {isProPackgeVisible && (
              <div className="col-md-12 " id="proPackge">
                <div className="new_item">
                  <div className="new_item_bg" />
                  <div className="level-item bordered new_item_inner">
                    <div className="bordered__inner bordered--double_angled bordered--bg_top">
                      <div id="upgrade">
                        <div className="row">
                          <div className="col-md-6 mb-4">
                            <div className="section-title">
                              <h2 className="title-line-center title package_main_heading pb-0t">
                                Octa De El-Classico
                              </h2>
                            </div>
                          </div>
                          <div className="col-md-6 mb-4 md:text-right stat-btn">
                            <ODECMIncomeChart />
                            <ODEClassicoChart />
                          </div>

                          <div className="col-md-6">
                            <div
                              id="divpropoolone"
                              className={
                                proPoolData.purchasePoolFlag[0] === 1
                                  ? "purchased"
                                  : "not-purchased"
                              }
                            >
                              <div className="package_block_header">
                                <h4>Esencia Suprema</h4>
                              </div>
                              <div className="package_content">
                                <div className="package_content_inner">
                                  <img
                                    src={MyRankIcon1}
                                    className="rank_icon_box"
                                    alt="MyRankIcon1"
                                  />
                                  <h4>$100</h4>
                                  <button
                                    href="#"
                                    className="new_joining_btn purchasesection"
                                    style={{
                                      display:
                                        proPoolData.purchasePoolFlag[0] === 1
                                          ? "none"
                                          : "block",
                                    }}
                                    onClick={(e) => {
                                      e.preventDefault();
                                      PreAuthorizeUpgrade(0, 100);
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
                                        Remaining Months:
                                        {proPoolData.remainingMonth[0]}
                                      </span>
                                      <span className="remainingmonth">
                                        <FaSpinner className="fa-solid loading_sapn" />
                                      </span>
                                    </li>
                                    <li>
                                      <span className="d-flex">
                                        <FaCalendarAlt className="fa-regular" />
                                        Claimed Months:
                                        {proPoolData.claimedMonth[0]}
                                      </span>
                                      <span className="claimedmonth">
                                        <FaSpinner className="fa-solid loading_sapn" />
                                      </span>
                                    </li>
                                    <li>
                                      <span className="d-flex">
                                        <FaCalendarAlt className="fa-regular" />
                                        Remaining Days For Claim:
                                        {proPoolData.remainingDays[0]}
                                      </span>
                                      <span className="remainingdays">
                                        <FaSpinner className="fa-solid loading_sapn" />
                                      </span>
                                    </li>
                                    <li
                                      className="claimsection"
                                      style={{
                                        display: proPoolData.claimable[0]
                                          ? "block"
                                          : "none",
                                      }}
                                    >
                                      <button
                                        href="#"
                                        className="new_joining_btn"
                                        onClick={(e) => {
                                          e.preventDefault();
                                          ClaimProMonthlyBonus(0);
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
                              id="divpropooltwo"
                              className={
                                proPoolData.purchasePoolFlag[1] === 1
                                  ? "purchased"
                                  : "not-purchased"
                              }
                            >
                              <div className="package_block_header">
                                <h4>Brilliante Suprema</h4>
                              </div>
                              <div className="package_content">
                                <div className="package_content_inner">
                                  <img
                                    src={MyRankIcon2}
                                    className="rank_icon_box"
                                    alt="MyRankIcon2"
                                  />
                                  <h4>$500</h4>
                                  <button
                                    href="#"
                                    className="new_joining_btn purchasesection"
                                    style={{
                                      display:
                                        proPoolData.purchasePoolFlag[1] === 1
                                          ? "none"
                                          : "block",
                                    }}
                                    onClick={(e) => {
                                      e.preventDefault();
                                      PreAuthorizeUpgrade(1, 500);
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
                                        Remaining Months:
                                        {proPoolData.remainingMonth[1]}
                                      </span>
                                      <span className="remainingmonth">
                                        <FaSpinner className="fa-solid loading_sapn" />
                                      </span>
                                    </li>
                                    <li>
                                      <span className="d-flex">
                                        <FaCalendarAlt className="fa-regular" />
                                        Claimed Months:
                                        {proPoolData.claimedMonth[1]}
                                      </span>
                                      <span className="claimedmonth">
                                        <FaSpinner className="fa-solid loading_sapn" />
                                      </span>
                                    </li>
                                    <li>
                                      <span className="d-flex">
                                        <FaCalendarAlt className="fa-regular" />
                                        Remaining Days For Claim:
                                        {proPoolData.remainingDays[1]}
                                      </span>
                                      <span className="remainingdays">
                                        <FaSpinner className="fa-solid loading_sapn" />
                                      </span>
                                    </li>
                                    <li
                                      className="claimsection"
                                      style={{
                                        display: proPoolData.claimable[1]
                                          ? "block"
                                          : "none",
                                      }}
                                    >
                                      <button
                                        href="#"
                                        className="new_joining_btn"
                                        onClick={(e) => {
                                          e.preventDefault();
                                          ClaimProMonthlyBonus(1);
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
                              id="divpropoolthree"
                              className={
                                proPoolData.purchasePoolFlag[2] === 1
                                  ? "purchased"
                                  : "not-purchased"
                              }
                            >
                              <div className="package_block_header">
                                <h4>Alma Radiante </h4>
                              </div>
                              <div className="package_content">
                                <div className="package_content_inner">
                                  <img
                                    src={MyRankIcon3}
                                    className="rank_icon_box"
                                    alt="MyRankIcon3"
                                  />
                                  <h4>$1,000</h4>
                                  <button
                                    href="#"
                                    className="new_joining_btn purchasesection"
                                    style={{
                                      display:
                                        proPoolData.purchasePoolFlag[2] === 1
                                          ? "none"
                                          : "block",
                                    }}
                                    onClick={(e) => {
                                      e.preventDefault();
                                      PreAuthorizeUpgrade(2, 1000);
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
                                        Remaining Months:
                                        {proPoolData.remainingMonth[2]}
                                      </span>
                                      <span className="remainingmonth">
                                        <FaSpinner className="fa-solid loading_sapn" />
                                      </span>
                                    </li>
                                    <li>
                                      <span className="d-flex">
                                        <FaCalendarAlt className="fa-regular" />
                                        Claimed Months:
                                        {proPoolData.claimedMonth[2]}
                                      </span>
                                      <span className="claimedmonth">
                                        <FaSpinner className="fa-solid loading_sapn" />
                                      </span>
                                    </li>
                                    <li>
                                      <span className="d-flex">
                                        <FaCalendarAlt className="fa-regular" />
                                        Remaining Days For Claim:
                                        {proPoolData.remainingDays[2]}
                                      </span>
                                      <span className="remainingdays">
                                        <FaSpinner className="fa-solid loading_sapn" />
                                      </span>
                                    </li>
                                    <li
                                      className="claimsection"
                                      style={{
                                        display: proPoolData.claimable[2]
                                          ? "block"
                                          : "none",
                                      }}
                                    >
                                      <button
                                        href="#"
                                        className="new_joining_btn"
                                        onClick={(e) => {
                                          e.preventDefault();
                                          ClaimProMonthlyBonus(2);
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
                              id="divpropoolfour"
                              className={
                                proPoolData.purchasePoolFlag[3] === 1
                                  ? "purchased"
                                  : "not-purchased"
                              }
                            >
                              <div className="package_block_header">
                                <h4>Epica Victoria </h4>
                              </div>
                              <div className="package_content">
                                <div className="package_content_inner">
                                  <img
                                    src={MyRankIcon4}
                                    className="rank_icon_box"
                                    alt="MyRankIcon4"
                                  />
                                  <h4>$2,000 </h4>
                                  <button
                                    href="#"
                                    className="new_joining_btn purchasesection"
                                    style={{
                                      display:
                                        proPoolData.purchasePoolFlag[3] === 1
                                          ? "none"
                                          : "block",
                                    }}
                                    onClick={(e) => {
                                      e.preventDefault();
                                      PreAuthorizeUpgrade(3, 2000);
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
                                        Remaining Months:
                                        {proPoolData.remainingMonth[3]}
                                      </span>
                                      <span className="remainingmonth">
                                        <FaSpinner className="fa-solid loading_sapn" />
                                      </span>
                                    </li>
                                    <li>
                                      <span className="d-flex">
                                        <FaCalendarAlt className="fa-regular" />
                                        Claimed Months:
                                        {proPoolData.claimedMonth[3]}
                                      </span>
                                      <span className="claimedmonth">
                                        <FaSpinner className="fa-solid loading_sapn" />
                                      </span>
                                    </li>
                                    <li>
                                      <span className="d-flex">
                                        <FaCalendarAlt className="fa-regular" />
                                        Remaining Days For Claim:
                                        {proPoolData.remainingDays[3]}
                                      </span>
                                      <span className="remainingdays">
                                        <FaSpinner className="fa-solid loading_sapn" />
                                      </span>
                                    </li>
                                    <li
                                      className="claimsection"
                                      style={{
                                        display: proPoolData.claimable[3]
                                          ? "block"
                                          : "none",
                                      }}
                                    >
                                      <button
                                        href="#"
                                        className="new_joining_btn"
                                        onClick={(e) => {
                                          e.preventDefault();
                                          ClaimProMonthlyBonus(3);
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
                              id="divpropoolfive"
                              className={
                                proPoolData.purchasePoolFlag[4] === 1
                                  ? "purchased"
                                  : "not-purchased"
                              }
                            >
                              <div className="package_block_header">
                                <h4>Titan De Prestegio </h4>
                              </div>
                              <div className="package_content">
                                <div className="package_content_inner">
                                  <img
                                    src={MyRankIcon5}
                                    className="rank_icon_box"
                                    alt="MyRankIcon5"
                                  />
                                  <h4>$5,000</h4>
                                  <button
                                    href="#"
                                    className="new_joining_btn purchasesection"
                                    style={{
                                      display:
                                        proPoolData.purchasePoolFlag[4] === 1
                                          ? "none"
                                          : "block",
                                    }}
                                    onClick={(e) => {
                                      e.preventDefault();
                                      PreAuthorizeUpgrade(4, 5000);
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
                                        Remaining Months:
                                        {proPoolData.remainingMonth[4]}
                                      </span>
                                      <span className="remainingmonth">
                                        <FaSpinner className="fa-solid loading_sapn" />
                                      </span>
                                    </li>
                                    <li>
                                      <span className="d-flex">
                                        <FaCalendarAlt className="fa-regular" />
                                        Claimed Months:
                                        {proPoolData.claimedMonth[4]}
                                      </span>
                                      <span className="claimedmonth">
                                        <FaSpinner className="fa-solid loading_sapn" />
                                      </span>
                                    </li>
                                    <li>
                                      <span className="d-flex">
                                        <FaCalendarAlt className="fa-regular" />
                                        Remaining Days For Claim:
                                        {proPoolData.remainingDays[4]}
                                      </span>
                                      <span className="remainingdays">
                                        <FaSpinner className="fa-solid loading_sapn" />
                                      </span>
                                    </li>
                                    <li
                                      className="claimsection"
                                      style={{
                                        display: proPoolData.claimable[4]
                                          ? "block"
                                          : "none",
                                      }}
                                    >
                                      <button
                                        href="#"
                                        className="new_joining_btn"
                                        onClick={(e) => {
                                          e.preventDefault();
                                          ClaimProMonthlyBonus(4);
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
                              id="divpropoolsix"
                              className={
                                proPoolData.purchasePoolFlag[5] === 1
                                  ? "purchased"
                                  : "not-purchased"
                              }
                            >
                              <div className="package_block_header">
                                <h4>Tesoro Infinito </h4>
                              </div>
                              <div className="package_content">
                                <div className="package_content_inner">
                                  <img
                                    src={MyRankIcon6}
                                    className="rank_icon_box"
                                    alt="MyRankIcon6"
                                  />
                                  <h4>$10,000</h4>
                                  <button
                                    href="#"
                                    className="new_joining_btn purchasesection"
                                    style={{
                                      display:
                                        proPoolData.purchasePoolFlag[5] === 1
                                          ? "none"
                                          : "block",
                                    }}
                                    onClick={(e) => {
                                      e.preventDefault();
                                      PreAuthorizeUpgrade(5, 10000);
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
                                        Remaining Months:
                                        {proPoolData.remainingMonth[5]}
                                      </span>
                                      <span className="remainingmonth">
                                        <FaSpinner className="fa-solid loading_sapn" />
                                      </span>
                                    </li>
                                    <li>
                                      <span className="d-flex">
                                        <FaCalendarAlt className="fa-regular" />
                                        Claimed Months:
                                        {proPoolData.claimedMonth[5]}
                                      </span>
                                      <span className="claimedmonth">
                                        <FaSpinner className="fa-solid loading_sapn" />
                                      </span>
                                    </li>
                                    <li>
                                      <span className="d-flex">
                                        <FaCalendarAlt className="fa-regular" />
                                        Remaining Days For Claim:
                                        {proPoolData.remainingDays[5]}
                                      </span>
                                      <span className="remainingdays">
                                        <FaSpinner className="fa-solid loading_sapn" />
                                      </span>
                                    </li>
                                    <li
                                      className="claimsection"
                                      style={{
                                        display: proPoolData.claimable[5]
                                          ? "block"
                                          : "none",
                                      }}
                                    >
                                      <button
                                        href="#"
                                        className="new_joining_btn"
                                        onClick={(e) => {
                                          e.preventDefault();
                                          ClaimProMonthlyBonus(5);
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
                              id="divpropoolseven"
                              className={
                                proPoolData.purchasePoolFlag[6] === 1
                                  ? "purchased"
                                  : "not-purchased"
                              }
                            >
                              <div className="package_block_header">
                                <h4>Poderio Selestial</h4>
                              </div>
                              <div className="package_content">
                                <div className="package_content_inner">
                                  <img
                                    src={MyRankIcon7}
                                    className="rank_icon_box"
                                    alt="MyRankIcon7"
                                  />
                                  <h4>$15,000 </h4>
                                  <button
                                    href="#"
                                    className="new_joining_btn purchasesection"
                                    style={{
                                      display:
                                        proPoolData.purchasePoolFlag[6] === 1
                                          ? "none"
                                          : "block",
                                    }}
                                    onClick={(e) => {
                                      e.preventDefault();
                                      PreAuthorizeUpgrade(6, 15000);
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
                                        Remaining Months:
                                        {proPoolData.remainingMonth[6]}
                                      </span>
                                      <span className="remainingmonth">
                                        <FaSpinner className="fa-solid loading_sapn" />
                                      </span>
                                    </li>
                                    <li>
                                      <span className="d-flex">
                                        <FaCalendarAlt className="fa-regular" />
                                        Claimed Months:
                                        {proPoolData.claimedMonth[6]}
                                      </span>
                                      <span className="claimedmonth">
                                        <FaSpinner className="fa-solid loading_sapn" />
                                      </span>
                                    </li>
                                    <li>
                                      <span className="d-flex">
                                        <FaCalendarAlt className="fa-regular" />
                                        Remaining Days For Claim:
                                        {proPoolData.remainingDays[6]}
                                      </span>
                                      <span className="remainingdays">
                                        <FaSpinner className="fa-solid loading_sapn" />
                                      </span>
                                    </li>
                                    <li
                                      className="claimsection"
                                      style={{
                                        display: proPoolData.claimable[6]
                                          ? "block"
                                          : "none",
                                      }}
                                    >
                                      <button
                                        href="#"
                                        className="new_joining_btn"
                                        onClick={(e) => {
                                          e.preventDefault();
                                          ClaimProMonthlyBonus(6);
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
                              id="divpropooleight"
                              className={
                                proPoolData.purchasePoolFlag[7] === 1
                                  ? "purchased"
                                  : "not-purchased"
                              }
                            >
                              <div className="package_block_header">
                                <h4>Leyanda Immortal </h4>
                              </div>
                              <div className="package_content">
                                <div className="package_content_inner">
                                  <img
                                    src={MyRankIcon8}
                                    className="rank_icon_box"
                                    alt="MyRankIcon8"
                                  />
                                  <h4>$20,000</h4>
                                  <button
                                    href="#"
                                    className="new_joining_btn purchasesection"
                                    style={{
                                      display:
                                        proPoolData.purchasePoolFlag[7] === 1
                                          ? "none"
                                          : "block",
                                    }}
                                    onClick={(e) => {
                                      e.preventDefault();
                                      PreAuthorizeUpgrade(7, 20000);
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
                                        Remaining Months:
                                        {proPoolData.remainingMonth[7]}
                                      </span>
                                      <span className="remainingmonth">
                                        <FaSpinner className="fa-solid loading_sapn" />
                                      </span>
                                    </li>
                                    <li>
                                      <span className="d-flex">
                                        <FaCalendarAlt className="fa-regular" />
                                        Claimed Months:
                                        {proPoolData.claimedMonth[7]}
                                      </span>
                                      <span className="claimedmonth">
                                        <FaSpinner className="fa-solid loading_sapn" />
                                      </span>
                                    </li>
                                    <li>
                                      <span className="d-flex">
                                        <FaCalendarAlt className="fa-regular" />
                                        Remaining Days For Claim:
                                        {proPoolData.remainingDays[7]}
                                      </span>
                                      <span className="remainingdays">
                                        <FaSpinner className="fa-solid loading_sapn" />
                                      </span>
                                    </li>
                                    <li
                                      className="claimsection"
                                      style={{
                                        display: proPoolData.claimable[7]
                                          ? "block"
                                          : "none",
                                      }}
                                    >
                                      <button
                                        href="#"
                                        className="new_joining_btn"
                                        onClick={(e) => {
                                          e.preventDefault();
                                          ClaimProMonthlyBonus(7);
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
                      alt="Border"
                    />
                    <img
                      className="position-pic r-t"
                      src={Border}
                      alt="Border"
                    />
                    <img
                      className="position-pic l-b"
                      src={Border}
                      alt="Border"
                    />
                    <img
                      className="position-pic r-b"
                      src={Border}
                      alt="Border"
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

export default OctaDeElClassico;
