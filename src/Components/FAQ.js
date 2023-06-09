import React, { useState } from "react";
import './faq.css';

const FAQ = ({ id, title, answer }) => {
  const [toggle, setToggle] = useState(false);
  return (
      <article className="container">
          <div>
              <h2>{title}</h2>
              <button onClick={() => setToggle(!toggle)}>{toggle ? '-' : '+'}</button>
          </div>
          {toggle && <p>{answer}</p>}
      </article>
  );
};

export default FAQ;