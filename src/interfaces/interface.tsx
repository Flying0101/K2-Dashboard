import React, { FC, useState, useEffect } from 'react';

export interface ProjectsInterface {
    name: string,
    color: string,
    id: string,
    projid: string,
    title: string
}

export interface TasksInterface {
    title: string,
    color: string,
    projid: string,
    id: string,
    name: string
}


export interface TimelogsInterface {
    id: string,
    taskid: string,
    title: string,
    color: string,
    date: string,
    time: string
}


export interface AddnewInvoiceInterface {
    firstName: string,
    invoiceProject: string,
    total: number,
    createdDate: string,
    dueDate: string
}


export interface InvoicesInterface {
    id: string,
    customer_name: string,
    project: string,
    status: string,
    amount: number,
    created_date: string,
    due_date: string
}

export interface TaskProjectInterface {
    color: string,
    id: string,
    projid: string,
    title: string,
    name: string

}



export interface grpProInterface {
    color: string,
    date: string,
    id: string,
    taskid: string,
    time: string,
    title: string

}


