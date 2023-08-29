import React from 'react'
import { useTable } from 'react-table'


export const BasicTableForm = ({arrData = [], columns= [], updateMyData}) => {
  const table = useTable({
    columns : columns,
    data : arrData,
    updateMyData
  })

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
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
