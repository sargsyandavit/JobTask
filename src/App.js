import React,{ useState} from "react";
import List from "./components/list/List";
import Fond from "./components/fond/Fond";
import Form from "./components/form/Form";
import './App.css'
import { listData } from "./utils/utils";
import { regexpForPeriodTypeIdmreg } from "./utils/regexp/regexp";
const App = () =>  {
  const [isValide, setIsValide] = useState(false)
  
  const [listDataState, setListDataState] = useState(listData);
  
  
  const [newDataElement, setNewDataElement] = useState({
    nfoType: '',
    description: '',
    reportPeriodTypeId: '',
 });

 const handleInputValue = (key, ev) => {
     setNewDataElement({
        ...newDataElement, 
        [key]: ev.target.value,   
      });
      setIsValide({
        isValide: handelValidation(key, ev.target.value),
      });

 };

 const handleAddNewEelement = () => {
     if(newDataElement.nfoType && newDataElement.description && newDataElement.reportPeriodTypeId !== ''){
        setListDataState([...listDataState, newDataElement]);
     }
     
 };

 const handelValidation = (key, value) => {
   if(key === "reportPeriodTypeId") return regexpForPeriodTypeIdmreg.test(value);
   
}
  return (
    <div className="app">
    <Form handleInputValue={handleInputValue} handleAddNewEelement={handleAddNewEelement} />
      <List listData={listDataState} newDataElement={newDataElement}/>
      <Fond />
    </div>
  );
}

export default App;
