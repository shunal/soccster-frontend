import Steve from '../Steve10.png'

function Introduction() {
    return(
            <div className="container-fluid">
              <div className="row align-items-center maindiv">
                <div className="col-md-2"></div>
                <div className="col-md-2">
                  <h1 className="text-start">Steven</h1>
                  <h1 className="text-start">Hunal.</h1>
                  <h1 className="text-start">_</h1>
                  <h5 className="text-start">
                    <a href="https://www.linkedin.com/in/steven-hunal-02ab54b4/">
                      LinkedIn
                    </a>
                  </h5>
                    <h5 className="text-start">
                      <a href="https://github.com/shunal">Github</a>
                    </h5>
                </div>
                <div className="col-md-4 hide">
                  <img src={Steve} className="img-fluid " alt="me" />
                </div>
                <div className="col-md-4" style={{}}>
                  <div>
                    <div className="waviy mt-3">
                      <span style={{ "--i": 1, color: "#f58b0a" }}>I</span>
                      <span style={{ "--i": 2, color: "#f58b0a" }}>N</span>
                      <span style={{ "--i": 3, color: "#f58b0a" }}>T</span>
                      <span style={{ "--i": 4, color: "#f58b0a" }}>R</span>
                      <span style={{ "--i": 5, color: "#f58b0a" }}>O</span>
                      <span style={{ "--i": 6, color: "#f58b0a" }}>D</span>
                      <span style={{ "--i": 7, color: "#f58b0a" }}>U</span>
                      <span style={{ "--i": 8, color: "#f58b0a" }}>C</span>
                      <span style={{ "--i": 9, color: "#f58b0a" }}>T</span>
                      <span style={{ "--i": 10, color: "#f58b0a" }}>I</span>
                      <span style={{ "--i": 11, color: "#f58b0a" }}>O</span>
                      <span style={{ "--i": 12, color: "#f58b0a" }}>N</span>
                    </div>
                    <h2 className="text-start mt-3">Software Engineer/</h2>
                    <h2 className="text-start mb-3">Web Developer</h2>
                    <p className="text-start mb-5">
                      I'm an enthusiastic, soccer-crazed full-stack engineer with a
                      passion for building responsive web applications.
                    </p>
                  </div>
                </div>
              </div>
            </div>
    )
}

export default Introduction