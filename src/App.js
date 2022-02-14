import React,{useRef, useState} from "react";
import List from "./components/list/List";
import Fond from "./components/fond/Fond";
import Form from "./components/form/Form";
import './App.css'
const App = () =>  {
  const [finlyElement, setFinlyElement] = useState({});
  const propref = useRef(null)
  
  const [newDataElement, setNewDataElement] = useState({
    nfoType: '',
    description: '',
    reportPeriodTypeId: ''
 });

 const handleInputValue = (key, ev) => {
     setNewDataElement((prevent) => ({
         ...prevent,
           [key]:  ev.target.value
         
     }));

 };
 
 const handleAddNewEelement = () => {
   console.log(propref)
     if(newDataElement.nfoType && newDataElement.description && newDataElement.reportPeriodTypeId !== ''){
        // setFinlyElement({...newDataElement});
     }
 };

  return (
    <div className="app">
      <Form handleInputValue={handleInputValue} handleAddNewEelement={handleAddNewEelement} />
      <List ref={propref} finlyElement={finlyElement}/>
      <Fond />
    </div>
  );
}

export default App;
