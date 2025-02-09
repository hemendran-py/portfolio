"use client"; // Ensure this runs on the client side

import { usePathname } from "next/navigation"; // Import the Next.js hook
import styles from "./navbar.module.css";

const Navbar = () => {
  const pathname = usePathname(); // Get the current URL path

  return (
    <div className={styles.navbar}>
      <a href="/" className={pathname === "/" ? styles.selected : ""}>
        /
      </a>
      <a href="/work" className={pathname === "/work" ? styles.selected : ""}>
        Work
      </a>
      <a href="/gallery" className={pathname === "/gallery" ? styles.selected : ""}>
        Gallery
      </a>
      <a href="/notes" className={pathname === "/notes" ? styles.selected : ""}>
        Notes
      </a>
    </div>
  );
};

export default Navbar;
