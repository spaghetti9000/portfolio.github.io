import React, { useContext } from "react";
import StyleContext from "../../contexts/StyleContext";
import "./SoftSkills.scss";
import { softSkills } from "../../portfolio";
import { Fade, Slide } from "react-awesome-reveal";

export default function SoftSkills() {
  const { isDark } = useContext(StyleContext);

  if (!softSkills.display) {
    return null;
  }
  return (
    <div className={isDark ? "dark-mode soft-skills-main-div main" : "soft-skills main"} id="softskills">
      <Slide triggerOnce fraction={0.2}>

        <div className={isDark ? "dark-mode soft-skills-wrapper" : "soft-skills-wrapper"}>
          {/* Main section title */}
          <div className={isDark ? "dark-mode soft-skills-title" : "soft-skills-title"}>
            <span>{softSkills.title}</span>
          </div>

          {/* Subtitle */}
          <div className={isDark ? "dark-mode soft-skill-subtitle" : "soft-skill-subtitle"}>
            {softSkills.subtitle}
          </div>

          {/* Soft skills and languages container */}
          <div className={isDark ? "dark-mode soft-skills" : "soft-skills"}>
            {/* Soft skills list */}
            <div className={isDark ? "dark-mode soft-skills-list" : "soft-skills-list"}>
              {softSkills.softSkills.map((skill, i) => (
                <div key={i} className="soft-skill-item">
                  <li>
                    <strong>{skill.title}</strong>
                    <p>{skill.description}</p>
                  </li>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Slide>

      <Slide triggerOnce fraction={0.2} direction={"right"}>
        {/* Languages wrapper with title above list */}
        <div className={isDark ? "dark-mode language-card-wrapper" : "language-card-wrapper"}>
          <span className={isDark ? "dark-mode soft-skills-title" : "soft-skills-title"}>
            {softSkills.languageTitle}
          </span>

          <div className={isDark ? "dark-mode soft-skill-subtitle" : "soft-skill-subtitle"}>
            {softSkills.languageSubtitle}
          </div>
          <div className={isDark ? "dark-mode language-card" : "language-card"}>
            {softSkills.languages.map((lang, i) => (
              <div key={i} className="soft-skill-language-item">
                <li className={isDark ? "dark-mode" : ""}>
                  <div className="language">{lang.language}</div>
                  <div className="level">
                    {lang.level}
                    {lang.certificate && (
                      <div className="certificate"> {lang.certificate}</div>
                    )}
                  </div>
                </li>
              </div>
            ))}
          </div>
        </div>
      </Slide >
    </div >
  );
}
