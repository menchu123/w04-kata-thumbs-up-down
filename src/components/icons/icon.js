import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { faThumbsDown } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function Icon() {
  const [thumbsUp, setThumbsUp] = useState(true);
  function toggle() {
    setThumbsUp(!thumbsUp);
  }
  return (
    <>
      <FontAwesomeIcon
        icon={thumbsUp ? faThumbsUp : faThumbsDown}
        onClick={toggle}
        size="6x"
      />
    </>
  );
}

export default Icon;
