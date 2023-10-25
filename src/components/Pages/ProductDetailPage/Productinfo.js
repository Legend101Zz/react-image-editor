import React from 'react'
import { Grid, Typography,Button} from '@mui/material'
import profile from './profile2.png'
import Prices from '../../Layouts/Prices/Prices';
import {useNavigate } from 'react-router-dom';
// import Prices from '../../Layouts/Prices/Prices';
const Productinfo = () => {
  const navigate = useNavigate();
    const colorOptions = [
        { color: 'red' },
        { color: 'blue' },
        { color: 'green' },
        // Add more color options as needed
      ];
      const sizes = [
        {si:'S'},
        {si:'L'},
        {si:'XL'},
        {si:'2XL'}
      ]

      const navigate_to_desginerProfile = ()=>{
        navigate('/public_designer_profile');
      }
  return (
     <div>
        <Grid
        container
        direction="column"
        justifyContent="flex-start"
        alignItems="center"
        marginTop="-25%"
        >
            <Grid item padding={4}>
                <Typography variant="h5" color="initial">Game Over Men T-shirt</Typography>
                <Typography variant="subtitle2" color="initial" style={{marginLeft:'8%'}}>description ;kadkflkajdadf kadjfaokdjflka jdkflas lfkalksdf;lkajfaie aldjoifaj;lidfj iae fioaj diofjaisfjjoilsdf</Typography>
                <div style={{justifyContent:'center',height:'60px'}}>
                  <Prices price='40' original_price='400' discount='90%' circleRadius='50px' />
                </div>
                <Typography variant="h6" color="initial">Color</Typography>
                <div>
                {colorOptions.map((option, index) => (
                <Button
                key={index}
                variant='contained'
                style={{
                  backgroundColor: option.color,
                  height:'30px',
                  width:'30px',
                  margin: '5px',
                }}
              ></Button>
            ))}
          </div>
                <Typography variant="h6" color="initial">sizes</Typography>
                <div>
                {sizes.map((option, index) => (
                <Button
                key={index}
                variant='outlined'
                style={{
                  margin:'2%'
                }}
              >{option.si}</Button>
            ))}
          </div>
                <Typography variant="h6" color="initial">location</Typography>
                <div>
                  <Button variant="outlined" size='small' style={{margin:'5px'}} >front</Button>
                  <Button variant="outlined" size='small' style={{margin:'5px'}}>back</Button>
                </div>
                <div style={{display:'flex',marginTop:'10%'}} onClick={navigate_to_desginerProfile}>
                  <img src={profile} alt='profile' style={{width:'20px',backgroundColor:'blue',borderRadius: '50%',aspectRatio:'1'}}/>
                  <Typography variant='subtitle2' style={{marginLeft:'4%'}}>Designed by Artist</Typography>
                </div>
            </Grid>
        </Grid>
        </div>
  )
}

export default Productinfo
