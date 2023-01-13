import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import styles from "./navlink.module.css";

function NavLink({ href, exact, children, ...props }) {
  const { asPath } = useRouter();
  const [isActive, setIsActive] = useState(false);
  const className = `${styles.navlink} ${isActive ? styles.active : ""}`;

  useEffect(() => setIsActive(asPath.indexOf(href) >= 0), [asPath, href]);
  useEffect(() => {
    setIsActive(props.inViewSection === href);
  }, [props.inViewSection]);

  return (
    <Link href={href} scroll={false}>
      <a href={href} className={className}>
        {children}
      </a>
    </Link>
  );
}

export default NavLink;
