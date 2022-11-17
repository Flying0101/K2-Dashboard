import React, { FC, useState } from 'react';
import ScrollToBottom from 'react-scroll-to-bottom';

import '../css/Display.css';


import { FaRegTimesCircle } from "react-icons/fa";

import { ProjectContext } from '../contexts/ProjectContext';
import { useContext } from 'react';
import { time } from 'console';



const Display: FC = () => {



  const context = useContext(ProjectContext)


  if (context !== null) {
    console.log(context.projects);
  } else {
    console.log("context is null!")
  }

 // time start
  let date = new Date(new Date().setDate(new Date().getDate() - 30));
  let today = new Date();
  console.log(date.getTime());
  console.log(today.getTime());

  const thirtyday:any = []; 

  context?.timelogs?.forEach((d)=>{
    const hej = d.date;
    const dateSplit = hej.split("/")
    const convertTime = new Date(`${dateSplit[1]}/${dateSplit[0]}/${dateSplit[2]}`)
    const numTime = convertTime.getTime(); 
     
    if(numTime > date.getTime()){
      console.log(numTime)
      const Datetostring = new Date(numTime);
      thirtyday.push(Datetostring.toLocaleDateString('en-US'));
    }else{  
      console.log("it didnt work");
    }
  })
  console.log(thirtyday);
 
  
//time end

// thirtyday.push(convertTime);
 


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
              {context?.timelogs?.map((timel) => (
                <p className="d-g-sd">Timelog: {timel.title} | {timel.time} | {timel.date} <FaRegTimesCircle className="d-g-icon" /></p>
              ))}
            </ScrollToBottom>

          </div>

        </div>
      </div>

    </section>
  );
}

export default Display;
