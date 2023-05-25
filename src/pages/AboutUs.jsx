import React, { forwardRef, useRef } from "react";
import { NavLink } from "react-router-dom";
import imgBanner from "../imgs/imgBanner.jpg";
import VisionMission from "../imgs/VisionMission.jpg";
import History from "../imgs/History.jpg";
import Family from "../imgs/Family.jpg";
import Values from "../imgs/Values.jpg";
const AboutUs = () => {
  const refMission = useRef(null);
  const refHistory = useRef(null);
  const refFamily = useRef(null);
  const refValues = useRef(null);
  const missionClick = () => {
    refMission.current?.scrollIntoView({ behavior: "smooth" });
  };
  const historyClick = () => {
    refHistory.current?.scrollIntoView({ behavior: "smooth" });
  };
  const familyClick = () => {
    refFamily.current?.scrollIntoView({ behavior: "smooth" });
  };
  const valuesClick = () => {
    refValues.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <img src={imgBanner} className="bg-banner" alt="" />

      <div className="scoop">
        <div className="scoop-left">
          <h1>Our Adventure</h1>
        </div>
        <div className="scoop-right">
          <ul className="scoop-group">
            <li>
              <NavLink className="scoop-btn" onClick={missionClick}>
                Vision & Mission
              </NavLink>
            </li>
            <li>
              <NavLink className="scoop-btn" onClick={historyClick}>
                Our History
              </NavLink>
            </li>
            <li>
              <NavLink className="scoop-btn" onClick={familyClick}>
                Our Family
              </NavLink>
            </li>
            <li>
              <NavLink className="scoop-btn" onClick={valuesClick}>
                Our Values
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      <section className="vision-mission" ref={refMission}>
        <div className="img">
          <img src={VisionMission} alt="Vision & Mission" />
        </div>
        <div className="text">
          <h1>Vision & Mission</h1>
          <div className="content">
            <div className="content-vision">
              <h1>Our Vision</h1>
              <p>
                To be the favored Provider of Quality packaged food in Egypt &
                International Markets with a commitment to Excellence &
                Uniqueness & a drive to lead.
              </p>
            </div>
            <div className="content-mission">
              <h1>Our Mission</h1>
              <p>
                To develop new opportunities and grow our core businesses to the
                full potential in food processing, leveraging our expertise and
                resources with uncompromising dedication to efficiency,
                innovation, quality and service.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="our-history" ref={refHistory}>
        <div className="img">
          <img src={History} alt="History" />
        </div>
        <div className="text">
          <h1>Our History</h1>
          <div className="content">
            <div className="content-history">
              <div className="scroll-div">
                <p>
                  Wadi food was founded in 1989 & located in Egypt’s pristine
                  desert. It is a leading Egyptian brand of harvested foods,
                  serving local and global consumers with a commitment to
                  innovation and quality.
                </p>
                <p>
                  Wadi food owns and manages all its farms, ensuring all produce
                  is watered from pure underground aquifers and aims to deliver
                  the best quality to guarantee a unique customer experience.
                </p>
                <p>
                  The high quality of the products is achieved from the early
                  stages of planting until the time of harvest, where Wadi
                  Food’s superior olives are handpicked to make sure that the
                  fruit has naturally matured and ripened into the best raw
                  material for the extraction of high-quality olive oil.
                </p>
                <p>
                  Offering a wide range of premium quality products of Olive
                  Oil, Green Olives, Kalamata Olives, Natural Black Olives,
                  Black Olive products, Tomato Paste and Fava beans and today
                  being positioned among the top Producers, Packers & Exporters
                  of Agrifood in Egypt.
                </p>
                <p>
                  Offering a wide range of premium quality products of Olive
                  Oil, Green Olives, Kalamata Olives, Natural Black Olives,
                  Black Olive products, Tomato Paste and Fava beans and today
                  being positioned among the top Producers, Packers & Exporters
                  of Agrifood in Egypt.
                </p>
                <p>
                  Offering a wide range of premium quality products of Olive
                  Oil, Green Olives, Kalamata Olives, Natural Black Olives,
                  Black Olive products, Tomato Paste and Fava beans and today
                  being positioned among the top Producers, Packers & Exporters
                  of Agrifood in Egypt.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="our-family" ref={refFamily}>
        <div className="img">
          <img src={Family} alt="Family" />
        </div>
        <div className="text">
          <h1>Our Family</h1>
          <div className="content">
            <div className="content-family">
              <div className="scroll-div">
                <p>
                  Wadi food was founded in 1989 & located in Egypt’s pristine
                  desert. It is a leading Egyptian brand of harvested foods,
                  serving local and global consumers with a commitment to
                  innovation and quality.
                </p>
                <p>
                  Wadi food owns and manages all its farms, ensuring all produce
                  is watered from pure underground aquifers and aims to deliver
                  the best quality to guarantee a unique customer experience.
                </p>
                <p>
                  The high quality of the products is achieved from the early
                  stages of planting until the time of harvest, where Wadi
                  Food’s superior olives are handpicked to make sure that the
                  fruit has naturally matured and ripened into the best raw
                  material for the extraction of high-quality olive oil.
                </p>
                <p>
                  Offering a wide range of premium quality products of Olive
                  Oil, Green Olives, Kalamata Olives, Natural Black Olives,
                  Black Olive products, Tomato Paste and Fava beans and today
                  being positioned among the top Producers, Packers & Exporters
                  of Agrifood in Egypt.
                </p>
                <p>
                  Offering a wide range of premium quality products of Olive
                  Oil, Green Olives, Kalamata Olives, Natural Black Olives,
                  Black Olive products, Tomato Paste and Fava beans and today
                  being positioned among the top Producers, Packers & Exporters
                  of Agrifood in Egypt.
                </p>
                <p>
                  Offering a wide range of premium quality products of Olive
                  Oil, Green Olives, Kalamata Olives, Natural Black Olives,
                  Black Olive products, Tomato Paste and Fava beans and today
                  being positioned among the top Producers, Packers & Exporters
                  of Agrifood in Egypt.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="our-values" ref={refValues}>
        {" "}
        <div className="img">
          <img src={Values} alt="Family" />
        </div>
        <div className="text">
          <h1>Our Values</h1>
          <div className="content">
            <div className="content-values">
              <div className="scroll-div">
                <h1>Integrity</h1>
                <p>
                  Wadi food was founded in 1989 & located in Egypt’s pristine
                  desert. It is a leading Egyptian brand of harvested foods,
                  serving local and global consumers with a commitment to
                  innovation and quality.
                </p>
                <h1>Empowerment</h1>
                <p>
                  Wadi food owns and manages all its farms, ensuring all produce
                  is watered from pure underground aquifers and aims to deliver
                  the best quality to guarantee a unique customer experience.
                </p>
                <h1>Resource Optimization</h1>
                <p>
                  The high quality of the products is achieved from the early
                  stages of planting until the time of harvest, where Wadi
                  Food’s superior olives are handpicked to make sure that the
                  fruit has naturally matured and ripened into the best raw
                  material for the extraction of high-quality olive oil.
                </p>
                <h1>Customer Focus</h1>
                <p>
                  Offering a wide range of premium quality products of Olive
                  Oil, Green Olives, Kalamata Olives, Natural Black Olives,
                  Black Olive products, Tomato Paste and Fava beans and today
                  being positioned among the top Producers, Packers & Exporters
                  of Agrifood in Egypt.
                </p>
                <h1>Innovation</h1>
                <p>
                  Offering a wide range of premium quality products of Olive
                  Oil, Green Olives, Kalamata Olives, Natural Black Olives,
                  Black Olive products, Tomato Paste and Fava beans and today
                  being positioned among the top Producers, Packers & Exporters
                  of Agrifood in Egypt.
                </p>
                <h1>Openness</h1>
                <p>
                  Offering a wide range of premium quality products of Olive
                  Oil, Green Olives, Kalamata Olives, Natural Black Olives,
                  Black Olive products, Tomato Paste and Fava beans and today
                  being positioned among the top Producers, Packers & Exporters
                  of Agrifood in Egypt.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default forwardRef(AboutUs);
