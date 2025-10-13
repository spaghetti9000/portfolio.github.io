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
      }, 500);
    } else if (!isVisible && !userClicked) {
      setActiveSkill(null);
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
              isDark
                ? "dark-mode skills-category-title"
                : "skills-category-title"
            }
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </h2>

          {/* Use LayoutGroup at a higher scope so siblings share layout animation context */}
          <LayoutGroup id={cat}>
            <motion.div
              className="software-skills-list"
              layout
              layoutScroll
              transition={{ layout: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] } }}
            >
              {skillsSection.softwareSkills
                .filter((s) => s.category === cat)
                .map((skill) => {
                  const isActive = activeSkill === skill.skillName;

                  return (
                    <motion.div
                      key={skill.skillName}
                      layout
                      layoutId={skill.skillName} // 👈 links the same element’s layout across renders
                      onClick={() => handleClick(skill.skillName)}
                      className={`software-skill-inline ${isActive ? "active" : ""}`}
                      transition={{
                        layout: { duration: 0.45, ease: [0.4, 0, 0.2, 1] },
                        opacity: { duration: 0.3 },
                      }}
                      style={{ cursor: "pointer" }}
                    >
                      <motion.div layout="position" className="skill-icon">
                        {skill.image ? (
                          <img
                            src={skill.image}
                            alt={skill.skillName}
                            className="w-16 h-16"
                          />
                        ) : (
                          <i
                            className={skill.fontAwesomeClassname + " fa-4x"}
                          ></i>
                        )}
                      </motion.div>
                      <motion.span
                        layout="position" // only animate its position, not its box size
                        className="skill-name"
                        style={{
                          transformOrigin: "center center",
                          scale: 1, // explicitly lock scale
                        }}
                      >
                        {skill.skillName}
                      </motion.span>
                      <AnimatePresence mode="popLayout">
                        {skill.description && isActive && (
                          <motion.div
                            key="description"
                            layout
                            layoutId={`${skill.skillName}-desc`}
                            className="software-skill-description"
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{
                              layout: { duration: 0.45, ease: "easeInOut" },
                              opacity: { duration: 0.3 },
                            }}
                            style={{ overflow: "hidden" }}
                          >
                            {skill.description}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  );
                })}
            </motion.div>
          </LayoutGroup>
        </div>
      ))}
    </div>
  );
}

