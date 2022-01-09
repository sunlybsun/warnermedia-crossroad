import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import "./TitleList.css";

const TitleList = (props) => {
  return (
    <>
      {props.titles.map((title) => (
        <div className="title">
          <Card style={{ width: "40rem" }}>
            <Card.Img
              variant="top"
              style={{ height: "18rem" }}
              src={title.poster}
            />
            <Card.Body>
              <Card.Title>
                <Link to={`/details/${title.titleName}`}>
                  {title.titleName}
                </Link>
                <span> {title.releaseYear}</span>
              </Card.Title>

              <Link to={`/details/${title.titleName}`}></Link>
            </Card.Body>
          </Card>
        </div>
      ))}
    </>
  );
};
export default TitleList;
