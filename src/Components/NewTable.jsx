import React, { useMemo, useEffect, useState } from 'react';
import { MaterialReactTable } from 'material-react-table';
import { Box } from '@mui/material';
import axios from 'axios';

//nested data is ok, see accessorKeys in ColumnDef below
export const BASE_URL = "http://127.0.0.1:8000"

const NewTable = ({locationFilter, regionFilter, districtFilter, nameFilter}) => {
  //should be memoized or stable
    const columns = useMemo(
        () => [
        {
            accessorKey: 'id', //access nested data with dot notation
            header: 'S/N',
            size: 1,
        },
        {
            accessorKey: 'name',
            header: 'School Name',
            // size: 150,
        },
        {
            accessorKey: 'district', //normal accessorKey
            header: 'District',
            // size: 200,
        },
        {
            accessorKey: 'region',
            header: 'Region',
            // size: 150,
        },
        {
            accessorKey: 'location',
            header: 'Location',
            // size: 150,
        },
        ],
        [],
    );

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

    return (
        <div className='h-auto border'>
            <MaterialReactTable 
                columns={columns} 
                data={schools}
                enableRowSelection
            />
        </div>
    )
};

export default NewTable;
