import {React,useState} from "react";
import { Grid } from '@mui/material';
import Card from '@mui/material/Card';
import { TextField } from "@mui/material";
import MeterMasterSub from "./MeterMasterSub";
import { styled } from '@mui/material/styles';
import { Button } from "@mui/material";
import { Stack } from "@mui/material";
import Paper from '@mui/material/Paper';
import { Link } from "@mui/material";
import { Box } from "@mui/material";
import useStyles from "../components/NewMeter/useStyle";
import {CssBaseline } from '@mui/material';

const dropdowns = [
    {
        value: '1',
        label: 'South Region',
    },
    {
        value: '2',
        label: 'North Region',
    },
    {
        value: '3',
        label: 'East Region',
    },
    {
        value: '4',
        label: 'West Region',
    },
];

const MeterMaster = () => {

    const classes = useStyles();
    return (
        <card >
            <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 2, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
        >
            <CssBaseline />
    

            <Box sx={{ display: 'flex', p: 1, m: 1, bgcolor: 'background.paper', flexDirection: 'row', }}>
            </Box>

            <div>
                <Grid container direction="row" justifyContent="center" alignContent="center" >
                    <TextField
                        id="outlined-select-currency-native"
                        required label="Discom:"
                        defaultValue="TSSCPDL"
                    >

                    </TextField>

                    <TextField
                        id="outlined-select-currency-native"
                        select
                        required label="Region: "
                        SelectProps={{
                            native: true,
                        }}
                    >
                        {dropdowns.map((option) => (
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </TextField>
                </Grid>
            </div>
            <Grid container direction="row" justifyContent="center" alignContent="center" >
                <TextField
                    id="outlined-select-currency-native"
                    select
                    required label="Circle:"
                    SelectProps={{
                        native: true,
                    }}
                >
                </TextField>


                <TextField
                    id="outlined-select-currency-native"
                    select
                    required label="Division:"
                    SelectProps={{
                        native: true,
                    }}
                >
                </TextField>
            </Grid>

            <Grid container direction="row" justifyContent="center" alignContent="center" >
            <TextField
                    id="outlined-select-currency-native"
                    select
                    required label="SubDivision:"
                    SelectProps={{
                        native: true,
                    }}
                >
                </TextField>
                <TextField
                    id="outlined-select-currency-native"
                    select
                    required label="Section:"
                    SelectProps={{
                        native: true,
                    }}
                >
                </TextField>
            </Grid>

            <Grid container direction="row" justifyContent="center" alignContent="center" >
            <TextField
                    id="outlined-select-currency-native"
                    select
                    required label="SubStation:"
                    SelectProps={{
                        native: true,
                    }}
                >
                </TextField>

                <TextField
                    id="outlined-select-currency-native"
                    select
                    required label="Feeder:"
                    SelectProps={{
                        native: true,
                    }}
                >
                </TextField>
            </Grid>

            <Grid container direction="row" justifyContent="center" alignContent="center" >
                <div>
                    <TextField
                        id="outlined-select-currency-native"
                        required label="DTR: "
                    >
                    </TextField>
                    <TextField
                        id="outlined-select-currency-native"
                        required label="Meter No: "
                    ></TextField>
                </div>
            </Grid>
            <Grid container direction="row" justifyContent="center" alignContent="center" >
                <div>
                    <TextField
                        id="outlined-select-currency-native"
                        required label="Service No: "
                    >
                    </TextField>
                    <TextField
                        id="outlined-select-currency-native"
                        required label="ConsumerName: "
                    ></TextField>
                </div>
            </Grid>
            </Box>
    
            <Stack paddingTop={2} spacing={3} direction="row" justifyContent="center">
                <Button variant="contained"> <Link href="search" color="inherit" underline="none">
                    SEARCH
                </Link> </Button>
                <Button variant="contained" >CLEAR</Button>
                <Button variant="contained"> <Link href="newmeter" color="inherit" underline="none">NEW METER</Link></Button>
            </Stack>
            <br />
        </card>
    )
}
export default MeterMaster;