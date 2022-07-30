import React from "react";
import Image from "next/image";

import ImageOne from "../public/assets/images/res-1.jpeg";
import ImageTwo from "../public/assets/images/res-2.jpeg";
import ImageThree from "../public/assets/images/res-3.avif";
import ImageFour from "../public/assets/images/res-4.avif";

const About = () => {
  return (
    <div className="About__Container">
      <div className="Layout__constraint">
        <h1>Our Restaurants</h1>
        <div className="Restaurant__Slider">
          <div className="About__Box">
            <div className="About__Img">
              <Image src={ImageOne} alt="restaurant" layout="responsive" />
            </div>
            <div className="About__Text__Description">
              <h1>Mhunis Kitchen</h1>
              <p>
                Discover local, on-demand delivery or Pickup from restaurants,
                nearby grocery and convenience stores, and more.
              </p>
              <button className="btn">View Restaurant</button>
            </div>
          </div>
          <div className="About__Box">
            <div className="About__Img">
              <Image src={ImageTwo} alt="restaurant" layout="responsive" />
            </div>
            <div className="About__Text__Description">
              <h1>Bamboo Kitchen</h1>
              <p>
                Discover local, on-demand delivery or Pickup from restaurants,
                nearby grocery and convenience stores, and more.
              </p>
              <button className="btn">View Restaurant</button>
            </div>
          </div>

          <div className="About__Box">
            <div className="About__Img">
              <Image src={ImageFour} alt="restaurant" layout="responsive" />
            </div>
            <div className="About__Text__Description">
              <h1>Hands Restaurant</h1>
              <p>
                Discover local, on-demand delivery or Pickup from restaurants,
                nearby grocery and convenience stores, and more.
              </p>
              <button className="btn">View Restaurant</button>
            </div>
          </div>
          <div className="About__Box">
            <div className="About__Img">
              <Image src={ImageThree} alt="restaurant" layout="responsive" />
            </div>
            <div className="About__Text__Description">
              <h1>Boripe Restaurant</h1>
              <p>
                Discover local, on-demand delivery or Pickup from restaurants,
                nearby grocery and convenience stores, and more.
              </p>
              <button className="btn">View Restaurant</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
