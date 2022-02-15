import React from "react";
import './Form.css';
export const Form = ({handleInputValue,handleAddNewEelement}) => {

  return (

     <div className="bigBlock"> 
       <form onSubmit={ev =>  ev.preventDefault()} className="form">
           <input onChange={(ev) => handleInputValue("nfoType", ev)} type="text" placeholder="nfoType" name="nfoType"/>
           <input onChange={(ev) => handleInputValue("description", ev)} type="text" placeholder="description" name="description"/>
           <input onChange={(ev) => handleInputValue("reportPeriodTypeId", ev)} required pattern="m|q|r|y" maxLength={1} type="text"
            placeholder="reportPeriodTypeId" name="reportPeriodTypeId"/>
            
          <button onClick={(e) => handleAddNewEelement(e)} className="addButton">add</button>
       </form>
      </div>  
  );
};

export default Form;