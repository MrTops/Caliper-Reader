import { useEffect, useRef, useState } from "react";
import { Motion, spring } from "react-motion";
import WrappedCanvas from "./WrappedCanvas";

const Caliper = props => {
    return (<Motion defaultStyle={{value: 0,}} style={{value: spring(props.value || 0),}}>
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
                }} /><br/>
                <WrappedCanvas drawingFunction={(ctx) => {
                    /**
                     * Inch Renderer
                     */
                    
                    var inchAmount = parseFloat((style.value / 1000).toFixed(1));
                    var height = ctx.canvas.height;
                    var width = ctx.canvas.width;

                    ctx.textAlign = "right";
                    for (let i = -20; i < 20; i++) {
                        // I is the current 1/10 of an inch we are on
                        // There should be 10 rendered 1/10th of a inch markers
                        // The actual 1/10 of an inch we are referring to should be highlighted
                        var currentValue = inchAmount + (i * 0.1);
                        if (parseFloat(currentValue.toFixed(1)) < 0) continue;
                        // The parseFloat seems hacky, but I ran into some floating point errors
                        var xCenter = (width / 2) + (i * (width / 12));
                        var isWhole = Math.floor(currentValue) === currentValue;
                        //
                        ctx.strokeStyle = currentValue.toFixed(1) === (Math.floor(props.value / 100) / 10).toFixed(1) ? "green" : "black";
                        ctx.beginPath();
                        ctx.lineWidth = isWhole ? 2 : 1;
                        ctx.moveTo(xCenter, height / 2);
                        ctx.lineTo(xCenter, height / 2 - (isWhole ? 15 : 10));
                        ctx.stroke();
                        ctx.lineWidth = 1;
                        ctx.strokeText(isWhole ? currentValue : (currentValue - Math.floor(currentValue)).toFixed(1).substr(2, 1), xCenter - 2, height / (isWhole ? 2.2 : 2.125));
                    }
                }} cleanupFunction={(ctx) => {
                    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
                }} />
            </div>);
        }}
    </Motion>);
};

export default Caliper;