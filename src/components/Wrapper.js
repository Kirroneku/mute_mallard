import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Wrapper = (props) => 
        <Header current={props.highlight}>
            <div className="page">
                <div className="page_middle" >
                    {props.children}
                </div>
            </div>
    <Footer/></Header>

export default Wrapper;