import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import DetailsImage from "../assets/Details-image.png";
import instagram from "../assets/instagram.png";
import insta from "../assets/insta-vector.png";
import facebook from "../assets/facebook.png";
import fb from "../assets/fb-vector.png";
import twitter from "../assets/twitter.png";
import linkedin from "../assets/linkedin.png";
import linkVector from "../assets/link-vector.png";
import youtube from "../assets/youtube.png";
import rcImage from "../assets/rcimage.png";
import { AppContext } from "../App";
function CampaignDetails() {
  const { auth } = useContext(AppContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (!auth) {
      navigate("/");
    }
  });
  return (
    <div className="campaignDetails">
      <div className="left-container">
        <div className="campaignDetailsImage">
          <img src={DetailsImage} alt="" />
        </div>
        <div className="details-content">
          <h3>Nykaa Brand campaign</h3>
          <p className="date-created">Posted: Apr, 03 2022</p>
          <button className="campaign-type">Barter Campaign</button>
          {/* <div className="actionBtns">
            <button className="btn-secondary">Message</button>
            <button className="btn-primary">Apply</button>
          </div> */}
          <p className="content">
            Prepare for a career in the high-growth field of UX design, no
            experience required. With professional training designed by Google,
            get on the fast-track to a competitively paid job.
          </p>
          <section className="desc-section">
            <h3 className="desc title">Description</h3>
            <p className="content">
              Prepare for a career in the high-growth field of UX design, no
              experience required. With professional training designed by
              Google, get on the fast-track to a competitively paid job. Prepare
              for a career in the high-growth field of UX design, no experience
              required. With professional training designed by Google, get on
              the fast-track to a competitively paid job. Prepare for a career
              in the high-growth field of UX design, no experience required.
              With professional training designed by Google, get on the
              fast-track to a competitively paid job.
            </p>
          </section>
          <section className="categories-section mobile">
            <h3 className="cate title">Categories</h3>
            <span className="content">Technology</span>
            <span className="content">Ambassador</span>
          </section>
          <section className="followers-section">
            <h3 className="followers title">Minimum Followers</h3>
            <p className="content">1000</p>
          </section>
          <section className="requiredPlatform-section">
            <h3 className="rPlatform title">Platform Required</h3>
            <div className="sm-icon-container">
              <span className="sm-links">
                <img src={instagram} alt="" />
                <p>Instagram</p>
              </span>
              <span className="sm-links">
                <img src={facebook} alt="" />
                <p>Facebook</p>
              </span>
              <span className="sm-links">
                <img src={twitter} alt="" />
                <p>Twitter</p>
              </span>
              <span className="sm-links">
                <img src={linkedin} alt="" />
                <p>Linkedin</p>
              </span>
              <span className="sm-links">
                <img src={youtube} alt="" />
                <p>Youtube</p>
              </span>
            </div>
          </section>
        </div>
      </div>
      <div className="right-container">
        <div className="rt-ct">
          <h3 className="title">More related campaigns</h3>
          <div className="relatedC-images">
            <img src={rcImage} alt="" />
            <p className="rc-content">124 applied</p>
          </div>
          <div className="rc-text">
            <span className="rc-paid">Paid Campaign</span>
            <span className="rc-date">1 day ago</span>
          </div>
          <h3 className="title">Cresent treasures</h3>
          <p className="small-content">Min 5k followers required</p>
          <div className="rc-sm-icons">
            <img src={insta} alt="" />
            <img src={fb} alt="" />
            <img src={linkVector} alt="" />
          </div>
        </div>
        <div className="rt-ct">
          <div className="relatedC-images">
            <img src={rcImage} alt="" />
            <p className="rc-content">124 applied</p>
          </div>
          <div className="rc-text">
            <span className="rc-paid">Paid Campaign</span>
            <span className="rc-date">1 day ago</span>
          </div>
          <h3 className="title">Cresent treasures</h3>
          <p className="small-content">Min 5k followers required</p>
          <div className="rc-sm-icons">
            <img src={insta} alt="" />
            <img src={fb} alt="" />
            <img src={linkVector} alt="" />
          </div>
        </div>
        <div className="rt-ct">
          <div className="relatedC-images">
            <img src={rcImage} alt="" />
            <p className="rc-content">124 applied</p>
          </div>
          <div className="rc-text">
            <span className="rc-paid">Paid Campaign</span>
            <span className="rc-date">1 day ago</span>
          </div>
          <h3 className="title">Cresent treasures</h3>
          <p className="small-content">Min 5k followers required</p>
          <div className="rc-sm-icons">
            <img src={insta} alt="" />
            <img src={fb} alt="" />
            <img src={linkVector} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CampaignDetails;
