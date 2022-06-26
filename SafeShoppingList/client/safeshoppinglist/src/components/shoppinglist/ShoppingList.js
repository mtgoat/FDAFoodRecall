import React, {useState,useContext, useEffect } from "react";
import { RecallContext } from "../../providers/RecallProvider";
//import { Item } from "./Item.js";
//import { ResultCard } from "./Item";
import Row from 'react-bootstrap/Row'; 
import './ShoppingList.css';
import ListGroup from 'react-bootstrap/ListGroup';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

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
  
const {searchRecall, recalls} = useContext(RecallContext)

let texts = [];

// useEffect(() => {
//   getAllPostsByHeritageId(1)
//   .then(setAllHeritagePosts);
// }, []);




        const handleCheckedButtonClick = (e) => {


          let urls =[ ]
         for( let i=0; i<items.length; i++){
           let url = `https://localhost:44310/api/Recall/search?BrandName=${items[i].brand}&PDescription=${items[i].name}&Company=${items[i].company}`
           
            urls.push(url)
          }

          var promises = urls.map(url => fetch(url));
          
          //promise all - multiple promise and then get all results and then get to the .then part
          Promise.all(urls.map(u=>fetch(u))).then(responses =>
            Promise.all(responses.map(res => res.json()))
        ).then(texts => {
          debugger
            console.log(texts)
        
          // debugger
          // let definedResultArray =[]
          // for(let i=0; i < urls.length; i++){
          //   if(texts[i]?.length !== 0){
          //     definedResultArray.push(texts[i])
          //   }
          // }
          // debugger
          // let check = definedResultArray
          // let checkone =definedResultArray[0]
          //   debugger
          // console.log("this is arry with the result", definedResultArray[0])
          //           //intersection()  
             

          })
         
     
        
// Set Operations: intersection to get appropriate search result in the list?
function intersection(setA, setB){
  let newIntersection = new Set();
  for (let elem of setB){
    if(setA.has(elem)){
      newIntersection.add(elem)
    }
  }
  return newIntersection
}

          }
            

    return (
        <>
        <h4 className="productList">Shopping List</h4>
            <div className="products">

           
 <ListGroup key='md'  className="bigContainer">
        {items.map((itemProp) => (
            
            <ListGroup.Item key={itemProp.id} >Item Name: {itemProp.name},  Brand: {itemProp.brand}, Company: {itemProp.company}{' '}<img src="skull.jpg" hidden={itemProp.hidden} alt="skull" width="30" height="30"></img>
           </ListGroup.Item>
       ))}

       {/* this is to test how to access the texts 
       {dangers.map((one) => (
  <ResultCard key={one.id}  result={one} />
))}  */}

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
     
      {/* {texts.map((itemProp) => ( <p>itemProp </p>))} */}
        </div>
        </>
    );
};

 