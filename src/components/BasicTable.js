import React, { useMemo } from 'react'
import { useTable } from 'react-table'
import { columns as COLUMNS } from './columns'


export const BasicTable = ({arrData = []}) => {
  const columns = useMemo(() => COLUMNS, [])
  const data = useMemo(() => arrData, [])
  const table = useTable({
    columns,
    data : arrData
  })

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow
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
