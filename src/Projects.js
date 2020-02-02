import React, { Component } from 'react'
import projectDatabase from './ProjectDatabase'
import ProjectCard from './ProjectCard'


class Projects extends Component {
    constructor(){
        super()
    }

    componentDidMount() {
        window.addEventListener('scroll', this.onscroll)
    }

    onscroll = () => {
        let viewWidth = window.visualViewport.width
        let scrollOffset = window.scrollY
        let parallaxScroll = scrollOffset - 1400
        if(viewWidth > 501){
            if(scrollOffset > 1400) {
                document.getElementById('projects-section').style.transform = "matrix(1, 0, 0, 1, 0, -" + parallaxScroll/3 + ")"
                if(scrollOffset > 1600) {
                    let theDelay = 400
                    projectDatabase.forEach(project => {
                        theDelay = theDelay + 200
                        const wholeDelay = theDelay + 'ms'
                        const theId = project.cardID
                        document.getElementById(theId).style.opacity = 1
                        document.getElementById(theId).style.transitionDelay = wholeDelay 
                    });
                }
            } 
        }
    }

    render() {
        return (
            <div>
                <div className="projects-section" id="projects-section">
                    <div className="projects-title">PROJEKT</div>
                    <div className="project-wrapper" >
                        {projectDatabase.map(project => 
                            <ProjectCard key={project.id} project={project} />
                        )}
                    </div>
                </div>
                <div className="projects-section-mobile" id="projects-section-mobile">
                    <div className="projects-title-mobile">PROJEKT</div>
                    <div className="project-wrapper-mobile" >
                        {projectDatabase.map(project => 
                            <ProjectCard openTheModal={(e) => this.props.openTheModal(e)} key={project.id} project={project} />
                        )}
                    </div>
                </div>
                
            </div>
        )
    }
}

export default Projects