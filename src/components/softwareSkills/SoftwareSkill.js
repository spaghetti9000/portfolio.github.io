import React, { useContext, useState, useEffect } from "react";
import "./SoftwareSkill.scss";
import { skillsSection } from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";

export default function SoftwareSkill() {
  const { isDark } = useContext(StyleContext);

  const [activeSkill, setActiveSkill] = useState(null);
  const [userClicked, setUserClicked] = useState(false); // differentiate user vs auto

  const categories = Array.from(
    new Set(skillsSection.softwareSkills.map((s) => s.category).filter(Boolean))
  );

  const allSkills = skillsSection.softwareSkills;

  useEffect(() => {
    const interval = setInterval(() => {
      // If user clicked, do nothing — or remove this condition if you want it to continue anyway
      if (!userClicked) {
        const randomSkill =
          allSkills[Math.floor(Math.random() * allSkills.length)];
        setActiveSkill(randomSkill.skillName);
      }
    }, 5000); // every 10 seconds

    return () => clearInterval(interval);
  }, [userClicked, allSkills]);

  const handleClick = (skillName) => {
    setUserClicked(true);
    setActiveSkill((prev) => (prev === skillName ? null : skillName));
  };

  return (
    <div className="software-skills-main-div">
      {categories.map((cat) => (
        <div key={cat} className="skills-category-container">
          <h2
            className={
              isDark ? "dark-mode skills-category-title" : "skills-category-title"
            }
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </h2>

          <LayoutGroup>
            <div className="software-skills-list">
              {skillsSection.softwareSkills
                .filter((s) => s.category === cat)
                .map((skill) => {
                  const isActive = activeSkill === skill.skillName;

                  return (
                    <motion.div
                      key={skill.skillName}
                      layout
                      className={`software-skill-inline ${isActive ? "active" : ""}`}
                      onClick={() => handleClick(skill.skillName)}
                      transition={{ layout: { duration: 0.4, ease: "easeInOut" } }}
                      style={{ cursor: "pointer" }}
                    >
                      <i className={skill.fontAwesomeClassname + " fa-4x"}></i>
                      <span className="skill-name">{skill.skillName}</span>

                      <AnimatePresence>
                        {skill.description && isActive && (
                          <motion.div
                            key="description"
                            layout
                            className="software-skill-description"
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.6, ease: "easeInOut" }}
                            style={{ overflow: "hidden" }}
                          >
                            {skill.description}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  );
                })}
            </div>
          </LayoutGroup>
        </div>
      ))}
    </div>
  );
}
