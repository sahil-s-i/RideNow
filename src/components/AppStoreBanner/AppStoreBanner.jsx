import React from 'react';
import pattern from "../../assets/website/pattern.jpeg"

const bannerImg = {
  background: `url(${pattern})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
  height: "100%",
  width: "100%",
};

const AppStoreBanner = () => {
  return (
    <div className="container pb-14 ">
      <div className="text-black py-10 sm:min-h-[400px] sm:grid sm:place-items-center rounded-xl "
        style={bannerImg}
      >
        <div>
          <div>
            <h1>Get Started with our app</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus voluptas consequatur qui impedit!</p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default AppStoreBanner;
