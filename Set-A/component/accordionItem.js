export const AccordionItem = ({ title, content, isOpen, onClick }) => {
  return (
    <div className="accordion-item">
      <div className="accordion-title" onClick={onClick}>
        <h3>{title}</h3>
      </div>
      {isOpen && <div className="accordion-content">{content}</div>}
    </div>
  );
};
