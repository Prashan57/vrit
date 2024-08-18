import React, { useState } from "react";
import "../styles/Accordion.css";

import { AccordionItem } from "./accordionItem";

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState(false);

  const openItem = (index) => {
    setOpenIndex(index);
  };

  const closeItem = () => {
    setOpenIndex(false);
  };

  const handleClick = (index) => {
    if (openIndex === index) {
      closeItem();
    } else {
      openItem(index);
    }
  };

  const accordionData = [
    { title: "Accordion Item 1", content: "This is the content of Item 1" },
    { title: "Accordion Item 2", content: "This is the content of Item 2" },
    { title: "Accordion Item 3", content: "This is the content of Item 3" },
    { title: "Accordion Item 4", content: "This is the content of Item 4" },
  ];

  return (
    <div className="accordion">
      {accordionData.map((item, index) => (
        <AccordionItem
          title={item.title}
          content={item.content}
          isOpen={openIndex === index}
          onClick={() => handleClick(index)}
        />
      ))}
    </div>
  );
};

export default Accordion;
