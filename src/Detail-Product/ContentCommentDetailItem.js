import React from "react";
//import { Link } from "react-router-dom";
import { connect } from "react-redux";

class ContentCommentDetailItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            login: true,
            loading: false,
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    handleSubmit() {
        this.setState({
            login: false
        })
        console.log("Hello World")
    }
    handleChange(e) {
        this.setState({
            login: true,

        })
    }

    render() {

        return (
            <div className="conten1 border-bottom  py-3">
                <div>
                    <span className="fa fa-star checked pt-1" />
                    <span className="fa fa-star checked pt-1" />
                    <span className="fa fa-star checked pt-1" />
                    <span className="fa fa-star pt-1" />
                    <span className="fa fa-star pt-1" />
                    <p className="ml-3 ttl">Love. We paired these up with our Alexa and abcocidhciececoeceocoec...</p>
                </div>
                <div>
                    <p className="user"> By K. L. Phan on February 07, 2018</p>
                </div>
                <div id="module" className="text-right">
                    <p className="collapse" id="collapseExample" aria-expanded="true">
                        Play with light and choose from 16 million colors to instantly change the look and atmosphere of your room. Set the scene effortlessly with one touch of a button. Use a favorite photo and relive that special moment with splashes of light. Combining energy
                        efficiency with intuitive controls the Philips hue white and color ambiance a19 smart bulb starter kit changes the way you light your moments at home. Create light schedules to ease you to sleep, wake you up and ensure you never come
                        home to a dark house. Play with light and choose from 16 million colors to instantly change the look and atmosphere of your room. Set the scene effortlessly with one touch of a button. Use a favorite photo and relive that special moment
                        with splashes of light. Combining energy efficiency with intuitive controls the Philips hue white and color ambiance a19 smart bulb starter kit changes the way you light your moments at home. Create light schedules to ease you to sleep,
                        wake you up and ensure you never come home to a dark house.
              </p>
                    <a role="button" className="collapsed" data-toggle="collapse" href="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                    </a>
                </div>
            </div>


        )

    }
}
function mapStateToProps(state) {

    return state;
}
const connected = connect(mapStateToProps)(ContentCommentDetailItem);
export { connected as ContentCommentDetailItem } 