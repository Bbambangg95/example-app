import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { useTable } from 'react-table'
import { useParams } from 'react-router-dom';
 

 export default function EditNilai() {

  const EditableCell = ({
    value: initialValue,
    row: { index },
    column: { id },
    updateMyData,
  }) => {
    const [value, setValue] = useState(initialValue);

    const onChange = (e) => {
      setValue(e.target.value);
    }

    const onBlur = () => {
      updateMyData(index, id, value);
    }

    React.useEffect(() => {
      setValue(initialValue);
    }, [initialValue]);

    return <input value={value} onChange={onChange} onBlur={onBlur} />;
  }

  const defaultColumn = {
    Cell: EditableCell,
  }

  

  //baris data
  let { nisn } = useParams();
  const [nilai, setNilai] = useState([])
    useEffect(() => {

      axios.get(`/sem1s/${nisn}`)
        .then(res => {
          setNilai(res.data.nilai)     
        }
        )
    }, [])

    const nilai_akhir = [...nilai]
    const data = React.useMemo(() => [...nilai_akhir], [nilai_akhir])
    const [originalData] = React.useState(data)
    const [skipPageReset, setSkipPageReset] = React.useState(false)

    const updateMyData = (rowIndex, columnId, value) => {
      setSkipPageReset(true)
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

  React.useEffect(() => {
    setSkipPageReset(false)
  }, [data])
    
  const resetData = () => setData(originalData)
 
   const columns = React.useMemo(
     () => [
       {
         Header: 'No',
         key: 'index', // accessor is the "key" in the data'
         render : (text, record, index) => index,
       },
       {
         Header: 'Mata Pelajaran',
         accessor: 'nama_mapel', // accessor is the "key" in the data
       },
       {
         Header: 'KKM',
         accessor: 'kkm',
       },
       {
         Header: 'CATATAN SEMESTER',
         columns: [
           {
             Header: 'KELAS X',
             columns: [
               {
                 Header: 'Semester 1',
                 accessor: 'sem1',
               },

               {
                 Header: 'Semester 2',
                 accessor: 'sem2',
               },
             ],
           },
           {
             Header: 'KELAS XI',
             columns: [
               {
                 Header: 'Semester 3',
                 accessor: 'sem3',
               },

               {
                 Header: 'Semester 4',
                 accessor: 'sem4',
               },
             ],
           },
           {
             Header: 'KELAS XII',
             columns: [
               {
                 Header: 'Semester 5',
                 accessor: 'sem5',
               },

               {
                 Header: 'Semester 6',
                 accessor: 'sem6',
               },
             ],
           },
         ]
       },
       {
         Header: 'Rata-rata/Mata Pelajaran',
         accessor: 'nisn',
       }
     ],
     []
   )
 
   const {
     getTableProps,
     getTableBodyProps,
     headerGroups,
     rows,
     prepareRow,
   } = useTable({ 
    columns,
    data,
    defaultColumn,
    autoResetPage: !skipPageReset,
    updateMyData,
    })
 
   return (
    <div className="page-body">
      <div class="container">
      <div class="card card-md">
        <div class="card-body">
          <div class="row align-items-center">
            <div class="col-10">
              <h3 class="h1">Data Transkip Nilai</h3>
              <div class="markdown text-muted">
                All icons come from the Tabler Icons set and are MIT-licensed. Visit
                <a href="https://tabler-icons.io" target="_blank" rel="noopener">tabler-icons.io</a>,
                download any of the 1978 icons in SVG, PNG or&nbsp;React and use them in your favourite design tools.
              </div>
            </div>
          </div>
        </div>
      </div>
     <table {...getTableProps()} class="table table-striped card-table table-vcenter text-center text-nowrap datatable mt-2">
       <thead>
         {headerGroups.map(headerGroup => (
           <tr {...headerGroup.getHeaderGroupProps()}>
             {headerGroup.headers.map(column => (
               <th
                 {...column.getHeaderProps()}
               >
                 {column.render('Header')}
               </th>
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
                 return (
                   <td
                     {...cell.getCellProps()}
                   >
                     {cell.render('Cell')}
                   </td>
                 )
               })}
             </tr>
           )
         })}
       </tbody>
     </table>
     </div>
     </div>
   )
 }

 