import React from "react";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <>
      <div className="container">
        <div className="mt-4">
          <p className="lead">
            {" "}
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam,
            deserunt! Fugiat expedita excepturi iusto ducimus a quo fuga
            adipisci sapiente corrupti eaque distinctio animi porro quam,
            consectetur necessitatibus assumenda provident, cupiditate sint quos
            eligendi pariatur dolore neque officia rerum! Aut molestiae modi
            libero beatae nisi, ipsum repudiandae quae quis velit?
          </p>
          <div className="row">
            <div className="col col-lg">
              <div className="card shadow">
                <div className="card-header">Hola mundo</div>
                <div className="card-body">
                  <p className="lead">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Maxime quod consectetur voluptate officia tempora ex debitis
                    eum voluptatum, vero, consequatur quas distinctio atque
                    vitae quo!
                  </p>
                </div>
                <div className="card-footer">
                  <button className="btn btn-success btn-block">
                    {" "}
                    Order Now!
                  </button>
                </div>
              </div>
            </div>
            <div className="col col-lg">
              <h5>¿Ya eres miembro?</h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
