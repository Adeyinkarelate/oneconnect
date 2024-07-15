import HomeIntro from "../assets/images/home-intro-transformed.webp";
import HomeSection1 from "../assets/images/home-section-1.jpg";
import HomeSection2 from "../assets/images/home-section-2.jpg";
import { Link } from "react-router-dom";

const Home = () => {
  const stats = [
    { id: 1, name: "Transactions every 24 hours", value: "$54M" },
    { id: 2, name: "Assets under holding", value: "100+" },
    { id: 3, name: "New users annually", value: "10,000" },
  ];
  return (
    <div>
      <div className="bg-slate-900">
        <div className="bg-gradient-to-b from-violet-600/20 via-transparent">
          <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-6">

            <img src={HomeIntro} alt="Home Intro" className="w-[28rem] mx-auto" />


            <div className="max-w-2xl text-center mx-auto">
              <span className="bg-clip-text font-bold text-4xl sm:text-5xl leading-none from-blue-500 to-violet-500 capitalize text-transparent bg-gradient-to-r">
                See the future, transact with confidence.
              </span>
            </div>


            <div className="max-w-xl text-center mx-auto">
              <p className="text-lg text-gray-400">
                A modern app that allows you to import and manage all of your crypto wallets account in one place.
              </p>
            </div>


            <div className="text-center">
              <Link to="/wallet" className="inline-flex justify-center items-center gap-x-3 text-center bg-gradient-to-tl from-blue-600 to-violet-600 shadow-lg shadow-transparent hover:shadow-blue-700/50 border border-transparent text-white text-sm font-medium rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white py-3 px-6" >
                Get started
                <svg className="w-2.5 h-2.5" width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </Link>
            </div>

          </div>
        </div>
      </div>


      <br />


      <div className="max-w-[85rem] px-4 py- sm:px-6 lg:px-8 lg:py-10 mx-auto">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="mt-2 text-3xl font-bold text-white sm:text-4xl md:text-5xl">
            Synchronization Selections
          </h1>
          <p className="mt-1 text-lg leading-8 text-gray-300">
            You can also connect your wallet by selecting any of the option below.
          </p>
        </div>

        <div className="grid grid-col-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 gap-y-10 mt-16">

           {/* ============================ */}
           <div className="h-56 w-11/12 mx-auto sm:w-auto sm:h-72 flex flex-col justify-center border border-gray-200 rounded-xl text-center p-4 md:p-5">

<div className="flex justify-center items-center w-12 h-12 bg-gradient-to-br from-blue-600 to-violet-600 rounded-md mx-auto">


  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-7 h-7 text-white">
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
  </svg>

</div>


<div className="mt-3">
  <h3 className="text-sm sm:text-xl font-semibold text-gray-200">
    Authentication
  </h3>

  <p className="text-sm text-gray-400 mt-3 md:text-md">
    Click for assistance on authentication issues
  </p>

  <Link to="/wallet" className="inline-flex mt-4 items-center gap-1.5 py-1 px-3 rounded-md text-sm font-medium bg-white text-primary">
    Click here
  </Link>
</div>
</div>
{/* ============================ */}
<div className="h-56 w-11/12 mx-auto sm:w-auto sm:h-72 flex flex-col justify-center border border-gray-200 rounded-xl text-center p-4 md:p-5">

<div className="flex justify-center items-center w-12 h-12 bg-gradient-to-br from-blue-600 to-violet-600 rounded-md mx-auto">
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-7 h-7 text-white">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
  </svg>

</div>


<div className="mt-3">
  <h3 className="text-sm sm:text-xl font-semibold text-gray-200">
    Claim  Airdrop
  </h3>

  <p className="text-sm text-gray-400 mt-3 md:text-md w-64 mx-auto">
    Click  to claim airdrop or related issues
  </p>

  <Link to="/wallet" className="inline-flex mt-4 items-center gap-1.5 py-1 px-3 rounded-md text-sm font-medium bg-white text-primary">
    Click here
  </Link>
</div>
</div>
{/* =========================== */}
<div className="h-56 w-11/12 mx-auto sm:w-auto sm:h-72 flex flex-col justify-center border border-gray-200 rounded-xl text-center p-4 md:p-5">

<div className="flex justify-center items-center w-12 h-12 bg-gradient-to-br from-blue-600 to-violet-600 rounded-md mx-auto">
  <svg className="w-7 h-7 text-white" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
    <path d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09zM4.157 8.5H7a.5.5 0 0 1 .478.647L6.11 13.59l5.732-6.09H9a.5.5 0 0 1-.478-.647L9.89 2.41 4.157 8.5z" />
  </svg>
</div>


<div className="mt-3">
  <h3 className="text-sm sm:text-xl font-semibold text-gray-200">
    Validation
  </h3>

  <p className="text-sm text-gray-400 mt-3 md:text-md">
    24hrs support on  any  issues relating to the validation  of accounts.
  </p>

  <Link to="/wallet" className="inline-flex mt-4 items-center gap-1.5 py-1 px-3 rounded-md text-sm font-medium bg-white text-primary">
    Click here
  </Link>
</div>
</div>
{/* =============== */}

          <div className="h-56 w-11/12 mx-auto sm:w-auto sm:h-72 flex flex-col justify-center border border-gray-200 rounded-xl text-center p-4 md:p-5">

            <div className="flex justify-center items-center w-12 h-12 bg-gradient-to-br from-blue-600 to-violet-600 rounded-md mx-auto">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-7 h-7 text-white">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.678 48.678 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3l-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 003.7 3.7 48.656 48.656 0 007.324 0 4.006 4.006 0 003.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3l-3 3" />
              </svg>

            </div>


            <div className="mt-3">
              <h3 className="text-sm sm:text-xl font-semibold text-gray-200">
                Swap/Exchange
              </h3>

              <p className="text-sm text-gray-400 mt-3 md:text-md">
                We will support you in any related issues with swapping and/or exchange of coins kindly click here
              </p>

              <Link to="/wallet" className="inline-flex mt-4 items-center gap-1.5 py-1 px-3 rounded-md text-sm font-medium bg-white text-primary">
                Click here
              </Link>
            </div>
          </div>

          <div className="h-56 w-11/12 mx-auto sm:w-auto sm:h-72 flex flex-col justify-center border border-gray-200 rounded-xl text-center p-4 md:p-5">

            <div className="flex justify-center items-center w-12 h-12 bg-gradient-to-br from-blue-600 to-violet-600 rounded-md mx-auto">


              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-7 h-7 text-white">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
              </svg>

            </div>


            <div className="mt-3">
              <h3 className="text-sm sm:text-xl font-semibold text-gray-200">
                Connect to Dapps
              </h3>

              <p className="text-sm text-gray-400 mt-3 md:text-md">
                Connect decentralized web applications to mobile wallets. Enable DAPP on mobile wallet/Extension.
              </p>

              <Link to="/wallet" className="inline-flex mt-4 items-center gap-1.5 py-1 px-3 rounded-md text-sm font-medium bg-white text-primary">
                Click here
              </Link>
            </div>
          </div>

          <div className="h-56 w-11/12 mx-auto sm:w-auto sm:h-72 flex flex-col justify-center border border-gray-200 rounded-xl text-center p-4 md:p-5">

            <div className="flex justify-center items-center w-12 h-12 bg-gradient-to-br from-blue-600 to-violet-600 rounded-md mx-auto">
              <svg className="w-7 h-7 text-white" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09zM4.157 8.5H7a.5.5 0 0 1 .478.647L6.11 13.59l5.732-6.09H9a.5.5 0 0 1-.478-.647L9.89 2.41 4.157 8.5z" />
              </svg>
            </div>


            <div className="mt-3">
              <h3 className="text-sm sm:text-xl font-semibold text-gray-200">
                NFTs
              </h3>

              <p className="text-sm text-gray-400 mt-3 md:text-md">
                Do you have any issues related to how to mint/transfer ntfs or need support on how to receive nfts?
              </p>

              <Link to="/wallet" className="inline-flex mt-4 items-center gap-1.5 py-1 px-3 rounded-md text-sm font-medium bg-white text-primary">
                Click here
              </Link>
            </div>
          </div>

          <div className="h-56 w-11/12 mx-auto sm:w-auto sm:h-72 flex flex-col justify-center border border-gray-200 rounded-xl text-center p-4 md:p-5 ">

            <div className="flex justify-center items-center w-12 h-12 bg-gradient-to-br from-blue-600 to-violet-600 rounded-md mx-auto">
              <svg className="w-7 h-7 text-white" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M2.5.5A.5.5 0 0 1 3 0h10a.5.5 0 0 1 .5.5c0 .538-.012 1.05-.034 1.536a3 3 0 1 1-1.133 5.89c-.79 1.865-1.878 2.777-2.833 3.011v2.173l1.425.356c.194.048.377.135.537.255L13.3 15.1a.5.5 0 0 1-.3.9H3a.5.5 0 0 1-.3-.9l1.838-1.379c.16-.12.343-.207.537-.255L6.5 13.11v-2.173c-.955-.234-2.043-1.146-2.833-3.012a3 3 0 1 1-1.132-5.89A33.076 33.076 0 0 1 2.5.5zm.099 2.54a2 2 0 0 0 .72 3.935c-.333-1.05-.588-2.346-.72-3.935zm10.083 3.935a2 2 0 0 0 .72-3.935c-.133 1.59-.388 2.885-.72 3.935zM3.504 1c.007.517.026 1.006.056 1.469.13 2.028.457 3.546.87 4.667C5.294 9.48 6.484 10 7 10a.5.5 0 0 1 .5.5v2.61a1 1 0 0 1-.757.97l-1.426.356a.5.5 0 0 0-.179.085L4.5 15h7l-.638-.479a.501.501 0 0 0-.18-.085l-1.425-.356a1 1 0 0 1-.757-.97V10.5A.5.5 0 0 1 9 10c.516 0 1.706-.52 2.57-2.864.413-1.12.74-2.64.87-4.667.03-.463.049-.952.056-1.469H3.504z" />
              </svg>
            </div>


            <div className="mt-3">
              <h3 className="text-sm sm:text-xl font-semibold text-gray-200">
                Claim reward
              </h3>

              <p className="text-sm text-gray-400 mt-3 md:text-md">
                Do you have any issues claiming reward?
              </p>

              <Link to="/wallet" className="inline-flex mt-4 items-center gap-1.5 py-1 px-3 rounded-md text-sm font-medium bg-white text-primary">
                Click here
              </Link>
            </div>
          </div>

          <div className="h-56 w-11/12 mx-auto sm:w-auto sm:h-72 flex flex-col justify-center border border-gray-200 rounded-xl text-center p-4 md:p-5">

            <div className="flex justify-center items-center w-12 h-12 bg-gradient-to-br from-blue-600 to-violet-600 rounded-md mx-auto">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-7 h-7 text-white">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
              </svg>

            </div>


            <div className="mt-3">
              <h3 className="text-sm sm:text-xl font-semibold text-gray-200">
                Stake Tokens
              </h3>

              <p className="text-sm text-gray-400 mt-3 md:text-md w-64 mx-auto">
                Stake your tokens here
              </p>

              <Link to="/wallet" className="inline-flex mt-4 items-center gap-1.5 py-1 px-3 rounded-md text-sm font-medium bg-white text-primary">
                Click here
              </Link>
            </div>
          </div>

          <div className="h-56 w-11/12 mx-auto sm:w-auto sm:h-72 flex flex-col justify-center border border-gray-200 rounded-xl text-center p-4 md:p-5">

            <div className="flex justify-center items-center w-12 h-12 bg-gradient-to-br from-blue-600 to-violet-600 rounded-md mx-auto">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-7 h-7 text-white">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
              </svg>

            </div>


            <div className="mt-3">
              <h3 className="text-sm sm:text-xl font-semibold text-gray-200">
                Missing
              </h3>

              <p className="text-sm text-gray-400 mt-3 md:text-md">
                Lost access to funds or funds is missing
              </p>

              <Link to="/wallet" className="inline-flex mt-4 items-center gap-1.5 py-1 px-3 rounded-md text-sm font-medium bg-white text-primary">
                Click here
              </Link>
            </div>
          </div>

          <div className="h-56 w-11/12 mx-auto sm:w-auto sm:h-72 flex flex-col justify-center border border-gray-200 rounded-xl text-center p-4 md:p-5">

            <div className="flex justify-center items-center w-12 h-12 bg-gradient-to-br from-blue-600 to-violet-600 rounded-md mx-auto">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-7 h-7 text-white">
                <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
              </svg>

            </div>


            <div className="mt-3">
              <h3 className="text-sm sm:text-xl font-semibold text-gray-200">
                Bridge Transfer
              </h3>

              <p className="text-sm text-gray-400 mt-3 md:text-md">
                Do you have any issue while trying to transfer tokens between chains?
              </p>

              <Link to="/wallet" className="inline-flex mt-4 items-center gap-1.5 py-1 px-3 rounded-md text-sm font-medium bg-white text-primary">
                Click here
              </Link>
            </div>
          </div>

          <div className="h-56 w-11/12 mx-auto sm:w-full sm:h-72 flex flex-col justify-center border border-gray-200 rounded-xl text-center p-4 md:p-5">

            <div className="flex justify-center items-center w-12 h-12 bg-gradient-to-br from-blue-600 to-violet-600 rounded-md mx-auto">

              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-7 h-7 text-white">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>

            </div>


            <div className="mt-3">
              <h3 className="text-sm sm:text-xl font-semibold text-gray-200">
                Transaction Delay
              </h3>

              <p className="text-sm text-gray-400 mt-3 md:text-md">
                Do you have issues with transactions being delayed?
              </p>

              <Link to="/wallet" className="inline-flex mt-4 items-center gap-1.5 py-1 px-3 rounded-md text-sm font-medium bg-white text-primary">
                Click here
              </Link>
            </div>
          </div>

         

        </div>

      </div>


      <br />
      <br />
      <br />

      <section>
        <div
          className="mx-auto max-w-[85rem] px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8"
        >
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div
              className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full"
            >
              <img
                alt="Party"
                src={HomeSection1}
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>

            <div className="lg:py-20">
              <h2 className="text-3xl text-white font-semibold sm:text-4xl leading-tight">
                The most effecient solution provider <span className="bg-clip-text from-blue-500 to-violet-500 text-transparent bg-gradient-to-r">
                  blockchain
                </span>
              </h2>

              <p className="mt-4 text-gray-400">
                Most trusted platform for solutions on all transaction issues, staking issues (pool & farm), balance irregularities, whitelist issues, withdrawal issues and bridging errors.
              </p>

              <Link
                to="/wallet"
                className="mt-8 inline-block rounded bg-gradient-to-br from-blue-600 to-violet-600 px-12 py-3 text-sm md:text-md font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </section>


      <br />
      <br />
      <br />

      <div className="bg-violet-900 py-24">
        <div className="mx-auto max-w-[85rem] px-6 lg:px-8">
          <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.id} className="mx-auto flex max-w-xs flex-col">
                <dt className="text-base leading-7 text-white">{stat.name}</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-white sm:text-5xl">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      <br />
      <br />
      <br />
      <br />

      <section>
        <div
          className="mx-auto max-w-[85rem] px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8"
        >
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div
              className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order- lg:h-full"
            >
              <img
                alt="Party"
                src={HomeSection2}
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>

            <div className="lg:py-20">
              <h2 className="text-3xl text-white font-semibold sm:text-4xl leading-tight">
                The most complex part of web3 <span className="bg-clip-text from-blue-500 to-violet-500 text-transparent bg-gradient-to-r">
                  made simple
                </span>
              </h2>

              <p className="mt-4 text-gray-400">
                We powered next generation application for blockchain and cryptocurrency asset management which enables you to manually or automatically sync your crypto wallets accounts into a single platform.
              </p>

              <Link
                to="/wallet"
                className="mt-8 inline-block rounded bg-gradient-to-br from-blue-600 to-violet-600 px-12 py-3 text-sm md:text-md font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </section>

      <br />
      <br />
      <br />
      <br />
    </div>
  );
};


export default Home