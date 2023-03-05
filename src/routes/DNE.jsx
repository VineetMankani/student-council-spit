import React from "react";
import Navbar from "../components/Navbar";

const DNE = () => {
    return (
      <>
      <Navbar />
      <section className="d-flex flex-column">
        <h2>The Page You Are Looking For DOES NOT EXIST At This Moment!</h2>
        <a href="./Committees" className="mt-4"><h4>Visit Committee Details</h4></a>
      </section>
      </>
)};
export default DNE;