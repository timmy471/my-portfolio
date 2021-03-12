import React from 'react';


const Project = () => {
    return (
        <section className="projects" id='works'>
            <h1>
                Some of my Projects <span className="box"></span>
            </h1>
            <div className="project-pics">
                <a href ="https://educollectfinance.com" target="_ blank"><img src={require("../img/educollect.jpeg")} alt="educollect" /></a>
                <a href="https://garden-academy.netlify.app" target="_blank"><img src={require("../img/garden-academy.jpeg")} alt="garden academy" /></a>
                <a href="https://timmy-hr.herokuapp.com/index.html" target="_blank"> <img src={require("../img/staff-mgt.png")} alt="staff-management" /></a>
                <a href="https://vgg-internship-website.herokuapp.com"><img src={require("../img/vgg-internship.jpeg")} alt="vgg-internship" /></a>
                
            </div>
            <div className="see">
                <a href='https://github.com/timmy471' target='blank' >See More</a>
            </div>
        </section>
		);
}

export default Project;
