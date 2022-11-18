import React, { FC, useState } from 'react';

import '../css/Invoice.css';

import { ProjectContext } from '../contexts/ProjectContext';
import { useContext } from 'react';
import { stringify } from 'querystring';

import ScrollToBottom from 'react-scroll-to-bottom';

const Invoice: FC = () => {
 

  const context = useContext(ProjectContext)

  const [firstName, setFirstName] = useState<string>('');

  const [invoiceProject, setInvoiceProject] = useState<string>();

  const [hourlyRate, setHourlyRate] = useState<string>();

  const [workHours, setWorkHours] = useState<string>();


  // "invoices": [
  //   { "id": "<random id>", 22222222222222222222222222222222222222222
  //  "status": "ej betald",  22222222222222222222222222222222222
  //   "due_date": "2022-12-15T10:49:33.081Z", 1111111111111111111111111111111
  //   "amount": 9001,  1111111111111111111111111111111111111111111111111111111111111
  //   "project": "<project id>", 1111111111111111111111111111111111
  //    "customer_name": "Ryan", 11111111111111111111111111111111
  //    "created_date": "2022-11-16T10:49:33.081Z" } 11111111111111111111111111111111111111111
  //  ]

  const createNewInvoice = (e: any) => {
    e.preventDefault();
    console.log(firstName);
    console.log(invoiceProject);
    console.log(workHours);
    console.log(hourlyRate);

    // create time and due time.
    const createdDate = new Date().toISOString();
    let dueDate = new Date(new Date().setDate(new Date().getDate() + 30)).toISOString();
    console.log(createdDate);
    console.log(dueDate);

    //only seconds
    const secondsSplit = workHours?.split(":")
    const onlySeconds = secondsSplit?.[0];
    console.log(onlySeconds);

    const toIntSec: number = Number(onlySeconds);
    console.log(toIntSec);

    const lol = toIntSec / 60;
    const mt = lol / 60;
    const total = mt * Number(hourlyRate);
    console.log(total + " " + "kr");

    // customer_name
    // project 
    // amount
    // created time 
    // due time
    context?.AddNewInvoice(firstName, invoiceProject, total, createdDate, dueDate);


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
              <option className="i-sel-options">----</option>
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
