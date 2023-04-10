import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';


export default function TextHeader() {
    return (
        <Box
            sx={{
                color: '#646464',
                display: 'flex',
                flexDirection: 'column',
                minHeight: '20vh',
                bgcolor: '#f4f3f3'
            }}
        >
            <CssBaseline />
            <Container component="main" sx={{ mt: 8, mb: 2 }} maxWidth="sm">
                <Typography variant="h3" component="h1" gutterBottom>
                    עיצובי בלונים
                </Typography>
                <Typography variant="h5" component="h2" gutterBottom>
                    {'וקירות מעוצבים לבריתות וימי הולדת '}
                    {' במחירים מיוחדים'}
                </Typography>
                <Typography variant="subtitle1" >הופכים את האירוע שלכם למושלם</Typography>
            </Container>
        </Box>
    );
}