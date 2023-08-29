import React, {  useState,useEffect, useMemo } from 'react'
import MOCK_DATA from './MOCK_DATA.json'
import {formColumns} from './columns'
import { BasicTableForm } from './BasicTableForm';

export const UseTableForm = () => {
    const [data, setData] = useState([]);
    const columns = useMemo(()=>formColumns,[])
    useEffect(()=>{
        debugger;
        setData(MOCK_DATA);
    }
    ,[])

    const updateMyData = (rowIndex, columnId, value) => {
      // We also turn on the flag to not reset the page
      setData(old =>
        old.map((row, index) => {
          if (index === rowIndex) {
            return {
              ...old[rowIndex],
              [columnId]: value,
            }
          }
          return row
        })
      )
    }

  return (
    <div>
        <button onClick={(e)=>{e.preventDefault(); setData([{"id":0,"first_name":"","last_name":"","email":"","date_of_birth":"","age":0,"country":"","phone":""},...data])}}>Add</button>
        <BasicTableForm arrData={data} columns={columns} updateMyData={updateMyData}/>
    </div>
  )
}
