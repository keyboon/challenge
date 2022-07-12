import {Container, Grid, Typography} from "@mui/material";
import {ReactComponent as KeyboonIcon} from "../DoNotMove/icon-keyboon.svg";


export default function Fallback404() {
    return (
        <Container sx={{height: "98vh"}}>
            <Grid
                container justifyContent={'center'} alignItems={'center'}
                sx={{height: '100%', bgColor: 'grey.100'}}
            >
                <Grid item xs={1} xl={2}/>
                <Grid item xs={5} xl={4}>
                    <Typography color={'error'} fontSize={45}>404 ERROR</Typography>

                    <Typography sx={{mt: 1}} color={'text.secondary'} fontWeight={'bold'} fontSize={30}>
                        This page was not found
                    </Typography>

                    <Typography sx={{mt: 2}} color={'grey.400'} fontSize={18} fontWeight={'bold'}>
                        Maybe there is something wrong with the router
                    </Typography>
                </Grid>

                <Grid container justifyContent={'center'} item xs={5} xl={4}>
                    <KeyboonIcon width={300}/>
                </Grid>

                <Grid item xs={1} xl={2}/>
            </Grid>
        </Container>
    );
}
