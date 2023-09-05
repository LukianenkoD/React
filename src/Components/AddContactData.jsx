import React, { useEffect, useState } from "react";
import ContaktList from "./ContaktList";

function AddContactData() {
  const [data, setData] = useState(()=>JSON.parse(localStorage.getItem("data"))||[]);
  console.log(data);
  function handleSubmit(e) {
    e.preventDefault();

    const names = e.target.name.value;
    const telephone = e.target.telephone.value;
    const email = e.target.email.value;
    const newDate = {
      id: Date.now(),
      names,
      telephone,
      email,
    };
    setData([...data, newDate]);
    e.target.reset();
  }



useEffect(()=>{
  localStorage.setItem("data", JSON.stringify(data));
}, [data]);
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          type="text"
          placeholder="First und Last name"
          required
        />
        <input name="telephone" type="number" placeholder="+49..." required />
        <input name="email" type="email" placeholder="a@b.com" required />
        <button>Add contact</button>
      </form>
      <ContaktList dat={data} />
    </>
  );
}

export default AddContactData;
