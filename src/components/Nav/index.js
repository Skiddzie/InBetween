import React from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";

function Nav(props) {
  const {
    // categories = [],
    // setCurrentCategory,
    // currentCategory,
    // contactSelected,
    // setContactSelected,
    // aboutSelected,
    // setAboutSelected,
    setNavTab,
    navTab
  } = props;

  return (
    <header className="flex-row px-1">
      <h2>
        <a data-testid="link" href="/">InBetween
          {/* <span role="img" aria-label="camera"> 📸</span>*/}
        </a>
      </h2>
      <nav>
        <ul className="flex-row">
          <li className={`mx-2 ${navTab === "aboutMe" && "navActive"}`}>
          <a data-testid="about" href="#about" onClick={() => 
          setNavTab("aboutMe")}>
              Home
            </a>
          </li>
          <li className={`mx-2 ${navTab === "contact" && "navActive"}`}>
            <span onClick={() => setNavTab("contact")}>Contact</span>
          </li>
          <li className={`mx-2 ${navTab === "projects" && "navActive"}`}>
          <a data-testid="projects" href="#about" onClick={() => 
          setNavTab("projects")}>
              Projects
            </a>
          </li>
          <li className={`mx-2 ${navTab === "resume" && "navActive"}`}>
          <a data-testid="resume" href="#about" onClick={() => 
          setNavTab("resume")}>
              Resume
            </a>
          </li>
          {/* {categories.map((category) => (
            <li
              className={`mx-1 ${
                currentCategory.name === category.name && !contactSelected && 'navActive'
                }`}
              key={category.name}
            >
              <span onClick={() => {
                    setCurrentCategory(category);
                    setContactSelected(false);
                    setAboutSelected(false);
                  }}
                >
                {capitalizeFirstLetter(category.name)}
              </span>
            </li>
          ))} */}
        </ul>
      </nav>
    </header>
  );
}

export default Nav;