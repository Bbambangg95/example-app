import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { useTable } from 'react-table'
 

 function EditNilai() {
  
   const [mapel, setMapel] = useState([])
   const [nilai, setNilai] = useState([])

    useEffect(() => {
      axios.get('/addMapel')
        .then(res => {
          setMapel(res.data.mapels)     
        }
        )

      axios.get('/nilai')
        .then(res => {
          setNilai(res.data.nilai)     
        }
        )
    }, [])

    const nilai_akhir = [...nilai]
    const data = React.useMemo(() => [...nilai_akhir], [nilai_akhir])
    
 
   const columns = React.useMemo(
     () => [
       {
         Header: 'No',
         accessor: 'kode_mapel', // accessor is the "key" in the data
       },
       {
         Header: 'Mata Pelajaran',
         accessor: 'nama_mapel', // accessor is the "key" in the data
       },
       {
         Header: 'KKM',
         accessor: 'nisn',
       },
       {
         Header: 'CATATAN SEMESTER',
         columns: [
           {
             Header: 'KELAS X',
             columns: [
               {
                 Header: 'Semester 1',
                 accessor: 'nilai',
               },

               {
                 Header: 'Semester 2',
                 accessor: 'kode2',
               },
             ],
           },
           {
             Header: 'KELAS XI',
             columns: [
               {
                 Header: 'Semester 3',
                 accessor: 'semester3',
               },

               {
                 Header: 'Semester 4',
                 accessor: 'semester4',
               },
             ],
           },
           {
             Header: 'KELAS XII',
             columns: [
               {
                 Header: 'Semester 5',
                 accessor: 'semester5',
               },

               {
                 Header: 'Semester 6',
                 accessor: 'semester6',
               },
             ],
           },
         ]
       },
       {
         Header: 'Rata-rata/Mata Pelajaran',
         accessor: 'rata_rata',
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
   } = useTable({ columns, data})
 
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

 export default EditNilai;