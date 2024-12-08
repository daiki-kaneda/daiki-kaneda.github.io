import React from "react";
import { Accordion, AccordionSummary, AccordionDetails, Typography, Container } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useNavigate } from "react-router-dom";

const FaceMask = () => {
  const navigate = useNavigate()
  return (
    <Container maxWidth="md" style={{ marginTop: "20px" }}>
      <Typography variant="h4" align="center" gutterBottom>
        Face+Mask App Policy
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
          <Typography variant="body1" paragraph>
            <strong>Children:</strong> The Application does not knowingly collect data from children under 13. Parents
            are encouraged to monitor their child's app usage.
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

export default FaceMask;



// export default function FaceMask(){
//     return (
//         <Container>
//           <Typography variant="h6" component="h1" gutterBottom>
//             Privacy Policy
//           </Typography>
//           <Typography variant="body1" gutterBottom>
//             This privacy policy applies to the Face+Mask app (hereby referred to as "Application") for mobile devices that was
//             created by Daiki Kaneda (hereby referred to as "Service Provider") as a Free service. This service is intended for use
//             "AS IS".
//           </Typography>
          
//           <Typography variant="h6" component="h2" gutterBottom>
//             What information does the Application obtain and how is it used?
//           </Typography>
//           <Typography variant="body1" gutterBottom>
//             The Application does not obtain any information including face data when you download and use it. Registration is not
//             required to use the Application.
//           </Typography>
          
//           <Typography variant="h6" component="h2" gutterBottom>
//             Does the Application collect precise real time location information of the device?
//           </Typography>
//           <Typography variant="body1" gutterBottom>
//             This Application does not collect precise information about the location of your mobile device.
//           </Typography>
          
//           <Typography variant="h6" component="h2" gutterBottom>
//             Do third parties see and/or have access to information obtained by the Application?
//           </Typography>
//           <Typography variant="body1" gutterBottom>
//             Since the Application does not collect any information, no data is shared with third parties.
//           </Typography>
          
//           <Typography variant="h6" component="h2" gutterBottom>
//             What are my opt-out rights?
//           </Typography>
//           <Typography variant="body1" gutterBottom>
//             You can stop all collection of information by the Application easily by uninstalling it. You may use the standard
//             uninstall processes as may be available as part of your mobile device or via the mobile application marketplace or
//             network.
//           </Typography>
          
//           <Typography variant="h6" component="h2" gutterBottom>
//             Children
//           </Typography>
//           <Typography variant="body1" gutterBottom>
//             The Application is not used to knowingly solicit data from or market to children under the age of 13.
//           </Typography>
//           <Typography variant="body1" gutterBottom>
//             The Service Provider does not knowingly collect personally identifiable information from children. The Service
//             Provider encourages all children to never submit any personally identifiable information through the Application
//             and/or Services. The Service Provider encourage parents and legal guardians to monitor their children's Internet usage
//             and to help enforce this Policy by instructing their children never to provide personally identifiable information
//             through the Application and/or Services without their permission. If you have reason to believe that a child has
//             provided personally identifiable information to the Service Provider through the Application and/or Services, please
//             contact the Service Provider (piyomathfeedback@gmail.com) so that they will be able to take the necessary actions. You
//             must also be at least 16 years of age to consent to the processing of your personally identifiable information in your
//             country (in some countries we may allow your parent or guardian to do so on your behalf).
//           </Typography>
          
//           <Typography variant="h6" component="h2" gutterBottom>
//             Security
//           </Typography>
//           <Typography variant="body1" gutterBottom>
//             The Service Provider is concerned about safeguarding the confidentiality of your information. However, since the
//             Application does not collect any information, there is no risk of your data being accessed by unauthorized
//             individuals.
//           </Typography>
          
//           <Typography variant="h6" component="h2" gutterBottom>
//             Changes
//           </Typography>
//           <Typography variant="body1" gutterBottom>
//             This Privacy Policy may be updated from time to time for any reason. The Service Provider will notify you of any
//             changes to their Privacy Policy by updating this page with the new Privacy Policy. You are advised to consult this
//             Privacy Policy regularly for any changes, as continued use is deemed approval of all changes.
//           </Typography>
          
//           <Typography variant="body1" gutterBottom>
//             This privacy policy is effective as of 2024-06-18
//           </Typography>
          
//           <Typography variant="h6" component="h2" gutterBottom>
//             Your Consent
//           </Typography>
//           <Typography variant="body1" gutterBottom>
//             By using the Application, you are consenting to the processing of your information as set forth in this Privacy
//             Policy now and as amended by the Service Provider.
//           </Typography>
          
//           <Typography variant="h6" component="h2" gutterBottom>
//             Contact Us
//           </Typography>
//           <Typography variant="body1" gutterBottom>
//             If you have any questions regarding privacy while using the Application, or have questions about the practices,
//             please contact the Service Provider via email at piyomathfeedback@gmail.com.
//           </Typography>
          
         
//         </Container>
//       );
    
// }