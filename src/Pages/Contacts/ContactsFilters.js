import { TextField, Grid, makeStyles, Select, MenuItem, Button } from '@material-ui/core';
import { NATIONALITY_USER_NAME } from "../../constants/Nationality"

const useStyles = makeStyles((theme) => ({
  control: {
    "& > *":{
      marginRight: theme.spacing(2)
    },
    marginBottom:theme.spacing(2)
  },
}));

const ContactsFilters = ({ updateFilters, clearFilters, contactFilters }) => {
  const classes = useStyles();

  const handleChange = (e) => {
    updateFilters(e.target.name, e.target.value)
  }
  return (
    <>
      <Grid container className={classes.control}>
        <TextField name="username" onChange={handleChange} value={contactFilters.username} /> 
        <Select name="nationality" onChange={handleChange} value={contactFilters.nationality}>
          <MenuItem key="all" value="all" >All</MenuItem>
          {Object.entries(NATIONALITY_USER_NAME).map(([key, value]) => (
            <MenuItem key={key} value={key} >{value}</MenuItem>

          ))}
        </Select>
        <Select name="gender" onChange={handleChange} value={contactFilters.gender}>
          <MenuItem key="all" value="all" >All</MenuItem>
          <MenuItem key="all" value="male" >Male</MenuItem>
          <MenuItem key="all" value="female" >Female</MenuItem>
        </Select>

        <Button onClick={clearFilters}>Clear filters</Button>
      </Grid> 

    </>
  );
};

export default ContactsFilters;
