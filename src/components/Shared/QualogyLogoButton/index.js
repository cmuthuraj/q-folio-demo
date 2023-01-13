import logo from "../../../../public/logo-white.svg";
import Image from "next/image";

const QualogyLogoButton = () => (
  <Image
    src={logo.src}
    alt="logo"
    layout="fixed"
    width="90%"
    height="90%"
    priority
  />
);

export default QualogyLogoButton;
