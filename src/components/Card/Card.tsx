import React from "react";
import "./Card.css";
import Post from "../Post/Post1";
import { Link } from "react-router-dom";
const Card = () => {
  return (
    <div className="card-main">
      <h1>Coarse</h1>
      <div className="card-main-first">
        <div className="card">
          <img src="./pic/Post01.jpg" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Branding Workshop</h5>
            <p className="card-text">
              SMIT has organized another practical workshop for all of you to
              enhance your skills & become entrepreneur in the field of Graphic
              Designing on Sunday, 1st Jan 2023 at 12pm Sharp.
            </p>
            <Link className="btn btn-primary" to="./Post/Post1.tsx">
              Details
            </Link>
          </div>
        </div>
        <div className="card">
          <img src="./pic/Post01.jpg" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Branding Workshop</h5>
            <p className="card-text">
              SMIT has organized another practical workshop for all of you to
              enhance your skills & become entrepreneur in the field of Graphic
              Designing on Sunday, 1st Jan 2023 at 12pm Sharp.
            </p>
            <Link className="btn btn-primary" to="./Post/Post1.tsx">
              Details
            </Link>
          </div>
        </div>
        <div className="card">
          <img src="./pic/Post01.jpg" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Branding Workshop</h5>
            <p className="card-text">
              SMIT has organized another practical workshop for all of you to
              enhance your skills & become entrepreneur in the field of Graphic
              Designing on Sunday, 1st Jan 2023 at 12pm Sharp.
            </p>
            <Link className="btn btn-primary" to="./Post/Post1.tsx">
              Details
            </Link>
          </div>
        </div>
        <div className="card">
          <img src="./pic/Post01.jpg" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Branding Workshop</h5>
            <p className="card-text">
              SMIT has organized another practical workshop for all of you to
              enhance your skills & become entrepreneur in the field of Graphic
              Designing on Sunday, 1st Jan 2023 at 12pm Sharp.
            </p>
            <Link className="btn btn-primary" to="./Post/Post1.tsx">
              Details
            </Link>
          </div>
        </div>
        <div className="card">
          <img src="./pic/Post01.jpg" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Branding Workshop</h5>
            <p className="card-text">
              SMIT has organized another practical workshop for all of you to
              enhance your skills & become entrepreneur in the field of Graphic
              Designing on Sunday, 1st Jan 2023 at 12pm Sharp.
            </p>
            <Link className="btn btn-primary" to="./Post/Post1.tsx">
              Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
