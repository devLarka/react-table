import React, {  useState,useEffect } from 'react'
import MOCK_DATA from './MOCK_DATA.json'
import { BasicTable } from './BasicTable';

export const UseTable = () => {
    const [data, setData] = useState([]);
    useEffect(()=>{
        debugger;
        setData(MOCK_DATA);
    }
    ,[])

  return (
    <div>
        <button onClick={(e)=>{e.preventDefault(); setData([{"id":501,"first_name":"Loren","last_name":"Andriessen","email":"landriessendv@bing.com","date_of_birth":"2010-08-19T22:45:42Z","age":31,"country":"Peru","phone":"7701451235"},...data])}}>Add</button>
        <BasicTable arrData={data}></BasicTable>
    </div>
  )
}
