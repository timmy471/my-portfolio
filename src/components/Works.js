import React from "react";

const Works = () => {
  return (
    <section className="work-process">
      <div className="line"></div>
      <h1>Work Process</h1>
      <div className="work-process-1">
        <div className="work-circle">
          <p>1</p>
        </div>
        <h3>EVALUATE REQUIREMENTS</h3>
        <p>
          Deep dive into your business needs and evaluate requirements for our
          project. Discuss with business parties to list out and approve product
          features and priority.
        </p>
      </div>
      <div className="work-process-2">
        <div className="work-circle">
          <p>2</p>
        </div>
        <h3>UI DESIGN AND DEVELOPMENT</h3>
        <p>
          Weather we need to make a website or a complicated web application,
          putting up a design system is important to provide enough information
          for the development phase. Collaborating with the UI/UX team in the
          design process and wireframing to ensure uniformity in requirement and
          results set to be achieved before actual coding and development of features
          within the specified duration of time
        </p>
      </div>
      <div className="work-process-3">
        <div className="work-circle">
          <p>3</p>
        </div>
        <h3>TESTING AND DELIVERY</h3>
        <p>
          Testing implemented features while ensuring existing features, if presentt, still work
          as expected. This is a very important phase as it validates the work put into the development
          before deployment
        </p>
      </div>
    </section>
  );
};

export default Works;
