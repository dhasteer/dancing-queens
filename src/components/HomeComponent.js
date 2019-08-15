import React, { Component } from 'react';
import Center from 'react-center';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default class Home extends Component {
  render() {
    return (
        <div>
            <Center>
                <div className="col-md-6">
                    <br/><br/>
                    <Carousel showArrows={true}>
                        <div>
                            <img src={require('../assets/team-dancingqueens.png')} alt="Dancing Queens Team"/>
                            <p className="legend">Student Team</p>
                        </div>
                        <div>
                            <img src={require('../assets/trina-action-dancingqueens.png')} alt="Trina Action Shot"/>
                            <p className="legend">Coach Trina</p>
                        </div>
                        <div>
                            <img src={require('../assets/divija-action-dancingqueens.png')} alt="Divija Action Shot"/>
                            <p className="legend">Coach Divija</p>
                        </div>
                    </Carousel>
                </div>
            </Center>
            <br/>
            <Center>
                <div className="col-md-7">
                    <div id="background">
                        <br/>
                        <div id="text">
                            <Center>
                                <h2>Testimonials</h2>
                            </Center>
                            <br/>
                            <h5>
                                <i>I love the "pay it forward" concept. The sessions are serious enough so that the kids are learning, but interactive enough so that the kids are having fun. Kids did not go through the standard "break in" time period we have experienced when joining new classes. [It] Complements other classes and coaching that the kids have taken.</i>
                            </h5>
                            <h5>
                                <span className="fa fa-star fa-lg"></span>
                                <span className="fa fa-star fa-lg"></span>
                                <span className="fa fa-star fa-lg"></span>
                                <span className="fa fa-star fa-lg"></span>
                                <span className="fa fa-star fa-lg"></span>
                                {' '}~ <b>Fremont Chess Parent</b> 
                            </h5>
                            <br/>
                            <h5>
                                <i>We like the friendly environment and [are] blessed to learn chess from talented coaches.</i>
                            </h5>
                            <h5>
                                <span className="fa fa-star fa-lg"></span>
                                <span className="fa fa-star fa-lg"></span>
                                <span className="fa fa-star fa-lg"></span>
                                <span className="fa fa-star fa-lg"></span>
                                <span className="fa fa-star fa-lg"></span>
                                {' '}~ <b>Saratoga Chess Parent</b> 
                            </h5>
                        </div>
                        <br/>
                    </div>
                    <br/><br/>
                    <div id="background">
                        <br/>
                        <div id="text">
                            <br/>
                            <Center>
                                <h2>History</h2>
                            </Center>
                            <br/>
                            <h5>
                                When BayAreaChess wanted to form an All-Girls Class, Divija Hasteer (picture 3) and Trina Chatterjee (picture 2) were eager to assist in the initiative, for chess is not a popular game among girls. They spread their love of chess to girl beginners every weekend. When BAC no longer offered these classes, Divija and Trina took matters into their hands. They were determined to "pay it forward," and, thus was born the Dancing Queens Chess Academy.                                                        
                            </h5>
                            <br/>
                            <Center>
                                <h2>Mission</h2>
                            </Center>
                            <br/>
                            <h5>
                                Since the primary goal of Dancing Queens Chess Academy is to spark a passion for chess in young female players, while developing integral problem-solving and discipline skills, all classes are free of charge. Dancing Queens also strives to make a difference in the world through conducting its classes. Therefore, Dancing Queens encourages its supporters to donate in place of a class fee; all proceeds will go toward a charity of choice.                                                        
                            </h5>
                            <br/>
                            <Center>
                                <h2>Current Status</h2>
                            </Center>
                            <br/>
                            <h5>
                                Unfortunately, our coaching team is heading off to college, which makes operating classes quite cumbersome. We are on hiatus at the moment.
                            </h5>
                        </div>
                        <br/>
                    </div>
                </div>     
            </Center>
            <br/><br/><br/>
        </div>
    );
  }
}