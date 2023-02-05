import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PersonIcon from '@mui/icons-material/Person';
import ArrowDropDownCircleIcon from '@mui/icons-material/ArrowDropDownCircle';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import '../styles/FAQ.css'

const FAQ = () => {
    return (
        <div className='container1'>
            <div className="row1">
                <div className="main1 col-md-7 col-sm-12">
                    <h3 className='my-4'>Frequently Asked Questions</h3>
                    <Accordion style={{ width: '600px', outline: 'none', border: '0px' }}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                            style={{ outline: 'none', border: '0px' }}
                        >
                            <Typography><ArrowDropDownCircleIcon style={{marginBottom:'2px'}}/> What is Campus recruitment?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Campus recruitment refers to the process whereby employers undertake an organised program of attracting and hiring students who are about to graduate from colleges, and universities. (On-campus / Off-campus / Pool-campus) The objective of campus placement is to identify the talented and qualified students before they complete their education.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion style={{ width: '600px' }}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                        >
                            <Typography><ArrowDropDownCircleIcon style={{marginBottom:'2px'}}/> How can I register myself for a particular company’s placement process?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Please get in touch with the placement cell or visit UMS. You can also refer to the company's website to get the details.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion style={{ width: '600px' }}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                        >
                            <Typography><ArrowDropDownCircleIcon style={{marginBottom:'2px'}}/> What does it mean that I have been shortlisted by the company?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                At times, the recruiter may shortlist the candidate from the willingness database sent by the placement cell.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion style={{ width: '600px' }}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                        >
                            <Typography><ArrowDropDownCircleIcon style={{marginBottom:'2px'}}/> Can a student get more than one offer?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Yes, but it has certain conditions attached to it. Please contact the placement cell for more details.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion style={{ width: '600px' }}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                        >
                            <Typography><ArrowDropDownCircleIcon style={{marginBottom:'2px'}}/> How do I communicate with a particular company?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                All communication should be routed through the Placement Cell only. Student is not allowed to contact the company's HR directly. Any correspondence from the company to the student must be forwarded to the Placement Cell for records
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion style={{ width: '600px' }}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                        >
                            <Typography><ArrowDropDownCircleIcon style={{marginBottom:'2px'}}/> Will the results be declared on the same day of the campus placements?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Results will be declared on the same day by most of the companies, but a few companies might announce the results later.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion style={{ width: '600px' }}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                        >
                            <Typography><ArrowDropDownCircleIcon style={{marginBottom:'2px'}}/> If I am awaiting results in one company, am I eligible to attend the drive of other company?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                You are eligible till the final results are declared by the earlier company. If you are selected, then it is mandatory to take the earlier offer.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </div>
                <div className="main2 col-md-4 col-sm-12">
                    <h5>Contact Information</h5>
                    <p>Division of Career Services</p>
                    <ul>
                        <li><PersonIcon style={{ marginBottom: "5px" }} /> Dr. Harpal Thethi, Professor & Senior Director</li>
                        <li><CallIcon style={{ marginBottom: "5px" }} /> 9XXXXYYYYY,
                            01824-78YYXXT</li>
                        <li><EmailIcon style={{ marginBottom: "5px" }} /> harpal.thethi@nitj.ac.in
                            director.dcs@nitj.ac.in</li>
                    </ul>
                </div>
            </div>
            <br />
        </div >
    )
}

export default FAQ