import Image from "next/image";
import styles from "./styles.module.scss";
import { SignInButton } from "../SignInButton";

import logo from "../../../public/images/logo.svg";

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <Image src={logo} alt="Logo IG News" />

        <nav>
          <a className={styles.active}>Home</a>
          <a>Posts</a>
        </nav>

        <SignInButton />
      </div>
    </header>
  );
}
