import "./App.css";
import Icon from "./components/icons/icon.js";
import { useState } from "react";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { faThumbsDown } from "@fortawesome/free-solid-svg-icons";

function App() {
  const [thumbsUp, setThumbsUp] = useState(true);
  function toggle() {
    setThumbsUp(!thumbsUp);
  }
  const thumbsUpIcon = faThumbsUp;
  const thumbsDownIcon = faThumbsDown;

  return (
    <div className="icon">
      <Icon
        actionOnClick={toggle}
        icon={thumbsUp ? thumbsUpIcon : thumbsDownIcon}
      />
    </div>
  );
}

export default App;
