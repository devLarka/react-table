import React, {  useState,useEffect, useMemo } from 'react';
import MOCK_DATA from './MOCK_DATA.json';
import {BasicTable} from './BasicTable';
import {columns as Cols} from './columns';
import { RowSelection } from './RowSelection';
export const UseTable = () => {
    const [data, setData] = useState([]);
    const columns = useMemo(()=>Cols,[]);
    useEffect(()=>{
        debugger;
        setData(MOCK_DATA);
    }
    ,[])

  return (
    <div>
        <button onClick={(e)=>{e.preventDefault(); setData([{"id":501,"first_name":"Loren","last_name":"Andriessen","email":"landriessendv@bing.com","date_of_birth":"2010-08-19T22:45:42Z","age":31,"country":"Peru","phone":"7701451235"},...data])}}>Add</button>
        <RowSelection arrData={data} columns={columns}></RowSelection>
    </div>
  )
}
