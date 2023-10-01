import { Container, Typography, Grid, Box } from "@mui/material";
import { Keyboard, AutoFixHigh, Lightbulb, Language } from "@mui/icons-material";


const Features: React.FC = () => {
  return (
    <Box py={16} bgcolor="white">
      <Container maxWidth="xl">
        <Typography variant="h3" align="center" gutterBottom>
          Features
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Box textAlign="center">
              <Keyboard sx={{ fontSize: 48, color: "indigo.500" }} />
              <Typography variant="h4" gutterBottom>
                Placeholder
              </Typography>
              <Typography variant="body1" color="textSecondary">
                Placeholder
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box textAlign="center">
              <AutoFixHigh sx={{ fontSize: 48, color: "indigo.500" }} />
              <Typography variant="h4" gutterBottom>
                Placeholder
              </Typography>
              <Typography variant="body1" color="textSecondary">
                Placeholder
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box textAlign="center">
              <Lightbulb sx={{ fontSize: 48, color: "indigo.500" }} />
              <Typography variant="h4" gutterBottom>
                Placeholder
              </Typography>
              <Typography variant="body1" color="textSecondary">
                Placeholder
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box textAlign="center">
              <Language sx={{ fontSize: 48, color: "indigo.500" }} />
              <Typography variant="h4" gutterBottom>
                Placeholder
              </Typography>
              <Typography variant="body1" color="textSecondary">
                Placeholder
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Features;
