import React, { useEffect, useState } from "react";

// Components
import StandardWrapper from "../../Components/Structural/StandardWrapper/StandardWrapper";
import Snow from "../../Components/Background/Snow/Snow";
import SEO from "../../Components/Structural/SEO/SEO";
import DoorButton from "../../Components/Buttons/DoorButton/DoorButton";
import Fireflies from "../../Components/Background/Fireflies/Fireflies";
import Fireworks from "../../Components/Background/Fireworks/Fireworks";

// Styles
import "./Home.scss";

// Assets
import AboutUsImage from "../../assets/images/doors/AboutUs.svg";
import PlaygroundImage from "../../assets/images/doors/Playground.svg";
import StoriesImage from "../../assets/images/doors/Stories.svg";

// Utils
import { getWeather, WEATHER } from "../../utils/getWeather/getWeather";

/**
 * @function Home
 * @description The contents to render on the front page of the website.
 * @author Alexander Burdiss
 * @since 5/13/21
 * @version 2.2.0
 * @component
 * @example
 * <Home />
 */
export default function Home() {
  const [weather, setWeather] = useState(WEATHER.clear);
  useEffect(function setup() {
    setWeather(getWeather());
  }, []);

  return (
    <StandardWrapper>
      <div className="Home-Container">
        <SEO />
        {weather == WEATHER.fireworks && (
          <div className="Fireworks-Home-Container">
            <Fireworks />
          </div>
        )}
        {weather == WEATHER.clear && <Fireflies />}
        {weather == WEATHER.snow && (
          <div className="Snow-Home-Container">
            <Snow />
          </div>
        )}
        {weather == WEATHER.rain && (
          <div className="Rain-Container">
            <div className="drop"></div>
            <div className="drop"></div>
            <div className="drop"></div>
            <div className="drop"></div>
            <div className="drop"></div>
            <div className="drop"></div>
            <div className="drop"></div>
            <div className="drop"></div>
            <div className="drop"></div>
            <div className="drop"></div>
            <div className="drop"></div>
            <div className="drop"></div>
            <div className="drop"></div>
            <div className="drop"></div>
            <div className="drop"></div>
            <div className="drop"></div>
            <div className="drop"></div>
            <div className="drop"></div>
            <div className="drop"></div>
            <div className="drop"></div>
            <div className="drop"></div>
            <div className="drop"></div>
            <div className="drop"></div>
            <div className="drop"></div>
            <div className="drop"></div>
            <div className="drop"></div>
            <div className="drop"></div>
            <div className="drop"></div>
            <div className="drop"></div>
            <div className="drop"></div>
          </div>
        )}
        <div className="Home-Door-Container">
          <DoorButton
            label="Read"
            image={StoriesImage}
            link="/read"
            alt="An earthy door framed by vines"
          />
          <DoorButton
            label="Play"
            image={PlaygroundImage}
            link="/play"
            alt="A door made of many small stained-glass panels"
          />
          <DoorButton
            label="About Us"
            image={AboutUsImage}
            link="/about"
            alt="A crooked wooden door"
          />
        </div>
      </div>
    </StandardWrapper>
  );
}
