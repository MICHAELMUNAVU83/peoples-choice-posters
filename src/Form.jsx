import React from "react";

const Form = ({
  handleImageChange,
  name,
  setName,
  category,
  setCategory,
  code,
  setCode,
}) => {
  return (
    <form className="h-[100%] w-[99%] mx-auto md:mx-0 md:w-[40%]">
      <div className="shadow  sm:overflow-hidden sm:rounded-md">
        <div className="space-y-6 bg-white px-4 py-5 sm:p-6">
          <p>Fill in the form below to generate your poster</p>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Contestant Image
            </label>
            <div className="mt-1 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6">
              <div className="space-y-1 text-center">
                <svg
                  className="mx-auto h-12 w-12 text-gray-400"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 48 48"
                  aria-hidden="true"
                >
                  <path
                    d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <div className="text-sm text-gray-600">
                  <label
                    for="file-upload"
                    className="relative cursor-pointer rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500"
                  >
                    <span className="text-black">Add your image</span>
                    <input
                      id="file-upload"
                      name="file-upload"
                      accept="image/*"
                      type="file"
                      className="sr-only"
                      onChange={handleImageChange}
                    />
                  </label>
                </div>
                <p className="text-xs text-gray-500">
                  PNG, JPG, GIF up to 10MB
                </p>
              </div>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium te/xt-gray-700">
              Which category are you competing in?
            </label>
            <div className="mt-1">
              <select
                className=" border border-gray-300  text-sm rounded-lg focus:ring-blue-500  block w-full p-2.5 "
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="">Select</option>
                <option value="ARTIST OF THE YEAR">ARTIST OF THE YEAR</option>
                <option value="AUDIO PRODUCER OF THE YEAR">
                  AUDIO PRODUCER OF THE YEAR
                </option>
                <option value="AUTHOR OF THE YEAR">AUTHOR OF THE YEAR</option>
                <option value="BAKER OF THE YEAR">BAKER OF THE YEAR</option>
                <option value="BRANDING BUSINESS OF THE YEAR">
                  BRANDING BUSINESS OF THE YEAR
                </option>
                <option value="CENTRAL ARTIST OF THE YEAR">
                  CENTRAL ARTIST OF THE YEAR
                </option>
                <option value="CHARITY ORGANIZATION OF THE YEAR">
                  CHARITY ORGANIZATION OF THE YEAR
                </option>
                <option value="CHEF OF THE YEAR">CHEF OF THE YEAR</option>
                <option value="CLUB HOST OF THE YEAR">
                  CLUB HOST OF THE YEAR
                </option>
                <option value="COASTAL ARTIST OF THE YEAR">
                  COASTAL ARTIST OF THE YEAR
                </option>
                <option value="COLLABO SONG OF THE YEAR">
                  COLLABO SONG OF THE YEAR
                </option>
                <option value="COMEDIAN OF THE YEAR">
                  COMEDIAN OF THE YEAR
                </option>
                <option value="CONTENT CREATOR OF THE YEAR">
                  CONTENT CREATOR OF THE YEAR
                </option>
                <option value="CREATIVE BUSINESS OF THE YEAR">
                  CREATIVE BUSINESS OF THE YEAR
                </option>
                <option value="DANCE CREW OF THE YEAR">
                  DANCE CREW OF THE YEAR
                </option>
                <option value="DANCEHALL ARTIST OF THE YEAR">
                  DANCEHALL ARTIST OF THE YEAR
                </option>
                <option value="DEEJAY OF THE YEAR">DEEJAY OF THE YEAR</option>
                <option value="EASTERN ARTIST OF THE YEAR">
                  EASTERN ARTIST OF THE YEAR
                </option>
                <option value="EMERGING ARTIST OF THE YEAR">
                  EMERGING ARTIST OF THE YEAR
                </option>
                <option value="EMERGING EVENT OF THE YEAR">
                  EMERGING EVENT OF THE YEAR
                </option>
                <option value="ENTREPRENUER OF THE YEAR">
                  ENTREPRENUER OF THE YEAR
                </option>
                <option value="EVENT MARKETER OF THE YEAR">
                  EVENT MARKETER OF THE YEAR
                </option>
                <option value="EVENT MC OF THE YEAR">
                  EVENT MC OF THE YEAR
                </option>
                <option value="EVENT OF THE YEAR">EVENT OF THE YEAR</option>
                <option value="EVENT ORGANIZER OF THE YEAR">
                  EVENT ORGANIZER OF THE YEAR
                </option>
                <option value="EVENT PLANNNER OF THE YEAR">
                  EVENT PLANNNER OF THE YEAR
                </option>
                <option value="FASHION DESIGNER OF THE YEAR">
                  FASHION DESIGNER OF THE YEAR
                </option>
                <option value="FASHION STYLIST OF THE YEAR">
                  FASHION STYLIST OF THE YEAR
                </option>
                <option value="FEMALE ACTOR OF THE YEAR">
                  FEMALE ACTOR OF THE YEAR
                </option>
                <option value="FEMALE ARTIST OF THE YEAR">
                  FEMALE ARTIST OF THE YEAR
                </option>
                <option value="FEMALE DANCER OF THE YEAR">
                  FEMALE DANCER OF THE YEAR
                </option>
                <option value="FEMALE MODEL OF THE YEAR">
                  FEMALE MODEL OF THE YEAR
                </option>
                <option value="FEMALE TIKTOKER OF THE YEAR">
                  FEMALE TIKTOKER OF THE YEAR
                </option>
                <option value="FITNESS COACH OF THE YEAR">
                  FITNESS COACH OF THE YEAR
                </option>
                <option value="FOUNDER OF THE YEAR">FOUNDER OF THE YEAR</option>
                <option value="GOSPEL ARTIST OF THE YEAR">
                  GOSPEL ARTIST OF THE YEAR
                </option>
                <option value="GRAPHIC DESIGNER OF THE YEAR">
                  GRAPHIC DESIGNER OF THE YEAR
                </option>
                <option value="HAIR STYLIST OF THE YEAR">
                  HAIR STYLIST OF THE YEAR
                </option>
                <option value="HIP-HOP ARTIST OF THE YEAR">
                  HIP-HOP ARTIST OF THE YEAR
                </option>
                <option value="INFLUENCER OF THE YEAR">
                  INFLUENCER OF THE YEAR
                </option>
                <option value="JEWELLERY STORE OF THE YEAR">
                  JEWELLERY STORE OF THE YEAR
                </option>
                <option value="LIVE PERFORMER OF THE YEAR">
                  LIVE PERFORMER OF THE YEAR
                </option>
                <option value="MAA ARTIST OF THE YEAR">
                  MAA ARTIST OF THE YEAR
                </option>
                <option value="MAKE-UP ARTIST OF THE YEAR">
                  MAKE-UP ARTIST OF THE YEAR
                </option>
                <option value="MALE ACTOR OF THE YEAR">
                  MALE ACTOR OF THE YEAR
                </option>
                <option value="MALE ARTIST OF THE YEAR">
                  MALE ARTIST OF THE YEAR
                </option>
                <option value="MALE DANCER OF THE YEAR">
                  MALE DANCER OF THE YEAR
                </option>
                <option value="MALE MODEL OF THE YEAR">
                  MALE MODEL OF THE YEAR
                </option>
                <option value="MALE TIKTOKER OF THE YEAR">
                  MALE TIKTOKER OF THE YEAR
                </option>
                <option value="MEDIA PERSONALITY OF THE YEAR">
                  MEDIA PERSONALITY OF THE YEAR
                </option>
                <option value="MOST PROMISING ARTIST OF THE YEAR">
                  MOST PROMISING ARTIST OF THE YEAR
                </option>
                <option value="MUGITHI ARTIST OF THE YEAR">
                  MUGITHI ARTIST OF THE YEAR
                </option>
                <option value="MUSIC GROUP OF THE YEAR">
                  MUSIC GROUP OF THE YEAR
                </option>
                <option value="ONLINE MEDIA OF THE YEAR">
                  ONLINE MEDIA OF THE YEAR
                </option>
                <option value="ONLINE RADIO OF THE YEAR">
                  ONLINE RADIO OF THE YEAR
                </option>
                <option value="PHOTOGRAPHER OF THE YEAR">
                  PHOTOGRAPHER OF THE YEAR
                </option>
                <option value="PODCAST OF THE YEAR">PODCAST OF THE YEAR</option>
                <option value="POET OF THE YEAR">POET OF THE YEAR</option>
                <option value="R&B ARTIST OF THE YEAR">
                  R&B ARTIST OF THE YEAR
                </option>
                <option value="RADIO HOST OF THE YEAR">
                  RADIO HOST OF THE YEAR
                </option>
                <option value="REAL ESTATE COMPANY OF THE YEAR">
                  REAL ESTATE COMPANY OF THE YEAR
                </option>
                <option value="RECORDING STUDIO OF THE YEAR">
                  RECORDING STUDIO OF THE YEAR
                </option>
                <option value="REGGAE ARTIST OF THE YEAR">
                  REGGAE ARTIST OF THE YEAR
                </option>
                <option value="RIFT VALLEY ARTIST OF THE YEAR">
                  RIFT VALLEY ARTIST OF THE YEAR
                </option>
                <option value="SMALL BUSINESS OF THE YEAR">
                  SMALL BUSINESS OF THE YEAR
                </option>
                <option value="SONGWRITER OF THE YEAR">
                  SONGWRITER OF THE YEAR
                </option>
                <option value="SPORTSMAN OF THE YEAR">
                  SPORTSMAN OF THE YEAR
                </option>
                <option value="SPORTSWOMAN OF THE YEAR">
                  SPORTSWOMAN OF THE YEAR
                </option>
                <option value="TALENT MANAGER OF THE YEAR">
                  TALENT MANAGER OF THE YEAR
                </option>
                <option value="TATTOO ARTIST OF THE YEAR">
                  TATTOO ARTIST OF THE YEAR
                </option>
                <option value="THRIFT STORE OF THE YEAR">
                  THRIFT STORE OF THE YEAR
                </option>
                <option value="TOUR AGENCY OF THE YEAR">
                  TOUR AGENCY OF THE YEAR
                </option>
                <option value="TV HOST OF THE YEAR">TV HOST OF THE YEAR</option>
                <option value="VIDEO DIRECTOR OF THE YEAR">
                  VIDEO DIRECTOR OF THE YEAR
                </option>
                <option value="VIDEO PRODUCER OF THE YEAR">
                  VIDEO PRODUCER OF THE YEAR
                </option>
                <option value="VIDEO VIXEN OF THE YEAR">
                  VIDEO VIXEN OF THE YEAR
                </option>
                <option value="VIDEOGRAPHER OF THE YEAR">
                  VIDEOGRAPHER OF THE YEAR
                </option>
                <option value="WESTERN ARTIST OF THE YEAR">
                  WESTERN ARTIST OF THE YEAR
                </option>
                <option value="WOMAN IN BUSINESS OF THE YEAR">
                  WOMAN IN BUSINESS OF THE YEAR
                </option>
                <option value="YOUTUBER OF THE YEAR">
                  YOUTUBER OF THE YEAR
                </option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium te/xt-gray-700">
              Contestant Name
            </label>
            <div className="mt-1">
              <input
                type={"text"}
                value={name}
                onChange={(e) => setName(e.target.value)}
                className=" border border-gray-300   text-sm rounded-lg focus:ring-blue-500  block w-full p-2.5 "
                placeholder="John Doe"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium te/xt-gray-700">
              Contestant Code
            </label>
            <div className="mt-1">
              <input
                type={"text"}
                value={code}
                onChange={(e) => setCode(e.target.value)}
                className=" border border-gray-300   text-sm rounded-lg focus:ring-blue-500  block w-full p-2.5 "
                placeholder="23459"
              />
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Form;
