import React, { useContext, useState } from "react";
import "./SoftwareSkill.scss";
import { skillsSection } from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";
import { motion, AnimatePresence } from "framer-motion";

export default function SoftwareSkill() {
  const { isDark } = useContext(StyleContext);
  const [activeSkill, setActiveSkill] = useState(null);

  const categories = Array.from(
    new Set(skillsSection.softwareSkills.map((s) => s.category).filter(Boolean))
  );

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

          <div className="software-skills-list">
            {skillsSection.softwareSkills
              .filter((s) => s.category === cat)
              .map((skill, i) => {
                const isActive = activeSkill === skill.skillName;

                return (
                  <motion.div
                    key={i}
                    layout
                    className={`software-skill-inline ${isActive ? "active" : ""}`}
                    onClick={() =>
                      setActiveSkill(isActive ? null : skill.skillName)
                    }
                    transition={{ layout: { duration: 0.4, ease: "easeInOut" } }}
                    style={{ cursor: "pointer" }}
                  >
                    <i className={skill.fontAwesomeClassname + " fa-4x"}></i>
                    <span className="skill-name">{skill.skillName}</span>

                    <AnimatePresence>
                      {skill.description && isActive && (
                        <motion.div
                          key="description"
                          className="software-skill-description"
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.5, ease: "easeInOut" }}
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
        </div>
      ))}
    </div>
  );
}
