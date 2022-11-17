import React, { FC } from 'react';

import '../css/Invoice.css';



const Invoice: FC = () => {
  return (
    <section className="invoice-section">

      <div className="invoice-grid">

        <div className="i-grid-div" >
          <h3 className="i-grid-header">Create a new Invoice</h3>
          <form className="i-form">
            <h3 className="i-f-header">INVOICE</h3>
            <br />
            <p className="i-form-question">Formal name</p>
            <input className="i-question-input" placeholder="write your name here..." />
            <br />
            <p className="i-form-question">Choose project:</p>
            <select className="i-selects">
              <option className="i-sel-options">----</option>
              <option className="i-sel-options">1</option>
              <option className="i-sel-options">2</option>
            </select>
            <br />
            <p className="i-form-question">Apply completed tasks</p>
            <select className="i-selects">
              <option className="i-sel-options">----</option>
              <option className="i-sel-options">1</option>
              <option className="i-sel-options">2</option>
            </select>
            <br />
            <p className="i-form-question">write your hourly rate </p>
            <input className="i-question-input" placeholder="example... 1200" />
            <br />
            <p className="i-form-question">Total work hours</p>
            <input className="i-question-input" placeholder="example 130" />
            <br />
            <button className="i-f-btn">SEND INVOICE</button>

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
