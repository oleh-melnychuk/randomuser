import {useContacts} from './useContacts';
import Grid from '@material-ui/core/Grid';
import {TableContacts} from "./TableContacts";
import { makeStyles , Typography} from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';
import ContactsFilters from "./ContactsFilters";
import {React , useState} from 'react';
import { filterFullName, filterNationality, filterGender } from "./filters"


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

    const defaultFilters = {
        username: "",
        nationality: "all",
        gender: "all"
    }
    const [contactFilters, setContactFilters] = useState(defaultFilters);
    if(contacts.isError){
        return ('Error')
    }
    if(contacts.isLoading){
        return (<CircularProgress />)
    }
    const updateFilters = (name, value) => {
        console.log(name);
        setContactFilters({
            ...contactFilters,
            [name]: value
        })
    }
    const filteredContacts = contacts.data
    .filter((i) => filterFullName(i, contactFilters.username))
    .filter((i) => filterNationality(i, contactFilters.nationality))
    .filter((i) => filterGender(i, contactFilters.gender));

    const clearFilters = () => {
        setContactFilters(defaultFilters);
    }


    return (
        <Grid container className={classes.control} >
            <Typography variant="h3" component="h1" className={classes.title}>Contacts</Typography>
            <ContactsFilters {...{updateFilters, clearFilters, contactFilters}} />
            <TableContacts data={filteredContacts}/>
        </Grid>
    );
};

