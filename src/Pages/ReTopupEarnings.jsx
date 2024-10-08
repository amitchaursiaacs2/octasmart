import React from "react";
import new_joiner from "../assets/img/join-now.png";
import DiamondAlgorithm from "./BasicPackages/DiamondAlgorithm";
import CappingChart from "./BasicPackages/CappingChart";

const ReTopupEarnings = ({ PreAuthorizeReTopupClick, isReTopupVisible }) => {
  return (
    <>
      <section className="services-two-2">
        <div className="container">
          <div className="row">
            {isReTopupVisible && (
              <div id="sectionforretopup">
                <div className="section-title">
                  <span className="subtitle text-center">
                    Empowerment, Innovation, and Connection
                  </span>
                  <h2 className="title-line-center title text-center ">
                    Re Topup for higher earnings caps: Power up your potential
                    in the Octa Smart Community !
                  </h2>
                </div>
                <div className="col-md-12 mx-auto">
                  <div id="invest">
                    <div className="new_joining">
                      <img
                        src={new_joiner}
                        className="new_joining_img"
                        alt="new_joiner"
                      />
                      <div className="row">
                        <div className="col-md-6 mb-4">
                          <div className="section-title">
                            <h2 className="title-line-center title package_main_heading pb-0t">
                              Basic Packages
                            </h2>
                          </div>
                        </div>
                        <div className="col-md-6 mb-4 md:text-right stat-btn ">
                          <DiamondAlgorithm />
                          <CappingChart />
                        </div>
                      </div>

                      <div className="all-join-btn">
                        <button
                          href="#"
                          className="new_joining_btn"
                          onClick={(e) => {
                            e.preventDefault();
                            PreAuthorizeReTopupClick(20, 0);
                          }}
                        >
                          $20 || Re Topup
                          <div className="hover_shape_wrapper">
                            <span className="btn_hover_shape btn_hover_shape-1" />
                            <span className="btn_hover_shape btn_hover_shape-2" />
                            <span className="btn_hover_shape btn_hover_shape-3" />
                          </div>
                        </button>

                        <button
                          href="#"
                          className="new_joining_btn"
                          onClick={(e) => {
                            e.preventDefault();
                            PreAuthorizeReTopupClick(60, 1);
                          }}
                        >
                          $60 || Re Topup
                          <div className="hover_shape_wrapper">
                            <span className="btn_hover_shape btn_hover_shape-1" />
                            <span className="btn_hover_shape btn_hover_shape-2" />
                            <span className="btn_hover_shape btn_hover_shape-3" />
                          </div>
                        </button>

                        <button
                          href="#"
                          className="new_joining_btn"
                          onClick={(e) => {
                            e.preventDefault();
                            PreAuthorizeReTopupClick(120, 2);
                          }}
                        >
                          $120 || Re Topup
                          <div className="hover_shape_wrapper">
                            <span className="btn_hover_shape btn_hover_shape-1" />
                            <span className="btn_hover_shape btn_hover_shape-2" />
                            <span className="btn_hover_shape btn_hover_shape-3" />
                          </div>
                        </button>

                        <button
                          href="#"
                          className="new_joining_btn"
                          onClick={(e) => {
                            e.preventDefault();
                            PreAuthorizeReTopupClick(240, 3);
                          }}
                        >
                          $240 || Re Topup
                          <div className="hover_shape_wrapper">
                            <span className="btn_hover_shape btn_hover_shape-1" />
                            <span className="btn_hover_shape btn_hover_shape-2" />
                            <span className="btn_hover_shape btn_hover_shape-3" />
                          </div>
                        </button>

                        <button
                          href="#"
                          className="new_joining_btn"
                          onClick={(e) => {
                            e.preventDefault();
                            PreAuthorizeReTopupClick(520, 4);
                          }}
                        >
                          $520 || Re Topup
                          <div className="hover_shape_wrapper">
                            <span className="btn_hover_shape btn_hover_shape-1" />
                            <span className="btn_hover_shape btn_hover_shape-2" />
                            <span className="btn_hover_shape btn_hover_shape-3" />
                          </div>
                        </button>
                      </div>

                      <div className="sc-dd50ab1d-0 fyGBAC card-hover-wrapper">
                        <span className="hover-shape hover-shape-left hover-shape-1" />
                        <span className="hover-shape hover-shape-left hover-shape-2" />
                        <span className="hover-shape hover-shape-right hover-shape-3" />
                        <span className="hover-shape hover-shape-right hover-shape-4" />
                      </div>
                    </div>
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

export default ReTopupEarnings;
