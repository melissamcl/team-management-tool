import React, { Component } from "react";
import { useState, useEffect } from "react";

// Modal for the columns
const ColumnModal = ({ showColumnModal, setShowColumnModal }) => {
 
  const saveData = () => {
    // post users data to database
    console.log('save data button is running')
    setShowColumnModal(!showColumnModal)
  }

  const deleteData = () => {
    setShowColumnModal(!showColumnModal)
  }

  return (
    <div className="modal-home">
      {console.log('modal was opened')}
      <div>
        <form>
          <input 
            className="modal-input"
            type="text"
            required
            placeholders="column name"
            // do we want an onChange here or wait until the input is finished
          />
        </form>
        <button className="modal-text-button"
          onClick={() => saveData()}>
            SAVE
        </button>
        <button className="modal-text-button"
          onClick={() => deleteData()}>
            DELETE
        </button>
      </div>
    </div>
  )
}

// Modal for the card
const CardModal = ({  showCardModal,setShowCardModal }) => {

  const addTask = () => {
    // post users data to database
    setShowCardModal(!showCardModal)
  }

  const deleteTask = () => {
    setShowCardModal(!showCardModal)
  }

  return (
    <div className="modal-home">
      <div>
        <form>
          <input 
            className="modal-input"
            type="text"
            required
            placeholders="add a task"
            // do we want an onChange here or wait until the input is finished
          />
        </form>
        <button className="modal-text-button"
          onClick={() => addTask}>
           +
        </button>
        <button className="modal-text-button"
          onClick={() => deleteTask}>
            X
        </button>
      </div>
    </div>
  )
}

export { ColumnModal, CardModal }