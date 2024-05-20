import React, { useState } from 'react';
import {
    Grid, Box,
    FormControl, RadioGroup, FormControlLabel, Radio,
    TextField,
    Button,
    Typography,
    Card, CardContent, Divider
} from '@mui/material';


import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';


export default function Form() {

    const [number, setNumber] = useState('');
    const [radioValue, setRadioValue] = useState('sms');
    const [errors, setErrors] = useState({});


    const handleNumberChange = (event) => {
        setNumber(event.target.value);
        if (!event.target.value || isNaN(event.target.value)) {
            setErrors((prev) => ({ ...prev, number: 'Please enter a valid number' }));
        } else {
            setErrors((prev) => ({ ...prev, number: '' }));
        }
    };

    const handleRadioChange = (event) => {
        setRadioValue(event.target.value);
        setErrors((prev) => ({ ...prev, radio: '' }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const newErrors = {};
        if (!number || isNaN(number)) {
            newErrors.number = 'Please enter a valid number';
        }
        if (!radioValue) {
            newErrors.radio = 'Please select an option';
        }
        setErrors(newErrors);

        if (!Object.keys(newErrors).length) {
            // Form is valid, submit the data
            console.log('Form Submitted:', { number, radioValue });
        }
    };


    let RadioTitle = "We'll send you a code to confirm this phone number. Where should we send it?"



    return (


        <>

            <Grid container spacing={2} mt={5}>
                <Grid xs={1} md={2}></Grid>
                <Grid item xs={10} md={8}>
                    <div >

                        <Button onClick={{}} sx={{ marginLeft: '-10px', color: '#2c2e30' }}><KeyboardBackspaceIcon sx={{ fontSize: 18 }} /> &nbsp;Back to verify your profile.</Button>




                        <Card variant="outlined" sx={{ mt: 2, boxShadow: 'rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px' }}>
                            <CardContent sx={{ padding: 0 }}>
                                <div style={{ background: '#f4f4f7' }}>
                                    <Typography sx={{ color: '#4b286d', fontSize: '40px', padding: '15px 25px' }} >Add your contact phone number</Typography></div>
                                <div><Divider />
                                    <Typography sx={{ padding: '10px 25px 0 25px' }}>We'll contact you by text message or phone call account updates for your home products and sercices, for verification when calling in and for exclusive offers or surveys.</Typography>
                                </div>
                            </CardContent></Card>


                        <div style={{ marginTop: 30 }}>
                            <Typography sx={{ mt: 3, fontSize: 14, fontWeight: 'bold' }} variant="small" >Enter your contact phone number</Typography>
                            <Typography sx={{ fontSize: 13, marginBottom: '3px' }} >Mobile phone number preferred</Typography>


                        </div>
                        <Box component="form" onSubmit={handleSubmit}>
                            <TextField label='xxx-xxx-xxxx'
                                value={number}
                                onChange={handleNumberChange}
                                error={!!errors.number}
                                helperText={errors.number}
                                margin="normal"
                                required
                                type='number'
                                pattern="[0-9]*"
                                min={10}
                            />


                            <div>


                                <FormControl sx={{ mt: 4 }} component="fieldset" error={!!errors.radio} margin="normal">
                                    <Typography id="demo-radio-buttons-group-label" sx={{ fontWeight: 700, fontSize: 15, mb: 1, color: '#2c2e30' }}>{RadioTitle}</Typography>
                                    <RadioGroup value={radioValue} onChange={handleRadioChange}

                                        defaultValue="sms" sx={{ fontSize: 12 }} className='multi-radiobtn'
                                    >
                                        <FormControlLabel value="sms" control={<Radio size="small" />} label="Text message"



                                        />
                                        <FormControlLabel value="call" control={<Radio size="small" />} label="Phone call" />
                                        {errors.radio && <p style={{ color: 'red', margin: '0', fontSize: '0.75rem' }}>{errors.radio}</p>}
                                    </RadioGroup>
                                </FormControl>
                            </div>

                            <Button
                                type='submit'
                                align='center'
                                variant='contained'
                                color="success"
                                sx={{ borderRadius: 15, fontSize: 13, textTransform: 'capitalize', fontWeight: 700, padding: '10px 35px', mt: 3 }}
                            >Continue
                            </Button>

                        </Box>
                    </div>
                </Grid>
                <Grid xs={1} md={2}></Grid>
            </Grid>
        </>

    )
}

