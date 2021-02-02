import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Formik, Form, Field, FieldArray } from 'formik'
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

function createData(id: number, name: string, calories: number, fat: number, carbs: number, protein: number) {
    return { id, name, calories, fat, carbs, protein };
}

const rows = [
    createData(1, 'Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData(2, 'Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData(3, 'Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData(4, 'Frozen yoghurt', 159, 6.0, 24, 4.0),
];

const BasicTable = () => {
    const classes = useStyles()

    return (<>
        <Formik
            initialValues={{ dataSource: rows }}
            onSubmit={(values) => console.log('values', values)}
        >
            {({ values }) => {
                // console.log('values ----- ', values)
                return (
                    <Form>
                        <FieldArray
                            name="friends"
                            render={arrayHelpers => (
                                <TableContainer component={Paper}>
                                    <Table className={classes.table} aria-label="simple table">
                                        <TableHead>
                                            <TableRow>
                                                <TableCell align="center">ID</TableCell>
                                                <TableCell>Dessert (100g serving)</TableCell>
                                                <TableCell align="right">Calories</TableCell>
                                                <TableCell align="right">Fat&nbsp;(g)</TableCell>
                                                <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                                                <TableCell align="right">Protein&nbsp;(g)</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {rows.map((row, index) => (
                                                <TableRow key={index}>
                                                    <TableCell align="center">{row.id}</TableCell>
                                                    <TableCell component="th" scope="row">
                                                        <Field
                                                            type="text"
                                                            name={`dataSource[${index}].name`}
                                                            component={TextField}
                                                            label="Size"
                                                            id="outlined-size-small"
                                                            defaultValue="Small"
                                                            variant="outlined"
                                                            size="small"
                                                        />
                                                    </TableCell>
                                                    <TableCell align="right">
                                                        <Field
                                                            type="text"
                                                            name={`dataSource[${index}].calories`}
                                                            component={TextField}
                                                            label="Size"
                                                            id="outlined-size-small"
                                                            defaultValue="Small"
                                                            variant="outlined"
                                                            size="small"
                                                        />
                                                    </TableCell>
                                                    <TableCell align="right">
                                                        <Field
                                                            type="text"
                                                            name={`dataSource[${index}].fat`}
                                                            component={TextField}
                                                            label="Size"
                                                            id="outlined-size-small"
                                                            defaultValue="Small"
                                                            variant="outlined"
                                                            size="small"
                                                        />
                                                    </TableCell>
                                                    <TableCell align="right">
                                                        <Field
                                                            type="text"
                                                            name={`dataSource[${index}].carbs`}
                                                            component={TextField}
                                                            label="Size"
                                                            id="outlined-size-small"
                                                            defaultValue="Small"
                                                            variant="outlined"
                                                            size="small"
                                                        />
                                                    </TableCell>
                                                    <TableCell align="right">
                                                        <Field
                                                            type="text"
                                                            name={`dataSource[${index}].protein`}
                                                            component={TextField}
                                                            label="Size"
                                                            id="outlined-size-small"
                                                            defaultValue="Small"
                                                            variant="outlined"
                                                            size="small"
                                                        />
                                                    </TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            )}
                        />
                    </Form>
                )
            }}
        </Formik>
    </>)
}

export default BasicTable