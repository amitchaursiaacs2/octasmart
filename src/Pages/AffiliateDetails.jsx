import React from "react";
import { FaChevronDown, FaUserFriends, FaWallet } from "react-icons/fa";
import { FaSackDollar } from "react-icons/fa6";

const AffiliateDetails = ({
  account,
  referredByAddress,
  bscUsdBalance,
  bnbBalance,
  UsdtPurchasedAmount,
  totalCapping,
  noofdirect,
  levelEligibility,
  directTeamInvestment,
  allTeamInvestment,
  rankIcon,
}) => {
  const formatBalance = (balance) => parseFloat(balance).toFixed(8);

  return (
    <>
      <section className="services-one">
        <div className="container">
          <div className="services__title">
            <div className="section-title">
              <h2>Affiliate Details</h2>
              <a href="#" className="div-collapse-btn" id="user-details">
                <FaChevronDown className="fa-solid" />
              </a>
            </div>
          </div>
          <div className="row card-row">
            {/* Connected Wallet Card */}
            <div className="col-lg-6 col-md-6 col-sm-6">
              <div className="dapp_card level-item bordered">
                <div className="bordered__inner bordered--double_angled bordered--bg_top">
                  <div className="dapp_card_icon">
                    <FaWallet />
                  </div>
                  <div className="level__inner">
                    <div className="level-item__digit title">
                      <span id="spanfullwalletaddress">
                        {account ? `${account.substring()}` : "0x"}
                      </span>
                    </div>
                  </div>
                  <div className="level-item__title title title--grad">
                    Connected Wallet
                  </div>
                </div>
                <div className="shine" />
                <div className="background">
                  <div className="tiles">
                    <div className="tile tile-1" />
                    <div className="tile tile-2" />
                    <div className="tile tile-3" />
                    <div className="tile tile-4" />
                    <div className="tile tile-5" />
                    <div className="tile tile-6" />
                    <div className="tile tile-7" />
                    <div className="tile tile-8" />
                    <div className="tile tile-9" />
                    <div className="tile tile-10" />
                    <div className="tile tile-11" />
                    <div className="tile tile-12" />
                  </div>
                  <div className="line line-1" />
                  <div className="line line-2" />
                  <div className="line line-3" />
                </div>
              </div>
            </div>
            {/* Reffered By Card */}
            <div className="col-lg-6 col-md-6 col-sm-6">
              <div className="dapp_card level-item bordered">
                <div className=" bordered__inner bordered--double_angled bordered--bg_top">
                  <div className="dapp_card_icon">
                    <FaUserFriends />
                  </div>
                  <div className="level__inner">
                    <div className="level-item__digit title">
                      <span id="spanreferredby">
                        {referredByAddress
                          ? `${referredByAddress.substring()}`
                          : "0x0000000000000000000000000000000000000000"}
                      </span>
                    </div>
                  </div>
                  <div className="level-item__title title title--grad">
                    Reffered By
                  </div>
                </div>
                <div className="shine" />
                <div className="background">
                  <div className="tiles">
                    <div className="tile tile-1" />
                    <div className="tile tile-2" />
                    <div className="tile tile-3" />
                    <div className="tile tile-4" />
                    <div className="tile tile-5" />
                    <div className="tile tile-6" />
                    <div className="tile tile-7" />
                    <div className="tile tile-8" />
                    <div className="tile tile-9" />
                    <div className="tile tile-10" />
                    <div className="tile tile-11" />
                    <div className="tile tile-12" />
                  </div>
                  <div className="line line-1" />
                  <div className="line line-2" />
                  <div className="line line-3" />
                </div>
              </div>
            </div>
          </div>
          {/* Affiliate Details CARDS/md-4 */}
          <div className="row card-row">
            {/* Available BSC-USD In Wallet Card */}
            <div className="col-lg-4 col-md-4 col-sm-6">
              <div className="dapp_card level-item bordered">
                <div className="bordered__inner bordered--double_angled bordered--bg_top">
                  <div className="dapp_card_icon">
                    <FaSackDollar />
                  </div>
                  <div className="level__inner">
                    <div className="level-item__digit title">
                      <span id="spanavailablebscusd">
                        {bscUsdBalance
                          ? `${formatBalance(bscUsdBalance)} USDT`
                          : "0.00000000 USDT"}
                      </span>
                    </div>
                  </div>
                  <div className="level-item__title title title--grad">
                    Available BSC-USD In Wallet
                  </div>
                </div>
                <div className="shine" />
                <div className="background">
                  <div className="tiles">
                    <div className="tile tile-1" />
                    <div className="tile tile-2" />
                    <div className="tile tile-3" />
                    <div className="tile tile-4" />
                    <div className="tile tile-5" />
                    <div className="tile tile-6" />
                    <div className="tile tile-7" />
                    <div className="tile tile-8" />
                    <div className="tile tile-9" />
                    <div className="tile tile-10" />
                    <div className="tile tile-11" />
                    <div className="tile tile-12" />
                  </div>
                  <div className="line line-1" />
                  <div className="line line-2" />
                  <div className="line line-3" />
                </div>
              </div>
            </div>
            {/* Available BNB In Wallet Card */}
            <div className="col-lg-4 col-md-4 col-sm-6">
              <div className="dapp_card level-item bordered">
                <div className="bordered__inner bordered--double_angled bordered--bg_top">
                  <div className="dapp_card_icon">
                    <FaSackDollar />
                  </div>
                  <div className="level__inner">
                    <div className="level-item__digit title">
                      <span className="spanbnbbalance">
                        {bnbBalance !== null
                          ? `${formatBalance(bnbBalance)} BNB`
                          : "0.00000000 BNB"}
                      </span>
                    </div>
                  </div>
                  <div className="level-item__title title title--grad">
                    Available BNB In Wallet
                  </div>
                </div>
                <div className="shine" />
                <div className="background">
                  <div className="tiles">
                    <div className="tile tile-1" />
                    <div className="tile tile-2" />
                    <div className="tile tile-3" />
                    <div className="tile tile-4" />
                    <div className="tile tile-5" />
                    <div className="tile tile-6" />
                    <div className="tile tile-7" />
                    <div className="tile tile-8" />
                    <div className="tile tile-9" />
                    <div className="tile tile-10" />
                    <div className="tile tile-11" />
                    <div className="tile tile-12" />
                  </div>
                  <div className="line line-1" />
                  <div className="line line-2" />
                  <div className="line line-3" />
                </div>
              </div>
            </div>
            {/* My Investment Card */}
            <div className="col-lg-4 col-md-4 col-sm-6">
              <div className="dapp_card level-item bordered">
                <div className="bordered__inner bordered--double_angled bordered--bg_top">
                  <div className="dapp_card_icon">
                    <FaSackDollar />
                  </div>
                  <div className="level__inner">
                    <div className="level-item__digit title">
                      <span id="spanmyinvestment">
                        {UsdtPurchasedAmount !== null
                          ? `${formatBalance(UsdtPurchasedAmount)} USDT`
                          : "0.00000000 USDT"}
                      </span>
                    </div>
                  </div>
                  <div className="level-item__title title title--grad">
                    My Investment
                  </div>
                </div>
                <div className="shine" />
                <div className="background">
                  <div className="tiles">
                    <div className="tile tile-1" />
                    <div className="tile tile-2" />
                    <div className="tile tile-3" />
                    <div className="tile tile-4" />
                    <div className="tile tile-5" />
                    <div className="tile tile-6" />
                    <div className="tile tile-7" />
                    <div className="tile tile-8" />
                    <div className="tile tile-9" />
                    <div className="tile tile-10" />
                    <div className="tile tile-11" />
                    <div className="tile tile-12" />
                  </div>
                  <div className="line line-1" />
                  <div className="line line-2" />
                  <div className="line line-3" />
                </div>
              </div>
            </div>
            {/* My Earning Capping Card */}
            <div className="col-lg-4 col-md-4 col-sm-6">
              <div className="dapp_card level-item bordered">
                <div className="bordered__inner bordered--double_angled bordered--bg_top">
                  <div className="dapp_card_icon">
                    <FaSackDollar />
                  </div>
                  <div className="level__inner">
                    <div className="level-item__digit title">
                      <span id="spanmyearningcapping">
                        {totalCapping !== null
                          ? `${formatBalance(totalCapping)} USDT`
                          : "0.00000000 USDT"}
                      </span>
                    </div>
                  </div>
                  <div className="level-item__title title title--grad">
                    My Earning Capping
                  </div>
                </div>
                <div className="shine" />
                <div className="background">
                  <div className="tiles">
                    <div className="tile tile-1" />
                    <div className="tile tile-2" />
                    <div className="tile tile-3" />
                    <div className="tile tile-4" />
                    <div className="tile tile-5" />
                    <div className="tile tile-6" />
                    <div className="tile tile-7" />
                    <div className="tile tile-8" />
                    <div className="tile tile-9" />
                    <div className="tile tile-10" />
                    <div className="tile tile-11" />
                    <div className="tile tile-12" />
                  </div>
                  <div className="line line-1" />
                  <div className="line line-2" />
                  <div className="line line-3" />
                </div>
              </div>
            </div>
            {/* No of Direct Referral Card */}
            <div className="col-lg-4 col-md-4 col-sm-6">
              <div className="dapp_card level-item bordered">
                <div className="bordered__inner bordered--double_angled bordered--bg_top">
                  <div className="dapp_card_icon">
                    <FaSackDollar />
                  </div>
                  <div className="level__inner">
                    <div className="level-item__digit title">
                      <span id="spannoofdirectreferral">
                        {noofdirect !== null
                          ? `${noofdirect} Referral`
                          : "No Refer"}
                      </span>
                    </div>
                  </div>
                  <div className="level-item__title title title--grad">
                    No of Direct Referral
                  </div>
                </div>
                <div className="shine" />
                <div className="background">
                  <div className="tiles">
                    <div className="tile tile-1" />
                    <div className="tile tile-2" />
                    <div className="tile tile-3" />
                    <div className="tile tile-4" />
                    <div className="tile tile-5" />
                    <div className="tile tile-6" />
                    <div className="tile tile-7" />
                    <div className="tile tile-8" />
                    <div className="tile tile-9" />
                    <div className="tile tile-10" />
                    <div className="tile tile-11" />
                    <div className="tile tile-12" />
                  </div>
                  <div className="line line-1" />
                  <div className="line line-2" />
                  <div className="line line-3" />
                </div>
              </div>
            </div>
            {/* Level Eligibility Till Card */}
            <div className="col-lg-4 col-md-4 col-sm-6">
              <div className="dapp_card level-item bordered">
                <div className="bordered__inner bordered--double_angled bordered--bg_top">
                  <div className="dapp_card_icon">
                    <FaSackDollar />
                  </div>
                  <div className="level__inner">
                    <div className="level-item__digit title">
                      <span id="spaneligibleforlevel">
                        {levelEligibility !== null
                          ? `${levelEligibility} Level`
                          : "No Level"}
                      </span>
                    </div>
                  </div>
                  <div className="level-item__title title title--grad">
                    Level Eligibility Till
                  </div>
                </div>
                <div className="shine" />
                <div className="background">
                  <div className="tiles">
                    <div className="tile tile-1" />
                    <div className="tile tile-2" />
                    <div className="tile tile-3" />
                    <div className="tile tile-4" />
                    <div className="tile tile-5" />
                    <div className="tile tile-6" />
                    <div className="tile tile-7" />
                    <div className="tile tile-8" />
                    <div className="tile tile-9" />
                    <div className="tile tile-10" />
                    <div className="tile tile-11" />
                    <div className="tile tile-12" />
                  </div>
                  <div className="line line-1" />
                  <div className="line line-2" />
                  <div className="line line-3" />
                </div>
              </div>
            </div>
            {/* Direct Team Investment Card */}
            <div className="col-lg-4 col-md-4 col-sm-6">
              <div className="dapp_card level-item bordered">
                <div className="bordered__inner bordered--double_angled bordered--bg_top">
                  <div className="dapp_card_icon">
                    <FaSackDollar />
                  </div>
                  <div className="level__inner">
                    <div className="level-item__digit title">
                      <span id="spandirectteaminvestment">
                        {directTeamInvestment !== null
                          ? `${formatBalance(directTeamInvestment)} USDT`
                          : "0.00000000 USDT"}
                      </span>
                    </div>
                  </div>
                  <div className="level-item__title title title--grad">
                    Direct Team Investment
                  </div>
                </div>
                <div className="shine" />
                <div className="background">
                  <div className="tiles">
                    <div className="tile tile-1" />
                    <div className="tile tile-2" />
                    <div className="tile tile-3" />
                    <div className="tile tile-4" />
                    <div className="tile tile-5" />
                    <div className="tile tile-6" />
                    <div className="tile tile-7" />
                    <div className="tile tile-8" />
                    <div className="tile tile-9" />
                    <div className="tile tile-10" />
                    <div className="tile tile-11" />
                    <div className="tile tile-12" />
                  </div>
                  <div className="line line-1" />
                  <div className="line line-2" />
                  <div className="line line-3" />
                </div>
              </div>
            </div>
            {/* All Team Investment Card */}
            <div className="col-lg-4 col-md-4 col-sm-6">
              <div className="dapp_card level-item bordered">
                <div className="bordered__inner bordered--double_angled bordered--bg_top">
                  <div className="dapp_card_icon">
                    <FaSackDollar />
                  </div>
                  <div className="level__inner">
                    <div className="level-item__digit title">
                      <span id="spanallteaminvestment">
                        {allTeamInvestment !== null
                          ? `${formatBalance(allTeamInvestment)} USDT`
                          : "0.00000000 USDT"}
                      </span>
                    </div>
                  </div>
                  <div className="level-item__title title title--grad">
                    All Team Investment
                  </div>
                </div>
                <div className="shine" />
                <div className="background">
                  <div className="tiles">
                    <div className="tile tile-1" />
                    <div className="tile tile-2" />
                    <div className="tile tile-3" />
                    <div className="tile tile-4" />
                    <div className="tile tile-5" />
                    <div className="tile tile-6" />
                    <div className="tile tile-7" />
                    <div className="tile tile-8" />
                    <div className="tile tile-9" />
                    <div className="tile tile-10" />
                    <div className="tile tile-11" />
                    <div className="tile tile-12" />
                  </div>
                  <div className="line line-1" />
                  <div className="line line-2" />
                  <div className="line line-3" />
                </div>
              </div>
            </div>
            {/* My Rank Card */}
            <div className="col-lg-4 col-md-4 col-sm-6">
              <div className="dapp_card level-item bordered">
                <div className="bordered__inner bordered--double_angled bordered--bg_top">
                  <div className="dapp_card_icon">
                    <img src={rankIcon} alt="Rank-Image" id="myrankicon" />
                  </div>
                  <div className="level__inner">
                    <div className="level-item__digit title">
                      <span id="spanrankname" />
                    </div>
                  </div>
                  <div className="level-item__title title title--grad">
                    My Rank
                  </div>
                </div>
                <div className="shine" />
                <div className="background">
                  <div className="tiles">
                    <div className="tile tile-1" />
                    <div className="tile tile-2" />
                    <div className="tile tile-3" />
                    <div className="tile tile-4" />
                    <div className="tile tile-5" />
                    <div className="tile tile-6" />
                    <div className="tile tile-7" />
                    <div className="tile tile-8" />
                    <div className="tile tile-9" />
                    <div className="tile tile-10" />
                    <div className="tile tile-11" />
                    <div className="tile tile-12" />
                  </div>
                  <div className="line line-1" />
                  <div className="line line-2" />
                  <div className="line line-3" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AffiliateDetails;
