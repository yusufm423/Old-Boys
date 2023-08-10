import React, { Component } from "react";
import "./Hero.css";
import { Link } from "react-router-dom";
import about from "../../../images/sections/Old Boys Association2.jpg";

class Hero extends Component {
  render() {
    return (
      <div className="hero py-2 mb-5">
        <div className="container">
          <div className="title pt-1 pb-5 text-center">
            <h4 className="sub-title text-capitalize">
              about <span>us</span>
            </h4>
          </div>
          <div className="row align-items-center">
            <div className="c ">
              <div className="left-side mb-lg-0 mb-5 text-lg-start text-center">
                <h5 className="title text-capitalize mb-3">
                  we are <span>Old Boys</span>
                </h5>
                <p className="desc mb-lg-4 mb-5" align="justify">
                  <p>
                    The Old Boys Association of Aligarh Muslim University (AMU)
                    holds a rich and storied history that reflects the legacy
                    and impact of this prestigious institution. Founded several
                    decades ago, the association has played a pivotal role in
                    fostering strong bonds between the alumni and the
                    university, as well as contributing to the growth and
                    development of both the institution and its graduates.
                  </p>
                  <p>
                    The history of the Old Boys Association at AMU can be traced
                    back to the early years of the university's establishment.
                    AMU, founded in 1875 as the Muhammadan Anglo-Oriental
                    College, was envisioned by Sir Syed Ahmad Khan as an
                    educational institution that would empower the Muslim
                    community and promote modern education in India.
                  </p>
                  <p>
                    As the university grew in prominence and produced numerous
                    accomplished graduates, the idea of forming an association
                    to connect and engage with alumni gained momentum. In the
                    mid-20th century, the Old Boys Association of AMU was
                    officially established, creating a platform for former
                    students to remain connected with their alma mater and with
                    each other.
                  </p>
                  <p>
                    Over the years, the association has organized various
                    events, reunions, and gatherings, providing opportunities
                    for alumni to revisit the campus, share their experiences,
                    and strengthen their ties with the university. These events
                    have not only facilitated networking among alumni but have
                    also enabled them to mentor and guide current students,
                    fostering a sense of mentorship and camaraderie.
                  </p>
                  <p>
                    The Old Boys Association has also played a significant role
                    in supporting the growth and development of AMU. Through
                    fundraising initiatives, scholarships, and contributions to
                    educational projects, the association has helped enhance the
                    university's infrastructure and academic offerings.
                  </p>
                  <p>
                    Furthermore, the association has been a source of
                    inspiration for current students, showcasing the
                    achievements and successes of its distinguished alumni. By
                    sharing the stories of these accomplished individuals, the
                    association has motivated and encouraged students to strive
                    for excellence in their own academic and professional
                    pursuits.
                  </p>
                  <p>
                    As technology advanced, the Old Boys Association of AMU
                    embraced digital platforms, establishing an online presence
                    to reach out to a wider community of alumni spread across
                    the globe. Social media, alumni directories, and dedicated
                    websites have been utilized to facilitate seamless
                    communication and engagement among former students.
                  </p>
                  <p>
                    Today, the Old Boys Association of AMU continues to thrive
                    as a vibrant and dynamic community, upholding the values and
                    traditions of the university while looking towards the
                    future. Its commitment to fostering strong connections,
                    supporting alumni growth, and giving back to the institution
                    ensures that the bond between AMU and its graduates remains
                    unbreakable for generations to come.
                  </p>
                </p>
              </div>
            </div>
            <div className="c d-flex justify-content-start">
              <div className="right-side  text-center">
                <img className="w-75 img-fluid mb-5" src={about} alt="about" />
                <div className="mx-auto dc text-center">
                  <Link className="cources text-capitalize" to="/courses">
                    Explore Events{" "}
                    <i className="fas fa-arrow-right "></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Hero;
