import React from 'react'
import { useRowSelect, useTable } from 'react-table'
import { Checkbox } from './Checkbox'


export const RowSelection = ({arrData = [], columns= []}) => {
  const table = useTable({
    columns : columns,
    data : arrData
  },
  useRowSelect,
  (hooks)=>{
    hooks.visibleColumns.push((columns)=>{
      return [
        {
          id:'selection',
          Header: ({getToggleAllRowsSelectedProps})=>(
            <Checkbox {...getToggleAllRowsSelectedProps()}/>
          ),
          Cell: ({row}) => (
            <Checkbox {...row.getToggleRowSelectedProps()}/>
          )
        },
        ...columns
      ]
    })
  }
  )

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    selectedFlatRows
  } = table
  return (
    <>
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (

          <tr {...headerGroup.getHeaderGroupProps()}>
            {
              headerGroup.headers.map(column => (
                <th {...column.getHeaderProps()}>
                  {column.render('Header')}
                </th>
              ))
            }
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {
          rows.map(row => {
            prepareRow(row)
            return (
              <tr {...row.getRowProps()}>
                {
                  row.cells.map(cell => {
                    return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                  }) 
                }
                </tr>
            )
          })
        }
      </tbody>
    </table>
    </>
  )
  
}
