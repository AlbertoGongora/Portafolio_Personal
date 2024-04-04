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
              <i className={tooling.icon}></i>
              <p>{tooling.name}</p>
            </li>
          );
        })}
      </ul>
      <p ref={parrafRef} className={`toolings-parraf ${isToolingParrafVisible ? 'animate-fade-in' : 'elemNotVisible'}`}>Estas son las herramientas con las que he trabajado y las que domino.</p>
    </section>
  );
  
};

const toolings = [
  { icon: "fa-brands fa-js", name: "JavaScript", numero: "uno" },
  { icon: "fa-brands fa-react", name: "React", numero: "dos" },
  { icon: "fa-brands fa-node", name: "Node", numero: "tres" },
  { icon: "fa-brands fa-node-js", name: "Express", numero: "cuatro" },
  { icon: "fa-solid fa-database", name: "MySQL", numero: "cinco" },
  { icon: "fa-brands fa-html5", name: "HTML", numero: "seis" },
  { icon: "fa-brands fa-css3-alt", name: "CSS", numero: "siete" },
  { icon: "fa-brands fa-npm", name: "NPM", numero: "ocho" },
  { icon: "fa-brands fa-github", name: "GitHub", numero: "nueve" },
  { icon: "fa-brands fa-figma", name: "Figma", numero: "diez", },
];
