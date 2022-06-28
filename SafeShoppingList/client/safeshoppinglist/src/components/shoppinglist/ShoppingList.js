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
import { Link } from "react-router-dom";

export default function  ShoppingList  () {
  
//shopping list
    const [items, setItems ] = useState ([
    {itemId: 1, name:"Apple", brand: "Quick", company:"Safeway", hidden: true},
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
  
  const {details, setDetails } = useContext(RecallContext);
const [recalls, setRecalls] = useState([]);

let texts = [];
let recalled = [];

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
          Promise.all(promises)
          .then(responses =>{
           return Promise.all(responses.map
            (res => res.json()))
            })
            .then(data => {
              data.forEach((oneArray) => {
                if(oneArray.length !== 0){
                  return recalled.push(oneArray)
                }
              }) 
              
          // debugger
          //   console.log("this is a data", data)
          //   console.log("this is recalled", recalled)
          //   console.log("this is recalled.[0]", recalled[0])
          //    console.log("this is  recalled[0][0].brand", recalled[0][0].brand)
            
            // setRecalls(recalled[0])
            // debugger
            // console.log("this is recalls", recalls)
            // console.log("this is recalls.[0]", recalls[0])
            //  console.log("this is recalled.[0][0].brand", recalls[0].brand)
            //  debugger
            // find the index in the items that matches the search result that is right now single array to build a simple logic first 
            
            let matchedItems = []
            let indexArray = []
            let matchedRecalls = []
            //for loop for recalls? 
            debugger
            console.log(recalled[0][0].productDescription.toLowerCase())
            console.log(items[0].name.toLowerCase()) 
              
            for(let i = 0; i < items.length; i++){
              if(recalled[0][0].brand.toLowerCase().includes (items[i].brand.toLowerCase()) && recalled[0][0].company.toLowerCase().includes (items[i].company.toLowerCase()) && recalled[0][0].productDescription.toLowerCase().includes ( items[i].name.toLowerCase())
             ){

                matchedItems.push(items[i])
                indexArray.push(i)
                debugger
  
                //call function to show the skull image using an index
                indexArray.forEach(index => SkullOn(index) )
              
              // get right result for the details
              debugger
              console.log(recalled)
              for(let i = 0; i < recalled.length; i++){
                
               setDetails(recalled[i])}

              } else {
                console.log("no go")
              }
            }

          })
        

          function SkullOn  (index) {
            let skullItems =[...items];
            
            skullItems[index].hidden = false
                    
            setItems(skullItems)
            // //find a match
               
          }

          }
            

    return (
        <>
        <h4 className="productList">Shopping List</h4>
            <div className="products">

           
 <ListGroup key='md'  className="bigContainer">
        {items.map((itemProp, index) => (
            
            <ListGroup.Item key={itemProp.id} >Item Name: {itemProp.name},  Brand: {itemProp.brand}, Company: {itemProp.company}{' '}<img src="skull.jpg" hidden={itemProp.hidden} alt="skull" width="30" height="30"></img>{' '}<Link to={`/items/${itemProp.itemId}`} hidden={itemProp.hidden} >
            <strong hidden={itemProp.hidden}>Details</strong>
            </Link>
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
     
        </div>
        </>
    );
};

 