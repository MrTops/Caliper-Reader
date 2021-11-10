import { useEffect, useRef } from "react";

const WrappedCanvas = props => {

    const ref = useRef(null);

    const cleanupFunction = props.cleanupFunction || function () {/* empty */};
    const drawingFunction = props.drawingFunction || function () {/* empty */};

    useEffect(() => {
        cleanupFunction(ref.current.getContext("2d"));
        drawingFunction(ref.current.getContext("2d"));
    });

    return (<canvas ref={ref} style={{...props.style}} />)
};

export default WrappedCanvas;