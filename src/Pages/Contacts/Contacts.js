import {useContacts} from './useContacts';
import Grid from '@material-ui/core/Grid';
import {TableContacts} from "./TableContacts";
import { makeStyles , Typography} from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        height: 140,
        width: 100,
    },
    control: {
        padding: theme.spacing(2),
    },
}));

export const Contacts = ()=>{
    const classes = useStyles();
    const contacts = useContacts();

    if(contacts.isError){
        return ('Error')
    }
    if(contacts.isLoading){
        return ('loading...')
    }

    return (
        <Grid container className={classes.control} >
            <Typography component="h3">Contacts</Typography>
            <TableContacts data={contacts.data}/>
        </Grid>
    );
};

