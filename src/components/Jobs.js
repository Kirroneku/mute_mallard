import React from 'react';
import JOBS from '../data/jobs';

const Job = (props) => {
    const { id, title,  description, time } = props.project;
    const myId =  id + "job";
    const curId = '#' + id + "job";
    return(
        <div style={{ display: 'inline-block', width: "80%", margin: 10}}>
            <h4>{title}</h4>
            <h4>{time}</h4>
            <div id={id}>
                <p style={{"whiteSpace": "pre-line", "textAlign":"left"}}>{description}</p>
            </div>
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
                        <Job key={JOB.id} project={JOB} />
                    )
                })
            }
        </div>
    </span>
)
    


export default Jobs;