import React from "react"

const ProjectDetails = (props) => {
    const id = props.match.params.id
    return (
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Project Title - {id}</span>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero eius similique illum asperiores ea dolore quidem ratione maiores sapiente iste. Magni vero maxime porro provident dignissimos? Aliquid tenetur earum quas.</p>
                </div>
                <div className="card-action grey lighten-4 grey-text">
                    <div>Posted by Tim Tangonan</div>
                    <div>March 4, 11:30am</div>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetails