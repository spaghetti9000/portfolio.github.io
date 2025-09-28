
import React, { useContext } from "react";
import "./SoftwareSkill.scss";
import { skillsSection } from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

export default function SoftwareSkill() {
  const { isDark } = useContext(StyleContext);

  // Get unique categories
  const categories = Array.from(
    new Set(skillsSection.softwareSkills.map((s) => s.category).filter(Boolean))
  );

  // Utility to safely generate class names
  const safeClassName = (str) => str.replace(/\s+/g, "-").toLowerCase();

  return (
    <div className="software-skills-main-div">
      {categories.map((cat) => (
        <div key={cat} className={`skills-category-container`}>
          {/* Category Title */}
          <h2 className={isDark ? "dark-mode skills-category-title" : "skills-category-title"}>
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </h2>

          {/* Skills in this category */}
          <div className="software-skills-list">
            {skillsSection.softwareSkills
              .filter((s) => s.category === cat)
              .map((skill, i) => (
                <div key={i}>
                  <div className="software-skill-inline">
                    <i className={skill.fontAwesomeClassname + " fa-4x"}></i>
                    <span className="skill-name">{skill.skillName}</span>

                    {skill.description && (
                      <div className="software-skill-description on-hover">
                        {skill.description}
                      </div>
                    )}
                  </div>


                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}
