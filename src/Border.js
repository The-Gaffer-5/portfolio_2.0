import React, { Component } from 'react';


class Border extends Component {
    constructor() {
        super()
        this.state = {
            big: false
        }
    }

    toggleRightGrowth = () => {
        if(this.state.big === false) {
            document.getElementById('right-header').style.width = "75px"
            this.setState({ big: true})
        }else {
            document.getElementById('right-header').style.width = "50px"
            this.setState({big: false})
        }
    }


    render() {
        return(
            <div>
                <div className="top-header">
                    <div className="header-title">Prescott Blackler</div>
                </div>
                <div className="left-header"></div>
                <div className="right-header" id="right-header">
                    <a className="linkedIn" href="https://www.linkedin.com/in/prescott-blackler-b0a498171/" target="_blank" id="linkedIn" onMouseEnter={() => this.toggleRightGrowth()} onMouseLeave = {() => this.toggleRightGrowth()}></a>
                    <a className="envelope" href="mailto:prescottblackler@gmail.com" id="envelope" onMouseEnter={() => this.toggleRightGrowth()} onMouseLeave = {() => this.toggleRightGrowth()}></a>
                    <a className="github" href="https://github.com/The-Gaffer-5" target="_blank" id="github" onMouseEnter={() => this.toggleRightGrowth()} onMouseLeave = {() => this.toggleRightGrowth()}></a>
                </div>
                <div className="bottom-header">
                    <div className="bottom-email">prescottblackler@gmail.com</div>
                </div>
            </div>
        )
    }


}

export default Border