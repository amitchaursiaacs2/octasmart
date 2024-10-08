import React from "react";
import { FaQuestionCircle, FaUserFriends, FaUsers } from "react-icons/fa";
import diamond_icon from "../assets/img/diamond-icon.png";

const YourBonusSummary = ({
  userId,
  referralBonus,
  levelbonus,
  rankRewardbonus,
  monthlybonus,
  noofdiamond,
  directdimaond,
  teamdimaond,
  diamondworth,
  percent,
  chartRef,
  myTeamData,
  levelDownlineStats,
  rankId,
  SellDiamond,
}) => {
  const opendiamanteClick = () => {
    window.open("/diamante", "_blank");
  };
  const formatBalance = (balance) => parseFloat(balance).toFixed(8);
  // Calculate rotation degrees
  const rotation = (percent / 100) * 360;

  return (
    <>
      <section className="services-three-2">
        <div className="container">
          <div className="services__title">
            <div className="section-title">
              <span className="userid">
                User Id :
                <b id="spanuserId">{userId !== null ? ` ${userId}` : ""}</b>
              </span>
              <h2>Your Bonus Summary</h2>
            </div>
          </div>
          <div className="row card-row">
            {/* Referral Bonus Card */}
            <div className="col-lg-6 col-md-3 col-sm-6">
              <div className="dapp_card level-item">
                <div className="dapp_card_icon">
                  <FaUserFriends />
                </div>
                <div className="level__inner">
                  <div className="level-item__digit title">
                    <span id="spanreferralbonus">
                      {referralBonus
                        ? `${formatBalance(referralBonus)} USDT`
                        : "0.00000000 USDT"}
                    </span>
                  </div>
                </div>
                <div className="user-value">Referral Bonus</div>
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
            {/* Level Bonus Card */}
            <div className="col-lg-6 col-md-3 col-sm-6">
              <div className="dapp_card level-item">
                <div className="dapp_card_icon">
                  <FaUsers />
                </div>
                <div className="level__inner">
                  <div className="level-item__digit title">
                    <span id="spanlevelbonus">
                      {levelbonus
                        ? `${formatBalance(levelbonus)} USDT`
                        : "0.00000000 USDT"}
                    </span>
                  </div>
                </div>
                <div className="user-value">Level Bonus</div>
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
            {/* Rank & Reward Bonus Card */}
            <div className="col-lg-4 col-md-3 col-sm-6">
              <div className="dapp_card level-item">
                <div className="dapp_card_icon">
                  <FaUsers />
                </div>
                <div className="level__inner">
                  <div className="level-item__digit title">
                    <span id="spanrankrewardbonus">
                      {rankRewardbonus
                        ? `${formatBalance(rankRewardbonus)} USDT`
                        : "0.00000000 USDT"}
                    </span>
                  </div>
                </div>
                <div className="user-value">Rank &amp; Reward Bonus</div>
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
            {/* Monthly Bonus Card */}
            <div className="col-lg-4 col-md-3 col-sm-6">
              <div className="dapp_card level-item">
                <div className="dapp_card_icon">
                  <FaUsers />
                </div>
                <div className="level__inner">
                  <div className="level-item__digit title">
                    <span id="spanmonthlybonus">
                      {monthlybonus
                        ? `${formatBalance(monthlybonus)} USDT`
                        : "0.00000000 USDT"}
                    </span>
                  </div>
                </div>
                <div className="user-value">Monthly Bonus</div>
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
            {/* Number of Diamond Card */}
            <div className="col-lg-4 col-md-3 col-sm-6">
              <div className="dapp_card level-item">
                <div className="dapp_card_icon">
                  <img
                    src={diamond_icon}
                    className="diamond-img"
                    alt="diamond_icon"
                  />
                </div>
                <div className="level__inner">
                  <div className="level-item__digit title">
                    <span id="noofdiamond">
                      {noofdiamond !== null ? `${noofdiamond}` : "0"}
                    </span>
                  </div>
                </div>
                <div className="user-value">Number of Diamond</div>
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
            {/* Direct For Dimaond Card */}
            <div className="col-lg-4 col-md-3 col-sm-4">
              <div className="dapp_card level-item">
                <div className="dapp_card_icon">
                  <img
                    src={diamond_icon}
                    className="diamond-img"
                    alt="diamond_icon"
                  />
                </div>
                <div className="level__inner">
                  <div className="level-item__digit title">
                    <span id="directfordiamond">
                      {directdimaond !== null ? `${directdimaond}` : "0"}
                    </span>
                  </div>
                </div>
                <div className="user-value">Direct For Dimaond</div>
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
            {/* Team For Dimaond Card */}
            <div className="col-lg-4 col-md-3 col-sm-4">
              <div className="dapp_card level-item">
                <div className="dapp_card_icon">
                  <img
                    src={diamond_icon}
                    className="diamond-img"
                    alt="diamond_icon"
                  />
                </div>
                <div className="level__inner">
                  <div className="level-item__digit title">
                    <span id="teamfordiamond">
                      {teamdimaond !== null ? `${teamdimaond}` : "0"}
                    </span>
                  </div>
                </div>
                <div className="user-value">Team For Dimaond</div>
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
            {/* Diamond Worth Card */}
            <div className="col-lg-4 col-md-4 col-sm-4">
              <div className="dapp_card level-item">
                <div className="dapp_card_icon">
                  <img
                    src={diamond_icon}
                    className="diamond-img"
                    alt="diamond_icon"
                  />
                </div>
                <div className=" claim-diamond-btn">
                  <button
                    href="#"
                    className="new_joining_btn"
                    onClick={(e) => {
                      e.preventDefault();
                      SellDiamond();
                    }}
                  >
                    <div className="hover_shape_wrapper">
                      <span className="btn_hover_shape btn_hover_shape-1" />
                      <span className="btn_hover_shape btn_hover_shape-2" />
                      <span className="btn_hover_shape btn_hover_shape-3" />
                    </div>
                    Claim Now
                  </button>
                  <button
                    className="new_joining_btn"
                    onClick={(e) => {
                      e.preventDefault();
                      opendiamanteClick();
                    }}
                  >
                    <div className="hover_shape_wrapper">
                      <span className="btn_hover_shape btn_hover_shape-1" />
                      <span className="btn_hover_shape btn_hover_shape-2" />
                      <span className="btn_hover_shape btn_hover_shape-3" />
                    </div>
                    <FaQuestionCircle />
                  </button>
                </div>
                <div className="level__inner">
                  <div className="level-item__digit title">
                    <span id="diamondworth">
                      {diamondworth
                        ? `${formatBalance(diamondworth)} USDT`
                        : "0.00000000 USDT"}
                    </span>
                  </div>
                </div>
                <div className="user-value">Diamond Worth</div>
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
            {/* Capping Elapsed Card */}
            <div className="col-md-4">
              <div className="dapp_card dapp_card_chart level-item">
                <div className="level__inner text-center">
                  <div className="services__title">
                    <div className="section-title">
                      <h2>Capping Elapsed</h2>
                    </div>
                  </div>
                  <div className="circle_percent" data-percent={percent}>
                    <div className="circle_inner">
                      <div
                        className="round_per"
                        style={{ transform: `rotate(${rotation}deg)` }}
                      ></div>
                    </div>
                    <div className="circle_inbox">
                      <span className="percent_text">
                        {percent ? `${percent}%` : "0%"}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="shine"></div>
                <div className="background">
                  <div className="tiles">
                    <div className="tile tile-1"></div>
                    <div className="tile tile-2"></div>
                    <div className="tile tile-3"></div>
                    <div className="tile tile-4"></div>
                    <div className="tile tile-5"></div>
                    <div className="tile tile-6"></div>
                    <div className="tile tile-7"></div>
                    <div className="tile tile-8"></div>
                    <div className="tile tile-9"></div>
                    <div className="tile tile-10"></div>
                    <div className="tile tile-11"></div>
                    <div className="tile tile-12"></div>
                  </div>
                  <div className="line line-1"></div>
                  <div className="line line-2"></div>
                  <div className="line line-3"></div>
                </div>
              </div>
            </div>
            {/* Levels Card */}
            <div className="col-md-8">
              <div className="dapp_card level-item dapp_card_chart">
                <div className="level__inner text-center ">
                  <div className="services__title">
                    <div className="section-title">
                      <h2>Levels</h2>
                    </div>
                  </div>
                  <canvas id="myChart" ref={chartRef} />
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
            {/* Rank & Reward Eligibility Card */}
            <div className="col-md-12 ">
              <div className="services__title">
                <div className="section-title">
                  <h2>Rank &amp; Reward Eligibility</h2>
                </div>
              </div>
              <div className="table-responsive">
                <table
                  className="table pp-table-info table-striped mb-0"
                  id="tblrankrewardeligibility"
                >
                  <thead>
                    <tr>
                      <th class="col-1">S.NO.</th>
                      <th class="col-2">Rank</th>
                      <th class="col-2">Diamond Reaches Criteria</th>
                      <th class="col-2">Bonus</th>
                      <th class="col-2">Eligibility</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[...Array(8)].map((_, index) => {
                      const rankTitles = [
                        "OCTA DE CAMPEON",
                        "OCTA DE CONQUISTADOR",
                        "OCTA DE EMINENCIA",
                        "OCTA DE TITAN",
                        "OCTA DE SOBERANO",
                        "OCTA DE IMPERIAL",
                        "OCTA DE MAJESTUOSO",
                        "OCTA DE CENIT",
                      ];
                      const targetAmounts = [
                        100, 500, 1000, 10000, 25000, 50000, 750000, 100000,
                      ];
                      const achievedAmounts = [
                        0, 200, 300, 400, 500, 600, 700, 1000,
                      ];
                      const status =
                        index + 1 <= rankId ? "Achieved" : "Not Achieved";

                      return (
                        <tr key={index}>
                          <td>{index + 1}</td>
                          <td>{rankTitles[index]}</td>
                          <td>${targetAmounts[index]}</td>
                          <td>${achievedAmounts[index]}</td>
                          <td>{status}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
            {/* My Downline List Card */}
            <div className="col-md-12 ">
              <div className="services__title">
                <div className="section-title">
                  <h2>My Downline List</h2>
                </div>
              </div>
              <div className="table-responsive">
                <table
                  className="table pp-table-info table-striped mb-0"
                  id="tblmydownlinelist"
                >
                  <thead>
                    <tr>
                      <th className="col-1">S.NO.</th>
                      <th className="col-2">Level</th>
                      <th className="col-2">Wallet</th>
                    </tr>
                  </thead>
                  <tbody>
                    {myTeamData.map((stat, index) => (
                      <tr key={index}>
                        <td>{stat.SNo}</td>
                        <td>{stat.Level}</td>
                        <td>{stat.Wallet}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <table
                className="table pp-table-info table-striped mb-0"
                id="tblleveldownlinestatistics"
              >
                <thead>
                  <tr>
                    <th className="col-1">Level</th>
                    <th className="col-2">Members Count</th>
                    <th className="col-2">Purchased</th>
                    <th className="col-2">Level Bonus</th>
                  </tr>
                </thead>
                <tbody>
                  {levelDownlineStats.map((stat, index) => (
                    <tr key={index}>
                      <td>{stat.level}</td>
                      <td>{stat.membersCount}</td>
                      <td>{stat.purchased}</td>
                      <td>{stat.levelBonus}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default YourBonusSummary;
