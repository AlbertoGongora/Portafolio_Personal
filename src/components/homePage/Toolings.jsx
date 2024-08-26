import { useState, useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import "./toolings.css";

export const Toolings = () => {
  const [isToolingTitleVisible, setIsToolingTitleVisible] = useState(false);
  const [isToolingListVisible, setIsToolingListVisible] = useState(false);
  const [isToolingParrafVisible, setIsToolingParrafVisible] = useState(false);
  const { ref: titleRef, inView: titleIsVisible } = useInView({ threshold: 0.5 });
  const { ref: listRef, inView: listIsVisible } = useInView({ threshold: 0.5 });
  const { ref: parrafRef, inView: parrafIsVisible } = useInView({ threshold: 0.5 });
  const listItemsRefs = useRef([]);

  useEffect(() => {
    if (titleIsVisible) setIsToolingTitleVisible(true);
    if (listIsVisible) setIsToolingListVisible(true);
    if (parrafIsVisible) setIsToolingParrafVisible(true);
  }, [titleIsVisible, listIsVisible, parrafIsVisible]);

  return (
    <section className="toolings-container">
      <h3 ref={titleRef} className={`toolings-title ${isToolingTitleVisible ? 'animate-your-effect-title' : 'elemNotVisible'}`}>TOOLS</h3>
      <ul ref={listRef} className={`toolings-list ${isToolingListVisible ? 'animate-your-effect-container' : 'elemNotVisible'}`}>
        {toolings.map((tooling, index) => {
          
          // eslint-disable-next-line react-hooks/rules-of-hooks
          const itemRef = useRef(null);
          listItemsRefs.current[index] = itemRef;
          
          return (
            <li
              key={index}
              ref={itemRef}
              className={`tooling-item ${isToolingListVisible ? 'animate-pop delay-2s' : ''} ${isToolingListVisible ? tooling.numero : ''}`}
            >
              <img src={tooling.icon} alt={tooling.name} className="tooling-icon" />
              <p>{tooling.name}</p>
            </li>
          );
        })}
      </ul>
      <p ref={parrafRef} className={`toolings-parraf ${isToolingParrafVisible ? 'animate-fade-in' : 'elemNotVisible'}`}>Estas son las herramientas que domino. Actualmente, estoy en proceso de aprender TypeScript e integrar Sass en mis proyectos. Además, tengo conocimientos en herramientas de gestión como Trello.</p>
    </section>
  );
  
};

const toolings = [
  { icon: "/svg/html5.svg", name: "HTML", numero: "uno" },
  { icon: "/svg/css.svg", name: "CSS", numero: "dos" },
  { icon: "/svg/javascript.svg", name: "JavaScript", numero: "tres" },
  { icon: "/svg/react.svg", name: "React", numero: "cuatro" },
  { icon: "/svg/nodejs.svg", name: "Node.js", numero: "cinco" },
  { icon: "/svg/Express.js_dark.svg", name: "Express", numero: "seis" },
  { icon: "/svg/mongodb.svg", name: "MongoDB", numero: "siete" },
  { icon: "/svg/mysql.svg", name: "MySQL", numero: "ocho" },
  { icon: "/svg/npm.svg", name: "NPM", numero: "nueve" },
  { icon: "/svg/git.svg", name: "Git", numero: "diez" },
  { icon: "/svg/Github_dark.svg", name: "GitHub", numero: "once" },
  { icon: "/svg/netlify.svg", name: "Netlify", numero: "doce" },
  { icon: "/svg/Vercel_dark.svg", name: "Vercel", numero: "trece" },
  { icon: "/svg/notion.svg", name: "Notion", numero: "catorce" },
  { icon: "/svg/slack.svg", name: "Slack", numero: "quince" },
];
