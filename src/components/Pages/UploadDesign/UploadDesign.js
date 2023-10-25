import React, { useState } from 'react';
import { Button, Container, Grid, TextareaAutosize, Select, MenuItem, Typography,TextField} from '@mui/material';
import { useDropzone } from 'react-dropzone';
import Nav2 from '../../Layouts/Navbar/Nav2';
import Footer from '../../Layouts/Footer/Footer';

const ProductUpload = () => {
  const [productTitle, setProductTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [subCategory, setSubCategory] = useState('');
  const [images, setImages] = useState([]);

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    setImages([...images, ...files]);
  }

  const { getRootProps, getInputProps } = useDropzone({
    onDrop: (acceptedFiles) => {
      setImages([...images, ...acceptedFiles]);
    }
  });

  return (
    <>
    <Nav2/>
    <Container  style={{backgroundColor:'white',maxWidth:'100vw',maxHeight:'100vh',paddingTop:'20px',paddingLeft:'10vw',paddingRight:'20vw',paddingBottom:'20vh'}}>
      <h2 style={{display:'flex',justifyContent:'center',paddingTop:'5vh',paddingBottom:'5vh'}}>Create Product</h2>
      <form>
        <Grid container spacing={2}
        style={{display:'flex',justifyContent:'center'}}
        >
          <Grid item xs={7} style={{marginRight:'4vw'}}>
            <Typography variant="subtitle2" >Product Title*</Typography>

            <TextField 
            fullWidth
            value={productTitle}
            onChange = {(e)=>setProductTitle(e.target.value)}
            variant="outlined" 
            style={{backgroundColor:'#FAFAFA',marginBottom:'20px'}}
            />
          <Typography variant="subtitle2" > Add Description*</Typography>
            <TextareaAutosize
              minRows={6}
              maxRows={8}
              cols={55}
              value={description}
              style={{backgroundColor:'#FAFAFA',marginBottom:'20px',resize:'none',}}
              onChange={(e) => setDescription(e.target.value)}
            />
            <Select
              fullWidth
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              displayEmpty
              style={{backgroundColor:'#FAFAFA',marginBottom:'20px',resize:'none',}}
            >
              <MenuItem value="" disabled>
                Select Category
              </MenuItem>
              <MenuItem value="Category 1">Category 1</MenuItem>
              <MenuItem value="Category 2">Category 2</MenuItem>
            </Select>


            <Select
              fullWidth
              value={subCategory}
              onChange={(e) => setSubCategory(e.target.value)}
              displayEmpty
              style={{backgroundColor:'#FAFAFA',marginBottom:'20px',resize:'none',}}
            >
              <MenuItem value="" disabled>
                Select Sub Category
              </MenuItem>
              <MenuItem value="SubCategory 1">SubCategory 1</MenuItem>
              <MenuItem value="SubCategory 2">SubCategory 2</MenuItem>
            </Select>


            </Grid>

          <Grid item xs={3} style={{marginLeft:'4vw'}}>

            <div {...getRootProps()} className="dropzone" style={{height:'60vh',width:'20vw',backgroundColor:'#FAFAFA'}}>
              <input {...getInputProps()} style={{border:'2px solid black',height:'60vh',width:'20vw',opacity:'0'}}/>
            </div>
            <Typography variant="subtitle2" style={{marginTop:'2vh'}} >Drop the images in the box or click on the box to select the image</Typography>

          </Grid>
        </Grid>

        <h3>Design Preview:</h3>
        <div className="image-preview" style={{height:'15vh'}}>
            {images.map((image, index) => (
              <div key={index} style={{ display: 'inline-block',margin:'5px', width: '80px', height: '80px',}}>
                    <img src={URL.createObjectURL(image)} alt={`DesignImage ${index}`} width="80" height="80"/>
              </div>
            ))}
          </div>

          <div style={{}}>
            <Button variant="contained"  style={{fontWeight: 'bold',textTransform:'none',backgroundImage:'linear-gradient(to right, rgb(162, 77, 80), rgb(75, 28, 54))',marginRight:'20px' }}>
                Create Product
            </Button>
            <Button variant="outlined" style={{fontWeight: 'bold',textTransform:'none',borderColor: 'rgb(75, 28, 54)',color:'rgb(162, 77, 80)'}} color="secondary" >
                Cancel
            </Button>

          </div>
      </form>
    </Container>
    <div style={{backgroundColor:'white',paddingTop:'40vh'}}>
    <Footer bgcol="white" textcol="black"/>
    </div>
    </>
  );
};

export default ProductUpload;
