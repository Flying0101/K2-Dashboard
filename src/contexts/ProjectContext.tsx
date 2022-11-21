import React, { FC } from 'react';
import { createContext, useCallback } from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { v4 as uuid } from 'uuid';


import { InvoicesInterface, TimelogsInterface, TasksInterface, ProjectsInterface } from '../interfaces/interface';


interface ProjectContextInterface {
  projects: ProjectsInterface[]
  tasks: TasksInterface[]
  timelogs: TimelogsInterface[]
  DelTask: (id: string) => void
  DelTimelog: (id: string) => void
  DelProject: (id: string) => void
  AddNewInvoice: (firstName: string, invoiceProject: string, total: number, createdDate: string, dueDate: string) => void
  invoices: InvoicesInterface[]
}



interface ProjectsProps {
  children: React.ReactNode;
}


export const ProjectContext = createContext<ProjectContextInterface | null>(null);

const Projects = ({ children }: ProjectsProps) => {

  // useState for getting projects, tasks and timelogs. 

  const [projects, setProjects] = useState<ProjectsInterface[]>([]);

  const [tasks, setTasks] = useState<TasksInterface[]>([]);

  const [timelogs, setTimelogs] = useState<TimelogsInterface[]>([]);

  const [invoices, setInvoices] = useState<InvoicesInterface[]>([]);


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




  // get the invoices
  function getAllInvoices() {

    axios.get("http://localhost:3004/invoices")
      .then((res) => {
        setInvoices(res.data)
      })
      .catch((error) => console.log(error));

    console.log("req-timelogs successful");

  }








  // load them into site when starting app.
  useEffect(() => {

    getAllProjects();
    getAllTasks();
    getAllTimelogs();
    getAllInvoices();
  }, [])


  //Delete one task from db.json.
  const DelTask = ((id: string) => {
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

  //////////////// ADD INVOICE FUNC 

  // add one timelog.
  const AddNewInvoice = ((firstName: string, invoiceProject: string, total: number, createdDate: string, dueDate: string) => {

    const unique_id = uuid();
    const id = unique_id.slice(0, 8)

    axios.post("http://localhost:3004/invoices", {
      id: id,
      customer_name: firstName,
      project: invoiceProject,
      status: 'Ej betald',
      amount: total,
      created_date: createdDate,
      due_date: dueDate
    })
      .then(() => {
        console.log('Invoice created successful..');
        getAllInvoices();
      });

  })




  return (
    <ProjectContext.Provider value={{ projects, tasks, timelogs, DelTask, DelTimelog, DelProject, AddNewInvoice, invoices }}>
      {children}
    </ProjectContext.Provider>
  );
}

export default Projects;
