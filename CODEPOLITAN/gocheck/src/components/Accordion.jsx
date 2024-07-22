import { useState } from "react";
import AccordionItem from "./AccordionItem";

export default function Accordion({ data }) {
  const [curOpen, setIsOpen] = useState(null);

  return (
    <div className="accordion bg-accordion">
      {data.map((faq, index) => (
        <AccordionItem
          key={index}
          curOpen={curOpen}
          onOpen={setIsOpen}
          question={faq.question}
          answer={faq.answer}
          number={index + 1}
        />
      ))}
    </div>
  );
}
