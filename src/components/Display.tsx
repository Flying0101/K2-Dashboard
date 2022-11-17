import React, { FC, useState } from 'react';
import ScrollToBottom from 'react-scroll-to-bottom';

import '../css/Display.css';


import { FaRegTimesCircle } from "react-icons/fa";

import { ProjectContext } from '../contexts/ProjectContext';
import { useContext } from 'react';



const Display: FC = () => {

  const context = useContext(ProjectContext)


  if (context !== null) {
    console.log(context.projects);
  } else {
    console.log("context is null!")
  }

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
              {context?.projects?.map((pro) => (
                <p className="d-g-sd">Project: {pro.name} | x active tasks <FaRegTimesCircle className="d-g-icon" /></p>

              ))}


            </ScrollToBottom>
          </div>

        </div>

        <div className="display-grid-div">
          <p className="d-g-h">Current Tasks</p>
          <div className="d-g-sc">
            <ScrollToBottom className="scroll-area">
              {context?.tasks?.map((pro) => (
                <p className="d-g-sd">Task: {pro.title} |<FaRegTimesCircle className="d-g-icon" /></p>

              ))}
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
