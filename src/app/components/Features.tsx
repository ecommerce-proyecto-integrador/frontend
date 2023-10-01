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
                Mechanical Keys
              </Typography>
              <Typography variant="body1" color="textSecondary">
                Enjoy a tactile typing experience with our high-quality mechanical keys.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box textAlign="center">
              <AutoFixHigh sx={{ fontSize: 48, color: "indigo.500" }} />
              <Typography variant="h4" gutterBottom>
                Customizable RGB Lighting
              </Typography>
              <Typography variant="body1" color="textSecondary">
                Personalize your keyboard with our customizable RGB lighting options.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box textAlign="center">
              <Lightbulb sx={{ fontSize: 48, color: "indigo.500" }} />
              <Typography variant="h4" gutterBottom>
                Ergonomic Design
              </Typography>
              <Typography variant="body1" color="textSecondary">
                Our keyboards are designed to provide maximum comfort and reduce strain on your hands and wrists.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box textAlign="center">
              <Language sx={{ fontSize: 48, color: "indigo.500" }} />
              <Typography variant="h4" gutterBottom>
                Multiple Language Support
              </Typography>
              <Typography variant="body1" color="textSecondary">
                Our keyboards support multiple languages, making them perfect for international users.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Features;
