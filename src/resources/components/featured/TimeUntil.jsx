import React, {Component} from "react";
import Slide from "react-reveal/Slide";

class TimeUntil extends Component {
    state = {
        deadline: "Dec, 16, 2020 ",
        days: "0",
        hours: "0",
        minutes: "0",
        seconds: "0"
    };
    getTimeUntil(deadline) {
        const date = new Date();
        const time = Date.parse(deadline) - Date.parse(date),
            days = date.getDay(),
            hours = date.getHours(),
            minutes = date.getMinutes(),
            seconds = date.getSeconds();
        if (time < 0) {
            console.log("sa");
        } else {
            console.log(seconds);
        }
    }
    componentDidCatch() {
        setInterval(() => this.getTimeUntil(this.state.deadline), 1000);
    }
    render() {
        return (
            <Slide left delay={1000}>
                <div className="countdown_wrapper">
                    <div className="countdown_top">Event starts in</div>
                    <div className="countdown_bottom">
                        <div className="countdown_item">
                            <div className="countdown_time">23</div>
                            <div className="countdown_tag">days</div>
                        </div>
                        <div className="countdown_item">
                            <div className="countdown_time">2</div>
                            <div className="countdown_tag">hs</div>
                        </div>
                        <div className="countdown_item">
                            <div className="countdown_time">20</div>
                            <div className="countdown_tag">mins</div>
                        </div>
                        <div className="countdown_item">
                            <div className="countdown_time">38</div>
                            <div className="countdown_tag">sec</div>
                        </div>
                    </div>
                </div>
            </Slide>
        );
    }
}

export default TimeUntil;
