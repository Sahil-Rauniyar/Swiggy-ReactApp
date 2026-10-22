import React, { useState } from "react";
import { RxCaretDown } from "react-icons/rx";
import { IoSearchSharp } from "react-icons/io5";
import { BiSolidOffer } from "react-icons/bi";
import { IoHelpBuoyOutline } from "react-icons/io5";
import { FaSignInAlt } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";

export default function Header() {
  const [toggle, setToggle] = useState(false);

  const showSideMenu = () => {
    setToggle(true);
  };

  const hideSideMenu = () => {
    setToggle(false);
  };

  const [url, Setsearchurl] = useState('');
  let searchKit =()=>{
    alert("Click on Ok to search !");
    Setsearchurl("https://www.swiggy.com/search");
  };
   if(url){
    window.location.href = (url);
  };
  
  const [offerurl, Setofferurl] = useState('');
  let offerKit = () =>{
    alert("Checking the offers..");
    Setofferurl("https://www.swiggy.com/offers-near-me");
  };
  if(offerurl){
    window.location.href = (offerurl);
  };

  const [helpurl, Sethelpurl] = useState('');
  let helpKit = ()=>{
    alert('Redirecting to help center!');
    Sethelpurl("https://www.swiggy.com/support");
  };
  if(helpurl){
    window.location.href = (helpurl);
  };

  const [shopurl, Setshopurl] = useState('');
  let shopKit = () =>{
    alert('Click "OK" to shopping..');
    Setshopurl("https://www.swiggy.com/static-web-food-cart?flow=cart&sourceApp=dweb");
  };
  if(shopurl){
    window.location.href = (shopurl);
  };

  const [signurl, Setsignurl] = useState('');
  let signKit = () =>{
    alert('Click OK to redirect !');
    Setsignurl("https://www.swiggy.com/corporate/our-business/");
  };
  if(signurl){
    window.location.href = (signurl);
  };
  const links = [
    {
      icon: <IoSearchSharp onClick={searchKit}/>,
      name: "Search",
      
    },
    {
      icon: <BiSolidOffer onClick={offerKit} />,
      name: "Offers",
      sup: "New",
    },
    {
      icon: <IoHelpBuoyOutline onClick={helpKit}/>,
      name: "Help",
    },
    {
      icon: <FaSignInAlt onClick={signKit}/>,
      name: "Sign In",
    },
    {
      icon: <FaShoppingCart onClick={shopKit} />,
      name: "Cart",
      sup: 11,
    },
  ];




return (
  <>
    <div
      className="black-overlay w-full h-full fixed duration-500 z-50"
      onClick={hideSideMenu}
      style={{
        opacity: toggle ? 1 : 0,
        visibility: toggle ? "visible" : "hidden",
      }}
    >
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="w-[85%] max-w-[500px] bg-white h-full absolute duration-[600ms]"
        style={{
          left: toggle ? "0%" : "-100%",
        }}
      ></div>
    </div>

    <header className="p-3 sm:p-[15px] shadow-xl text-[#686b78]">
      <div className="max-w-[1200px] mx-auto flex flex-wrap lg:flex-nowrap items-center gap-3">

        {/* Logo */}
        <div className="w-[45px] sm:w-[50px] lg:w-[55px] shrink-0">
          <img
            src="/Images/swiggy-logoPtuCoder.jpeg"
            className="w-full rounded-2xl"
            alt="Swiggy-logo"
          />
        </div>

        {/* Location */}
        <div className="flex items-center text-xs sm:text-sm lg:text-base min-w-0">
          <span className="font-bold text-orange-500 border-b-[3px] border-[orange] whitespace-nowrap">
            Sector 62,
          </span>{" "}
          <span className="truncate">
            Mohali, Chandigarh, India
          </span>
          <RxCaretDown
            onClick={showSideMenu}
            fontSize={25}
            className="inline shrink-0 font-bold text-[#fc8019] cursor-pointer"
          />
        </div>

        {/* Navigation */}
        <nav className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 sm:gap-x-5 lg:gap-6 lg:ml-auto font-semibold text-sm sm:text-base lg:text-[18px] lg:mr-[10px] w-full lg:w-auto">
          {links.map((link, index) => {
            return (
              <li
                key={index}
                className="flex list-none cursor-pointer hover:text-[#fc8019] items-center gap-1 sm:gap-2 whitespace-nowrap"
              >
                {link.icon}
                {link.name}
                <sup className="hover:text-red-500 cursor-pointer text-green-500">
                  {link.sup}
                </sup>
              </li>
            );
          })}
        </nav>

      </div>
    </header>
  </>
);
}




//   return (
//     <>
//       <div
//         className="black-overlay w-full h-full fixed duration-500"
//         onClick={hideSideMenu}
//         style={{
//           opacity: toggle ? 1 : 0,
//           visibility: toggle ? "visible" : "hidden",
//         }}
//       >
//         <div
//           onClick={(e) => {
//             e.stopPropagation();
//           }}
//           className="w-[500px] bg-white h-full absolute duration-[600ms]"
//           style={{
//             left: toggle ? "0%" : "-100%",
//           }}
//         ></div>
//       </div>
//       <header className="p-[15px] shadow-xl text-[#686b78]">
//         <div className="max-w-[1200px] mx-auto border border-red-500 flex items-center">
//           <div className="w-[80px]">
//             <img
//               src="/Images/swiggy-logo2.webp"
//               className="w-full"
//               alt="Swiggy-logo"
//             />
//           </div>
//           <div>
//             <span className="font-bold text-orange-500 border-b-[3px] border-[orange]">
//               Sector 62,
//             </span>{" "}
//             Mohali, Chandigarh, India
//             <RxCaretDown
//               onClick={showSideMenu}
//               fontSize={25}
//               className="inline font-bold text-[#fc8019] cursor-pointer"
//             />
//           </div>
//           <nav className="flex list-none gap-6 ml-auto font-semibold text-[18px] mr-[10px]">
//             {links.map((link, index) => {
//               return (
//                 <li
//                   key={index}
//                   className="flex cursor-pointer hover:text-[#fc8019] items-center gap-2"
//                 >
//                   {link.icon}
//                   {link.name}
//                   <sup className=" hover:text-red-500 cursor-pointer text-green-500">{link.sup}</sup>
//                   {/* <sup className="text-green-500">{link.store}</sup> */}
//                 </li>
//               );
//             })}
//           </nav>
//         </div>
//       </header>
//     </>
//   );
// }
