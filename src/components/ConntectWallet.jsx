import React, { useEffect, useRef, useState } from "react";
import { Web3 } from "web3";
import Header from "../Pages/Header";
import AffiliateDetails from "../Pages/AffiliateDetails";
import Abi from "../abis/Abi.json";
import Abis from "../abis/Abis.json";
import MyRankIcon1 from "../assets/img/1.png";
import MyRankIcon2 from "../assets/img/2.png";
import MyRankIcon3 from "../assets/img/3.png";
import { Chart, registerables } from "chart.js";
import VideoBackground from "../Pages/VideoBackground";
import Footer from "../Pages/Footer";
import JoinOcta from "../Pages/JoinOcta";
import ReTopupEarning from "../Pages/ReTopupEarnings";
import YourBonusSummary from "../Pages/YourBonusSummary";
import Inputhide from "../Pages/Inputhide";
import SpanishFiestaPackages from "../Pages/SpanishFiestaPackages";
import OctaDeElClassico from "../Pages/OctaDeElClassico";

Chart.register(...registerables);

const Dashboard = () => {
  const [isConnected, setIsConnected] = useState(false);
  const [account, setAccount] = useState(0);
  const [referredByAddress, setReferredByAddress] = useState("");
  const [bscUsdBalance, setBscUsdBalance] = useState(null);
  const [bnbBalance, setBnbBalance] = useState(null);
  const [UsdtPurchasedAmount, setUsdtPurchasedAmount] = useState(null);
  const [totalCapping, setTotalCapping] = useState(null);
  const [noofdirect, setNoofdirect] = useState(0);
  const [levelEligibility, setLevelEligibility] = useState(0);
  const [directTeamInvestment, setDirectTeamInvestment] = useState(null);
  const [allTeamInvestment, setAllTeamInvestment] = useState(null);
  const [rankIcon, setRankIcon] = useState(null);
  const [userId, setUserId] = useState(null);
  const [referralBonus, setReferralBonus] = useState(null);
  const [levelbonus, setLevelbonus] = useState(null);
  const [rankRewardbonus, setRankRewardbonus] = useState(null);
  const [monthlybonus, setMonthlybonus] = useState(null);
  const [noofdiamond, setNoofdiamond] = useState(null);
  const [directdimaond, setDirectdimaond] = useState(null);
  const [teamdimaond, setTeamdimaond] = useState(null);
  const [diamondworth, setDiamondworth] = useState(null);
  const [rankId, setRankId] = useState(0);
  const [percent, setPercent] = useState(null);
  const [myTeamData, setMyTeamData] = useState([]);
  const [levelDownlineStats, setLevelDownlineStats] = useState([]);
  const [graphData, setGraphData] = useState(null);
  const chartRef = useRef(null);
  const [isJoined, setIsJoined] = useState(false);
  const [isReTopupVisible, setIsReTopupVisible] = useState(false);
  const [isProPackgeVisible, setIsProPackgeVisible] = useState(false);
  const [isFiestaVisible, setFiestaVisible] = useState(false);
  const [bscUsdContract, setBscUsdContract] = useState(null);
  const [contractInstance, setContractInstance] = useState(null);
  const [proPoolData] = useState({
    purchasePoolFlag: [0, 0, 0, 0, 0, 0, 0, 0],
    remainingMonth: [0, 0, 0, 0, 0, 0, 0],
    claimedMonth: [0, 0, 0, 0, 0, 0, 0, 0],
    remainingDays: [0, 0, 0, 0, 0, 0, 0, 0],
    claimable: [false, false, false, false, false, false, false, false],
  });

  const [spanishFiestaPackData] = useState({
    SpanishFiestaPackFlag: [0, 0, 0, 0],
    remainingMonth: [0, 0, 0, 0],
    claimedMonth: [0, 0, 0, 0],
    remainingDays: [0, 0, 0, 0],
    claimable: [false, false, false, false],
  });

  const contractAddress = "0x2323E42EB8972b9a91E337DB51AAE6A50E853eE7";
  const bscUsdContractAddress = "0xc2bEFff2b148FB54B017b133a0764ef4E7A72dcA";

  const connectWallet = async () => {
    setIsConnected(true);
    if (window.ethereum) {
      try {
        const web3 = new Web3(window.ethereum);
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        const accountaddr = web3.utils.toChecksumAddress(accounts[0]);
        setAccount(accountaddr);

        // Initialize STT Contract
        const sttContractInstance = new web3.eth.Contract(Abi, contractAddress);
        setContractInstance(sttContractInstance);

        // Initialize BSC-USD Contract
        const usdtContractInstance = new web3.eth.Contract(
          Abis,
          bscUsdContractAddress
        );
        setBscUsdContract(usdtContractInstance);

        // Fetch and set BSC-USD balance
        const bscUsdWeiBalance = await usdtContractInstance.methods
          .balanceOf(accountaddr)
          .call();
        const bscUsdBalance = web3.utils.fromWei(bscUsdWeiBalance, "ether");
        setBscUsdBalance(bscUsdBalance);

        // Fetch and set the BNB balance
        const weiBalance = await web3.eth.getBalance(accountaddr);
        const bnbBalance = web3.utils.fromWei(weiBalance, "ether");
        setBnbBalance(bnbBalance);

        // Fetch and set all required data in a single call for users
        const userData = await sttContractInstance.methods
          .users(accountaddr)
          .call();
        const userId = userData[0];
        const referredByAddress = userData[1];
        const purchasedAmount = web3.utils.fromWei(userData[2], "ether");
        const noofdirect = userData[4];
        const levelEligibility = userData[5];
        const rankId = userData[6];
        const directTeamInvestment = web3.utils.fromWei(userData[8], "ether");
        const allTeamInvestment = web3.utils.fromWei(userData[9], "ether");

        setUserId(userId);
        setRankId(rankId);
        setReferredByAddress(referredByAddress);
        setUsdtPurchasedAmount(purchasedAmount);
        setNoofdirect(noofdirect);
        setLevelEligibility(levelEligibility);
        setDirectTeamInvestment(directTeamInvestment);
        setAllTeamInvestment(allTeamInvestment);

        // Basic Packages Visible
        if (parseInt(userId) > 0) {
          setIsJoined(true);
          setIsReTopupVisible(true);
          setIsProPackgeVisible(true);
          const now = new Date();
          const day = now.getUTCDate();
          if (day >= 2 && day <= 30) {
            setFiestaVisible(true);
          } else {
            setFiestaVisible(false);
          }
        } else {
          setIsJoined(false);
          setIsReTopupVisible(false);
          setIsProPackgeVisible(false);
          setFiestaVisible(false);
        }

        // Fetch and set all required data in a single call for usersBonus
        const userBonusData = await sttContractInstance.methods
          .usersBonus(accountaddr)
          .call();
        const totalCapping = web3.utils.fromWei(userBonusData[0], "ether");
        const AchivedCapping = web3.utils.fromWei(userBonusData[1], "ether");
        const referralBonus = web3.utils.fromWei(userBonusData[2], "ether");
        const levelbonus = web3.utils.fromWei(userBonusData[3], "ether");
        const rankRewardbonus = web3.utils.fromWei(userBonusData[4], "ether");
        const monthlybonus = web3.utils.fromWei(userBonusData[5], "ether");

        setTotalCapping(totalCapping);
        setReferralBonus(referralBonus);
        setLevelbonus(levelbonus);
        setRankRewardbonus(rankRewardbonus);
        setMonthlybonus(monthlybonus);

        // Capping Elapsed
        let CapingPercentage =
          (parseFloat(AchivedCapping) / parseFloat(totalCapping)) * 100;
        CapingPercentage = isNaN(CapingPercentage)
          ? 0
          : Math.round(CapingPercentage);
        setPercent(CapingPercentage);

        // Bind data for all Pro Pool packages
        const GetUserProPoolSummary = async (proPoolId) => {
          try {
            const res = await sttContractInstance.methods
              .pro_pool_history(accountaddr, proPoolId)
              .call();
            const updatedData = { ...proPoolData };

            if (res[0] === "true" || res[0] === true) {
              const remainingMonth = 9 - parseInt(res[3]) || 0;
              const remainingDays = 30 - parseInt(res[4]) || 0;
              const proPoolIndex = parseInt(proPoolId);

              // Set common values for all pro pool ids
              updatedData.purchasePoolFlag[proPoolIndex] = 1;
              updatedData.remainingMonth[proPoolIndex] = remainingMonth;
              updatedData.claimedMonth[proPoolIndex] = parseInt(res[3]) || 0;
              updatedData.remainingDays[proPoolIndex] = remainingDays;
              updatedData.claimable[proPoolIndex] =
                (parseInt(res[4]) || 0) >= 30;
            } else {
              // Handle the not purchased state
              if (
                proPoolId === 0 &&
                parseInt(document.getElementById("noofdirect").value) < 3
              ) {
                updatedData.purchasePoolFlag[0] = 0;
              } else if (
                proPoolId >= 1 &&
                updatedData.purchasePoolFlag[proPoolId] === 0
              ) {
                updatedData.purchasePoolFlag[proPoolId] = 0;
              }
            }
          } catch (error) {
            console.error("Error fetching pro pool history:", error);
          }
        };
        const BindProPoolData = async () => {
          for (let i = 0; i <= 8; i++) {
            await GetUserProPoolSummary(i);
          }
        };
        BindProPoolData();

        // for purchased Spanish Fiesta Packages
        const GetUserSpanishFiestaPackSummary = async (spanishFiestaPoolId) => {
          try {
            const res = await sttContractInstance.methods
              .spanish_fiesta_pool_history(accountaddr, spanishFiestaPoolId)
              .call();
            const updatedData = { ...spanishFiestaPackData };

            if (res[0] === "true" || res[0] === true) {
              const remainingMonth = 8 - parseInt(res[3]) || 0;
              const remainingDays = 30 - parseInt(res[4]) || 0;
              const poolIndex = parseInt(spanishFiestaPoolId);

              // Set common values for all pro pool ids
              updatedData.SpanishFiestaPackFlag[poolIndex] = 1;
              updatedData.remainingMonth[poolIndex] = remainingMonth;
              updatedData.claimedMonth[poolIndex] = parseInt(res[3]) || 0;
              updatedData.remainingDays[poolIndex] = remainingDays;
              updatedData.claimable[poolIndex] = (parseInt(res[4]) || 0) >= 30;
            } else {
              // Handle the not purchased state
              if (
                spanishFiestaPoolId === 0 &&
                parseInt(document.getElementById("noofdirect").value) < 3
              ) {
                updatedData.SpanishFiestaPackFlag[0] = 0;
              } else if (
                spanishFiestaPoolId >= 1 &&
                updatedData.SpanishFiestaPackFlag[spanishFiestaPoolId] === 0
              ) {
                updatedData.SpanishFiestaPackFlag[spanishFiestaPoolId] = 0;
              }
            }
          } catch (error) {
            console.error("Error fetching pool history:", error);
          }
        };
        const BindspanishFiestaPackData = async () => {
          for (var i = 0; i < 4; i++) {
            await GetUserSpanishFiestaPackSummary(i);
          }
        };
        BindspanishFiestaPackData();

        // Fetch and set all required data in a single call for UserPurchaseData
        const UserPurchaseData = await sttContractInstance.methods
          .userPurchaseDetails(accountaddr)
          .call();

        const noofdiamond = UserPurchaseData[2];
        const directdimaond = UserPurchaseData[3];
        const teamdimaond = UserPurchaseData[4];

        setNoofdiamond(noofdiamond);
        setDirectdimaond(directdimaond);
        setTeamdimaond(teamdimaond);

        // Fetch and set all required data in a single call for DiamondWorthData
        const DiamondWorthData = await sttContractInstance.methods
          .getDiamondWorth(accountaddr)
          .call();
        const diamondworth = web3.utils.fromWei(DiamondWorthData, "ether");

        setDiamondworth(diamondworth);

        // My Rank
        const userRank = await fetchUserRank(web3, accountaddr);
        updateRankIcon(userRank);

        // Fetch level downline data and referees My Downline List
        const response = await sttContractInstance.methods
          .level_downline(accountaddr)
          .call();
        const updatedStats = [];

        for (let level = 0; level <= 14; level++) {
          const membersCount = parseFloat(response[0][level]);
          const purchased = parseFloat(
            web3.utils.fromWei(response[1][level], "ether")
          ).toFixed(8);
          const levelBonus = parseFloat(
            web3.utils.fromWei(response[2][level], "ether")
          ).toFixed(8);

          if (membersCount > 0) {
            updatedStats.push({
              level: level + 1,
              membersCount,
              purchased,
              levelBonus,
            });

            // Fetch and set referees for the current level
            const referees = await sttContractInstance.methods
              .getReferees(accountaddr, level + 1)
              .call();
            referees.forEach((referee) => {
              setMyTeamData((prevData) => [
                ...prevData,
                {
                  SNo: prevData.length + 1,
                  Level: level + 1,
                  Wallet: referee,
                },
              ]);
            });
          }
        }
        setLevelDownlineStats(updatedStats);

        // Map graphData
        const graphData = response[2].map((value) =>
          parseFloat(web3.utils.fromWei(value, "ether")).toFixed(8)
        );
        setGraphData(graphData);

        // Initialize or update chart
        if (chartRef.current) {
          new Chart(chartRef.current, {
            type: "bar",
            data: {
              labels: Array.from(
                { length: graphData.length },
                (_, i) => `Level ${i + 1}`
              ),
              datasets: [
                {
                  label: "",
                  data: graphData,
                  backgroundColor: "#f19200",
                  borderWidth: 1,
                },
              ],
            },
            options: {
              scales: {
                y: {
                  beginAtZero: true,
                },
              },
            },
          });
        }
      } catch (error) {
        console.error("User denied account access", error);
      }
    } else {
      alert("Please install MetaMask!");
    }
  };

  const fetchUserRank = async () => {
    const rank = 0;
    return rank;
  };
  const updateRankIcon = (rank) => {
    let icon;
    switch (rank) {
      case 1:
        icon = MyRankIcon1;
        break;
      case 2:
        icon = MyRankIcon2;
        break;
      case 3:
        icon = MyRankIcon3;
        break;
      // default icon
      default:
        icon = MyRankIcon1;
        break;
    }
    setRankIcon(icon);
  };

  const SwitchNetwork = async () => {
    const params = [
      {
        chainId: "0x38",
        chainName: "BNB Smart Chain Mainnet",
        nativeCurrency: {
          name: "BNB",
          symbol: "BNB",
          decimals: 18,
        },
        rpcUrls: ["https://bsc-dataseed.binance.org/"],
        blockExplorerUrls: ["https://bscscan.com/"],
      },
    ];
    try {
      await window.ethereum.request({
        method: "wallet_addEthereumChain",
        params,
      });
    } catch (error) {
      console.error("Error switching network", error);
    }
  };

  // for Join Octa Smart Community today !
  const Joining = async (packageValue) => {
    if (!account) {
      alert(
        "We only support BNB Smart Chain Mainnet right now. Please switch to Binance Network and Connect."
      );
      return;
    }
    const usdtValue = Web3.utils.toWei(packageValue.toString(), "ether");
    const refferedby = document.getElementById("refferedby").value;

    if (refferedby === "") {
      alert("Sponsor Address Required!");
      return;
    }
    try {
      const result = await contractInstance.methods
        .register(refferedby, usdtValue)
        .send({ from: account });
      console.log("Registration successful:", result);
    } catch (error) {
      console.error("Error during registration:", error);
    }
  };
  const PreAuthorize = async (packageValue) => {
    if (!account) {
      SwitchNetwork();
      return;
    }
    const usdtValue = Web3.utils.toWei(packageValue.toString(), "ether");
    try {
      const result = await bscUsdContract.methods
        .approve(contractAddress, usdtValue)
        .send({ from: account });
      console.log("Approval successful:", result);
      setTimeout(async () => {
        await Joining(packageValue);
      }, 2000);
    } catch (error) {
      console.error("Error during approval:", error);
    }
  };

  // for ReTopup buttons in Basic Packages
  const ReTopup = async (packageValue, packageId) => {
    if (!account) {
      alert(
        "Alert! We only support BNB Smart Chain Mainnet right now. Please switch to Binance Network and Connect."
      );
      return false;
    }
    try {
      const usdtValue = Web3.utils.toWei(packageValue.toString(), "ether");
      const response = await contractInstance.methods
        .reTopUp(packageId, usdtValue)
        .send({ from: account });
      console.log("Success Section =", response);
      return true;
    } catch (error) {
      console.error("Error Section =", error);
      return false;
    }
  };
  const PreAuthorizeReTopupClick = async (packageValue, packageId) => {
    if (!account) {
      await SwitchNetwork();
      return;
    }
    try {
      const usdtValue = Web3.utils.toWei(packageValue.toString(), "ether");
      const response = await bscUsdContract.methods
        .approve(contractAddress, usdtValue)
        .send({ from: account });
      console.log(response);
      setTimeout(async () => {
        await ReTopup(packageValue, packageId);
      }, 2000);
    } catch (error) {
      console.error(error);
    }
  };

  // for Purchase buttons in Octa De El-Classico
  const UpgradeProPool = async (proPoolId, packageValue) => {
    try {
      if (!account) {
        alert(
          "Alert! We only support BNB Smart Chain Mainnet right now. Please switch to Binance Network and Connect."
        );
        return false;
      }
      const usdtValue = Web3.utils.toWei(packageValue.toString(), "ether");
      const result = await contractInstance.methods
        .goProPool(proPoolId, usdtValue)
        .send({ from: account });
      console.log("Success Section =", result);
      return true;
    } catch (error) {
      console.error("Error Section =", error);
      return false;
    }
  };
  const PreAuthorizeUpgrade = async (proPoolId, packageValue) => {
    try {
      if (!account) {
        await SwitchNetwork();
      }
      const usdtValue = Web3.utils.toWei(packageValue.toString(), "ether");
      const result = await bscUsdContract.methods
        .approve(contractAddress, usdtValue)
        .send({ from: account });
      console.log(result);
      setTimeout(async () => {
        await UpgradeProPool(proPoolId, packageValue);
      }, 2000);
    } catch (error) {
      console.error(error);
    }
  };
  // Claim now buttons Pro Monthly Bonus in Octa De El-Classico
  const ClaimProMonthlyBonus = async (proPoolId) => {
    if (!account) {
      alert("Please connect your wallet and switch to Binance Smart Chain.");
      return;
    }
    try {
      const result = await contractInstance.methods
        .claimProMonthlyBonus(proPoolId)
        .send({ from: account });
      console.log("Success:", result);
      return true;
    } catch (error) {
      console.error("Error:", error);
      return false;
    }
  };

  // for Purchase buttons in Spanish Fiesta Packages
  const UpgradeSpanishFiesta = async (spanishFiestaPoolId, packageValue) => {
    try {
      if (!account) {
        alert(
          "Alert! We only support BNB Smart Chain Mainnet right now. Please switch to Binance Network and Connect."
        );
        return false;
      }
      const usdtValue = Web3.utils.toWei(packageValue.toString(), "ether");
      const result = await contractInstance.methods
        .goSpanishFiestaPool(spanishFiestaPoolId, usdtValue)
        .send({ from: account });
      console.log("Success Section =", result);
      return true;
    } catch (error) {
      console.error("Error Section =", error);
      return false;
    }
  };
  const PreAuthorizeSpanishFiesta = async (
    spanishFiestaPoolId,
    packageValue
  ) => {
    try {
      if (!account) {
        await SwitchNetwork();
      }
      const usdtValue = Web3.utils.toWei(packageValue.toString(), "ether");
      const result = await bscUsdContract.methods
        .approve(contractAddress, usdtValue)
        .send({ from: account });
      console.log(result);
      setTimeout(async () => {
        await UpgradeSpanishFiesta(spanishFiestaPoolId, packageValue);
      }, 2000);
    } catch (error) {
      console.error(error);
    }
  };
  // Claim now buttons Pro Monthly Bonus in Spanish Fiesta Packages
  const ClaimSpanishFiestaMonthlyBonus = async (spanishFiestaPoolId) => {
    try {
      if (!account) {
        alert(
          "Alert! We only support BNB Smart Chain Mainnet right now. Please switch to Binance Network and connect your wallet."
        );
        return false;
      }
      const result = await contractInstance.methods
        .claimSpanishFiestaMonthlyBonus(spanishFiestaPoolId)
        .send({ from: account });
      console.log("Success Section =", result);
      return true;
    } catch (error) {
      console.error("Error Section =", error);
      return false;
    }
  };

  // for Claim now in Diamond Worth
  const SellDiamond = async () => {
    try {
      if (!account) {
        alert(
          "Alert! We only support BNB Smart Chain Mainnet right now. Please switch to the Binance Network and connect your wallet."
        );
        return false;
      }
      const result = await contractInstance.methods
        .sellOutDiamond()
        .send({ from: account });
      console.log("Success Section =", result);
      return true;
    } catch (error) {
      console.error("Error Section =", error);
      return false;
    }
  };

  return (
    <>
      {/* BackGround */}
      <VideoBackground />

      {/* Header */}
      <Header
        account={account}
        bnbBalance={bnbBalance}
        isConnected={isConnected}
        connectWallet={connectWallet}
      />

      {/* Join the Octa Smart Community today ! */}
      <JoinOcta isJoined={isJoined} PreAuthorize={PreAuthorize} />

      {/* Affiliate Details CARDS */}
      <AffiliateDetails
        account={account}
        referredByAddress={referredByAddress}
        bscUsdBalance={bscUsdBalance}
        bnbBalance={bnbBalance}
        UsdtPurchasedAmount={UsdtPurchasedAmount}
        totalCapping={totalCapping}
        noofdirect={noofdirect}
        levelEligibility={levelEligibility}
        directTeamInvestment={directTeamInvestment}
        allTeamInvestment={allTeamInvestment}
        rankIcon={rankIcon}
      />

      <Inputhide />

      {/* Re Topup for higher earnings*/}
      <ReTopupEarning
        PreAuthorizeReTopupClick={PreAuthorizeReTopupClick}
        isReTopupVisible={isReTopupVisible}
      />

      <OctaDeElClassico
        isProPackgeVisible={isProPackgeVisible}
        PreAuthorizeUpgrade={PreAuthorizeUpgrade}
        ClaimProMonthlyBonus={ClaimProMonthlyBonus}
        proPoolData={proPoolData}
      />

      <SpanishFiestaPackages
        PreAuthorizeSpanishFiesta={PreAuthorizeSpanishFiesta}
        ClaimSpanishFiestaMonthlyBonus={ClaimSpanishFiestaMonthlyBonus}
        isFiestaVisible={isFiestaVisible}
        spanishFiestaPackData={spanishFiestaPackData}
      />

      {/* Your Bonus Summary Card */}
      <YourBonusSummary
        userId={userId}
        referralBonus={referralBonus}
        levelbonus={levelbonus}
        rankRewardbonus={rankRewardbonus}
        monthlybonus={monthlybonus}
        noofdiamond={noofdiamond}
        directdimaond={directdimaond}
        teamdimaond={teamdimaond}
        diamondworth={diamondworth}
        percent={percent}
        chartRef={chartRef}
        myTeamData={myTeamData}
        levelDownlineStats={levelDownlineStats}
        rankId={rankId}
        SellDiamond={SellDiamond}
      />
      {/* Footer */}
      <Footer />
    </>
  );
};

export default Dashboard;
