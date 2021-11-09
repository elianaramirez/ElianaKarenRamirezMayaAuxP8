import React, {Fragment} from "react";
import NewPet from "./components/Pet/NewPet";
import NavBar from "./components/navigation/NavBar";

function App () {
  return (
    <div className="content">
       <NavBar />
      <NewPet />
    </div>
  );
}

export default App;