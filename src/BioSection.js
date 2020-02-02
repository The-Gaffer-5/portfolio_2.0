import React, { Component } from 'react'

class BioSection extends Component {

    componentDidMount() {
        window.addEventListener('scroll', this.scroller)
    }
    scroller = () => {
        let theScroll = window.scrollY
        let scrollOffset = window.scrollY - 1100
        if( theScroll > 1100) {
            document.getElementById('skill-box').style.transform = "matrix(1, 0, 0, 1, 0, -" + scrollOffset/2.5 + ")"
        }
    }


    render() {
        return(
            <div>
                <div className="bio-section">
                    <div className="bio-title">OM MIG</div>
                    <div className="bio-pitch"> En full-stack webbutvecklare som letar efter ett team<span className="period">.</span></div>
                    <div className="bio-paragraph"> Som en kreativ person med ett öga för stil kan jag ge ett nytt perspektiv till ditt team. Arbetsgruppens framgång och harmoni är min högsta prioritet.</div>
                    <div className="skill-box" id="skill-box">
                        <div className="skill-column">
                            <div className="column-title">Frontend</div>
                            <div className="list-item">HTML / CSS / Javascript</div>
                            <div className="list-item">React / Redux</div>
                            <div className="list-item">Vue / Vuex</div>
                            <div className="list-item">Angular</div>
                            <div className="list-item">jQuery</div>
                        </div>
                        <div className="skill-column">
                            <div className="column-title">Dev Tools</div>
                            <div className="list-item">Github</div>
                            <div className="list-item">npm</div>
                            <div className="list-item">Yarn</div>
                            <div className="list-item">Visual Studio Code</div>
                            <div className="list-item">Bootstrap</div>
                        </div>
                        <div className="skill-column">
                            <div className="column-title">Backend</div>
                            <div className="list-item">AWS</div>
                            <div className="list-item">Serverless</div>
                            <div className="list-item">Node.js</div>
                            <div className="list-item">NoSQL</div>
                            <div className="list-item">MongoDB</div>
                        </div>
                        <div className="skill-column">
                            <div className="column-title">Intressen</div>
                            <div className="list-item">Matlagning</div>
                            <div className="list-item">Skogen</div>
                            <div className="list-item">Svenska</div>
                            <div className="list-item">Tid med vänner</div>
                        </div>
                    </div>
                </div>
                <div className="bio-section-mobile">
                    <div className="bio-title-mobile">OM MIG</div>
                    <div className="bio-pitch-mobile"> En full-stack webbutvecklare som letar efter ett team<span className="period">.</span></div>
                    <div className="bio-paragraph-mobile"> Som en kreativ person med ett öga för stil kan jag ge ett nytt perspektiv till ditt team. Arbetsgruppens framgång och harmoni är min högsta prioritet.</div>
                    <div className="skill-box-mobile" id="skill-box-mobile">
                        <div className="skill-column-mobile">
                            <div className="column-title-mobile">Frontend</div>
                            <div className="list-item-mobile">HTML / CSS / Javascript</div>
                            <div className="list-item-mobile">React / Redux</div>
                            <div className="list-item-mobile">Vue / Vuex</div>
                            <div className="list-item-mobile">Angular</div>
                            <div className="list-item-mobile">JQuery</div>
                        </div>
                        <div className="skill-column-mobile">
                            <div className="column-title-mobile">Dev Tools</div>
                            <div className="list-item-mobile">Terminal</div>
                            <div className="list-item-mobile">Github</div>
                            <div className="list-item-mobile">Visual Studio Code</div>
                            <div className="list-item-mobile">Node.js</div>
                            <div className="list-item-mobile">Bootstrap</div>
                        </div>
                        <div className="skill-column-mobile">
                            <div className="column-title-mobile">Backend</div>
                            <div className="list-item-mobile">MongoDB</div>
                            <div className="list-item-mobile">NoSQL</div>
                            <div className="list-item-mobile">Serverless</div>
                            <div className="list-item-mobile">AWS</div>
                        </div>
                        <div className="skill-column-mobile">
                            <div className="column-title-mobile">Intressen</div>
                            <div className="list-item-mobile">Skogen</div>
                            <div className="list-item-mobile">Svenska</div>
                            <div className="list-item-mobile">Tid med vänner</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default BioSection