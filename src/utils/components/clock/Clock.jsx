/* canvas 时钟 组件*/
import React, { Component } from 'react';

import { clock_follow } from './canvas_clock';

class Clock extends Component{

    componentDidMount() {
        var clockd5_={
            "indicate": true,
            "indicate_color": "#222",
            "dial1_color": "#666600",
            "dial2_color": "#81812e",
            "dial3_color": "#9d9d5c",
            "time_add": 1,
            "time_24h": true,
            "date_add":3,
            "date_add_color": "#999",
        };
        var c = document.getElementById('clock5_');
        var cns5_ = c.getContext('2d');
        clock_follow(200,cns5_,clockd5_);
    }

    render() {
        return (
            <canvas id="clock5_" width="200px" height="200px"></canvas>
        )
    }
}

export default Clock;