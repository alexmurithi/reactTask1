import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Paper from '@material-ui/core/Paper';
import SmartphoneIcon from '@material-ui/icons/Smartphone';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import LocalMallIcon from '@material-ui/icons/LocalMall';
import ChatIcon from '@material-ui/icons/Chat';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      },
    
  }));
 

function Content(){
    const classes = useStyles();
    return(
        <div className={classes.root}>
      <Grid container spacing={3}>
        
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>xs=12 sm=6</Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>xs=12 sm=6</Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>xs=6 sm=3</Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>xs=6 sm=3</Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>xs=6 sm=3</Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>xs=6 sm=3</Paper>
        </Grid>
      </Grid>
    </div>
        
        // <Container>
        //    <Grid Container>
        //       <Grid item lg={3}>
        //           <Paper>
        //           <Typography>Home</Typography>
        //                <MenuList>
        //                    <MenuItem>
        //                      <ListItemIcon>
        //                          <SmartphoneIcon/>
        //                      </ListItemIcon>
        //                      <Typography>M-PESA</Typography>
        //                    </MenuItem>
        //                    <MenuItem>
        //                      <ListItemIcon>
        //                          <AccountCircleIcon />
        //                      </ListItemIcon>
        //                      <Typography>My Account</Typography>
        //                    </MenuItem>
        //                    <MenuItem>
        //                      <ListItemIcon>
        //                          <LocalMallIcon />
        //                      </ListItemIcon>
        //                      <Typography>Discover</Typography>
        //                    </MenuItem>
        //                    <MenuItem>
        //                      <ListItemIcon>
        //                         <ChatIcon />
        //                      </ListItemIcon>
        //                      <Typography>Help</Typography>
        //                    </MenuItem>
        //                </MenuList>
        //           </Paper>
                 
        //       </Grid>
        //       </Grid>

        //       <Grid item lg={5}>
        //         ggjjj
        //       </Grid>
        // </Container>
    )
}

export default Content;