import React from "react";
//import { Link } from "react-router-dom";
import { connect } from "react-redux";
//import { ProductItemBox } from "./ProductItemBox";
import { Header } from "../Sections/Header";
import { Footer } from "../Sections/Footer";
import { Content } from "./Content";
class DetailProduct extends React.Component {
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
    componentDidMount() {
        var countDownDate = new Date("Jan 5, 2019 15:37:25").getTime();

        // Update the count down every 1 second
        var x = setInterval(function () {

            // Get todays date and time
            var now = new Date().getTime();

            // Find the distance between now and the count down date
            var distance = countDownDate - now;

            // Time calculations for days, hours, minutes and seconds
            var days = Math.floor(distance / (10000 * 60 * 60 * 24));
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);

            // Display the result in the element with id="demo"
            document.getElementById("day").innerHTML = days + "d ";
            document.getElementById("hour").innerHTML = hours + "h";
            document.getElementById("minute").innerHTML = minutes + "m ";
            document.getElementById("second").innerHTML = seconds + "s ";
            // If the count down is finished, write some text 
            if (distance < 0) {
                clearInterval(x);
                document.getElementById("demo").innerHTML = "EXPIRED";
            }
        }, 1000);
    }
    
    render() {

        return (
            <div>
                <Header/>
                <Content/>
                <Footer/>
            </div>

        )

    }
}
function mapStateToProps(state) {

    return state;
}
const connectedHomePage = connect(mapStateToProps)(DetailProduct);
export { connectedHomePage as DetailProduct } 