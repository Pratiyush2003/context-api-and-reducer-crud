import React, { useContext, useEffect, useState } from 'react';
import { GlobalContext } from '../context/GlobalState';

const AddTransactions = ({ id }) => {
  const { addTransaction, transactions, updateTransaction } = useContext(GlobalContext);

  const [text, setText] = useState('');
  const [name, setName] = useState('');

  useEffect(() => {
    if (id) {
      const transactionToEdit = transactions.find((p) => p.id === id);
      if (transactionToEdit) {
        setName(transactionToEdit.name);
        setText(transactionToEdit.text);
      }
    }
  }, [id, transactions]);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (id) {
      const updatedTransaction = {
        id, 
        text,
        name,
      };
      updateTransaction(updatedTransaction);
    } else {
      const newTransaction = {
        id: Math.ceil(Math.random() * 1000),
        text,
        name,
      };
      addTransaction(newTransaction);
    }

    setText('');
    setName('');
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <label>Text</label>
      <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
      <label>Name</label>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      <button type="submit">Submit Data</button>
    </form>
  );
};

export default AddTransactions;
