import React, { FC } from 'react';
import ScrollToBottom from 'react-scroll-to-bottom';

import '../css/Display.css';


import { FaRegTimesCircle } from "react-icons/fa";



// className=""

const Display: FC = () => {



  return (
    <section className="display-section">

      <div className="revenue-display">
        <p className="revenue-h">TOTAL REVENUE:  1 323 342 kr</p>
      </div>

      <div className="display-grid">

        <div className="display-grid-div">
          <p className="d-g-h">Current Projects</p>
          <div className="d-g-sc">
            <ScrollToBottom className="scroll-area">
              <p className="d-g-sd">Project: Lamborghini | 2 active tasks <FaRegTimesCircle className="d-g-icon" /></p>

            </ScrollToBottom>
          </div>

        </div>

        <div className="display-grid-div">
          <p className="d-g-h">Current Tasks</p>
          <div className="d-g-sc">
            <ScrollToBottom className="scroll-area">

              <p className="d-g-sd">Task: Aventador <FaRegTimesCircle className="d-g-icon" /></p>
            </ScrollToBottom>

          </div>

        </div>

        <div className="display-grid-div">
          <p className="d-g-h">Timelogs 30day period</p>
          <div className="d-g-sc">
            <ScrollToBottom className="scroll-area">

              <p className="d-g-sd">Timelog: Lamborghini | 2s | 2022-11-16 <FaRegTimesCircle className="d-g-icon" /></p>
            </ScrollToBottom>

          </div>

        </div>
      </div>

    </section>
  );
}

export default Display;
