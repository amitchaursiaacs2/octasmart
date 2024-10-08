import React, { useEffect } from "react";
import { FaWallet, FaBars } from "react-icons/fa";
import logo from "../assets/img/logo.png";

const Header = ({ account, bnbBalance, isConnected, connectWallet }) => {
  const formatBalance = (balance) => parseFloat(balance).toFixed(8);
  // useEffect(() => {
  //   connectWallet();
  // });

  return (
    <header className="header">
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-lg-2">
            <div className="header__logo">
              <a href="/">
                <img src={logo} alt="logo" />
              </a>
            </div>
          </div>
          <div className="col-lg-10">
            <div className="header__nav__option">
              <nav className="header__nav__menu mobile-menu">
                <ul className="stat-btn">
                  <li>
                    <button
                      href="https://bscscan.com/address/0xFb048f1D750f96944593e9CB01650953025Edf46"
                      className="new_joining_btn"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Smart Contract
                      <div className="hover_shape_wrapper">
                        <span className="btn_hover_shape btn_hover_shape-1" />
                        <span className="btn_hover_shape btn_hover_shape-2" />
                        <span className="btn_hover_shape btn_hover_shape-3" />
                      </div>
                    </button>
                  </li>
                  {!isConnected && (
                    <>
                      <li className="nav-item" id="navconnect">
                        <button
                          href="#"
                          className="new_joining_btn"
                          onClick={connectWallet}
                        >
                          <div className="hover_shape_wrapper">
                            <span className="btn_hover_shape btn_hover_shape-1" />
                            <span className="btn_hover_shape btn_hover_shape-2" />
                            <span className="btn_hover_shape btn_hover_shape-3" />
                          </div>
                          <span id="spanwalletaddress">Connect Wallet</span>
                        </button>
                      </li>
                    </>
                  )}
                  {isConnected && (
                    <>
                      <li className="nav-item" id="navwallet">
                        <button href="#" className="new_joining_btn">
                          <FaWallet className="fas ml-2" />
                          <span id="spanshortwalletaddress">
                            {account
                              ? `${account.substring(
                                  0,
                                  4
                                )}...${account.substring(account.length - 4)}`
                              : "0.00000000"}
                          </span>
                          <div className="hover_shape_wrapper">
                            <span className="btn_hover_shape btn_hover_shape-1" />
                            <span className="btn_hover_shape btn_hover_shape-2" />
                            <span className="btn_hover_shape btn_hover_shape-3" />
                          </div>
                        </button>
                      </li>
                      <li className="nav-item" id="navavailablematic">
                        <button href="#" className="new_joining_btn">
                          <FaWallet className="fas ml-2" /> 
                          <span className="spanbnbbalance">
                            {bnbBalance !== null
                              ? `${formatBalance(bnbBalance)} BNB`
                              : "0.00000000 BNB"}
                          </span>
                          <div className="hover_shape_wrapper">
                            <span className="btn_hover_shape btn_hover_shape-1" />
                            <span className="btn_hover_shape btn_hover_shape-2" />
                            <span className="btn_hover_shape btn_hover_shape-3" />
                          </div>
                        </button>
                      </li>
                    </>
                  )}
                </ul>
              </nav>
            </div>
          </div>
        </div>
        <div id="mobile-menu-wrap" />
      </div>
      <a href="#" className="menu-btn">
        <FaBars className="fa-solid" />
      </a>
    </header>
  );
};

export default Header;
