import React, { FC, useState } from 'react';
import ScrollToBottom from 'react-scroll-to-bottom';

import '../css/Display.css';


import { FaRegTimesCircle } from "react-icons/fa";

import { ProjectContext } from '../contexts/ProjectContext';
import { useContext } from 'react';

import { TaskProjectInterface } from '../interfaces/interface';


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

  interface TimelogType {
    color: string
    date: string
    id: string
    taskid: string
    time: string
    title: string
  }
  const thirtyday: TimelogType[] = [];

  context?.timelogs?.forEach((d) => {
    const hej = d.date;
    const dateSplit = hej.split("/")
    const convertTime = new Date(`${dateSplit[1]}/${dateSplit[0]}/${dateSplit[2]}`)
    const numTime = convertTime.getTime();


    if (numTime > date.getTime()) {
      console.log(numTime)
      thirtyday.push(d);
    } else {
      console.log("it didnt work");
    }
  })
  console.log(thirtyday);

  //time end

  // total revenue
  let oneYearPrior = new Date(new Date().setDate(new Date().getDate() - 365));
  const totalRevenueList: number[] = [];
  context?.invoices?.forEach((invoice) => {

    const dateSplit = invoice.created_date.split("T")
    const turnDate = dateSplit[0];
    const newFormat = turnDate.split("-");
    const finalFormat = new Date(`${newFormat[1]}/${newFormat[2]}/${newFormat[0]}`)
    const finalToNum = finalFormat.getTime();

    if (finalToNum > oneYearPrior.getTime()) {
      console.log(finalToNum)
      totalRevenueList.push(invoice.amount);
    } else {
      console.log("it didnt work");
    }
  })

  // total amount of invoice cash amount within one year time from todays date.
  const currRevenue = totalRevenueList.reduce((a, b) => a + b, 0);
  //end of revenue logic


  // get all task from spec project logic
  let tasksProjects: TaskProjectInterface[] = [];

  context?.projects.forEach((project) => {

    const protaskens = context?.tasks.filter((t) => t.projid === project.id);

    const getAll = protaskens;
    getAll.forEach((er) => {
      tasksProjects.push(er)
    })
    tasksProjects.push(project)

  })
  console.log(tasksProjects);
  ////
  const grpPro: any = [];

  context?.projects.forEach((project) => {

    const protaskens = tasksProjects.filter((t: any) => t.color === project.color);
    grpPro.push(protaskens);
  })
  console.log(grpPro);

  // end of all task from project logic



  // delete one specific task.
  const DeleteOneTask = (id: string) => {
    context?.DelTask(id);
  }

 
  //delete on timelog
  const DeleteOneTimelog = (id: string) => {
    context?.DelTimelog(id);
  }

  const DeleteOneProject = (id: string) => {
    context?.DelProject(id);

  }

  return (
    <section className="display-section">

      <div className="revenue-display">
        <p className="revenue-h"><span className="h-green">TOTAL REVENUE:</span>  {currRevenue.toFixed(2)} kr / year to date</p>
      </div>

      <div className="display-grid">

        <div className="display-grid-div">
          <p className="d-g-h">Current Projects</p>
          <div className="d-g-sc">
            <ScrollToBottom className="scroll-area">
              {grpPro.map((pro: any) => (
                <p className="d-g-sd">Project: {pro[pro.length - 1].name} | {pro.length - 1} active tasks <FaRegTimesCircle className="d-g-icon" onClick={() => DeleteOneProject(pro[pro.length - 1].id)} /></p>

              ))}


            </ScrollToBottom>
          </div>

        </div>

        <div className="display-grid-div">
          <p className="d-g-h">Current Tasks</p>
          <div className="d-g-sc">
            <ScrollToBottom className="scroll-area">
              {context?.tasks?.map((task) => (


                <p className="d-g-sd">Task: {task.title} |<FaRegTimesCircle className="d-g-icon" onClick={() => DeleteOneTask(task.id)} /></p>

              ))}
            </ScrollToBottom>

          </div>

        </div>

        <div className="display-grid-div">
          <p className="d-g-h">Timelogs last 30days</p>
          <div className="d-g-sc">
            <ScrollToBottom className="scroll-area">
              {thirtyday.map((timel: any) => (
                <p className="d-g-sd">Timelog: {timel.title} | {timel.time} | {timel.date} <FaRegTimesCircle className="d-g-icon" onClick={() => DeleteOneTimelog(timel.id)} /></p>
              ))}
            </ScrollToBottom>

          </div>

        </div>
        <div className="display-grid-div">
          <p className="d-g-h">All timelogs</p>
          <div className="d-g-sc">
            <ScrollToBottom className="scroll-area">
              {context?.timelogs?.map((timel: any) => (
                <p className="d-g-sd">Timelog: {timel.title} | {timel.time} | {timel.date} <FaRegTimesCircle className="d-g-icon" onClick={() => DeleteOneTimelog(timel.id)} /></p>
              ))}
            </ScrollToBottom>

          </div>

        </div>
      </div>

    </section>
  );
}

export default Display;
