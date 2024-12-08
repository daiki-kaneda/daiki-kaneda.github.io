import React from 'react';
import { Typography, Box, Link } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';

export default function Contact(){
  return (
    <Box display="flex">
      <EmailIcon color="primary" sx={{ mr: 1 }} />
      <Link href="mailto:piyomathfeedback@gmail.com" variant="body1" color="inherit">
        email
      </Link>
    </Box>
  );
};

// export default ContactInfo;