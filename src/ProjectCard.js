import React, { Component } from 'react'
import {hoverToggleEnter, hoverToggleLeave} from './AnimationDetails'
import Modal from './Modal'



class ProjectCard extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.project.id,
            id2: this.props.project.id2,
            btnId: this.props.project.btnId,
            idForModal: this.props.project.idForModal,
            name: this.props.project.name,
            cardId: this.props.project.cardId,
            description: this.props.project.description,
            hoverToggle: false
        }
    }

    toggleCardOver = () => {
        let viewWidth = window.visualViewport.width
        const theName = this.state.name
        const theId = this.state.id
        const theId2 = this.state.id2
        const siteButton = this.state.btnId
        const gitButton = "visit-github"
        if(viewWidth > 501){
            if(this.state.hoverToggle === false) {
                hoverToggleEnter(theName, theId, theId2, siteButton, gitButton)
                this.setState({hoverToggle: true})
            } else {
                hoverToggleLeave(theName, theId, theId2, siteButton, gitButton)
                this.setState({hoverToggle: false})
            }
        }
    }
    render() {
        return (
            <div className="main-card-div">
                <div className="each-card" id={this.props.project.cardID}>
                    <div className="project-card">
                        <div className="card-text-wrapper">
                            <div className="project-name" id={this.props.project.name} >{this.props.project.name}</div>
                            <div className="project-tools" id={this.props.project.id2}>{this.props.project.tools}</div>
                            <div className="project-description" id={this.props.project.id}> {this.props.project.description}</div>
                        </div>
                    </div>
                    <a className="picture-card" onMouseEnter={() => this.toggleCardOver()} onMouseLeave={() => this.toggleCardOver()} href={this.props.project.url} target="_blank" style={{backgroundImage: 'url(' + this.props.project.img + ')'}} ></a>
                </div>
                <div className="each-card-mobile">
                    <div className="picture-card-mobile" onClick={(e) => this.props.openTheModal(e)} id={this.props.project.idForModal} style={{backgroundImage: 'url(' + this.props.project.img + ')'}} ></div>
                </div>

            </div>
        )
    }
}

export default ProjectCard