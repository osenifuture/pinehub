import { useState, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const Homegen = () => {

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  const [general, setGenaral] = useState(true);
  const [account, setAccount] = useState(false);
  const [deposit, setDeposit] = useState(false);
  const [withdrawal, setWithdrwal] = useState(false);
  const [pinehub1, setPinehub1] = useState(false);
  const [pinehub2, setPinehub2] = useState(false);
  const [pinehub3, setPinehub3] = useState(false);
  const [pinehub4, setPinehub4] = useState(false);
  const [pinehub5, setPinehub5] = useState(false);
  const [pinehub6, setPinehub6] = useState(false);
  const [pinehub7, setPinehub7] = useState(false);
  const [pinehub8, setPinehub8] = useState(false);
  const [pinehub9, setPinehub9] = useState(false);
  const [pinehub10, setPinehub10] = useState(false);
  const [pinehub11, setPinehub11] = useState(false);
  const [pineacc1, setPineAcc1] = useState(false);
  const [pineacc2, setPineAcc2] = useState(false);
  const [pinedepo1, setPineDepo1] = useState(false);
  const [pinedepo2, setPineDepo2] = useState(false);
  const [pinedepo3, setPineDepo3] = useState(false);
  const [pinedepo4, setPineDepo4] = useState(false);
  const [pinedepo5, setPineDepo5] = useState(false);
  const [pinedepo6, setPineDepo6] = useState(false);
  const [pinedepo7, setPineDepo7] = useState(false);
  const [pinewithd1, setPineWidthd1] = useState(false);
  const [pinewithd2, setPineWidthd2] = useState(false);
  const [pinewithd3, setPineWidthd3] = useState(false);

  const handleGeneral = () => {
    setGenaral(true);
    setAccount(false);
    setDeposit(false);
    setWithdrwal(false);
  };

  const handleAccount = () => {
    setAccount(true);
    setGenaral(false);
    setDeposit(false);
    setWithdrwal(false);
  };

  const handleDeposit = () => {
    setDeposit(true);
    setGenaral(false);
    setAccount(false);
    setWithdrwal(false);
  };

  const handleWithdrawal = () => {
    setWithdrwal(true);
    setGenaral(false);
    setAccount(false);
    setDeposit(false);
  };

  const handlepine1 = () => {
    setPinehub1(!pinehub1);
  };
  const handlepine2 = () => {
    setPinehub2(!pinehub2);
  };
  const handlepine3 = () => {
    setPinehub3(!pinehub3);
  };
  const handlepine4 = () => {
    setPinehub4(!pinehub4);
  };
  const handlepine5 = () => {
    setPinehub5(!pinehub5);
  };
  const handlepine6 = () => {
    setPinehub6(!pinehub6);
    console.log("6");
  };
  const handlepine7 = () => {
    setPinehub7(!pinehub7);
  };
  const handlepine8 = () => {
    setPinehub8(!pinehub8);
  };
  const handlepine9 = () => {
    setPinehub9(!pinehub9);
  };
  const handlepine10 = () => {
    setPinehub10(!pinehub10);
  };
  const handlepine11 = () => {
    setPinehub11(!pinehub11);
  };

  const handleacc1 = () => {
    setPineAcc1(!pineacc1);
  };
  const handleacc2 = () => {
    setPineAcc2(!pineacc2);
  };

  const handledepo1 = () => {
    setPineDepo1(!pinedepo1);
  };
  const handledepo2 = () => {
    setPineDepo2(!pinedepo2);
  };
  const handledepo3 = () => {
    setPineDepo3(!pinedepo3);
  };
  const handledepo4 = () => {
    setPineDepo4(!pinedepo4);
  };
  const handledepo5 = () => {
    setPineDepo5(!pinedepo5);
  };
  const handledepo6 = () => {
    setPineDepo6(!pinedepo6);
  };
  const handledepo7 = () => {
    setPineDepo7(!pinedepo7);
  };

  const handleWithd1 = () => {
    setPineWidthd1(!pinewithd1);
  };
  const handleWithd2 = () => {
    setPineWidthd2(!pinewithd2);
  };
  const handleWithd3 = () => {
    setPineWidthd3(!pinewithd3);
  };
  return (
    <div className="general-container">
      <div className="general-switchs">
        <div className="general" onClick={handleGeneral}>
          <i className="fa-solid fa-globe"></i>
          <h2>General</h2>
        </div>
        <div className="account" onClick={handleAccount}>
          <i className="fa-solid fa-building-columns"></i>
          <h2>Account</h2>
        </div>
        <div className="deposit" onClick={handleDeposit}>
          <i className="fa-solid fa-money-bill-transfer"></i>
          <h2>Deposit</h2>
        </div>
        <div className="withdrawal" onClick={handleWithdrawal}>
          <i className="fa-solid fa-sack-dollar"></i>
          <h2>Withdrawals</h2>
        </div>
      </div>
      {general && (
        <div className="gen" data-aos="flip-up">
          <ul>
            <li onClick={handlepine1}>
              What is Pine-Hub? <i className="fa-regular fa-circle-down"></i>
            </li>
            {pinehub1 && (
              <span data-aos="fade-up">
                Pine-Hub is a premier provider of digital asset management
                services that caters to the needs of both individuals and
                institutions seeking growth. Our platform offers a broad range
                of solutions to promote the expansion of your digital asset
                portfolios. Our firm's team of seasoned experts and
                state-of-the-art trading tools collaborate to deliver reliable
                gains and a secure journey in asset growth. We are committed to
                assisting you in reaching your financial objectives while
                securing your assets in the ever-evolving realm of virtual
                currencies.
              </span>
            )}

            <li onClick={handlepine2}>
              How do you generate profit?{" "}
              <i className="fa-regular fa-circle-down"></i>
            </li>
            {pinehub2 && (
              <span data-aos="fade-up">
                We generate gains by integrating expert growth strategies with
                our unique AI-driven trading tool, CloudIntelligence. Our
                skilled traders and analysts leverage their in-depth
                understanding of the cryptocurrency market, along with
                technological resources such as the Bloomberg Terminal, to
                identify profitable growth opportunities. Our cutting-edge
                trading bot, CloudIntelligence, is pivotal in our gain
                generation process. It continuously analyzes vast volumes of
                market data and trends to execute precise transactions, ensuring
                high precision and profitability in the volatile crypto market.
                By combining human expertise with technological innovation,
                we're able to consistently deliver exceptional returns on your
                funds, minimizing risks and maximizing gains.
              </span>
            )}

            <li onClick={handlepine3}>
              What is Pine-Hubintenligence and how does it work{" "}
              <i className="fa-regular fa-circle-down"></i>
            </li>
            {pinehub3 && (
              <span data-aos="fade-up">
                CloudIntelligence is CloudFi's proprietary AI-driven trading
                tool, constructed with the sole aim to boost growth yields in
                the cryptocurrency market. CloudIntelligence continuously
                processes immense volumes of market data, identifies patterns
                and trends, and makes astute trading decisions in real-time by
                using advanced machine learning algorithms and data analysis
                methodologies. Key components employed in forecasting price
                shifts and generating fruitful growth strategies include
                technical analysis, fundamental analysis, and sentiment
                analysis. The adaptive algorithms of CloudIntelligence are
                designed to learn and evolve in response to ever-shifting market
                conditions, ensuring the trading bot stays abreast of market
                trends and insights. By fusing CloudIntelligence with the
                expertise of our seasoned growth team, we can execute
                transactions with high precision and efficiency, minimizing
                risks and optimizing gains for our clientele. This blend of
                human acumen and cutting-edge technology sets CloudFi apart,
                enabling us to consistently yield gains in the challenging and
                volatile crypto market.
              </span>
            )}

            <li onClick={handlepine4}>
              Is a 1.25% daily return sustainable, and how do you manage to
              generate such high returns?{" "}
              <i className="fa-regular fa-circle-down"></i>
            </li>
            {pinehub4 && (
              <span data-aos="fade-up">
                While a daily return of 1.25% may seem appealing, it is
                important to understand that the cryptocurrency market is highly
                volatile and offers significant opportunities for growth. At
                CloudFi, our proprietary trading bot, CloudIntelligence, and our
                skilled team leverage market volatility to generate returns.
                However, it is crucial to acknowledge that all gains come with
                risks. Higher gains often come with higher risks. Before making
                any decision, it is essential to carefully assess your risk
                tolerance, financial growth, and overall market conditions.
                Always be prepared for the possibility of loss and never use
                more than you can afford to lose.
              </span>
            )}

            <li onClick={handlepine5}>
              To get started with crypto gains on pine-Hub, please follow these
              steps: <i className="fa-regular fa-circle-down"></i>
            </li>
            {pinehub5 && (
              <span data-aos="fade-up">
                Getting started with crypto gains on CloudFi is easy. Follow
                these simple steps: - Register an account: Go to our website and
                click on the "Register" button. Fill in the necessary
                information and create an account. - Deposit funds: You're free
                to deposit the amount that suits your financial strategy. Choose
                from any of our convenient payment methods to fund your account.
                - Begin accruing: Once your deposit is confirmed, you will start
                earning daily gains on your growth. Our platform generates daily
                gains of 1.25% for our users. - Withdraw your profits: You can
                withdraw your profits at any time. Our withdrawal process is
                quick and easy, allowing you to access your funds in no time. -
                That's it! With these simple steps, you can start earning
                profits with CloudFi. If you have any questions or need further
                assistance, our customer support team is always available to
                help.
              </span>
            )}

            <li onClick={handlepine6}>
              How can I earn commissions on pine-Hub?{" "}
              <i className="fa-regular fa-circle-down"></i>
            </li>
            {pinehub6 && (
              <span data-aos="fade-up">
                Getting started with crypto gains on CloudFi is easy. Follow
                these simple steps: - Register an account: Go to our website and
                click on the "Register" button. Fill in the necessary
                information and create an account. - Deposit funds: You're free
                to deposit the amount that suits your financial strategy. Choose
                from any of our convenient payment methods to fund your account.
                - Begin accruing: Once your deposit is confirmed, you will start
                earning daily gains on your growth. Our platform generates daily
                gains of 1.25% for our users. - Withdraw your profits: You can
                withdraw your profits at any time. Our withdrawal process is
                quick and easy, allowing you to access your funds in no time. -
                That's it! With these simple steps, you can start earning
                profits with CloudFi. If you have any questions or need further
                assistance, our customer support team is always available to
                help.
              </span>
            )}

            <li onClick={handlepine7}>
              How do you protect my funds?{" "}
              <i className="fa-regular fa-circle-down"></i>
            </li>
            {pinehub7 && (
              <span data-aos="fade-up">
                You can earn commissions on CloudFi through our referral
                program. For every person you refer to CloudFi who makes a
                deposit, you will receive a commission based on their deposit
                amount. Our referral commission structure is 6% - 4% - 2% - 1%,
                depending on the level of the referral. To participate in the
                referral program, you must have an active deposit on our
                platform. Please note that to prevent abuse of the referral
                system, we have set maximum commission caps for each tier of our
                referral program.
              </span>
            )}

            <li onClick={handlepine8}>
              Do you offer a Team Leaders program?{" "}
              <i className="fa-regular fa-circle-down"></i>
            </li>
            {pinehub8 && (
              <span data-aos="fade-up">
                Getting started with crypto gains on CloudFi is easy. Follow
                these simple steps: - Register an account: Go to our website and
                click on the "Register" button. Fill in the necessary
                information and create an account. - Deposit funds: You're free
                to deposit the amount that suits your financial strategy. Choose
                from any of our convenient payment methods to fund your account.
                - Begin accruing: Once your deposit is confirmed, you will start
                earning daily gains on your growth. Our platform generates daily
                gains of 1.25% for our users. - Withdraw your profits: You can
                withdraw your profits at any time. Our withdrawal process is
                quick and easy, allowing you to access your funds in no time. -
                That's it! With these simple steps, you can start earning
                profits with CloudFi. If you have any questions or need further
                assistance, our customer support team is always available to
                help.
              </span>
            )}

            <li onClick={handlepine9}>
              Do you offer Team Leader rewards?{" "}
              <i className="fa-regular fa-circle-down"></i>
            </li>
            {pinehub9 && (
              <span data-aos="fade-up"> 
                Yes, we offer a Team Leaders program for dedicated and
                high-performing users. To become a Team Leader, you must meet
                the following criteria: - The investor must be at least on Tier
                2. AND - The investor's first-level team turnover must reach
                $50,000 or more.
              </span>
            )}

            <li onClick={handlepine10}>
              Do you offer Team Leader rewards?{" "}
              <i className="fa-regular fa-circle-down"></i>
            </li>
            {pinehub10 && (
              <span data-aos="fade-up">
                Yes, we offer Team Leader rewards based on the turnover of your
                first-level team. The rewards are as follows: - $10,000 USD team
                turnover: Reward = $200 USD - $50,000 USD team turnover: Reward
                = $1,000 USD - $100,000 USD team turnover: Reward = $2,000 USD -
                $500,000 USD team turnover: Reward = $5,000 USD - $1,000,000 USD
                team turnover: Reward = $10,000 USD - $5,000,000 USD team
                turnover: Reward = $50,000 USD - $50,000,000 USD team turnover:
                Reward = $500,000 USD Please note that only the turnover of your
                first-level team is counted towards these rewards. As a Team
                Leader, you can earn substantial rewards by growing your team
                and increasing your team's turnover.
              </span>
            )}

            <li onClick={handlepine11}>
              Do you offer special referral rates for Team Leaders?{" "}
              <i className="fa-regular fa-circle-down"></i>
            </li>
            {pinehub11 && (
              <span data-aos="fade-up">
                Yes, we offer special referral rates for Team Leaders on 10
                levels as follows: - Level 1: 7% - Level 2: 4% - Level 3: 3% -
                Level 4: 1% - Level 5: 1% - Level 6: 1% - Level 7: 1% - Level 8:
                1% - Level 9: 1% - Level 10: 1% As a Team Leader, you can
                benefit from these enhanced referral rates and earn commissions
                from your referrals activities across multiple levels. This
                provides additional incentives for building and nurturing a
                successful team.
              </span>
            )}
          </ul>
        </div>
      )}

      {account && (
        <div className="acc" data-aos="flip-up">
          <ul>
            <li onClick={handleacc1}>
              Is 2FA mandatory for withdrawals?
              <i className="fa-regular fa-circle-down"></i>
            </li>
            {pineacc1 && (
              <span data-aos="fade-up">
                Yes, 2FA (Two-Factor Authentication) is mandatory for
                withdrawals. You need to have 2FA enabled to be able to add your
                Bitcoin address in the settings for withdrawals. This additional
                layer of security helps protect your account and funds by
                requiring two forms of identification when making transactions.
                Make sure to set up 2FA to keep your account secure and to be
                able to withdraw your earnings.
              </span>
            )}
            <li onClick={handleacc2}>
              How to add a withdrawal address for withdrawals?
              <i className="fa-regular fa-circle-down"></i>
            </li>
            {pineacc2 && (
              <span data-aos="fade-up">
                To add a withdrawal address for your withdrawals, follow these
                steps: 1. Make sure you have enabled 2FA (Two-Factor
                Authentication) on your account. If you haven't already, follow
                the necessary steps to set it up. 2. Go to your account settings
                for managing withdrawal addresses. 3. Click on the option to add
                a new withdrawal address. 4. Fill in the required fields: - a.
                Label: Enter a name for the address that you're familiar with.
                This will help you easily identify it later. - b. BTC Address:
                Provide your Bitcoin address. This can be either a legacy or a
                SegWit address. - c. 2FA Code: Enter the code generated by your
                2FA app to verify your identity. 5. Save your new withdrawal
                address. Now your withdrawal address is added and you can use it
                for future withdrawals. Remember to always double-check your
                Bitcoin address when making withdrawals to avoid any errors or
                loss of funds.
              </span>
            )}
          </ul>
        </div>
      )}

      {deposit && (
        <div className="depo" data-aos="flip-up">
          <ul>
            <li onClick={handledepo1}>
              What plan do you offer?{" "}
              <i className="fa-regular fa-circle-down"></i>
            </li>
            {pinedepo1 && (
              <span data-aos="fade-up">
                Our gains plan offers 1.25% daily returns, 6.25% after 5
                business days, 25% a month, 250% after 10 months.
              </span>
            )}

            <li onClick={handledepo2}>
              What is the allowable range for deposit amounts on Pine-Hub?{" "}
              <i className="fa-regular fa-circle-down"></i>
            </li>
            {pinedepo2 && (
              <span data-aos="fade-up">
                At CloudFi, we aim to cater to a wide range of financial
                capacities. You can deposit any amount between a minimum of $100
                and a maximum of $1,000,000.
              </span>
            )}
            <li onClick={handledepo3}>
              Can I deposit funds in different cryptocurrencies on Pine-Hub?{" "}
              <i className="fa-regular fa-circle-down"></i>
            </li>
            {pinedepo3 && (
              <span data-aos="fade-up">
                Pine-Hub accepts Bitcoin (BTC), Ethereum (ETH), Tether (USDT -
                ETH and USDT - Tron), Dogecoin (DOGE), USD Coin (USDC), Litecoin
                (LTC), Binance USD (BUSD - Ethereum Network), Bitcoin Cash
                (BCH), Uniswap (UNI - Ethereum Network), Decentraland (MANA -
                Ethereum Network), Stellar Lumens (XLM), Dash (DASH), Basic
                Attention Token (BAT - Ethereum Network), Shiba Inu (SHIBBSC -
                Binance Smart Chain Network), Tether (USDTSol - Solana Network),
                Cardano (ADA), Solana (SOL), Monero (XMR), and Polygon (MATIC -
                Mainnet) for funding your growth journey. Our aim is to provide
                our users with a hassle-free and flexible approach to grow their
                digital assets. Please note, any funds transferred in currencies
                other than the ones listed above will not be recognized or
                credited to your account.
              </span>
            )}
            <li onClick={handledepo4}>
              Can I have multiple active deposits?{" "}
              <i className="fa-regular fa-circle-down"></i>
            </li>
            {pinedepo4 && (
              <span data-aos="fade-up">
                Absolutely, you can have multiple active deposits at any given
                time. Each deposit will operate independently until it reaches
                250%. Deposits can be made at different times throughout the
                day, ensuring you can enjoy earnings all day long.
              </span>
            )}
            <li onClick={handledepo5}>
              Do you offer compounding?{" "}
              <i className="fa-regular fa-circle-down"></i>
            </li>
            {pinedepo5 && (
              <span data-aos="fade-up">
                No, we don't offer compounding. However, you can always withdraw
                your gains and deposit again.
              </span>
            )}
            <li onClick={handledepo6}>
              How long does it take for my deposit to be reflected in my
              account? <i className="fa-regular fa-circle-down"></i>
            </li>
            {pinedepo6 && (
              <span data-aos="fade-up">
                Upon making a deposit, it will typically appear in your account
                after 2 to 3 blockchain network confirmations. These
                confirmations verify the transaction and add it to the
                blockchain. Once these confirmations are successfully completed,
                your deposit should be visible in your account. However, please
                note that our payment processor may require additional time to
                finalize the payment. While this process is typically
                instantaneous, it may occasionally take a bit longer. If your
                deposit has been confirmed but is not yet credited, rest assured
                that it is likely due to this additional processing time and
                should reflect in your account shortly.
              </span>
            )}
            <li onClick={handledepo7}>
              What happens to my deposit after I reach 250%?{" "}
              <i className="fa-regular fa-circle-down"></i>
            </li>
            {pinedepo7 && (
              <span data-aos="fade-up">
                Once your deposit has reached 250% in gains, it will cease to
                generate further income. Essentially, your deposit "expires" at
                this point. However, this doesn't mean the end of your earnings
                opportunity with us! You can choose to make another deposit and
                continue enjoying the benefits of income generation on our
                platform.
              </span>
            )}
          </ul>
        </div>
      )}

      {withdrawal && (
        <div className="withd" data-aos="flip-up">
          <ul>
            <li onClick={handleWithd1}>
              What is the minimum/maximum withdrawal amount?{" "}
              <i className="fa-regular fa-circle-down"></i>
            </li>
            {pinewithd1 && (
              <span data-aos="fade-up">
                As a reputable and dependable business, we prioritize offering
                our clients with convenient and adaptable solutions to ensure
                seamless accessibility. The minimum withdrawal threshold has
                been established at $25 to facilitate users in withdrawing their
                earnings at their discretion. We offer our valued customers the
                flexibility to withdraw any desired amount as we do not impose a
                maximum withdrawal limit. Our company provides instant
                withdrawal processing, and transfers the funds directly to your
                Bitcoin wallet, ensuring prompt access to your earnings.
              </span>
            )}
            <li onClick={handleWithd2}>
              What is the estimated time for my withdrawal to be completed?{" "}
              <i className="fa-regular fa-circle-down"></i>
            </li>
            {pinewithd2 && (
              <span data-aos="fade-up">
                Pine-Hub processes withdrawals instantly. The duration for the
                receipt of your funds is subject to the processing times of the
                blockchain network and your wallet provider. Typically, Bitcoin
                transactions are promptly processed. However, in the event of
                network congestion, the confirmation of transactions may be
                delayed. We advise you to verify the withdrawal status on the
                blockchain network and contact your wallet provider for further
                details regarding the anticipated completion time of your
                withdrawal.
              </span>
            )}
            <li onClick={handleWithd3}>
              In which currencies do you provide payments to your clients?{" "}
              <i className="fa-regular fa-circle-down"></i>
            </li>
            {pinewithd3 && (
              <span data-aos="fade-up">
                Our company exclusively offers Bitcoin (BTC) as a payment option
                to our valued clients. This guarantees swift and secure
                transactions for our clientele.
              </span>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Homegen;
