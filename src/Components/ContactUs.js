import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import {Instagram, WhatsApp} from "@mui/icons-material";
import {Link} from "react-router-dom";
import PhoneIcon from '@mui/icons-material/Phone';

const instagramUrl = `https://www.instagram.com/${"adiellis111"}`;

const handleLinkClick = () => {
    window.open(`tel:${972528085632}`);
};

export default function ContactUs() {
    return (
        <Box
            component="footer"
            sx={{
                py: 3,
                px: 2,
                mt: 'auto',
                bgcolor: '#e29997'
            }}
        >
            <Container maxWidth="sm">
                <Typography variant="h5">
                    לפרטים נוספים פנו אלינו
                </Typography> <br/>
                <Grid container spacing={3}>
                    <Grid item sm={4}>
                        <IconButton component={Link} to={`https://wa.me/${"972528085632"}`} target="_blank">
                            <WhatsApp />
                        </IconButton>
                    </Grid>
                    <Grid item sm={4}>
                        <IconButton component={Link} to={instagramUrl} target="_blank">
                            <Instagram />
                        </IconButton>
                    </Grid>
                    <Grid item sm={4}>
                        <IconButton target="_blank">
                            <PhoneIcon
                                sx={{ fontSize: 'inherit', verticalAlign: 'middle', cursor: 'pointer' }}
                                onClick={handleLinkClick}
                            />
                        </IconButton>
                    </Grid>
                </Grid>
            </Container>
        </Box>
);
}