import React from "react";
import Metas from "../../components/Metas";
import Navbar from "../../components/Navbar"


const metas = () => {
  return (
    <div>
      <div className="container__nav">
        <Navbar />
      </div>
      <Metas/>
    </div>
  );
};

export default metas;