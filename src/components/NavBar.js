import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const eachLink = links.map((link) => (
    <a key={link} href={'#' + link}>{link}</a>
  ))

  return <nav>{eachLink}</nav>
}

export default NavBar;
