import React, { useState } from "react";
import Table from "../../table/Table";
import { dataperiod } from "../../../utils/utils";
import './RightPanel.css';

const RightPanel = ({listData}) => {
  const [value, setValue] = useState('m');
  const [color, setColor] = useState(false);
  const [tableDate,setTableDate] = useState([]);

  const handleChackOption = (ev) => {
    setValue(ev.target.value)
    if(dataperiod.map(item => item.periodId === value)){
      setColor(!color)
    }
  };

  const handleChosePeriod = (ev) => {
    const newDate = listData.filter(elem => elem.reportPeriodTypeId === ev);
    if(tableDate !== []) {
      setTableDate([])
    }
    setTableDate(newDate);
  } 

    return (
     <>
      <div className="listPanel">
         <div className="reportingItem">
           <button>1.3.1</button>
           <button>3.1</button>
           <button>3.2</button>
           <button>4.1</button>
           <button>4.2</button>
           <button>4.3</button>
         </div>
        <div className="payItem">
           {dataperiod.map(item => 
             <button 
               className={item.periodId === value ? 'red' : ''}
               key={item.name}
               onClick={() => handleChosePeriod(item.periodId)}
               >{item.name}</button>
             )}
         </div>
         <div className="select">
             <select onChange={ev => handleChackOption(ev) }>
               {listData.map((item, index) => 
               <option key={index} value={item.reportPeriodTypeId}>{item.nfoType}</option>
                )};
            </select>
        </div>
        <Table tableDate={tableDate}/>
      </div>
    </>
    );
};

export default RightPanel;