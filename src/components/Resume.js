import React from 'react';
import resumePDF from '../assets/Jialin-CV.pdf';

const Resume = ( ) => { 
    console.log(resumePDF);

    return (
        <div style={{margin:"auto"}}>
            <div className="ui_section_title">
                <h5>Resume</h5>
            </div>
            <div style={{marginTop: "1rem", marginBottom: "1rem"}}>
                <iframe src="https://drive.google.com/file/d/1BpT3zv2yIXT2VRQWocMmgLtpGtQJoslW/preview" width="900" height="1100" style={{border:"solid 1px lightgrey"}}></iframe>

            </div>
            <a href={resumePDF} download><button class="btn"><i class="fa fa-download"></i>  Download Resume  </button></a>

        </div>

    )
}


export default Resume;