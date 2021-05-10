import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import CardContent from '@material-ui/core/CardContent';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import { IconButton } from '@material-ui/core';

const useStyles =makeStyles(theme=>({
   textAlignCenter:{
       textAlign:"center"
   },
   accountCard:{
       boxShadow:"0 3px 6px 0 rgba(0, 0, 0, 0.1)",
       borderRadius:"8px",
       marginTop:"12px",
       
   }
}))

export default function MyAccount(props){
    const classes =useStyles()
    return(
        <React.Fragment>
           <Container maxWidth="xl">
               <Typography className={classes.textAlignCenter}>
                   Hi, <span style={{fontWeight:600}}>Alex (254712293003)</span>
               </Typography>

                <Box>
                   <Card className={classes.accountCard}>
                       
                       <CardContent>
                           <Grid container>
                              <Grid item xs={11}>
                                 <Typography >My Account</Typography>
                              </Grid>
                              <Grid item xs={1}>
                                 <IconButton>
                                     <ExpandMoreIcon />
                                 </IconButton>
                              </Grid>
                           </Grid>
                          
                       </CardContent>
                       <Collapse>jhj</Collapse>
                   </Card>
                </Box>

           </Container>
        </React.Fragment>
    )
}