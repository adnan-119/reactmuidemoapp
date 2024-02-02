import React,{useState} from 'react'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';


export default function Demo1() {
  const [pname, setpname] = useState("");
  const [productlist, setProductList] = useState([]);

  const handlepnameinput = (event) => {
    setpname(event.target.value);
  };

  const addproduct = () => {
    setProductList([...productlist, pname]);
    //console.log(productlist);

  };

  return (
    <div>
      <h3>Product List </h3>
      <Box component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate autoComplete="off" >
      <TextField placeholder="Enter Product Name" id="outlined-basic" label="Enter Product name" variant="outlined" type="text" value={pname} onChange={handlepnameinput} required/>
      
    </Box>
      
      <Stack spacing={1} direction="row"></Stack>
      <Button onClick={addproduct} variant="contained">Add Product</Button>
      <stack/><br/><br/>
      <table border={1} bgcolor='lightgrey' width="15%" height="15%">
      {
        productlist.length > 0 ? 
        productlist.map((product, index) => (
          <tr key={index}>
            <td>{index+1}</td>
            <td>{product}</td>
          </tr>
        )) : 
        <p>No Records Found</p>

      }
      </table>
      
    </div>
  ); // Add closing parenthesis here
}
