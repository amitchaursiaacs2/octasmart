import React from "react";
import new_joiner from "../assets/img/join-now.png";
import { FaUsers } from "react-icons/fa";

const JoinOcta = ({ PreAuthorize, isJoined }) => {
  return (
    <>
      {!isJoined && (
        <section className="services-two-2" id="sectionforjoining">
          <div className="container">
            <div className="section-title">
              <span className="subtitle text-center">
                Empowerment, Innovation, and Connection
              </span>
              <h2 className="title-line-center title text-center ">
                Join the Octa Smart Community today !
              </h2>
            </div>
            <div className="row">
              <div className="col-md-7 mx-auto">
                <div id="invest">
                  <div className="new_joining">
                    <img
                      src={new_joiner}
                      className="new_joining_img"
                      alt="new_joining"
                    />
                    <div className="input-group bonus_input my-3">
                      <span className="input-group-text">
                        <FaUsers />
                      </span>
                      <input
                        type="text"
                        placeholder="Sponsor Address"
                        id="refferedby"
                        className="form-control"
                      />
                    </div>
                    <div className="text-center">
                      <button
                        className="new_joining_btn"
                        onClick={(e) => {
                          e.preventDefault();
                          PreAuthorize(20);
                        }}
                      >
                        $20 || Join Now
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
          </div>
        </section>
      )}
    </>
  );
};

export default JoinOcta;
