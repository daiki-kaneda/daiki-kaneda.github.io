import { Box,Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

function ErrorPage() {
  const navigate = useNavigate();
  return (
    <Box sx={{ textAlign: 'center', mt: 4 }}>
      <Typography variant="h2" component="div">
        404
      </Typography>
      <Typography variant="h5" component="div" sx={{ mb: 2 }}>
        Page Not Found
      </Typography>
      <Button onClick={()=>navigate('/contact')} variant="contained" color="primary">
        Go to Home
      </Button>
    </Box>
  );
}

export default ErrorPage;