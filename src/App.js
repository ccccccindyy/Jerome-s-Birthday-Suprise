import React, {Component} from 'react';
import './App.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import jer0 from "./assets/jer0.png"
import jer1 from "./assets/jer1.png"
import jer2 from "./assets/jer2.png"
import cranky from "./assets/cranky.png"
import Modal from "react-modal";

export class App extends Component{
    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
        };

        this.handleOpenSurprise = this.handleOpenSurprise.bind(this);
        this.handleCloseSurprise = this.handleCloseSurprise.bind(this);
    }

    handleOpenSurprise () {
        this.setState({ showModal: true });
    }


    handleCloseSurprise () {
        this.setState({ showModal: false });
    }

    render() {

        return (
        <div className="App">
            <section className="App-header">
                    <h3>Jerome is</h3>
                    <h1>34</h1>
                    <p color="pink">💋🎂💋Happy birthday my dearest Jer! 💋🎂💋</p>
                    <button className="surprise" onClick={this.handleOpenSurprise}>💖💖See the Surprise!!💖💖</button>
                    <div>
                        <Modal
                            className = ".modal"
                            isOpen={this.state.showModal}
                            onRequestClose={this.handleCloseSurprise}
                        >
                            <img alt="The Cranky Cat" src={cranky} height={200}  />
                            <p>Do you remember me? The cranky cat.. I am the 4th kitten between my siblings. I am a Jer Jer cat Boy! </p>
                            <p>I am arriving your home by the end of OCTOBER!</p>
                            <p>You chose me last week, so I am your birthday gift and master from now on!</p>
                            <p>I wish you a happy birthday!! Meowwwww</p>
                            <p>🐱Yours, new master🐱</p>
                            <button onClick={this.handleCloseSurprise} >Close Surprise</button>
                        </Modal>
                    </div>
                    <Carousel autoPlay className="carousel">
                        <div>
                            <img alt="" src={jer0}/>
                            <p className="legend">Legend 1</p>
                        </div>
                        <div>
                            <img src={jer1} alt=""/>
                            <p className="legend">Legend 2</p>
                        </div>
                        <div>
                            <img src={jer2} alt=""/>
                            <p className="legend">Legend 3</p>
                        </div>
                    </Carousel>
                </section>
            </div>
        );
    }
}

export default App;
