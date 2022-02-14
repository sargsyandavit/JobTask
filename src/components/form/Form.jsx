import React from "react";
import './Form.css';

export const Form = ({handleInputValue,handleAddNewEelement}) => {
//   const datas = [];
//   const [newDataElement, setNewDataElement] = useState({
//      nfoType: '',
//      description: '',
//      reportPeriodTypeId: ''
//   });


//   const handleInputValue = (key, ev) => {
//       setNewDataElement((prevent) => ({
//           ...prevent,
//             [key]: ev.target.value
          
//       }));
//   };
  
//   const handleAddNewEelement = () => {
//       if(newDataElement.nfoType && newDataElement.description && newDataElement.reportPeriodTypeId !== ''){
//           datas.push(newDataElement);
//           console.log(datas, 'lll')
//       }
//   };

  return (
     <div className="bigBlock"> 
       <form onSubmit={ev =>  ev.preventDefault()} className="form">
           <input onChange={(ev) => handleInputValue("nfoType", ev)} type="text" placeholder="nfoType" name="nfoType"/>
           <input onChange={(ev) => handleInputValue("description", ev)} type="text" placeholder="description" name="description"/>
           <input onChange={(ev) => handleInputValue("reportPeriodTypeId", ev)} type="text" placeholder="reportPeriodTypeId" name="reportPeriodTypeId"/>
          <button onClick={() => handleAddNewEelement()} className="addButton">add</button>
       </form>
      </div>  
  );
};

export default Form;