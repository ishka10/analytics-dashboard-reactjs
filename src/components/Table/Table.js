
import { useTable } from "react-table";
import MOCK_DATA from './MOCK_DATA.json';
import {COLUMNS} from './columns'
import { useMemo } from "react";
import './Table.css'
const Table = () => {

    /*const columns = useMemo(()=>COLUMNS, [])
    const data = useMemo(()=>MOCK_DATA, [])

    const tableInstance = useTable({
        columns,
        data
    })

    const{getTableProps, 
        getTableBodyProps, 
        headerGroups, 
        rows, 
        prepareRow} = tableInstance
    return ( 
    <table {...getTableProps()}>
        <thead>
            {headerGroups.map((headerGroup)=>(
                <tr {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map((column)=>(
                    <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                    ))}
             </tr>
            ))}                
        </thead>
        <tbody {...getTableBodyProps()}>
            {rows.map(row=>{
               prepareRow(row)
               return(
                <tr {...row.getRowProps()}>
                    {
                        row.cells.map(cell => {
                            return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                        })
                    }
               </tr>
               )
            })}          
        </tbody>
    </table> 
    ); */
  const columns = useMemo(() => COLUMNS, [])
  const data = useMemo(() => MOCK_DATA, [])

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    footerGroups,
    rows,
    prepareRow
  } = useTable({
    columns,
    data
  })

  return (
    <div className='card-table'>
      <h3>Recently admitted patients </h3>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map(row => {
            prepareRow(row)
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                })}
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
 
export default Table;