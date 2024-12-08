import React from "react";
import { Accordion, AccordionSummary, AccordionDetails, Typography, Container } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useNavigate } from "react-router-dom";

const PiyoMath = () => {
  const navigate = useNavigate()
  return (
    <Container maxWidth="md" style={{ marginTop: "20px" }}>
      <Typography variant="h4" align="center" gutterBottom>
        PiyoMath App Policy
      </Typography>

      {/* Privacy Policy */}
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h6">Privacy Policy</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body1">
            <strong>Information Collection and Use:</strong> The Application collects data such as your device's IP
            address, visited pages, and operating system. The Service Provider may use this information for providing
            notices and marketing promotions. The Application does not collect precise location data.
          </Typography>
          <Typography variant="body1" paragraph>
            <strong>Third Party Access:</strong> Aggregated, anonymized data may be shared with trusted third-party
            service providers under strict adherence to this policy.
          </Typography>
          <Typography variant="body1" paragraph>
            <strong>Opt-Out Rights:</strong> Uninstall the app to stop data collection. Contact
            piyomathfeedback@gmail.com to request data deletion.
          </Typography>
          <Typography variant="body1">
            <strong>Security:</strong> The Service Provider implements safeguards to protect your information.
          </Typography>
        </AccordionDetails>
      </Accordion>

      {/* Terms and Conditions */}
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h6">Terms & Conditions</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body1">
            <strong>Usage:</strong> By downloading the Application, you agree to avoid unauthorized modifications or
            reverse engineering. Trademarks and intellectual property remain with the Service Provider.
          </Typography>
          <Typography variant="body1" paragraph>
            <strong>Updates and Charges:</strong> The Service Provider may update or charge for services with prior
            notice. You are responsible for maintaining your device's security and ensuring an active internet
            connection.
          </Typography>
          <Typography variant="body1" paragraph>
            <strong>Responsibility:</strong> The Service Provider is not liable for loss due to reliance on
            third-party-provided information or for issues arising from your device's condition.
          </Typography>
          <Typography variant="body1">
            <strong>Changes:</strong> The Service Provider may update the terms and terminate the Application's use at
            any time.
          </Typography>
        </AccordionDetails>
      </Accordion>
            {/* Contact Section */}
            {/* <Accordion>
        <AccordionSummary 
       // expandIcon={< />}
        onClick={()=>navigate('/contact')}>
          <Typography variant="h6">Contact Us</Typography>
        </AccordionSummary>
      </Accordion> */}
    </Container>
  );
};

export default PiyoMath;
