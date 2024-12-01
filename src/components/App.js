import React, { useState } from "react";
import "./../styles/App.css";
import Tooltip from "./Tooltip";

const App = () => {
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  let text = "This is a tooltip";
  let text2 = "This is a tooltip";
  let children = "Hover over me";
  let children2 = "Hover over me to see another tooltip";

  return (
    <div
    // onMouseEnter={()=>console.log("enter")}
    // onMouseLeave={()=>console.log("Leave")}
    >
      <Tooltip text={text} children={children} action={setShow} vlv={show}/>
      <Tooltip text={text2} children={children2} action={setShow2} vlv={show2} />
    </div>
  );
};

export default App;
