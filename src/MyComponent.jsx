import "./App.css";
import { exportComponentAsPNG } from "react-component-export-image";
import React, { useState, createRef } from "react";
import logo1 from "./assets/logo1.png";
import logo2 from "./assets/logo2.png";
import logo3 from "./assets/logo3.png";
import bluebg from "./assets/bluebg.jpeg";
import { GrStar } from "react-icons/gr";
import { GiCheckMark } from "react-icons/gi";
import initialimage from "./assets/initialimage.png";

import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

function MyComponent({
  category,
  image,
  name,
  setCategory,
  setName,
  setImage,
  code,
  setCode,
}) {
  const [componentRef, setComponentRef] = useState(createRef());
  const notify = () =>
    toast.success("Image Downloaded Successfully", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });

  return (
    <>
      {/* <img src="/Border_.png" alt="img" /> */}
      <div className="md:w-[50%] w-[99%] mx-auto md:mx-0 bold  bg-black    ">
        {name && category && image && code && (
          <div className="flex justify-center items-center trasition duration-500 ease-in-out transform  hover:scale-105">
            <button
              className="bg-[#DFBC5D] my-2 text-black text-2xl font-bold p-2 rounded-md"
              onClick={() => {
                window.scrollTo(0, 0);
                setTimeout(() => {
                  exportComponentAsPNG(componentRef, {
                    fileName: `${name} Poster.png`,
                  });
                }, 1000);
                notify();
                setTimeout(() => {
                  setCategory("");
                  setName("");
                  setCode("");
                  setImage(initialimage);
                }, 2000);
              }}
            >
              Download Poster
            </button>
          </div>
        )}
        <div
          style={{
            backgroundImage: `url(${"/Border_.png"})`,
            backgroundSize: "cover",
            backgroundPosition: "center",

            backgroundRepeat: "no-repeat",
          }}
          ref={componentRef}
        >
          <div className="bg-black flex flex-col  justify-center text-white items-center">
            <img src="/logo.jpg" className="w-[80px] h-[80px] object-contain" />
            <h1 className="md:text-2xl text-[#DFBC5D]  flex flex-col justify-center items-center text-center text-xl my-1 font-bold cinzel">
              <p>PEOPLE'S CHOICE</p>
              <p>AWARDS</p> 2023
            </h1>

            <div className="flex justify-between p-2 gap-4 items-center">
              <div className="w-[300px] p-2 h-[250px] flex justify-center items-center transform -rotate-12  overflow-hidden rounded-full">
                <img
                  src={image}
                  alt="img"
                  className="w-[90%] object-cover h-[90%]"
                />
              </div>

              <div className="flex flex-col gap-1">
                <p>1 .Visit www.peopleschoiceawards.africa</p>
                <p>2 .Click on the "VOTE" button</p>
                <p>3 .Select Category</p>
                <p className="flex items-center gap-2">
                  4 . Enter Contestant Code{" "}
                  <span className="text-[#DFBC5D] font-bold text-xl cinzel"></span>
                </p>

                <p>5 . Enter number of Votes</p>
                <p>6 . Enter Mpesa Number/ Select Card</p>
                <p>7. Click on Vote Now</p>
              </div>
            </div>
            <p className="text-2xl my-1 text-[#DFBC5D] uppercase    gap-2 font-semibold flex  items-center">
              Vote for me
            </p>
            <p className=" text-center font-bold cinzel my-1 text-2xl ">
              {name ? name : " Name"}
            </p>
            <div className="flex  items-center gap-2">
              <p>CODE:</p>
              <p>
                <span className=" font-bold text-xl ">{code}</span>
              </p>
            </div>
            <p className="text-center uppercase ">{category}</p>

            <div
              className="w-[70%] h-[50px] flex justify-center items-center gap-2  "
              style={{
                backgroundImage: `url(${"/banner.png"})`,
                backgroundSize: "cover",
                backgroundPosition: "center",

                backgroundRepeat: "no-repeat",
              }}
            >
              VOTING POWERED BY{" "}
              <span className="text-[#DFBC5D]">TAMASHA KE</span>
            </div>

            <div className="flex  items-center gap-2">
              <GrStar className="text-[#DFBC5D] text-2xl" />
              <p className="h-[1px] w-[100px] bg-white"></p>
              <GrStar className="text-[#DFBC5D] text-2xl" />
              <p className="h-[1px] w-[100px] bg-white"></p>
              <GrStar className="text-[#DFBC5D] text-2xl" />
            </div>
            <img
              src="/Soxials_.png"
              alt="img"
              className="w-[100%] object-cover"
            />
            <div className="bg-white w-[100%] py-2 flex  justify-around items-center">
              <img
                src="/Social Market Logo.png"
                alt="img"
                className="w-[50px] h-[50px] object-contain"
              />
              <img
                src="/Tamasha_.png"
                alt="img"
                className="w-[100px] h-[50px] object-contain"
              />
              <img
                src="/KFCB_.png"
                alt="img"
                className="w-[50px] h-[50px] object-contain"
              />
              <img
                src="/MAD FUN.png"
                alt="img"
                className="w-[50px] h-[50px] object-contain"
              />
            </div>
          </div>
        </div>

        <ToastContainer />
      </div>
    </>
  );
}

export default MyComponent;
