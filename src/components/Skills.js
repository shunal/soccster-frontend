import Coding from "../codingwhite.png";
import Communication from "../communicationwhite.png";
import WebDesign from "../web-designwhite.png";

function Skills() {
    return(
        <div className="container-fluid" style={{ backgroundColor: "#25242d" }}>
          <div className="row justify-content-center text-center">
            <div className="waviy my-4 py-4 ">
              <span className="align-items-center" style={{color: "#f58b0a" }}>SKILLS</span>
            </div>
          </div>
          <div id="testing" className="row" style={{ backgroundColor: "#25242d" }}>
            <div className="col-md-4 align-text-middle text-center">
              <img
                src={WebDesign}
                className="img-fluid"
                style={{ maxWidth: "20%" }}
                alt="me"
              />
              <h3 className="my-4">Web Design</h3>
              <p>Javascript</p>
              <p>CSS</p>
              <p>ReactJS</p>
              <p>Redux</p>
              <p>Bootstrap CSS</p>
              <p>HTML5</p>
            </div>
            <div className="col-md-4 j text-center">
              <img
                src={Coding}
                className="img-fluid"
                style={{ maxWidth: "20%" }}
                alt="me"
              />
              <h3 className="my-4">Software Engineering</h3>
              <p>Ruby</p>
              <p>Ruby on Rails</p>
              <p>Python</p>
              <p>Flutter</p>
              <p>C#</p>
              <p>ASP.NET Core MVC</p>
            </div>
            <div className="col-md-4 text-center">
              <img
                src={Communication}
                className="img-fluid"
                style={{ maxWidth: "20%" }}
                alt="me"
              />
              <h3 className="my-4">Client Communication</h3>
              <p>Chubb Insurance</p>
              <p>Vertex Inc</p>
              <p>Candoris</p>
              <p>Adventures In Odyssey</p>
              <p>Taxamo</p>
              <p>Soccer Coliseum</p>
            </div>
          </div>
        </div>
    )
}

export default Skills