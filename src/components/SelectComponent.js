import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Input, TextField } from '@mui/material';
import { MultiSelect } from 'react-multi-select-component';
const options = [
  { label: "Grapes 🍇", value: "grapes" },
  { label: "Mango 🥭", value: "mango" },
  { label: "Strawberry 🍓", value: "strawberry", disabled: true },
];

export default function SelectAutoWidth() {
  const [age, setAge] = React.useState('');
  const [selected, setSelected] = React.useState([]);
  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div>
      
      <FormControl sx={{ minWidth: 100 }}>
        {/* <InputLabel id="demo-simple-select-autowidth-label" size='normal'>Age</InputLabel> */}
        <h1>Select Fruits</h1>
      <MultiSelect
        options={options}
        value={selected}
        onChange={setSelected}
        labelledBy="Select"
      />
      <div>
        <Input label="Input 1" floatingLabel={true} fullWidth margin='10px 0 0 0' />
        <Input label="Input 2" floatingLabel={true} defaultValue="Value on load" />
      </div>
        <TextField
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={age}
          select
          onChange={handleChange}
          label='age'
        >

          <MenuItem value={10} >Twenty</MenuItem>
          <MenuItem value={21}>Twenty one</MenuItem>
          <MenuItem value={22}>Twenty one and a half</MenuItem>
          <MenuItem value={22}>Twenty one</MenuItem>
          <MenuItem value={23}>Twenty 3</MenuItem>

        </TextField>
      </FormControl>
    </div>
  );
}
