import React, { useContext } from "react";
import StyleContext from "../../contexts/StyleContext";
import "./SoftSkills.scss";
import { softSkills } from "../../portfolio";

export default function SoftSkills() {
  const { isDark } = useContext(StyleContext);

  if (!softSkills.display) {
    return null;
  }

  return (
    <div className={isDark ? "dark-mode soft-skills-main-div main" : "soft-skills main"} id="softskills">
      <div className={isDark ? "dark-mode soft-skills-title" : "soft-skills-title"}>
        <span>{softSkills.title}</span><span>{softSkills.languageTitle}</span>
      </div>
      <div className={isDark ? "dark-mode soft-skill-subtitle" : "soft-skills-subtitle"}>
        {softSkills.subtitle}
      </div>
      <div className={isDark ? "dark-mode soft-skills" : "soft-skills"}>
      <div className={isDark ? "dark-mode soft-skills-list" : "soft-skills-list"}>
        {softSkills.softSkills.map((skill, i) => (
          <div key={i} className="soft-skill-item">
            <li>
              <strong>{skill.title}</strong> {/* Title of the soft skill */}
              <p>{skill.description}</p>     {/* Description of how you got it */}
            </li>
          </div>
        ))}
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
    </div>
  );
}
