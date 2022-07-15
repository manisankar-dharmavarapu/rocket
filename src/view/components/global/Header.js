import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useTheme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import { useState } from 'react';

const Header = () => {
    const [scrollVal,setScrollVal]=useState(0)
    const classes = useStyles()
    const theme = useTheme()
    var scroll=0
    var appBarStyle=classes.appBar

      if (typeof window !== "undefined") {
        window.addEventListener("scroll", (event) => {
           scroll = window.pageYOffset;
           setScrollVal(scroll)
        });
    }
    console.log(scrollVal,"outside")

            // console.log(window.pageYOffset,window.pageXOffset,'positiom')
    return (
        <header>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="fixed" color="primary" style={{boxShadow:scrollVal > 40 ? '0px 10px' : 'none'}}>
                    <Toolbar>
                        
                        {/* <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            News
                        </Typography>
                        <TextField color='inherit' className={classes.searchField} />
                        <Typography variant="h8" component="p" style={{ marginRight: 10 }}>
                            Catagories
                        </Typography>
                        <Typography variant="h8" component="p" style={{ marginRight: 10 }}>
                            Classes
                        </Typography>
                        <Button color="inherit" style={{ marginRight: 10 }}>SignUp</Button>
                        <Button color='secondary' className={classes.loginBtn} variant='outlined'>Login</Button> */}
                    </Toolbar>
                </AppBar>
            </Box>
        </header>
    )
};

export default Header;
const useStyles = makeStyles((theme) => ({
    appBar:{
        boxShadow:'none'
    },
    scrollAppBar:{
        backgroundColor:"red"
    },
    searchField: {
        border: '1px solid',
        borderColor: theme.palette.text,
        color: theme.palette.text,
        borderRadius: 28,
        width: '55%',
        outline:'none'
    },
    loginBtn: {
        border: "1px solid",
        borderColor: theme.palette.surface,
        color: theme.palette.secondary,
    }
}));