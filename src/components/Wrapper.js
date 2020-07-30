import React from 'react';
import Header from './Header';
import Footer from './Footer';

const isMobile = window.innerWidth <= 500;

const Wrapper = (props) => 
        <Header current={props.highlight}>
            <div className="page">
                {props.children}
            </div>
    <Footer/></Header>

const PageWrap = ( props ) =>
    <div className="ui_middle" >
        <div className="ui_middlepad"  > 
            <div className="ui_section">
                    {props.children}
            </div>
        </div>
    </div>


export {Wrapper, PageWrap};