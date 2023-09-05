import React, {useState, useEffect} from "react";

function ContaktList(props) {
  const arrayNew = props.dat;

  return (
    <div>
      {arrayNew.map((contact, index) => (
        <p key={contact.id}>
         {index+1}. Name: "{contact.names}".  Telephone: {contact.telephone}.  E-mail: {contact.email}
        </p>
      ))}
    </div>
  )
}

export default ContaktList;
