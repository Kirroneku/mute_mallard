import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Wrapper = (props) => 
        <Header current={props.highlight}>
            <div className="page">
                <div className="ui_middle" >
                    <div className="ui_middlepad"  > 
                        <div className="ui_section">
                                {props.children}
                        </div>
                    </div>
                </div>
            </div>
    <Footer/></Header>

export default Wrapper;