import React, { useState } from 'react';

const AccordionItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion-item">
      <h2 className="accordion-header">
        <button
          className={`accordion-button ${isOpen ? '' : 'collapsed'}`}
          type="button"
          onClick={toggleAccordion}
          aria-expanded={isOpen ? 'true' : 'false'}
        >
          {question}
        </button>
      </h2>

      <div
        className={`accordion-collapse ${isOpen ? 'show' : 'collapse'}`}
      >
        <div className="accordion-body">
          {answer}
        </div>
      </div>
    </div>
  );
};

export default AccordionItem;
