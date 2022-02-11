import React, { useState } from "react";
import './RightPanelFond.css';
import { periodData } from "../../../utils/utils";

const RightPanelFond = () => {
    const [value, setValue] = useState('Ivory');

const handleChackRadio = (ev) => {
    setValue(ev.target.name)
}

const handleChackOption = (ev) => {
    setValue(ev.target.value)
}
    return (
      <div className="listPanelFond">
        <div className="payItemFond">
                {periodData.map(item => 
                <button className={item === value ? 'red' : ''} key={item}>{item}</button>
                    )}
            </div>
           <div className="selectFond">
             <select defaultValue={value} onChange={(ev) => handleChackOption(ev)}>
                {
                 periodData.map((item,index) => 
                    <option value={item} key={item}>{item}</option>
                )
                }
             </select>
           </div>
          <div className="radioFond">
            {
							periodData.map((item, index) =>
									<div key={item}>
											<input
												onChange={(ev) => handleChackRadio(ev)} 
												type="radio"
												name={item}  
												checked={item === value } 
												value={value}
											/>
											<label htmlFor={item}>{item}</label>
									</div> 
									)
            }
          </div>
      </div>
    );
};

export default RightPanelFond;


//defaultChecked={index ===0}