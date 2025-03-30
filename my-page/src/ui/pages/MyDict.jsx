import React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Container,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const MyDict = () => {
  return (
    <Container maxWidth="md" style={{ marginTop: "20px" }}>
      <Typography variant="h4" align="center" gutterBottom>
        MYDICT App Policy
      </Typography>
      
      {/* Privacy Policy */}
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="privacy-policy-content"
          id="privacy-policy-header"
        >
          <Typography variant="h6">Privacy Policy</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body1" paragraph>
            <strong>Information Collection and Use:</strong> MYDICT does not collect, store, or share any user data.
          </Typography>
          <Typography variant="body1" paragraph>
            <strong>Third-Party Access:</strong> This application does not integrate with third-party services such as analytics or advertisements.
          </Typography>
          <Typography variant="body1" paragraph>
            <strong>User Rights:</strong> Since no data is collected, there are no data access or deletion requests necessary.
          </Typography>
        </AccordionDetails>
      </Accordion>
      
      {/* Terms & Conditions */}
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="terms-conditions-content"
          id="terms-conditions-header"
        >
          <Typography variant="h6">Terms & Conditions</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body1" paragraph>
            <strong>Usage Agreement:</strong> MYDICT is provided for English language learning through AI-based dictation exercises. Users may use the generated content freely without restrictions.
          </Typography>
          <Typography variant="body1" paragraph>
            <strong>Paid Features:</strong> MYDICT offers in-app purchases for tickets required to generate dictation problems. Please note that purchased items are non-refundable, and no compensation will be provided if the service is discontinued.
          </Typography>
          <Typography variant="body1" paragraph>
            <strong>Service Termination:</strong> The developer reserves the right to modify or terminate the service at any time without prior notice.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Container>
  );
};

export default MyDict;