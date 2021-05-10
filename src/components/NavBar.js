import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import {makeStyles} from '@material-ui/styles';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Logo from '../assets/safLogo.png';
import Badge from '@material-ui/core/Badge';
import Container from '@material-ui/core/Container';

const useStles =makeStyles(theme=>({
   safLogo:{
       objectFit:"contain",
       textAlign:"center"
   },
   toolbarFix:{
       ...theme.mixins.toolbar,
       marginBottom:"20px"
   }
}))

export default function NavBar (props){
    const classes = useStles()
    return(
        <React.Fragment>
            <AppBar>
                <Toolbar>
                  <Container>
                  <Box display="flex" flexDirection="row">
                        <Box justifyContent="flex-start">
                                <Link>
                                    <img src={Logo} alt="Safaricom Logo" height="48px" width="100px" className={classes.safLogo}/>
                                </Link>
                        </Box>
                        <Box display="flex" justifyContent="flex-end">
                        <Box>
                            <IconButton>
                                <Badge variant="dot" color="secondary" overlap="circle">
                                   <SearchIcon />
                                </Badge>
                              
                            </IconButton>
                        </Box>
                        <Box>
                            <IconButton>
                            <NotificationsIcon color="secondary"/>
                            </IconButton>
                           
                        </Box>
                    </Box>
                    </Box>

                   
                  </Container>
                    {/* <IconButton>
                       <MenuIcon color="secondary"/>
                    </IconButton>

                    <Box flexGrow={2} textAlign="center">
                       <Link>
                          <img src={Logo} alt="Safaricom Logo" height="48px" width="100px" className={classes.safLogo}/>
                       </Link>
                    </Box>

                    <Box display="flex">
                        <Box>
                            <IconButton>
                                <Badge variant="dot" color="secondary" overlap="circle">
                                   <SearchIcon />
                                </Badge>
                              
                            </IconButton>
                        </Box>
                        <Box>
                            <IconButton>
                            <NotificationsIcon color="secondary"/>
                            </IconButton>
                           
                        </Box>
                    </Box> */}

         

                </Toolbar>
            </AppBar>
            <div className={classes.toolbarFix}></div>
        </React.Fragment>
    )
}