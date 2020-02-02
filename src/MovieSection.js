import React, { Component } from 'react'

class MovieSelection extends Component {

    componentDidMount() {
        window.addEventListener('scroll', this.scrollTrigger)
    }

    scrollTrigger = () => {
        const theScrollCount = window.scrollY
        if(theScrollCount > 1000) {
            document.getElementById('embedded-video').style.opacity = 1
        } else {
            document.getElementById('embedded-video').style.opacity = 0
        }
    }

    render() {
        return (
        <div className='next-section'>
            <iframe className="embedded-video" id="embedded-video" src="https://www.youtube.com/embed/3_GDfUOIeJc?showinfo=0&rel=0&cc_load_policy=1&theme=light&fs=0" frameborder="0"></iframe>
        </div>
        )
    }
}

export default MovieSelection