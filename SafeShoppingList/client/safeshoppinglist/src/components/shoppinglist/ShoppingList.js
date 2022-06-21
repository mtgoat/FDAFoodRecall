import React, {useState, useContext, useEffect } from "react";
import { RecallContext } from "../../providers/RecallProvider";
//import { Item } from "./Item.js";
import Row from 'react-bootstrap/Row'; 
import './ShoppingList.css';
import ListGroup from 'react-bootstrap/ListGroup';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';

export default function  ShoppingList  () {
  
//shopping list
    const [items, setItems ] = useState ([
    {itemId: 1, name:"Apple", brand: "Quick", company:"Safeway", hidden: true },
    {itemId: 2, name:"banana", brand: "Doll", company:"Bananas", hidden: true},
    {itemId: 3, name:"cantaloupe", brand: "Scott's Farm", company:"Scott's Farm", hidden: true},
    ]);

    const [inputValueName, setInputValueName] = useState('');
    const [inputValueBrand, setInputValueBrand] = useState('');
    const [inputValueCompany, setInputValueCompany] = useState('');
    const [inputValueHidden, setInputValueHidden] = useState(true) 

    const handleAddButtonClick = (event) => {
        const newItem = {
			itemId: items.length + 1,
			name:inputValueName,
			brand:inputValueBrand,
            company:inputValueCompany,
            hidden: true
		};
        
        const newItems = [...items, newItem];

		setItems(newItems);
		setInputValueName('');
        setInputValueBrand('');
        setInputValueCompany('');
    }

  //this is for search
  var texts = [];
const {searchRecall, recalls} = useContext(RecallContext)
const [q, setQ] = useState("");
//const [searchParam] = useState(["capital", "name"]);
const [results, setResults] = useState([]);



        const handleCheckedButtonClick = (e) => {


          let urls =[ ]
         for( let i=0; i<items.length; i++){
           let url = `https://localhost:44310/api/Recall/search?BrandName=${items[i].brand}&PDescription=${items[i].name}&Company=${items[i].company}`
           
            urls.push(url)
          }

          var promises = urls.map(url => fetch(url));
          
          
          Promise.all(promises)
          .then(results => {
          results.forEach(result => result.text().then(t => texts.push(t)))
  })


          console.log("response", texts)

        
// console.log(searchedItem)

// setQ(searchedItem)

          }
            

    return (
        <>
        <h4 className="productList">Shopping List</h4>
            <div className="products">

           
 <ListGroup key='md'  className="bigContainer">
        {items.map((itemProp) => (
            
            <ListGroup.Item >Item Name: {itemProp.name},  Brand: {itemProp.brand}, Company: {itemProp.company}{' '}<img src="skull.jpg" hidden={itemProp.hidden} alt="skull" width="30" height="30"></img>
           </ListGroup.Item>
       ))} 
       <div className="searchButton">
           
            <Button onClick={(e) => handleCheckedButtonClick(e)} > Check</Button>
            </div>
        </ListGroup>
          
      
        </div>
        
        <div className="addForm">
            <h5>Add an Item</h5>
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextName">
        <Form.Label column sm="2">
          Name
        </Form.Label>
        <Col sm="10">
          <Form.Control  type="Name" placeholder="Name" value={inputValueName} onChange={(event) => setInputValueName(event.target.value)} />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formPlaintextBrand">
        <Form.Label column sm="2">
          Brand
        </Form.Label>
        <Col sm="10">
          <Form.Control type="Brand" placeholder="Brand" value={inputValueBrand} onChange={(event) => setInputValueBrand(event.target.value)} />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formPlaintextCompany">
        <Form.Label column sm="2">
          Company
        </Form.Label>
        <Col sm="10">
          <Form.Control type="Company" placeholder="Company" value={inputValueCompany} onChange={(event) => setInputValueCompany(event.target.value)} />
        </Col>
      </Form.Group>
      <Button onClick={() => handleAddButtonClick()}> Add this</Button>
     
      {texts.map((itemProp) => ( <p>itemProp </p>))}
        </div>
        </>
    );
};

 