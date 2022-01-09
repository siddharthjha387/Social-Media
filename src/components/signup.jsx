import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { makeStyles } from '@mui/styles';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './Signup.css';
import Img from "./insta.jpg";
import TextField from '@mui/material/TextField';
import Alert from '@mui/material/Alert';

function Signup() {
    const useStyle = makeStyles({
        head1: {
            color: 'gray',
            textAlign: 'center'
        },
        btn:{
            color: 'gray',
            backgroundColor:"black"
        }
    })
    const setStyle = useStyle();
    return (
        <div className="outer">
            <div className="inner">

                <Card variant="outlined">
                    <div className="logo">
                        <img src={Img} />
                    </div>

                    <CardContent >
                        <Typography className={setStyle.head1} variant="subtitle1" >
                            Sign Up to see videos and photos
                        </Typography>
                        {true && <Alert severity="error">This is an error alert — check it out!</Alert>}
                        <TextField id="outlined-basic" label="Username" variant="outlined" fullWidth={true} margin="dense" size="small"/>
                        <TextField id="outlined-basic" label="Password" variant="outlined" fullWidth={true} margin="dense" size="small" />
                        <TextField id="outlined-basic" label="Email" variant="outlined" fullWidth={true} margin="dense" size="small"/>
                        
                        
                    </CardContent>
                    <CardActions>
                    <Button className={setStyle.btn} variant="outlined" fullWidth={1} margin="dense"  >Sign Up</Button>;
                    </CardActions>
                </Card>
                
            </div>
        </div>
    );

}

export default Signup;