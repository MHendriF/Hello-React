import { socialMedia } from "../constants/data";
import SocialButton from "./SocialButton";

export default function Header() {
  const middleIndex = Math.floor(socialMedia.length / 2);
  const socialLeft = socialMedia.slice(0, middleIndex);
  const socialRight = socialMedia.slice(middleIndex, socialMedia.length);
  return (
    <>
      <div className="social-buttons">
        {socialLeft.map((social, index) => (
          <SocialButton key={index} icon={social.icon} link={social.link} />
        ))}
      </div>
      <div className="social-buttons right">
        {socialRight.map((social, index) => (
          <SocialButton key={index} icon={social.icon} link={social.link} />
        ))}
      </div>
    </>
  );
}
