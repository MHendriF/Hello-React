import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SocialButton({ icon, link }) {
  return (
    <button onClick={() => window.open(link, "_blank")}>
      <FontAwesomeIcon icon={icon} fade color="white" />
    </button>
  );
}
