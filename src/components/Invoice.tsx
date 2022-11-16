import React, { FC } from 'react';

import '../css/Invoice.css';



const Invoice: FC = () => {
  return (
    <section className="invoice-section">

      <div className="invoice-grid">

        <div className="i-grid-div" >
          <h3 className="">Create a new Invoice</h3>
          <form className="">
            <h3 className="">INVOICE</h3>
            <br />
            <p className="">Formal name</p>
            <input placeholder="write your name here..." />
            <br />
            <p className="">Choose project:</p>
            <select className="">
              <option className="">----</option>
              <option></option>
              <option></option>
            </select>
            <br />
            <p className="">Apply completed tasks</p>
            <select className="">
              <option className="">----</option>
              <option></option>
              <option></option>
            </select>
            <br />
            <p className="">write your hourly rate </p>
            <input className="" placeholder="example... 1200" />
            <br />
            <p className="">Total work hours</p>
            <input className="" placeholder="example 130" />
            <br />
            <button className="">SEND INVOICE</button>

          </form>
        </div>

        <div className="i-grid-div2" >
          <h3>All invoices</h3>

          <div>
            <p>invoice: Knatte | status: active | 2022-11-16 | totalsum: 93 459 kr</p>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Invoice;
