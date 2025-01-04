// import React from "react";
// import {
//   Accordion,
//   AccordionSummary,
//   AccordionDetails,
//   Typography,
//   Container,
// } from "@mui/material";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import { useNavigate } from "react-router-dom";

// const CatClassifier = () => {
//   const navigate = useNavigate()
//   return (
//     <Container maxWidth="md" style={{ marginTop: "20px" }}>
//       <Typography variant="h4" align="center" gutterBottom>
//         Cat Classifier App Policy
//       </Typography>
//       <Accordion>
//         <AccordionSummary
//           expandIcon={<ExpandMoreIcon />}
//           aria-controls="privacy-policy-content"
//           id="privacy-policy-header"
//         >
//           <Typography variant="h6">Privacy Policy</Typography>
//         </AccordionSummary>
//         <AccordionDetails>
//           <Typography variant="body1" paragraph>
//             <strong>Information Collection and Use: </strong>The Application collects information such as your device's IP
//             address, visited pages, time spent, operating system, and location
//             data for the following purposes:
//           </Typography>
//           <ul>
//             <li>
//               <strong>Geolocation Services:</strong> Providing personalized
//               content and recommendations.
//             </li>
//             <li>
//               <strong>Analytics:</strong> Analyzing user behavior to improve the
//               Application.
//             </li>
//             <li>
//               <strong>Third-Party Services:</strong> Sharing anonymized data
//               with trusted providers.
//             </li>
//           </ul>
//           <Typography variant="body1" paragraph>
//             <strong>Third Party Access: </strong>Aggregated, anonymized data may be shared with external services,
//             such as AdMob and Firebase Crashlytics. See their respective privacy
//             policies for details.
//           </Typography>
//           <Typography variant="body1" paragraph>
//             <strong>Opt-Out Rights: </strong>You can stop all data collection by uninstalling the Application.
//           </Typography>
//         </AccordionDetails>
//       </Accordion>

//       <Accordion>
//         <AccordionSummary
//           expandIcon={<ExpandMoreIcon />}
//           aria-controls="terms-conditions-content"
//           id="terms-conditions-header"
//         >
//           <Typography variant="h6">Terms & Conditions</Typography>
//         </AccordionSummary>
//         <AccordionDetails>
//           <Typography variant="body1" paragraph>
//             <strong>Usage Agreement: </strong>By downloading the Application, you agree not to modify, copy, or
//             create derivative versions of the Application. Unauthorized
//             extraction of source code is prohibited.
//           </Typography>
//           <Typography variant="body1" paragraph>
//             <strong>Responsibilities: </strong>
//             The Service Provider is not responsible for issues caused by
//             jailbreaking, rooting, or lack of internet connection. You are
//             responsible for any data charges or device-related issues.
//           </Typography>
//           <Typography variant="body1" paragraph>
//             <strong>Updates and Termination</strong>
//             Updates may be required to continue using the Application. The
//             Service Provider reserves the right to terminate the service at any
//             time.
//           </Typography>
//         </AccordionDetails>
//       </Accordion>
//       {/* Contact Section */}
//       {/* <Accordion>
//         <AccordionSummary
//           // expandIcon={< />}
//           onClick={() => navigate('/contact')}>
//           <Typography variant="h6">Contact Us</Typography>
//         </AccordionSummary>
//       </Accordion> */}
//     </Container>
//   );
// };

// export default CatClassifier;