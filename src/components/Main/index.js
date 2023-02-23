import React from 'react'
import coverImage from "../../assets/cover/cover-image.png";

function Main() {

  return (
    <section className="my-5" >
      {/* <h1 id="about">InBetween</h1> */}
      <img src={coverImage} className="my-2" style={{ width: "50%" }} alt="cover" />
      <div className="my-2">
        <p>
          select two or more cities and then find the midway point
        </p>
      </div>
    </section>
  )
}

export default Main