import React from 'react';
import JOBS from '../data/jobs';

const Job = (props) => {
    const { title,  description, time } = props.project;

    return(
        <div style={{ display: 'inline-block', width: "80%", margin: 10}}>
            <h4>{title}</h4>
            <h4>{time}</h4>
            <p style={{"white-space": "pre-line", "textAlign":"left"}}>{description}</p>
            <hr></hr>
        </div>
    )
}

const Jobs = () => (
    <span>
        <div>
            
            {
                JOBS.map(JOB => {
                    return (
                        <Job key={JOB.id} project={JOB}/>
                    )
                })
            }
        </div>
    </span>
)
    


export default Jobs;