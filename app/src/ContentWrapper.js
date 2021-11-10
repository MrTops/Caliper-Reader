import { useEffect, useState } from "react";
import { Motion, spring } from "react-motion";

const ContentWrapper = props => {
	return (<Motion defaultStyle={{scale: 1.1, opacity: 0,}} style={{scale: spring(props.isActive ? 1 : 0.9), opacity: spring(props.isActive ? 1 : 0),}}>
		{value => <div style={{transform: `scale(${value.scale})`, opacity: value.opacity, zIndex: props.isActive ? 100 : 1,}}>{props.children}</div>}
	</Motion>);
};

export default ContentWrapper;