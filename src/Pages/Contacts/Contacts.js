import {useContacts} from './useContacts';
import Grid from '@material-ui/core/Grid';
import {TableContacts} from "./TableContacts";
import { makeStyles , Typography} from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';



const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },

    control: {
        padding: theme.spacing(2),
    },
    title:{
        marginBottom:theme.spacing(2)
    }
}));

export const Contacts = ()=>{
    const classes = useStyles();
    const contacts = useContacts();

    if(contacts.isError){
        return ('Error')
    }
    if(contacts.isLoading){
        return (<CircularProgress />)
    }

    return (
        <Grid container className={classes.control} >
            <Typography variant="h3" component="h1" className={classes.title}>Contacts</Typography>
            <TableContacts data={contacts.data}/>
        </Grid>
    );
};

