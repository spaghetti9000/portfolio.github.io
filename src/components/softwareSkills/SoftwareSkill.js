import React, { useContext, useState, useEffect, useRef } from "react";
import "./SoftwareSkill.scss";
import { skillsSection } from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";

export default function SoftwareSkill() {
  const { isDark } = useContext(StyleContext);

  const [activeSkill, setActiveSkill] = useState(null);
  const [userClicked, setUserClicked] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);

  const categories = Array.from(
    new Set(skillsSection.softwareSkills.map((s) => s.category).filter(Boolean))
  );

  const allSkills = skillsSection.softwareSkills;

  // Observe visibility of the main div
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.intersectionRatio >= 0.3);
      },
      { threshold: [0, 0.3, 1] }
    );

    if (containerRef.current) observer.observe(containerRef.current);

    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, []);

  // Activate first skill when becoming visible, deactivate when hidden
  useEffect(() => {
    let timeout;

    if (isVisible && !activeSkill && !userClicked) {
      timeout = setTimeout(() => {
        const firstCategory = categories[0];
        const firstSkill = allSkills.find((s) => s.category === firstCategory);
        if (firstSkill) setActiveSkill(firstSkill.skillName);
      }, 500); // wait 0.5 second
    } else if (!isVisible && !userClicked) {
      setActiveSkill(null); // reset when not visible
    }

    return () => clearTimeout(timeout);
  }, [isVisible, activeSkill, userClicked, allSkills, categories]);

  // Auto-change activeSkill only when visible
  useEffect(() => {
    if (!isVisible) return;

    const interval = setInterval(() => {
      if (!userClicked) {
        const randomSkill =
          allSkills[Math.floor(Math.random() * allSkills.length)];
        setActiveSkill(randomSkill.skillName);
      }
    }, 6000);

    return () => clearInterval(interval);
  }, [userClicked, allSkills, isVisible]);
  const handleClick = (skillName) => {
    setUserClicked(true);
    setActiveSkill((prev) => (prev === skillName ? null : skillName));
  };

  return (
    <div className="software-skills-main-div" ref={containerRef}>
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
                .map((skill, idx) => {
                  const isActive = activeSkill === skill.skillName;

                  return (
                    <motion.div key={skill.skillName}
                      layout
                      className={`software-skill-inline ${isActive ? "active" : ""}`
                      }
                      onClick={() => handleClick(skill.skillName)}
                      transition={{ layout: { duration: 0.4, ease: "easeInOut" } }}
                      style={{ cursor: "pointer" }}
                    >
                      {skill.image ? (
                        <img src={skill.image} alt={skill.skillName} className="w-16 h-16" />
                      ) : (
                        <i className={skill.fontAwesomeClassname + " fa-4x"}></i>
                      )}
                      <span className="skill-name">{skill.skillName}</span>

                      <AnimatePresence>
                        {skill.description && isActive && (
                          <motion.div
                            key="description"
                            className="software-skill-description"
                            layout
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
        </div >
      ))
      }
    </div >
  );
}
