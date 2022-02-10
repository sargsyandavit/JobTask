import React from "react";
import './RightPanelFond.css';
import { periodData } from "../../../utils/utils";

const RightPanelFond = () => {
    return (
        <div className="listPanelFond">
            <div className="payItemFond">
                {periodData.map(item => 
                <button>{item}</button>
                    )}
            </div>
        <div className="selectFond">
            <select>
                {
                    periodData.map(item => 
                        <option>{item}</option>
                    )
                }
            </select>
        </div>
        <form className="radioFond">
            {
                periodData.map(item =>
                    <label>
                        <input type="radio" name="fond" />
                        {item}
                    </label> 
                    )
            }
        </form>
      </div>
    );
};

export default RightPanelFond;