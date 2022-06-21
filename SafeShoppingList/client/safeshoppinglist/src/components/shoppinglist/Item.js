import React, { useState, useContext, useEffect } from "react";
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal';
import ListGroup from 'react-bootstrap/ListGroup';

export const Item = ({itemProp}) => {
//for the added message

const [show, setShow] = useState(false);

const handleClose = () => setShow(false);
const handleShow = () => setShow(true);

    return (
        <div className="itemCard">
            
 
            <ListGroup.Item >Item Name: {itemProp.name},  Brand: {itemProp.brand}, Company: {itemProp.company}</ListGroup.Item>
            
          


  {/* this is for the added 
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Body>Added to the Shopping List</Modal.Body>
        </Modal.Header>
        
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
         
        </Modal.Footer>
      </Modal> */}
        </div>    
    )
}