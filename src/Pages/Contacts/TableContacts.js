import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Avatar from '@material-ui/core/Avatar';
import { format, parseISO } from 'date-fns'




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
                                {format( parseISO(row.dob.date), 'iiii, MM/dd/yyyy h:m:s aaa')} <br />
                                {row.dob.age} years <br />
                            </TableCell>
                            <TableCell >{row.email}</TableCell>
                            <TableCell>{row.cell}</TableCell>
                            <TableCell>{row.location.country}</TableCell>
                            <TableCell>{row.location.country}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
};