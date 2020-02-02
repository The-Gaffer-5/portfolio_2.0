import React, { Component } from 'react'
import {firstScroll, addParallaxing, revertToClosed, nameOpacity} from './AnimationDetails'


class FirstSection extends Component {
    constructor() {
        super()
        this.state = {
            top: true
        }          
    }
    componentDidMount() {
        window.addEventListener('scroll', this.scrollControl)
        setTimeout(() => {
            document.getElementById('first-section').style.left = 0
        },200)
        setTimeout(() => {
            nameOpacity();
        },2700);        
    }
    scrollControl = () => {
        let offset = window.pageYOffset - 500
        const scrollNumber = window.scrollY
        if(scrollNumber > 10 && scrollNumber < 500) {
            firstScroll()
        } else if(scrollNumber > 499) {
            addParallaxing(offset)
        } else {
            revertToClosed()
        }
    }
    render() {
        return(
            <div>
                <div className="first-section" id="first-section">
                    <div className="hej-wrapper" id="hej-wrapper">
                        <div className="hej" id="name">HEJ</div>
                        <svg id="logo" width="215" height="131" viewBox="0 0 215 131" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.549988 0H19.75V41.55H67.75V0H86.95V105H67.75V59.55H19.75V105H0.549988V0Z" stroke="#BBBBBB" stroke-width="5"/>
                            <path d="M110.12 0H177.32V18.6H129.77V40.95H166.67V59.55H129.77V86.4H178.82V105H110.12V0Z" stroke="#BBBBBB" stroke-width="5"/>
                            <path d="M183.224 114.3C187.624 114.3 190.724 113.35 192.524 111.45C194.424 109.55 195.374 106.2 195.374 101.4V0H214.574V105.6C214.574 114.4 212.474 120.8 208.274 124.8C204.074 128.8 198.074 130.8 190.274 130.8H184.874L183.224 114.3Z" stroke="#BBBBBB" stroke-width="5"/>
                        </svg>
                    </div>
                    <div className='reveal-container' id="reveal-container">
                        <div className="blurb-line-1" id="blurb-line-1">AMERIKANSK WEBBUTVECKLARE</div>
                        <div className="the-box-1" id="the-box-1"></div>
                        <div className="blurb-line-2" id="blurb-line-2">SOM VILL VARA I <span className="sverige-underline">SVERIGE</span></div>
                        <div className="the-box-2" id="the-box-2"></div>
                        <div className="yellow-line-wrapper">
                            <div className="yellow-line" id="yellow-line"></div>
                        </div>
                    </div>
                    <div className="left-side" id="left-side"></div>                
                    <div className="right-side" id="right-side"></div>
                    <div className="scroll-down-wrapper" id="scroll-down-wrapper">
                        <div className="scroll-word">Scroll</div>
                        <div className="scroll-down-arrow"></div>
                    </div>
                </div>
                <div className="first-section-mobile">
                    <div className="hej-mobile">HEJ</div>
                    <div className='blurb-line-1-mobile'>AMERIKANSK WEBBUTVECKLARE</div>
                    <div className='blurb-line-2-mobile'>SOM VILL VARA I SVERIGE</div>
                </div>
            </div>
        )
    }
}

export default FirstSection