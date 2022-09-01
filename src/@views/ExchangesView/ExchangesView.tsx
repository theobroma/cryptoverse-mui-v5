import { Box, Container, Grid, Typography } from '@mui/material';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';

const ExchangesView = () => {
  return (
    <Container maxWidth="lg">
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          {/* Title */}
          <Grid item xs={12}>
            <Box sx={{ display: 'flex', justifyContent: 'center', mb: 5 }}>
              <Typography component="h2" variant="h5">
                ExchangesView
              </Typography>
            </Box>
            <Stack sx={{ width: '100%' }} spacing={2}>
              <Alert severity="warning">
                <AlertTitle>Warning</AlertTitle>
                This endpoint requires the pro plan or higher
              </Alert>
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default ExchangesView;
