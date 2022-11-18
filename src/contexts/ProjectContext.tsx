import React, { FC } from 'react';
import { createContext, useCallback } from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { v4 as uuid } from 'uuid';

import App from '../App';


interface ProjectContextInterface {
  projects: any[]
  tasks: any[]
  timelogs: any[]
  DelTask: any
  DelTimelog: any
  DelProject: any
}

interface ProjectsProps {
  children: React.ReactNode;
}


export const ProjectContext = createContext<ProjectContextInterface | null>(null);

const Projects = ({ children }: ProjectsProps) => {

  // useState for getting projects, tasks and timelogs. 
  const [projects, setProjects] = useState<{ name: string; color: string; id: string; }[]>([]);

  const [tasks, setTasks] = useState<{ title: string; color: string; projid: string; id: string; }[]>([]);

  const [timelogs, setTimelogs] = useState<{ id: string; taskid: string; title: string; date: string; time: string; }[]>([]);


  //get the projects
  function getAllProjects() {

    axios.get("http://localhost:3004/projects")
      .then((res) => {
        setProjects(res.data)
      })
      .catch((error) => console.log(error));

    console.log("req projects successful");

  }


  // get the tasks
  function getAllTasks() {

    axios.get("http://localhost:3004/tasks")
      .then((res) => {
        setTasks(res.data)
      })
      .catch((error) => console.log(error));

    console.log("req-task successful");

  }




  // get the timelogs
  function getAllTimelogs() {

    axios.get("http://localhost:3004/timelogs")
      .then((res) => {
        setTimelogs(res.data)
      })
      .catch((error) => console.log(error));

    console.log("req-timelogs successful");

  }







  // load them into site when starting app.
  useEffect(() => {

    getAllProjects();
    getAllTasks();
    getAllTimelogs();

  }, [])


  //Delete one task from db.json.
  const DelTask = ((id: any) => {
    axios.delete(`http://localhost:3004/tasks/${id}`)
      .then(() => {
        getAllTasks();
        console.log('DELETE one task successful..');
      });

  })


  // delete one timelog.
  const DelTimelog = ((id: string) => {


    axios.delete(`http://localhost:3004/timelogs/${id}`)
      .then(() => {

        console.log('timelog deleted, successful..');
        getAllTimelogs();
      });
    getAllTimelogs();
  })


  // delete project and connected task function.
  const DelProject = ((id: string) => {

    axios.delete(`http://localhost:3004/projects/${id}`)
      .then(() => {

        console.log('DELETE project successful..');

        getAllProjects();
      });


  })






  return (
    <ProjectContext.Provider value={{ projects, tasks, timelogs, DelTask, DelTimelog, DelProject }}>
      {children}
    </ProjectContext.Provider>
  );
}

export default Projects;
