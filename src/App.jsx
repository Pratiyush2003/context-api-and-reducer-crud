import React, { useState } from "react";
import { GlobalProvider } from "./context/GlobalState";
import AddTransactions from "./components/AddTransactions";
import ReadTransaction from "./components/ReadTransaction";

const App = () => {
  const [id , setId] = useState(null);
  return (
    <>
      <GlobalProvider>
        <AddTransactions id = {id} setId={setId}/>
        <ReadTransaction id = {id} setId={setId}/>
      </GlobalProvider>
    </>
  );
};

export default App;
