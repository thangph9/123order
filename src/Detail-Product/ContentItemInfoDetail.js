import React from "react";
//import { Link } from "react-router-dom";
import { connect } from "react-redux";

class ContentItemInfoDetail extends React.Component {
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
            <div className="container item-info-detail border-top-0">
                <ul>
                    <li>Choose from 16 million colors and shades of white to instantly change the look and atmosphere of your room. Control remotely with your smartphone or tablet, create custom scenes and unleash your creativity</li>
                    <li>Voice control: control your Philips hue lights with your voice using Alexa, Apple homekit, or Google assistant. Pair it for home automation with your existing Nest or Samsung SmartThings system</li>
                    <li>Lifetime: 25, 000 hours or 23 years with normal use. To install, simply screw in the smart bulbs into your desired light location, download the hue mobile app and pair your hue bridge. Control smart-bulb-equipped lamps and overhead lights
      via the Philips hue app. Ideal for your favorite Ceiling Fan lights, floor lamps, table lamps, Pendant lights, and more throughout your home</li>
                    <li>Easily expand your Lighting system with accessories (sold separately), such as a hue dimmer switch, hue tap, or hue motion sensor</li>
                    <li>Comes with 2 Philips hue white and Color ambiance a19 60W energy Star certified LED smart bulbs (able to fit most lamps, overhead lights, and 4-inch recessed cans), Philips hue hub and three-year warranty</li>
                </ul>
            </div>

        )

    }
}
function mapStateToProps(state) {

    return state;
}
const connected = connect(mapStateToProps)(ContentItemInfoDetail);
export { connected as ContentItemInfoDetail } 