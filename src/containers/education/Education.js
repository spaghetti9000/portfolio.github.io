import React from "react";
import "./Education.scss";
import EducationCard from "../../components/educationCard/EducationCard";
import { educationInfo } from "../../portfolio";
import { Slide } from "react-awesome-reveal";

export default function Education() {
  if (educationInfo.display) {
    return (
      <Slide fraction={0.3} triggerOnce>
        <div className="education-section" id="education">
          <h1 className="education-heading">Education</h1>
          <div className="education-card-container">
            {educationInfo.schools.map((school, index) => (
              <EducationCard key={index} school={school} />
            ))}
          </div>
        </div>
      </Slide>
    );
  }
  return null;
}
