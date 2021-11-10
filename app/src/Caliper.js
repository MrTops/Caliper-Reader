import { useEffect, useRef, useState } from "react";
import { Motion, spring } from "react-motion";
import WrappedCanvas from "./WrappedCanvas";

const Caliper = props => {
    return (<Motion style={{value: spring(props.value || 0),}}>
        {style => {
            return (<div>
                <WrappedCanvas drawingFunction={(ctx) => {
                    /**
                     * Dial Drawer
                     */
                    var height = ctx.canvas.height; // This is the height/width of what I want the 
                    var width = ctx.canvas.width;
                    var shortAxis = Math.min(width, height);
                    ctx.beginPath();
                    ctx.ellipse(width / 2, height / 2, shortAxis / 2, shortAxis / 2, 0, 0, 2 * Math.PI)
                    ctx.stroke();
                    ctx.strokeText(".001", width / 2, height / 1.75);
                    ctx.textAlign = 'center';
                    ctx.textBaseline = 'middle';
                    for (let i = 0; i < 100; i++) {
                        ctx.lineWidth = i % 10 === 0 ? 2 : 0;
                        ctx.beginPath();
                        var theta = i/50 * Math.PI + (Math.PI * 1.5);
                        var moveToRadius = shortAxis / 2;
                        var lineToRadius = shortAxis / 2.35;
                        ctx.moveTo(moveToRadius * Math.cos(theta) + shortAxis, moveToRadius * Math.sin(theta) + shortAxis / 2);
                        ctx.lineTo(lineToRadius * Math.cos(theta) + shortAxis, lineToRadius * Math.sin(theta) + shortAxis / 2);
                        ctx.stroke();
                        ctx.lineWidth = 1;
                        if (i % 10 === 0) ctx.strokeText(i, (lineToRadius / 1.2) * Math.cos(theta) + shortAxis, (lineToRadius / 1.2) * Math.sin(theta) + shortAxis / 2);
                    }
                    ctx.lineWidth = 1;
                    // ctx.strokeText(style.value.toFixed(2), ctx.canvas.width / 2, ctx.canvas.height / 2);
                    ctx.beginPath();
                    ctx.strokeStyle = "gray";
                    ctx.lineWidth = 2;
                    ctx.moveTo(width / 2, height / 2);
                    // Im gonna use some really smart math here
                    var theta = (-Math.PI / 2) + (style.value * 3.6) * Math.PI / 180;
                    var radius = shortAxis / 2.35;
                    ctx.lineTo(radius * Math.cos(theta) + shortAxis, radius * Math.sin(theta) + shortAxis / 2);
                    ctx.stroke();
                    ctx.strokeStyle = "black";
                    ctx.lineWidth = 1;
                }} cleanupFunction={(ctx) => {
                    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
                }} />
            </div>);
        }}
    </Motion>);
};

export default Caliper;