import React, { useState } from "react";

export const RecallContext = React.createContext ();

export const RecallProvider = (props) => {

    const apiUrl = "https://localhost:5001";
    const [recalls, setRecalls] = useState([]);
  

    const searchRecall = (qBN, qPD, qC) => {
        
        //return fetch(`${apiUrl}/api/Recall/search?BrandName=${qBN}&PDescription=${qPD}Company=${qC}`)
         return fetch(`https://localhost:44310/api/Recall/search?BrandName=Quick&PDescription=Apple&Company=Safeway`)
    //    .then((res) => res.json())
    //  .then(setRecalls);
     //fetch(`https://localhost:44310/api/Recall/search?BrandName=Quick&PDescription=Apple&Company=Safeway`)
     .then((res) => res.json())
     .then(setRecalls);
    }
 

    // const getAllRecalls = () => {
    //     return fetch(`${apiUrl}/api/Recall`)
    //     .then((res) => res.json())
    //     .then(setRecalls);
    // };

    // const getRecallById = (id) => {
    //     return fetch(`${apiUrl}/api/Recall/GetRecallById/${id}`)
    //     .then((res) => res.json())
    // };

    return (
          <RecallContext.Provider value={{recalls, setRecalls, searchRecall }}>
            {props.children}
          </RecallContext.Provider>
    );
};