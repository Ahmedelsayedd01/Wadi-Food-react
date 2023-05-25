import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import imgBannerChicken from "../imgs/imgBannerProducts.jpg";
import Chicken from "../imgs/Chicken.png";
import { AiOutlineClose } from "react-icons/ai";
const Products = () => {
  const [popup, setPopup] = useState(false);
  const handleClickOpen = () => {
    setPopup(!popup);
  };
  const closePopup = () => {
    setPopup(false);
  };
  return (
    <>
      <img src={imgBannerChicken} className="bg-banner" alt="frozen-chicken" />
      <div className="scoop">
        <div className="scoop-left">
          <h1>Heart of Every Meal</h1>
        </div>
        <div className="scoop-right">
          <ul className="scoop-group">
            <li>
              <NavLink
                className="scoop-btn"
                to={"https://www.wadi-food.com/en/products/frozen-chicken"}
                target="blank"
              >
                Whole Frozen Chicken
              </NavLink>
            </li>
            <li>
              <NavLink
                className="scoop-btn"
                to={"https://www.wadi-food.com/en/products/chicken-cutups"}
                target="blank"
              >
                Frozen Chicken Cut-ups
              </NavLink>
            </li>
            <li>
              <NavLink
                className="scoop-btn"
                to={"https://www.wadi-food.com/en/products/olive-oil"}
                target="blank"
              >
                Olive Oil
              </NavLink>
            </li>
            <li>
              <NavLink
                className="scoop-btn"
                to={"https://www.wadi-food.com/en/products/olives"}
                target="blank"
              >
                Olives
              </NavLink>
            </li>
            <li>
              <NavLink
                className="scoop-btn"
                to={"https://www.wadi-food.com/en/products/tomatoes"}
                target="blank"
              >
                Tomato & Co.
              </NavLink>
            </li>
            <li>
              <NavLink
                className="scoop-btn"
                to={"https://www.wadi-food.com/en/products/beans-family"}
                target="blank"
              >
                Beans
              </NavLink>
            </li>
            <li>
              <NavLink
                className="scoop-btn"
                to={"https://www.wadi-food.com/en/products/vinegars"}
                target="blank"
              >
                Vinegars
              </NavLink>
            </li>
            <li>
              <NavLink
                className="scoop-btn"
                to={"https://www.wadi-food.com/en/products/pickles"}
                target="blank"
              >
                Pickles
              </NavLink>
            </li>
            <li>
              <NavLink
                className="scoop-btn"
                to={"https://www.wadi-food.com/en/products/Specialitiess"}
                target="blank"
              >
                Specialties
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      <section className="catsDetails">
        <p>
          Whole frozen chicken produced by Wadi Food Company. Wadi Food Company
          depends in its poultry raising on the concept of an integrated farm,
          where all stages of the production cycle take place inside the farm.
          Healthy breeding starts with selecting the best-known worldwide
          breeding fattening. Wadi Food, poultry is raised in a healthy
          environment far from pollution and the closest to the natural
          conditions for raising poultry, which gives the chicken meat a
          delicious natural taste with low fat. Wadi Food uses a vegetarian feed
          produced within its factories under high-quality supervision without
          adding any hormones. Resulting in a high-quality product which is
          safe, healthy, and natural, free of antibiotics and preservatives.
        </p>
      </section>
      <section className="products">
        <h1>Whole Frozen Chicken</h1>
        <div className="products-listing">
          <div className="item">
            <img src={Chicken} alt="Chicken" />
            <h1>Whole Frozen Chicken, 900-1000 Gram Approx.</h1>
            <button onClick={handleClickOpen}>More</button>
          </div>
          <div className="item">
            <img src={Chicken} alt="Chicken" />
            <h1>Whole Frozen Chicken, 900-1000 Gram Approx.</h1>
            <button onClick={handleClickOpen}>More</button>
          </div>
          <div className="item">
            <img src={Chicken} alt="Chicken" />
            <h1>Whole Frozen Chicken, 900-1000 Gram Approx.</h1>
            <button onClick={handleClickOpen}>More</button>
          </div>
          <div className="item">
            <img src={Chicken} alt="Chicken" />
            <h1>Whole Frozen Chicken, 900-1000 Gram Approx.</h1>
            <button onClick={handleClickOpen}>More</button>
          </div>
          <div className="item">
            <img src={Chicken} alt="Chicken" />
            <h1>Whole Frozen Chicken, 900-1000 Gram Approx.</h1>
            <button onClick={handleClickOpen}>More</button>
          </div>
          <div className="item">
            <img src={Chicken} alt="Chicken" />
            <h1>Whole Frozen Chicken, 900-1000 Gram Approx.</h1>
            <button onClick={handleClickOpen}>More</button>
          </div>
        </div>
        {popup ? (
          <div className="main">
            <div className="popup">
              <button onClick={closePopup}>
                <AiOutlineClose />
              </button>
              <div className="popup-content">
                <div className="left-content">
                  <img src={Chicken} alt="Chicken" />
                </div>
                <div className="right-content">
                  <div className="content-Chicken">
                    <div className="scroll-div">
                      <h1 className="title-content">
                        Whole Frozen Chicken, 900-1000 Gram approx.
                      </h1>
                      <p>
                        Whole frozen chicken produced by Wadi Food Company. Wadi
                        Food Company depends on its poultry raising on the
                        concept of an on Whole frozen chicken produced by Wadi
                        Food Company. Wadi Food Company depends in its poultry
                        raising on the concept of an integrated farm, where all
                        stages of the production cycle take place inside the
                        farm. Healthy breeding starts with selecting the
                        best-known worldwide breeding fattening. Wadi Food,
                        poultry is raised in a healthy environment far from
                        pollution and the closest to the natural conditions for
                        raising poultry, which gives the chicken meat a
                        delicious natural taste with low fat. Wadi Food uses a
                        vegetarian feed produced within its factories under
                        high-quality supervision without adding any hormones.
                        Resulting in a high-quality product which is safe,
                        healthy, and natural, free of antibiotics and
                        preservatives.
                      </p>
                      <p>
                        grated farm, where all stages of the production cycle
                        take place inside the farm. Healthy breeding starts with
                        selecting the best-known worldwide breeding fattening.
                        Wadi Food, poultry is raised in a healthy environment
                        far from pollution and the closest to the natural
                        conditions for raising poultry, which gives the chicken
                        meat a delicious natural taste with low fat. Wadi Food
                        uses a vegetarian feed produced within its factories
                        under high-quality supervision without adding any
                        hormones. Resulting in a high-quality product which is
                        safe, healthy, and natural, free of antibiotics and
                        preservatives.
                      </p>
                      <h1>Ingredients</h1>
                      <p>
                        Broilers fattening slaughtered according to Islamic law
                        (Halal)
                      </p>
                      <h1>Nutrition Facts</h1>
                      <p>
                        -Contains an abundance of iron and zinc alongside an
                        important mineral, selenium.
                      </p>
                      <p>
                        -Contains complex vitamins such as riboflavin and
                        niacin, vitamin B6, vitamin B12, and amounts of vitamin
                        E with pantothenic acid, folic acid, and biotin in
                        addition to vitamin D.
                      </p>
                      <p>-Rich in protein, salts, and omega-3.</p>
                      <p>
                        -It is characterized by higher protein and lower fat.
                      </p>
                      <p>-Free of industrial hormones and antibiotics.</p>
                      <h1>Health Benefits</h1>
                      <ul>
                        <li>
                          <p>
                            Selenium is present in sufficient quantities in
                            chicken feed, resulting in adequate quantities of
                            selenium in chicken meat and it plays a role in
                            preventing some types of cancer.
                          </p>
                        </li>
                        <li>
                          <p>
                            Selenium deficiency can lead to heart disease in
                            young people and cognitive decline (absorption) in
                            adults, and therefore chicken meat rich in selenium
                            as a result of plant forage rich in selenium can
                            help alleviate this condition.
                          </p>
                        </li>
                        <li>
                          <p>
                            Rich in omega-3 fats due to vegetable nutrition.
                            Omega-3 has a great importance in human health. One
                            of its most important benefits is reducing
                            atherosclerosis and the risk of heart disease,
                            reducing the risk of high blood pressure, and
                            reducing the risk of pneumonia.
                          </p>
                        </li>
                        <li>
                          <p>
                            Breeding chicks in healthy farms and adhering to the
                            space allocated to each chicken provides freedom of
                            movement for chickens, which means more protein and
                            less fat. It also improves the quality of chicken
                            meat to increase muscle and improve the
                            susceptibility of chicken to chewing after
                            slaughter.
                          </p>
                        </li>
                        <li>
                          <p>
                            ● Abundance of iron and zinc with high biological
                            value in large quantities compared to foods of plant
                            origin, so it is very useful in treating anemia.
                          </p>
                        </li>
                        <li>
                          <p>
                            Rich in a group of vitamins such as riboflavin
                            niacin, vitamin B6, vitamin B12, amounts of vitamin
                            E with pantothenic acid, folic acid, and biotin in
                            addition to vitamin D for general body health.
                          </p>
                        </li>
                        <li>
                          <p>
                            Chicken meat is characterized by its low calories
                            and despite that it is a good source of high-value
                            protein and chicken is one of the softest meats and
                            it is easier to digest than red meat.
                          </p>
                        </li>
                        <li>
                          <p>
                            Vegetable reared chicken meat in Wadi Food does not
                            contain saturated fats, which contributes to
                            preventing coronary heart disease.
                          </p>
                        </li>
                      </ul>
                      <h1>Related Products:</h1>
                      <ul>
                        <li>Chicken Wings</li>
                        <li>Chicken Thighs</li>
                        <li>Chicken Drumstick</li>
                        <li>Chicken Breasts Fillet</li>
                        <li>Chicken Whole Leg</li>
                      </ul>
                      <h1>Other Weights:</h1>
                      <p>1000-1100 Gram approx.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
      </section>
    </>
  );
};

export default Products;
