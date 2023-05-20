import React, { useState } from "react";
import { faq }from "../../Statics/faqData";
import "./Faq.css"

const Faq = () => {
  const [open ,setOpen] = useState(-1);
  function toggle_accordion (index){
    setOpen(index);
    // setTimeout(() => {
    //   setOpen(-1)
    // }, 5000);
  }
  return (<div className="container">
    <div className="heading">
      <span>Frequently Asked Questions</span>
      <h1>Lets answer some of your <span>questions</span> </h1>
    </div>
    <div className="faq_section">
      {faq.map((item,index)=>(
        <>
        <div key={index} className="accordion_heading" onClick={()=>toggle_accordion(index)}>
          <h3>{item.ques}</h3>
          <div>
            {open===index? (
              <>
              <span className="icon">-</span>
              </>
            ):
            <>
            <span className="icon">+</span>
            </>
            }
          </div>
        </div>
        <div className={open===index?"active":"inactive"}>
          <h3>{item.ans}</h3>
        </div>
        </>

      ))}
    </div>

  </div>
  );
};

export default Faq;
