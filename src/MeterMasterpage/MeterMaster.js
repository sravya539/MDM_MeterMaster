import React from "react";
import { Grid } from '@mui/material';
import Card from '@mui/material/Card';
import { TextField } from "@mui/material";
import DropdownClass from "./MeterMasterSub";
import { styled } from '@mui/material/styles';
import { Button } from "@mui/material";
import { Stack } from "@mui/material";
import { FormControl } from "@mui/material";
import Paper from '@mui/material/Paper';
import { Link } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));
const Dropdown = () => {
    return (
        <Card>
            <br />
            <Grid container direction="column" allignItems="center" justify="center">
                <Grid container direction="row" justifyContent="center" alignContent="center" >
                    <Grid item xs={4}>
                        <FormControl>
                            Discom: <TextField id="outlined-basic" label="TSSPDCL" variant="outlined" />
                        </FormControl>
                    </Grid>
                    <Grid Rowspacing={10} Item={Card} item xs={6} md={6} lg={4} rowSpacing={10}>
                        <Grid item xs={6}>
                            Circle:<DropdownClass />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid container direction="row" justifyContent="center" alignContent="center">
                    <Grid Item={Card} xs={12} md={6} lg={4} rowSpacing={10}>
                        <Grid item xs={6}>
                            Region:<DropdownClass /></Grid></Grid>
                    <Grid Item={Card} xs={12} md={6} lg={4} rowSpacing={10}>
                        <Grid item xs={6}>
                            Division:<DropdownClass /></Grid></Grid>
                </Grid>
                <Grid container direction="row" justifyContent="center" alignContent="center">
                    <Grid Item={Card} xs={6} md={6} lg={4} rowSpacing={10}>
                        <Grid item xs={6}>
                            SubDivision:<DropdownClass /></Grid></Grid>
                    <Grid Item={Card} xs={12} md={6} lg={4} rowSpacing={10}>
                        <Grid item xs={6}>
                            Section:<DropdownClass /></Grid></Grid>
                </Grid>
                <Grid container direction="row" justifyContent="center" alignContent="center">
                    <Grid Item={Card} xs={12} md={6} lg={4} rowSpacing={10}>
                        <Grid item xs={6}>
                            SubStation:<DropdownClass /></Grid></Grid>
                    <Grid Item={Card} xs={12} md={6} lg={4} rowSpacing={10}>
                        <Grid item xs={6}>
                            Feeder:<DropdownClass /></Grid></Grid>
                </Grid>

                <Grid container direction="row" justifyContent="center" alignContent="center">
                    <Grid item xs={4}>
                        <FormControl>
                            DTR:<TextField id="outlined-basic" label="DTR value" variant="outlined" />
                        </FormControl>
                    </Grid>
                    <Grid item xs={4}>
                        <FormControl>
                            Meter No:<TextField id="outlined-basic" label="Meter No" variant="outlined" />
                        </FormControl>
                    </Grid>
                </Grid>
                <Grid container direction="row" justifyContent="center" alignContent="center">
                    <Grid item xs={4}>
                        <FormControl>
                            Service No:<TextField id="outlined-basic" label="Service No" variant="outlined" />
                        </FormControl>
                    </Grid>
                    <Grid item xs={4}>
                        <FormControl>
                            ConsumerName:<TextField id="outlined-basic" label="Consumer Name" variant="outlined" />
                        </FormControl>
                    </Grid>
                </Grid>
            </Grid>
            <br />
            <Stack spacing={2} direction="row" justifyContent="center">
                <Button variant="contained"> <Link href="search" color="inherit" underline="none">
                    SEARCH
                </Link> </Button>
                <Button variant="contained">CLEAR</Button>
                <Button variant="contained"> <Link href="newmeter" color="inherit" underline="none">NEW METER</Link></Button>
            </Stack>
            <br />
        </Card>
    )
}
export default Dropdown;