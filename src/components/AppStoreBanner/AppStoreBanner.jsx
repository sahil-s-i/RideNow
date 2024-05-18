import React from 'react';

const bannerImg = [
  background : `url(${pattern})`,
  backgroundRepeat: "no-repeat",
  backgroundSize : "cover",
  backgroundPosition : "center",

];

const AppStoreBanner = () => {
  return (
    <div className="container ">
      <div className="text-black py-10 sm:min-h-[400px] sm:grid sm:place-items-center rounded-xl "
        style={bannerImg}
      >
        <div></div>
      </div>

    </div>
  )
}

export default AppStoreBanner;
