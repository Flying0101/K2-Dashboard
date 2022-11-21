import React, { FC, useState, useEffect } from 'react';

import '../css/Invoice.css';

import { ProjectContext } from '../contexts/ProjectContext';
import { useContext } from 'react';

import ScrollToBottom from 'react-scroll-to-bottom';

const Invoice: FC = () => {



  const context = useContext(ProjectContext);

  const [firstName, setFirstName] = useState<string>('');

  const [invoiceProject, setInvoiceProject] = useState<string>();

  const [hourlyRate, setHourlyRate] = useState<string>();

  const [workHours, setWorkHours] = useState<string>();

  const [selectedTasks, setSelectedTasks] = useState<string[]>([]);


  const createNewInvoice = (e: any) => {
    e.preventDefault();
    console.log(firstName);
    console.log(invoiceProject);
    console.log(hourlyRate);

    // create time and due time.
    const createdDate = new Date().toISOString();
    let dueDate = new Date(new Date().setDate(new Date().getDate() + 30)).toISOString();
    console.log(createdDate);
    console.log(dueDate);

    //only seconds // use reduce to get total sum of selected task time array.
    //const secondsSplit = workHours?.split(":")
    //const onlySeconds = secondsSplit?.[0];
    //console.log(onlySeconds);

    //  const toIntSec: number = Number(onlySeconds);
    //    console.log(toIntSec);
    // 
    const toIntSec = toIntTaskTime.reduce((a, b) => a + b, 0);

    const lol = toIntSec / 60;
    const mt = lol / 60;
    const total = mt * Number(hourlyRate);
    console.log(total + " " + "kr");

    // customer_name
    // project 
    // amount
    // created time 
    // due time
    context?.AddNewInvoice(firstName, invoiceProject as string, total, createdDate, dueDate);

    toIntTaskTime.splice(0);
    setSelectedTasks([]);
  }


  const handleFirstName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFirstName(event.target.value);
  }



  const handleWorkHours = (event: React.ChangeEvent<HTMLSelectElement>) => {


    setWorkHours(event.target.value);


  }


  const handleHourlyRate = (event: React.ChangeEvent<HTMLInputElement>) => {
    setHourlyRate(event.target.value);
  }

  const handleInvoiceProject = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setInvoiceProject(event.target.value);
  }




  // create selected task time array to number.
  let toIntTaskTime = selectedTasks.map(i => Number(i));

  const createSelectTaskList = (e: any) => {
    e.preventDefault();

    const taskFromSelect = workHours;
    const taskTimeSplit = taskFromSelect?.split(":");
    const onlyTaskTime = taskTimeSplit?.[0];

    if (onlyTaskTime !== undefined) {
      setSelectedTasks((e) => [...e, onlyTaskTime]);
    }

    alert(`One task added!`);
    console.log(toIntTaskTime);

  }

  // use this to check array values when change.
  useEffect(() => {

    console.log(selectedTasks);
    console.log(toIntTaskTime);
  }, [selectedTasks])


  // end of selected task time logic


  return (

    <section className="invoice-section">

      <div className="invoice-grid">

        <div className="i-grid-div" >
          <h3 className="i-grid-header">Create a new Invoice</h3>
          <form className="i-form">
            <h3 className="i-f-header">INVOICE</h3>
            <br />
            <p className="i-form-question">Formal name</p>
            <input className="i-question-input" placeholder="write your name here..." onChange={handleFirstName} />
            <br />
            <p className="i-form-question">Choose project:</p>
            <select className="i-selects" onChange={handleInvoiceProject}>
              <option className="i-sel-options" id="selectedTask">----</option>
              {context?.projects?.map((data) => (
                <option className="i-sel-options" value={data.id}>{data.name}</option>
              ))}
            </select>
            <br />
            <p className="i-form-question">Apply completed tasks</p>




            <select className="i-selects" onChange={handleWorkHours}>
              <option className="i-sel-options">----</option>
              {context?.timelogs?.map((data) => (
                <option className="i-sel-options" value={data.time}>{data.title} | {data.time}</option>
              ))}
            </select>
            <button className="select-task-btn" onClick={(e) => createSelectTaskList(e)}>ADD TASK</button>





            <br />
            <br />
            <p className="i-form-question">Hourly Rate</p>
            <input className="i-question-input" placeholder="example 130" onChange={handleHourlyRate} />
            <br />
            <button className="i-f-btn" onClick={(e) => createNewInvoice(e)}>SEND INVOICE</button>

          </form>
        </div>

        <div className="i-grid-div2" >
          <h3 className="all-i-h">All invoices</h3>

          <div className="all-i-con">
            <ScrollToBottom className="scroll-invoices">
              {context?.invoices?.map((data) => (
                <p className="all-invoices">invoice: {data.customer_name} | status: {data.status} | due: {data.due_date} | totalsum: {data.amount} kr</p>
              ))}
            </ScrollToBottom>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Invoice;
