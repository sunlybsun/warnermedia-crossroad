import React from "react";
import Button from "react-bootstrap/Button";

import { Link } from "react-router-dom";

import "./Details.css";

const Details = (props) => {
  return (
    <>
      {props.results.map((title) => (
        <section className="detail">
          <div className="content">
            <img
              className="detailImage"
              src={title.poster}
              alt="title"
              width="400"
              height="550"
            ></img>
            <div className="plot">
              <h2 className="name">
                {title.titleName} <span>({title.releaseYear})</span>
              </h2>
              <p>{title.storyLines[0].description}</p>

              {title.awards.length > 0 && <h5>Awards</h5>}

              {title.awards.map((award) => (
                <div className="award">
                  {award.awardWon == true && (
                    <div>
                      {award.award1} ({award.awardYear}) awarded by{" "}
                      {award.awardCompany}
                    </div>
                  )}
                </div>
              ))}

              <div class="col-md-12 text-center">
                <Link to="/">
                  <Button className="backButton" href="/" variant="light">
                    Back
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      ))}
    </>
  );
};

export default Details;
