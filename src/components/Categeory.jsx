// import React, { useEffect, useState } from "react";
import { useState } from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
// {/* <FontAwesomeIcon icon={faStar} /> */}
// import {faStar} from "react-icons/fa6"

export default function Categeory() {
  // const [categeories, setCategeories] = useState([]);

  // const fetchCategeory = async () => {
  //   const response = await fetch("http://localhost:5000/categories");
  //   const data = await response.json();
  //   setCategeories(data);
  // };

  // useEffect(() => {
  //   fetchCategeory();
  // }, []);

  const [slide, setSlide] = useState(2);

  let prevSlide = () => {
    setSlide(slide - 2);
    // console.log("Previous button fired!");
    alert("Previous button fired!");
  };
  let nextSlide = () => {
    setSlide(slide + 2);
    // console.log("Next button fired!");
    alert("Next Button fired!");
  };

  const [redirect, setRedirect] = useState("");

  let imgRedirected = () => {
    alert("Images clicked to redirect ! ");
    setRedirect(
      "https://www.swiggy.com/city/chandigarh/sandburgs-sas-nagar-sector-70-rest661964?restaurant_id=661964&source=collection&query=Burger",
    );
  };
  if (redirect) {
    window.location.href = redirect;
  }

  const [imgItem, setImgItem] = useState('');
  let imgdataItems =()=>{
    alert("To Search, Kindly click on the search icon and items images !")
    setImgItem('/')
  }
  if(imgItem){
    window.location.href =imgItem;
  };


  return (
    <>
      <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="flex my-5 item-center justify-between">
          <div className="text-2xl sm:text-[30px] font-bold">
            What's on your mind?
          </div>
          <div className="flex items-center justify-center ">
            <div
              className="flex items-center justify-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2 font-bold cursor-pointer hover:text-orange-500 translate-x-((slide*100)%)"
              onClick={prevSlide}
            >
              <FaArrowLeft />
            </div>
            <div
              className="flex items-center justify-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2 font-bold cursor-pointer hover:text-orange-500 translate-x-2"
              onClick={nextSlide}
            >
              <FaArrowRight />
            </div>
          </div>
        </div>
      </div>

      {/* images sections;  */}

      <div
        id="firstContImg"
        className="max-w-[1200px] px-4 sm:px-6 mx-auto mt-[30px] flex-grow"
      >
        <div
          className="flex items-center justify-start sm:justify-between gap-4 sm:gap-10 shrink-0 overflow-x-auto cursor-pointer pb-2"
          onClick={() => imgRedirected()}
        >
          <img
            src="/Images/Paratha.jpeg"
            className="w-[180px]  object-cover"
            alt="Swiggy-logo"
          />
          <img
            src="/Images/Noodles.jpeg"
            className="w-[180px] rounded-full object-cover"
            alt="Swiggy-logo"
          />
          <img
            src="/Images/Pasta.jpeg"
            className="w-[180px]  rounded-full object-cover"
            alt="Swiggy-logo"
          />
          <img
            src="/Images/North_Indian_4.jpeg"
            className="w-[180px] rounded-full object-cover"
            alt="Swiggy-logo"
          />
          <img
            src="/Images/Poori.jpeg"
            className="w-[180px] rounded-full object-cover"
            alt="Swiggy-logo"
          />
          <img
            src="/Images/Khichdi.jpeg"
            className="w-[180px] rounded-full object-cover"
            alt="Swiggy-logo"
          />
          <img
            src="/Images/Rolls.jpeg"
            className="w-[180px] rounded-full object-cover"
            alt="Swiggy-logo"
          />
          <img
            src="/Images/South_Indian_4.jpeg"
            className="w-[180px] rounded-full object-cover"
            alt="Swiggy-logo"
          />
          <img
            src="/Images/Salad.jpeg"
            className="w-[180px] rounded-full object-cover"
            alt="Swiggy-logo"
          />
          <img
            src="/Images/8efe23769b8aaff9d0fbff8a4da774d1.jpeg"
            className="w-[140px] h-[140px] rounded-full object-cover"
            alt="Swiggy-logo"
          />
          <img
            src="/Images/5fe4444a065b60c4fe39ef975222c12b.jpeg"
            className="w-[120px] rounded-full object-cover"
            alt="Swiggy-logo"
          />
          <img
            src="/Images/uzklu7r1dd7kc1lto5l5.jpeg"
            className="w-[140px] h-[140px] rounded-full object-cover"
            alt="Swiggy-logo"
          />
          <img
            src="/Images/2a41aa363a8ae1e98a4cce95c2d0c589.jpeg"
            className="w-[140px] h-[140px] rounded-full object-cover"
            alt="Swiggy-logo"
          />
          <img
            src="/Images/2b4f62d606d1b2bfba9ba9e5386fabb7.jpeg"
            className="w-[140px] h-[140px]  rounded-full object-cover"
            alt="Swiggy-logo"
          />
          <img
            src="/Images/2b21280be7237e3aa9d14ca34b97c2f9.jpeg"
            className="w-[120px] rounded-full object-cover"
            alt="Swiggy-logo"
          />
        </div>
        <div
          id="imgdata"
          className="flex cursor-pointer justify-between mt-[20px] gap-6 font-bold ml-[25px] mr-[45px] overflow-x-auto whitespace-nowrap"
          onClick={imgdataItems}
        >
          <p>Biryani</p>
          <p>Sandwitch</p>
          <p className="ml-3">Pizza</p>
          <p>Ice-Cream</p>
          <p>Cakes</p>
          <p>Kaju-Katli</p>
          <p>N-Pizza</p>
          <p>Rasogulla</p>
          
        </div>
        <div className="h-[1px] mt-[40px] bg-black "></div>
      </div>

      {/* second container ; */}

      <div
        id="secContHead"
        className="min-h-[320px] w-full max-w-[1200px] mt-2 mx-auto px-4 sm:px-6"
      >
        <div
          id="desp"
          className="flex flex-wrap items-center justify-between gap-3 pt-4"
        >
          <h1 className="font-bold text-xl sm:text-[30px]">
            Top restaurant chains in Chandigarh
          </h1>
          <div className="arrowLogo flex">
            <div
              className="flex items-center justify-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2 font-bold hover:text-orange-500"
              onClick={prevSlide}
            >
              <FaArrowLeft />
            </div>
            <div
              className="flex items-center justify-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2 font-bold hover:text-orange-500"
              onClick={nextSlide}
            >
              <FaArrowRight />
            </div>
          </div>
        </div>
        <div
          className="secBoxCont mt-[40px] grid grid-cols-1 min-[480px]:grid-cols2 lg:grid-cols-4 gap-4 cursor-pointer overflow-hidden "
          onClick={imgRedirected}
        >
          <div className="fBox mt-3 min-w-0 cursor-pointer ">
            <img
              src="/Images/919cb3be0e7406f86f6741ebe7c30128.jpeg"
              alt="Img-Error"
              className="h-[180px] w-[225px] object-cover rounded-3xl"
            />
            <div className="img-details ml-3 font-bold text-[10px] text-[#02060C99]">
              <p className="text-[15px] text-black">Multi-Bhog Thali</p>
              <p>4.7rating -20-25 mins</p>
              <p>Special Desertis, Foods, Snacks</p>
              <p>Sector 16</p>
            </div>
          </div>
          <div className="fBox mt-3 ">
            <img
              src="/Images/lub6gjmuc94jm7xm9chj.jpeg"
              alt="Img-Error"
              className="h-[180px] rounded-3xl w-[225px] object-cover"
            />
            <div className="img-details ml-3 font-bold text-[10px] text-[#02060C99]">
              <p className="text-[15px] text-black">Masala Dosa </p>
              <p>4.8rating -10-15 mins</p>
              <p>Special Desertis, Foods, Snacks</p>
              <p>Sector 35</p>
            </div>
          </div>
          <div className="fBox mt-3 ">
            <img
              src="/Images/535fc9f9c135f7982317bbb6a64a1ffc.jpeg"
              alt="Img-Error"
              className="h-[180px] w-[225px] object-cover rounded-3xl"
            />
            <div className="img-details ml-3 font-bold text-[10px] text-[#02060C99]">
              <p className="text-[15px] text-black">MC-Donnal Fries </p>
              <p>4.9rating -15-20 mins</p>
              <p>Special Desertis, Foods, Snacks</p>
              <p>Sector 16</p>
            </div>
          </div>
          <div className="fBox mt-3 ">
            <img
              src="/Images/85ccae4e3576f9330af102c46ca85395.jpeg"
              alt="Img-Error"
              className="h-[180px] w-[225px] object-cover rounded-3xl"
            />
            <div className="img-details ml-3 font-bold text-[10px] text-[#02060C99]">
              <p className="text-[15px] text-black">Delicious Ice-Cream</p>
              <p>4.7rating -20-25 mins</p>
              <p>Special Desertis, Foods, Snacks</p>
              <p>Sector 16</p>
            </div>
          </div>
          {/* <div className="fBox mt-3 ">
            <img
              src="/Images/5116a385bac0548e06c33c08350fbf11.jpeg"
              alt="Img-Error"
              className="h-[180px] w-[225px] object-cover rounded-3xl"
            />
            <div className="img-details ml-3 font-bold text-[10px] text-[#02060C99]">
              <p className="text-[15px] text-black">Peri-Peri Sandwich</p>
              <p>4.7rating -20-25 mins</p>
              <p>Special Desertis, Foods, Snacks</p>
              <p>Sector 16</p>
            </div>
          </div> */}
        </div>
        <div className="bg-black mt-[50px] h-[1px]"></div>
      </div>

      {/* Third Container;  */}

      <div
        id="ThirdContHead"
        className="min-h-[620px] mt-1 w-full max-w-[1200px] mx-auto px-4 sm:px-6"
      >
        <div
          id="desp"
          className="flex flex-wrap items-center justify-between gap-3 pt-6 sm:pt-[50px]"
        >
          <h1 className="font-bold text-xl sm:text-[30px]">
            Restaurants with online food delivery in Chandigarh
          </h1>
          <div className="arrowLogo flex">
            <div
              className="flex items-center justify-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2 font-bold hover:text-orange-500"
              onClick={prevSlide}
            >
              <FaArrowLeft />
            </div>
            <div
              className="flex items-center justify-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2 font-bold hover:text-orange-500"
              onClick={nextSlide}
            >
              <FaArrowRight />
            </div>
          </div>
        </div>
        <div
          className="secBoxCont mt-[30px] grid grid-cols-1 min-[480px]:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4 cursor-pointer"
          onClick={() => imgRedirected(console.log("thankyou!"))}
        >
          <div className="fBox mt-3 min-w-0 cursor-pointer">
            <img
              src="/Images/wpyvsg9fdcgngkbgnmbd.jpeg"
              alt="Img-Error"
              className="h-[180px] w-full max-w-[225px] object-cover rounded-3xl"
            />
            <div className="img-details ml-3 font-bold text-[10px] text-[#02060C99]">
              <p className="text-[15px] text-black">Bakeri Cakes Special</p>
              <p>4.7rating -20-25 mins</p>
              <p>Special Desertis, Foods, Snacks</p>
              <p>Sector 16</p>
            </div>
          </div>
          <div className="fBox mt-3 min-w-0 ">
            <img
              src="/Images/xq1gohcapno6luemblhu.jpeg"
              alt="Img-Error"
              className="h-[180px] rounded-3xl w-full max-w-[225px] object-cover"
            />
            <div className="img-details ml-3 font-bold text-[10px] text-[#02060C99]">
              <p className="text-[15px] text-black">Chicken Saboot </p>
              <p>4.8rating -10-15 mins</p>
              <p>Special Desertis, Foods, Snacks</p>
              <p>Sector 35</p>
            </div>
          </div>
          <div className="fBox mt-3 ">
            <img
              src="/Images/zaocxvcgafgffpcki6tl.jpeg"
              alt="Img-Error"
              className="h-[180px] w-full max-w-[225px] object-cover rounded-3xl"
            />
            <div className="img-details ml-3 font-bold text-[10px] text-[#02060C99]">
              <p className="text-[15px] text-black">Pan Paneers</p>
              <p>4.9rating -15-20 mins</p>
              <p>Special Desertis, Foods, Snacks</p>
              <p>Sector 16</p>
            </div>
          </div>
          <div className="fBox mt-3 ">
            <img
              src="/Images/pjsaxa4bkfphmjeiatt6.jpeg"
              alt="Img-Error"
              className="h-[180px] w-full max-w-[225px] object-cover rounded-3xl"
            />
            <div className="img-details ml-3 font-bold text-[10px] text-[#02060C99]">
              <p className="text-[15px] text-black">Delicious Rasogulla</p>
              <p>4.7rating -20-25 mins</p>
              <p>Special Desertis, Foods, Snacks</p>
              <p>Sector 16</p>
            </div>
          </div>
          <div className="fBox mt-3 ">
            <img
              src="/Images/w7ndo1dkkk6kf4qfz2p1.jpeg"
              alt="Img-Error"
              className="h-[180px] w-full max-w-[225px] object-cover rounded-3xl"
            />
            <div className="img-details ml-3 font-bold text-[10px] text-[#02060C99]">
              <p className="text-[15px] text-black">Vanila & Multi Ice-Cream</p>
              <p>4.7rating -20-25 mins</p>
              <p>Special Desertis, Foods, Snacks</p>
              <p>Sector 16</p>
            </div>
          </div>
        </div>

        {/* 2nd another container;  */}

        <div
          className="secBoxCont2 mt-[40px] grid grid-cols-1 min-[480px]:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4 cursor-pointer"
          onClick={() => imgRedirected()}
        >
          <div className="fBox mt-3 min-w-0 cursor-pointer">
            <img
              src="/Images/b318c0b4bc2169550145ace1d6e791a2.jpeg"
              alt="Img-Error"
              className="h-[180px] w-full max-w-[225px] object-cover rounded-3xl"
            />
            <div className="img-details ml-3 font-bold text-[10px] text-[#02060C99]">
              <p className="text-[15px] text-black">
                Lotus Bakery & Special-Tea
              </p>
              <p>4.7rating -20-25 mins</p>
              <p>Special Desertis, Foods, Snacks</p>
              <p>Sector 16</p>
            </div>
          </div>
          <div className="fBox mt-3 ">
            <img
              src="/Images/b39e4312ae2e9f65c3b58faaed83f488.jpeg"
              alt="Img-Error"
              className="h-[180px] rounded-3xl w-full max-w-[225px] object-cover"
            />
            <div className="img-details ml-3 font-bold text-[10px] text-[#02060C99]">
              <p className="text-[15px] text-black">American Pizza</p>
              <p>4.8rating -10-15 mins</p>
              <p>Special Desertis, Foods, Snacks</p>
              <p>Sector 35</p>
            </div>
          </div>
          <div className="fBox mt-3 ">
            <img
              src="/Images/bee00361a5f51701f04a67b74877e1f3.jpeg"
              alt="Img-Error"
              className="h-[180px] w-full max-w-[225px] object-cover rounded-3xl"
            />
            <div className="img-details ml-3 font-bold text-[10px] text-[#02060C99]">
              <p className="text-[15px] text-black">Cold & Warm Coffee</p>
              <p>4.9rating -15-20 mins</p>
              <p>Special Desertis, Foods, Snacks</p>
              <p>Sector 16</p>
            </div>
          </div>
          <div className="fBox mt-3 ">
            <img
              src="/Images/b14cd9fc40129fcfb97aa7e621719d07.jpeg"
              alt="Img-Error"
              className="h-[180px] w-full max-w-[225px] object-cover rounded-3xl"
            />
            <div className="img-details ml-3 font-bold text-[10px] text-[#02060C99]">
              <p className="text-[15px] text-black">Paneer-Dishies</p>
              <p>4.7rating -20-25 mins</p>
              <p>Special Desertis, Foods, Snacks</p>
              <p>Sector 16</p>
            </div>
          </div>
          <div className="fBox mt-3 ">
            <img
              src="/Images/cef5bf4cc31dc3c46a1e1b027c5627e4.jpeg"
              alt="Img-Error"
              className="h-[180px] w-full max-w-[225px] object-cover rounded-3xl"
            />
            <div className="img-details ml-3 font-bold text-[10px] text-[#02060C99]">
              <p className="text-[15px] text-black">Handi Corma</p>
              <p>4.7rating -20-25 mins</p>
              <p>Special Desertis, Foods, Snacks</p>
              <p>Sector 16</p>
            </div>
          </div>
        </div>
        {/* 3rd another container;  */}

        <div
          className="secBoxCont2 mt-[40px] grid grid-cols-1 min-[480px]:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4 cursor-pointer"
          onClick={() => imgRedirected()}
        >
          <div className="fBox mt-3 min-w-0 cursor-pointer">
            <img
              src="/Images/xcjwkegujsn2jgvvc4f7.jpeg"
              alt="Img-Error"
              className="h-[180px] w-full max-w-[225px] object-cover rounded-3xl"
            />
            <div className="img-details ml-3 font-bold text-[10px] text-[#02060C99]">
              <p className="text-[15px] text-black">
                Capcisum Pizza
              </p>
              <p>4.7rating -20-25 mins</p>
              <p>Special Desertis, Foods, Snacks</p>
              <p>Sector 16</p>
            </div>
          </div>
          <div className="fBox mt-3 ">
            <img
              src="/Images/izxgfdx2exmkyvutatxn.jpeg"
              alt="Img-Error"
              className="h-[180px] rounded-3xl w-full max-w-[225px] object-cover"
            />
            <div className="img-details ml-3 font-bold text-[10px] text-[#02060C99]">
              <p className="text-[15px] text-black">South Chilli-Paneer</p>
              <p>4.8rating -10-15 mins</p>
              <p>Special Desertis, Foods, Snacks</p>
              <p>Sector 35</p>
            </div>
          </div>
          <div className="fBox mt-3 ">
            <img
              src="/Images/ibqsys51v6asbayexif8.jpeg"
              alt="Img-Error"
              className="h-[180px] w-full max-w-[225px] object-cover rounded-3xl"
            />
            <div className="img-details ml-3 font-bold text-[10px] text-[#02060C99]">
              <p className="text-[15px] text-black">Bihari Litti-Chokha</p>
              <p>4.9rating -15-20 mins</p>
              <p>Special Desertis, Foods, Snacks</p>
              <p>Sector 16</p>
            </div>
          </div>
          <div className="fBox mt-3 ">
            <img
              src="/Images/imqeynorhqpktv5puctx.jpeg"
              alt="Img-Error"
              className="h-[180px] w-full max-w-[225px] object-cover rounded-3xl"
            />
            <div className="img-details ml-3 font-bold text-[10px] text-[#02060C99]">
              <p className="text-[15px] text-black">Pan Butter-Chicken</p>
              <p>4.7rating -20-25 mins</p>
              <p>Special Desertis, Foods, Snacks</p>
              <p>Sector 16</p>
            </div>
          </div>
          <div className="fBox mt-3 ">
            <img
              src="/Images/gd2f0gv3skbsmtesfzxt.jpeg"
              alt="Img-Error"
              className="h-[180px] w-full max-w-[225px] object-cover rounded-3xl"
            />
            <div className="img-details ml-3 font-bold text-[10px] text-[#02060C99]">
              <p className="text-[15px] text-black">Sweets-Platter</p>
              <p>4.7rating -20-25 mins</p>
              <p>Special Desertis, Foods, Snacks</p>
              <p>Sector 16</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
