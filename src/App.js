import React from "react";
import GeneralInfo from "./components/form";

function App() {
  const formID = "cvForm";
  return (
    <div className="App">
      <form id={formID} name={formID}>
        <GeneralInfo form={formID} />
      </form>
    </div>
  );
}

export default App;
