import React from 'react';
import Educollect from "../img/educollect.jpeg";
import GardenAcademy from "../img/garden-academy.jpeg";
import vigilearn from "../img/vigilearn-image.png";
import EdutechNew from "../img/edutech-new.png";


const Project = () => {

    const projects = [
        {
            name: "Edutech",
            image: EdutechNew,
            link: "https://edutech.global/",
            details: "The new Edutech website is a recent project built with react, typescript and bootstrap. It gives clear and valuable insights into the operation of the company"
            
        },
       
        {
            name: "GardenAcademy",
            image: GardenAcademy,
            link: "https://garden-academy.netlify.app",
            details: "The Garden academy is an application that intends to help knowledge sharing in tech. allowing students, take courses and get certified. It was built using react and bootstrap."
        },
        {
            name: "Educollect",
            image: Educollect,
            link: "https://educollectfinance.com",
            details: "Educollect is a loan application system that allows students access to loans to finance their education. The application was built using React, material UI, formik and yup."
            
        },
        {
            name: "Vigilearn",
            image: vigilearn,
            link: "https://vigilearn.com/",
            details: "This is a work in progress, a light version of the intended website. Its a platform to expose partners to products offered by the organization"
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
                       <a href ={link} target="_blank" style={{color:"#848484"}}
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
