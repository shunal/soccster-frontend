import CreateDrill from "./CreateDrill"
function Projects() {
    return(
        <div className="container-fluid vh-100 hide" style={{backgroundColor: "#1e1d24"}}>
            <div className="row waviy py-4 text-center">
              <span style={{color: "#f58b0a" }}>PROJECTS</span>
            </div>
            <div className="row">
                <h4>Soccster</h4>
                <p>(Integrated into this portfolio site at the top please feel free to create a drill or drawing and share)</p>
                <h6>
                    A web application designed for soccer coaches. Built with ReactJS and a Ruby on Rails API backend.
                </h6>
                <p>
                    Coaches can create, share, view, and search soccer drills by category with the coaching community. This is accomplished using a drag and drop interface with visual representations of items such as the field, players, cones, and soccer balls. 
                </p>
            </div>
            <div className="row" >
                <CreateDrill/>
            </div>
        </div>
    )
}

export default Projects