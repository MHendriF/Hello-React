import { useState } from "react";

export default function Step() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);
  const [isActive, setIsActive] = useState(true);

  const stepItems = ["Dream", "Believe", "Achieve"];

  function handleNext() {
    if (step < 3) {
      setStep((step) => step + 1);
    }
    if (step === 3) {
      setIsActive(false);
      alert("done");
    }
  }

  function handlePrev() {
    if (step > 1) setStep((step) => step - 1);
    setIsActive(true);
  }

  return (
    <>
      <button className="close" onClick={() => setIsOpen((isOpen) => !isOpen)}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>
          <p className="message">
            Step {step}: {stepItems[step - 1]}
          </p>
          <div className="buttons">
            <button className={`active`} onClick={handlePrev}>
              Prev
            </button>
            <button className={`${isActive ? "active" : "disabled"}`} onClick={handleNext} disabled={!isActive}>
              Next
            </button>
          </div>
        </div>
      )}
    </>
  );
}
