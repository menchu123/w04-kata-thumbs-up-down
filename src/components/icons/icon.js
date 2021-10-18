import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Icon({ icon, actionOnClick }) {
  return (
    <>
      <FontAwesomeIcon icon={icon} onClick={actionOnClick} size="6x" />
    </>
  );
}

export default Icon;
