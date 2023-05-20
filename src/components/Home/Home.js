import React from "react";
// import vaccination from "../../images/vaccination.png"
import vaccination from "../../images/vaccine.webp";
import mask_01 from "../../images/mask_01.webp";
// import mask_02 from "../../images/mask_02.webp"
import doc_01 from "../../images/doc_01.webp";
import doc_02 from "../../images/doc_02.jpeg";
import "./home.css";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="home">
      <div className="hero">
        <div className="hero_left">
          <h1 id="heading">
            Get your <span>Vaccine</span>,
          </h1>
          <h1 id="heading">get your health</h1>

          <p>
          We've been using vaccination in some form for hundreds of years now. We have almost nothing in our modern medicine that we've been using that long, and it's been consistently productive even though, you know, the older vaccines were much more dangerous than vaccines we're using now.
          </p>
          <div className="buttons">
          <a href="https://selfregistration.cowin.gov.in/">
            <button className="btn_filled btns">Get Your Vaccine</button>
            </a>
            <a href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019/question-and-answers-hub/q-a-detail/coronavirus-disease-(covid-19)-vaccines?adgroupsurvey={adgroupsurvey}">
            <button className="btn_empty btns">
              Learn More
              <i className=" fas fa-thin fa-arrow-up-right-from-square fa-sm"></i>
            </button>
              </a>
          </div>
        </div>
        <div className="hero_right">
          <img src={vaccination} alt="" />
        </div>
      </div>
      <div className="mask">
        <div className="mask_need">
          <h1 id="heading">
            Use your mask as <span>your shield</span>
          </h1>
          <h1 id="heading">against corona virus</h1>
          <p>
          Masks should be used as part of a comprehensive strategy of measures to suppress transmission and save lives; the use of a mask alone is not sufficient to provide an adequate level of protection against COVID-19.

          {/* If COVID-19 is spreading in your community, stay safe by taking some simple precautions, such as physical distancing, wearing a mask, keeping rooms well ventilated, avoiding crowds, cleaning your hands, and coughing into a bent elbow or tissue. Check local advice where you live and work. Do it all! */}
          </p>
          <Link to={'/contact'}>
          <button className="btns btn_filled">Join Us</button>
          </Link>
        </div>
        <div className="mask_image">
          <img src={mask_01} alt="" />
        </div>

        <div className="why_mask">
          <h1 id="heading">
            Why does the world <span>need</span>
          </h1>
          <h1 id="heading"> to wear a mask</h1>
          <div className="mask_cards">
            <div className="card">
              <span>
                <i className="fas fa-2xl fa-thin fa-virus"></i>
              </span>
              <div className="content">
                <h3>Reduce viral transmission</h3>
                <p>
                  Surgical masks and cloth coverings can reduce viral
                  transmission by 70%
                </p>
              </div>
            </div>
            <div className="card">
              <span>
                <i className=" fas fa-solid fa-shield-halved fa-2xl"></i>
              </span>
              <div className="content">
                <h3>Protecting others from illness</h3>
                <p>
                  Researchers note that mask-wearing is the most effective when it's a communal effort
                </p>
              </div>
            </div>
            <div className="card">
              <span>
                <i className="fa-sharp fa-solid fa-people-group fa-2xl"></i>
              </span>
              <div className="content">
                <h3>Mandated by law in some  states</h3>
                <p>
                  Though there is no national mandate on mask wearing some occur on a state by state basis
                </p>
              </div>
            </div>
            <div className="card">
              <span>
                <i className=" fas fa-regular fa-hand-sparkles fa-2xl"></i>
              </span>
              <div className="content">
                <h3>Good hygiene in general</h3>
                <p>
                  In many cultures, wearing a mask when one is ill or other has allergies is a sign of respect for others.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="health">
        <div className="health_01">
          <div className="health_expert">
            <h1 id="heading">What health experts say</h1>
            <p>
            I think this virus is probably with us beyond this season, beyond this year, and I think eventually the virus will find a foothold and we'll get community based transmission and you can start to think about it like seasonal flu. The only difference is we don't understand this virus 
            </p>
            
            <div className="buttons">
              <a href="https://www.gavi.org/vaccineswork/vaccines-explained">
              <button className="btn_filled btns">Learn More</button>
              </a>
              <span className="watch">
                <a href="https://www.youtube.com/watch?v=8lCtKgBVGfM">
                  <i className="fas fa-thin fa-circle-play fa-xl"></i>
                  <span>Watch Video</span>
                </a>
              </span>
            </div>
          </div>
          <div className="health_expert_image">
            <img src={doc_01} alt="" />
          </div>
        </div>
        <div className="health_01 health_02">
          <div className="health_expert_image image">
            <img src={doc_02} alt="" />
          </div>
          <div className="health_expert">
            <h1 id="heading">What health journals say</h1>
            <p>
            The World Health Organization (WHO) is working closely with global experts, governments and partners to rapidly expand scientific knowledge on this new virus, to track the spread and virulence of the virus, and to provide advice to countries and individuals on measures to protect health and prevent the spread of this outbreak
            </p>
            <div className="buttons">
              <a href="https://journals.plos.org/globalpublichealth/">
              <button className="btn_filled btns">Learn More</button>
              </a>
              <span className="watch">
                <a href="https://www.youtube.com/watch?v=SvA1s5S9rQ0">
                  <i className="fas fa-thin fa-circle-play fa-xl"></i>
                  <span>Watch Video</span>
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
