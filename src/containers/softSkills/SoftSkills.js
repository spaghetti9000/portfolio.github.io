import React, { useContext } from "react";
import StyleContext from "../../contexts/StyleContext"
import ".SoftSkills.scss"



export default function SoftSkills() {
  const { isDark } = useContext(StyleContext)
  if (!softSkills.display) {
    return null;
  }
}

<div> className={isDark ? "dark-mode soft-skills" : "soft-skills"}

  <div className={isDark ? "dark-mode soft-skills-list" : "soft-skills-list"}>
    {softSkills.softSkills.map((skill, i) => (
      <div key={i} className="soft-skill-item">
        <li>{skill}</li>
      </div>
    ))}
  </div>

  <div> className={isDark ? "dark-mode soft-skills-languages" : "soft-skills-languages"}
    {softSkills.languages.map((language, i) => (
      <div key={i} className="soft-skill-item">
        <li>{language}</li>
      </div>
    ))}
  </div>



</div>
