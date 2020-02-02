import React, { Component } from 'react';
import logo from './logo.svg';
import FirstSection from './FirstSection'
import Border from './Border'
import './App.css';
import BioSection from './BioSection';
import Projects from './Projects';
import projectDatabase from './ProjectDatabase'
import forceLoad from './index'
import Modal from './Modal'

class App extends Component {
  constructor() {
    super()
    this.state = {
      loading: true,
      modalOpen: ''
    }
  }
  componentDidMount() {
    forceLoad().then(() => this.setState({ loading: false }));
  }

  openTheModal = (e) => {
    let clickTarget = e.target.id
    this.setState({modalOpen: clickTarget})
    projectDatabase.forEach(project => {
      if( clickTarget === project.idForModal) {
        this.setState({modalOpen: project})
      }
    });
  }
  closeTheModal = () => {
    this.setState({modalOpen: ''})
  }

  render() {
    const { loading } = this.state;
    if(loading) {
      return null;
    }

    return (
      <div className="App">
        <Border />
        <FirstSection />
        <BioSection />
        <Projects openTheModal={(e) => this.openTheModal(e)} />
        <Modal closeTheModal={() => this.closeTheModal()} modalOpen={this.state.modalOpen} description={this.state.modalOpen.description} url={this.state.modalOpen.url} name={this.state.modalOpen.name} tools={this.state.modalOpen.tools}/>
        <div className="bio-pic"></div>
        <div className="contact-info">Hoppas vi hörs snart!</div>
      </div>
    );
  }
  }


export default App;


