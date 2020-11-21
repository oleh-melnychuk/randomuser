import {Avatar ,TableRow,TableHead,TableContainer,TableCell,TableBody,Table,Typography} from '@material-ui/core';
import { format, parseISO } from 'date-fns'
import {CopyToClipboard} from "../../components/CopyToClipboard";
import {NATIONALITY_USER_NAME} from "../../constants/Nationality";
import Paper from '@material-ui/core/Paper';

export const TableContacts = (data) =>{

    return(
        <TableContainer component={Paper}>
            <Table  aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Avatar</TableCell>
                        <TableCell >Full name</TableCell>
                        <TableCell >Birthday</TableCell>
                        <TableCell >Email</TableCell>
                        <TableCell >Phone</TableCell>
                        <TableCell >Location</TableCell>
                        <TableCell align="right">Nationality</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.data.map((row) => (
                        <TableRow key={row.login.uuid}>
                            <TableCell component="th" scope="row">
                                <Avatar alt="Remy Sharp" src={row.picture.thumbnail} />

                            </TableCell>
                            <TableCell >{row.name.title} {row.name.first} {row.name.last}</TableCell>
                            <TableCell >
                                <Typography>{format( parseISO(row.dob.date), 'iiii, MM/dd/yyyy h:m:s aaa')} </Typography>
                                <Typography>{row.dob.age} years </Typography>
                            </TableCell>
                            <TableCell ><CopyToClipboard text={row.email}/></TableCell>
                            <TableCell ><CopyToClipboard text={row.cell}/></TableCell>
                            <TableCell>{row.location.country}</TableCell>
                            <TableCell>{NATIONALITY_USER_NAME[row.nat]}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
};