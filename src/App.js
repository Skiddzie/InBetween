import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Gallery from './components/Gallery';
import ContactForm from './components/Contact';
import Resume from './components/Resume';

function App() {
  const [contactSelected, setContactSelected] = useState(false);
  const [aboutSelected, setAboutSelected] = useState(false);
  const [navTab, setNavTab] = useState("aboutMe");
  console.log(contactSelected, " ", setContactSelected)
  // const [categories] = useState([
  //   {
  //     name: 'About Me',
  //     description: "I'm Aidan McHendry"
  //   },
  //   {
  //     name: 'projects',
  //     description: 'Photos of grocery stores, food trucks, and other commercial projects',
  //   },
  //   { name: 'resume', description: "I don't currently have a resume" },
  // ]); 

  // const [currentCategory, setCurrentCategory] = useState(categories[0]);

  function switchTab() {
    switch(navTab) {
      case "aboutMe":
        console.log("ding")
        return <About/>
      case "contact":
        return <ContactForm/>
      case "projects":
        return <Gallery></Gallery>
      case "resume":
        return <Resume></Resume>
    }
  }

  return (
    <div>
      <Nav
        setNavTab={setNavTab}
        navTab={navTab}
      ></Nav>
      <main>
        {switchTab()}
      </main>
    </div>
  );
}
export default App;
