import React, {useState, useEffect} from 'react'
import Table from './Table'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import NewTable from './NewTable';

const MainPage = () => {

  const [nameFilter, setNameFilter] = useState()
  const [locationFilter, setLocationFilter] = useState();
  const [regionFilter, setRegionFilter] = useState();
  const [districtFilter, setDistrictFilter] = useState();


  const handleNameChange = (event) => {
    setNameFilter(event.target.value);
  };

  const handleLocationChange = (event) => {
    setLocationFilter(event.target.value);
  };

  const handleRegionChange = (event) => {
    setRegionFilter(event.target.value);
  };

  const handleDistrictChange = (event) => {
    setDistrictFilter(event.target.value);
  };

  return (
    <div className=''>
        <div className='flex flex-col gap-4'>
            <div className='flex flex-col-reverse gap-4 md:flex-row md:h-72'>
                <div className='h-[100%] w-full md:w-[40%] border'>
                  <div class="grid gap-6 mb-6 p-5">
                  <TextField sx={{ minWidth: 120 }} value={nameFilter} onChange={handleNameChange} id="outlined-basic" label="Search School" variant="outlined" size="small"/>
                  
                  <FormControl sx={{ minWidth: 120 }} size="small">
                    <InputLabel id="demo-select-small">Region</InputLabel>
                    <Select
                      labelId="demo-select-small"
                      id="demo-select-small"
                      value={regionFilter}
                      label="Region"
                      onChange={handleRegionChange}
                    >
                      <MenuItem value="">
                        <em>All regions</em>
                      </MenuItem>
                      <MenuItem value={'Accra'}>Greater Accra</MenuItem>
                      <MenuItem value={'Ashanti'}>Ashanti</MenuItem>
                      <MenuItem value={'Eastern'}>Eastern</MenuItem>
                      <MenuItem value={'Central'}>Central</MenuItem>
                      <MenuItem value={'Volta'}>Volta</MenuItem>
                      <MenuItem value={'Northern'}>Northern</MenuItem>
                      <MenuItem value={'Upper East'}>Upper East</MenuItem>
                      <MenuItem value={'Upper West'}>Upper West</MenuItem>
                      <MenuItem value={'Western'}>Western</MenuItem>
                      <MenuItem value={'Ahafo'}>Ahafo</MenuItem>
                      <MenuItem value={'Bono'}>Bono</MenuItem>
                      <MenuItem value={'Western North'}>Western North</MenuItem>
                      <MenuItem value={'Bono East'}>Bono East</MenuItem>
                      <MenuItem value={'Savannah'}>Savannah</MenuItem>
                      <MenuItem value={'Oti'}>Oti</MenuItem>
                    </Select>
                    </FormControl>

                    {/* <FormControl sx={{ minWidth: 120 }} size="small">
                      <InputLabel id="demo-select-small">All Categories</InputLabel>
                      <Select
                        labelId="demo-select-small"
                        id="demo-select-small"
                        value={categoryFilter}
                        label="Age"
                        onChange={handleLocationChange}
                      >
                        <MenuItem value="">
                          <em>All Category</em>
                        </MenuItem>
                        <MenuItem value="A">Category A</MenuItem>
                        <MenuItem value="B">Category B</MenuItem>
                        <MenuItem value="C">Category C</MenuItem>
                        <MenuItem value="D">Category D</MenuItem>
                      </Select>
                  </FormControl> */}
                  <TextField sx={{ minWidth: 120 }} value={locationFilter} onChange={handleLocationChange} id="outlined-basic" label="Search Location" variant="outlined" size="small"/>

                  <TextField sx={{ minWidth: 120 }} value={districtFilter} onChange={handleDistrictChange} id="outlined-basic" label="District" variant="outlined" size="small"/>
            
                  </div>
                </div>
                <div className='h-[100%] w-full md:w-[60%] border'>
                  <img className='w-full h-full object-cove' src='news.png'/>
                </div>
            </div>
            <div className='flex flex-col h-full w-[100%]'>
              {/* <Table nameFilter={nameFilter} districtFilter={districtFilter} regionFilter={regionFilter} locationFilter={locationFilter}  className='h-[100%]' /> */}
              <NewTable nameFilter={nameFilter} districtFilter={districtFilter} regionFilter={regionFilter} locationFilter={locationFilter} className='' />
            </div>
        </div>
    </div>
  )
}

export default MainPage