import React from "react";
import { listData, dataperiod } from "../../../utils/utils";
import './RightPanel.css';

const RightPanel = () => {

  const handleChackOption = (ev) => {
    console.log(ev.target.value);
    if(dataperiod.filter(item => ev.target.value === item.periodId)){
      console.log('Garik jan')
    }
  } 
  console.log(listData)
    return (
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
            //  className={item === value ? 'red' : ''} key={item}
              key={item.name}>{item.name}</button>
            )}
        </div>
        <div className="select">
            <select onChange={ev => handleChackOption(ev) }>
              {listData.map(item => 
               <option key={item.description} value={item.reportPeriodTypeId}>{item.nfoType}</option>
                )}
            </select>
        </div>
      </div>
    );
};

export default RightPanel;