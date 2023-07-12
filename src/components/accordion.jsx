import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "./accordion.css";

function SimpleAccordion() {
  return (
    <div className="accordiondiv">
      <Accordion sx={{backgroundColor: "white"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{color: "rgba(255, 255, 255, 0.87)"}}/>}
          aria-controls="panel1a-content"
          id="panel1a-header"
          sx={{
            backgroundColor: "#355D71",
            color: "rgba(255, 255, 255, 0.87)",
          }}
        >
          <Typography sx={{fontFamily: 'Hind', fontWeight: "bold"}}>My Photos Don't Have GPS Coordinates</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{fontFamily: 'Hind'}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{backgroundColor: "white"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{color: "rgba(255, 255, 255, 0.87)"}}/>}
          aria-controls="panel2a-content"
          id="panel2a-header"
          sx={{
            backgroundColor: "#355D71",
            color: "rgba(255, 255, 255, 0.87)",
          }}
        >
          <Typography sx={{fontFamily: 'Hind', fontWeight: "bold"}}>My Dive Site Isn't On The Map</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{fontFamily: 'Hind'}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{backgroundColor: "whites"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{color: "rgba(255, 255, 255, 0.87)"}}/>}
          aria-controls="panel3a-content"
          id="panel3a-header"
          sx={{
            backgroundColor: "#355D71",
            color: "rgba(255, 255, 255, 0.87)",
          }}
        >
          <Typography sx={{fontFamily: 'Hind', fontWeight: "bold"}}>How Do I Search For A Specific Animal?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{fontFamily: 'Hind'}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default SimpleAccordion;
