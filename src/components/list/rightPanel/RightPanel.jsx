import React from "react";
import { listData } from "../../../utils/utils";
import './RightPanel.css';

const RightPanel = () => {
  console.log(listData)
    return (
        <div className="listPanel">
        <div className="reportingItem">
          <button className="">1.3.1</button>
          <button className="">3.1</button>
          <button className="">3.2</button>
          <button className="">4.1</button>
          <button className="">4.2</button>
          <button className="">4.3</button>
        </div>
        <div className="payItem">
          <button className="">Месячная</button>
          <button className="">Квартальная</button>
          <button className="">Годовая</button>
          <button className="">Нерегулярная</button>
        </div>
        <div className="select">
            <select>
              {listData.map(item => 
               <option key={item.description} value="">{item.description}</option>
                )}
            </select>
        </div>
      </div>
    );
};

export default RightPanel;