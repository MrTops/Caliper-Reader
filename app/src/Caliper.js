import { useEffect, useRef, useState } from "react";
import { Motion, spring } from "react-motion";
import WrappedCanvas from "./WrappedCanvas";

const Caliper = props => {
    return (<Motion style={{value: spring(props.value),}}>
        {style => {
            return (<div>
                <WrappedCanvas drawingFunction={(ctx) => {
                    const shortAxis = Math.min(ctx.canvas.width, ctx.canvas.height);
                    const height = ctx.canvas.height;
                    const width = ctx.canvas.width;
                    ctx.beginPath();
                    ctx.ellipse(width / 2, height / 2, shortAxis / 2, shortAxis / 2, 0, 0, 2 * Math.PI)
                    ctx.stroke();
                    for (let i = 1; i < 100; i++) {
                        
                    }
                    // ctx.strokeText(style.value.toFixed(2), ctx.canvas.width / 2, ctx.canvas.height / 2);
                    ctx.beginPath();
                    ctx.moveTo(width / 2, height / 2);
                    // Im gonna use some really smart math here
                    const theta = (-Math.PI / 2) + (style.value * 3.6) * Math.PI / 180;
                    const radius = shortAxis / 3.5;
                    ctx.lineTo(radius * Math.cos(theta) + shortAxis, radius * Math.sin(theta) + shortAxis / 2);
                    ctx.stroke();
                }} cleanupFunction={(ctx) => {
                    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
                }} />
            </div>);
        }}
    </Motion>);
};

export default Caliper;