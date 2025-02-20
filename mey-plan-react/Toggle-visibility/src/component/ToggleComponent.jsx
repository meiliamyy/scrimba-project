import { useState } from "react";

const ToggleComponent = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
      <button onClick={toggleVisibility}>{isVisible ? "Hide" : "Show"} Content</button>
      {isVisible && <p>This is the hidden content!</p>}
    </div>
  );
};

export default ToggleComponent;
