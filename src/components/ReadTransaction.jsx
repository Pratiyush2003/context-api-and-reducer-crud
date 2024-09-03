import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const ReadTransaction = ({id, setId}) => {
  const { transactions, deleteTransaction } = useContext(GlobalContext);
  return (
    <>
      <ul>
        {transactions.map((p) => (
            <div key={p.id}>
                <li>{p.text}</li>
                <li>{p.name}</li>
                <button onClick={() => deleteTransaction(p.id)}>Delete Data</button>
                <button onClick={() => setId(p.id)}>Edit</button>
            </div>
        ))}
      </ul>
    </>
  );
};

export default ReadTransaction;
