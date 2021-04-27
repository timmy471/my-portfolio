import React from 'react';
import Educollect from "../img/educollect.jpeg";
import GardenAcademy from "../img/garden-academy.jpeg";
import Edutech from "../img/edutech.png";
import VGG from "../img/vgg_internship.png";


const Project = () => {

    const projects = [
        {
            name: "Educollect",
            image: Educollect,
            link: "https://educollectfinance.com",
            details: "Educollect is a loan application system that allows students access to loans to finance their education. The application was built using React, material UI, formik and yup."
            
        },
        {
            name: "GardenAcademy",
            image: GardenAcademy,
            link: "https://garden-academy.netlify.app",
            details: "The Garden academy is an application that intends to help knowledge sharing in tech. allowing students, take courses and get certified. It was built using react and bootstrap."
        },
        {
            name: "Edutech",
            image: Edutech,
            link: "https://edutechng.com/",
            details: "The Edutech website displays information about the programs managed by the company. This application was built with HTML, SASS and Bootsrap with webpack as the package bundler"
        },
        {
            name: "Vgg Website",
            image: VGG,
            link: "https://vgg-internship-website.herokuapp.com",
            details: "This is a website created with React and bootstrap. It was built to provide information about Venture Garden Group internship programs."
        },
    ]
    return (
        <section className="projects" id='works'>
            <h1>
                Some of my Projects <span className="box"></span>
            </h1>
            <div className="project-pics" >

            {projects.map(({ image, link, details, name }, key) => (
                   <div className="project"  key={key} >
                       <a href ={link} target="_ blank" style={{color:"#848484"}}
                       ><img src={image} alt={name} />
                       <div className="project-details">
                           <p className="details-text">
                          {details}
                           </p>
                       </div>
                       </a>
                   </div>
                  
            ))}
               </div>

            <div className="see">
                <a href='https://github.com/timmy471' target='blank' >See More</a>
            </div>
        </section>
		);
}

export default Project;
