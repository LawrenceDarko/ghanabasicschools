import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { Box } from '@mui/material';
import axios from 'axios';

export const BASE_URL = "http://127.0.0.1:8000"

const Table = ({locationFilter, regionFilter, districtFilter, nameFilter}) => {

//   const navigate = useNavigate();

  const columns = [
    {
      field: 'id',
      headerName: 'S/N',
    //   renderCell: (params) => <a>#{params.value}</a>,
      sortable: false,
      // flex: 1,
    },
    {
      field: 'name',
      headerName: 'Name',
      type: 'text',
    //   renderCell: (params) => convertDate(params.value),
      sortable: true,
      flex: 2,
    },
    {
      field: 'district',
      headerName: 'District',
      type: 'text',
    //   renderCell: (params) => getCustomerName(params.value),
      sortable: false,
      flex: 1.5,
    },
    {
      field: 'region',
      headerName: 'Region',
      type: 'text',
    //   renderCell: (params) => getCustomerName(params.value),
      sortable: false,
      flex: 1.5,
    },
    {
      field: 'location',
      headerName: 'Location',
      type: 'text',
    //   renderCell: (params) => <p>GHS {params.value}</p>,
      align: "left",
      headerAlign: "left",
      sortable: true,
      flex: 1,
    }
  ];

  const [schools, setSchools] = useState([]);


  useEffect(() => {
    // `${BASE_URL}/products/v1/fetchForMenu/${7}`
    const apiUrl = `${BASE_URL}/api/schools/`;
    const config = {
      params: {
        location: locationFilter,
        region: regionFilter,
        name: nameFilter,
        district: districtFilter
      }
    };
    axios.get(apiUrl, config)
      .then(response => setSchools(response.data))
      .catch(error => console.log(error));
  }, [locationFilter, regionFilter, districtFilter, nameFilter]);


  console.log(schools)

  return (
    <div>
        <Box sx={{ height: 385, width: '100%'}}>
          <DataGrid
            rows={schools}
            // loading={orderDishes?.rows.length === 0}
            columns={columns}
            pageSize={6}
            rowsPerPageOptions={[6]}
            checkboxSelection={true}
            disableSelectionOnClick
            components={{ Toolbar: GridToolbar }}
            // getRowId={getRowId}
            // onCellDoubleClick={(row) => {navigate(row.id)}}
            // onRowClick={(row) => {setClickedOrderId(row.id)}}
            experimentalFeatures={{ newEditingApi: true }}
          />
        </Box>
    </div>
  )
}

export default Table