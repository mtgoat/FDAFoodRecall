import React, {useState,useContext, useEffect } from "react";
import { useNavigate, useParams } from 'react-router-dom';
import './ShoppingList.css';
import { RecallContext } from "../../providers/RecallProvider";
import ListGroup from 'react-bootstrap/ListGroup';

export const Detail = () => {
    const { itemId } = useParams();
 const {details, setDetails } = useContext(RecallContext);
    console.log(itemId)
    return (
        <>
        <h4 className="productList">Recall Information Details</h4>
        <ListGroup key='md'  className="bigContainer">
 {details.map(itemProp => (
    <>
     <ListGroup.Item  >Item Name: {itemProp.productDescription},  Brand: {itemProp.brand}, Company: {itemProp.company}, Recall Reason {itemProp.reason} 

    </ListGroup.Item>
    <ListGroup.Item>
    <a href={itemProp.url} target="_blank" rel="noreferrer"> More Information</a>
    </ListGroup.Item>
    </>

        ))}   
         </ListGroup>
        </>

    )
}

