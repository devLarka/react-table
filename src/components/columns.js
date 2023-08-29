export const columns = [
    {
        Header:'Id',
        accessor:'id'
    },
    {   
        Header: 'First Name',
        accessor: 'first_name'
    },
    {   
        Header: 'Last Name',
        accessor: 'last_name'
    },
    {   
        Header: 'Date Of Birth',
        accessor: 'date_of_birth'
    },
    {   
        Header: 'Country',
        accessor: 'country'
    },
    {   
        Header: 'Phone',
        accessor: 'phone'
    },
]

export const formColumns = [
    {   
        Header: 'First Name',
        accessor: 'first_name',
        Cell:({value})=>{ return <><input name='first_name' value={value} onChange={(e)=>{debugger;console.log(e)}}></input></>}
    },
    {   
        Header: 'Last Name',
        accessor: 'last_name',
        Cell:({value})=>{ return <><input name='last_name' value={value} onChange={(e)=>{debugger;console.log(e)}}></input></>}
    },
    {   
        Header: 'Date Of Birth',
        accessor: 'date_of_birth',
        Cell:({value})=>{ return <><input name='date_of_birth' value={value} onChange={(e)=>{debugger;console.log(e)}}></input></>}
    },
    {   
        Header: 'Country',
        accessor: 'country',
        Cell:({value})=>{ return <><input name='country' value={value} onChange={(e)=>{debugger;console.log(e)}}></input></>}
    },
    {   
        Header: 'Phone',
        accessor: 'phone',
        Cell:({value, row:{index},column:{id},updateMyData})=>{ return <><input name='phone' value={value} onChange={(e)=>{updateMyData(index,id,e.target.value)}}></input></>}
    },
]

// const inputCell = ({
//     value,
//     row: { index },
//     column: { id },
//     updateMyData, // This is a custom function that we supplied to our table instance
//   }) => {
//     const onChange = e => {
//       updateMyData(index, id, !value)
//     }
  
//     return <input name checked={value} onChange={onChange} />
//   }