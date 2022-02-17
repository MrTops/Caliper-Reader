import { useEffect, useState } from "react";
import {Motion, spring} from "react-motion";

const TopBarStates = [
	{
		index: 0,
		buttonText: "Quiz Yourself",
	},
	{
		index: 1,
		buttonText: "Create a Readout",
	},
];

const TopBarButton = props => {
	const [scaleGoal, setScale] = useState(1);
	const [mouseInside, setMouseInside] = useState(false);

	const handleHover = () => { setScale(1.1); setMouseInside(true); };
	const handleReset = () => { setScale(1); setMouseInside(false); };
	const handleMouseDown = () => setScale(1.05);
	const handleMouseUp = () => {
		props.onClick();
		if (mouseInside === true) handleHover();
	};

	return (<Motion style={{scale: spring(scaleGoal, {stiffness: 300, damping: 45, precision: 0.001,}), borderPixel: props.isSelected ? 3 : 2}}>
		{style => {
			return <button
				className="topbar-item"
				style={{transform: `scale(${style.scale})`, border: `${style.borderPixel}px solid darkgray`}}
				onMouseEnter={handleHover}
				onMouseLeave={handleReset}
				onMouseDown={handleMouseDown}
				onMouseUp={handleMouseUp}
			>{props.children}</button>
		}}
	</Motion>)
};

const TopBar = props => {
	const onChange = props.onChange;

	const [topbarState, setTopbarState] = useState({
		selected: TopBarStates[0],
	});

	useEffect(() => {
		onChange(topbarState.selected);
	});

	const handleNewSelected = selected => {
		setTopbarState({...topbarState, selected: selected, });
	};

	return (<div className="topbar-container">
		{Array.from(TopBarStates).map((value, index) => {
			return <TopBarButton isSelected={value === topbarState.selected} onClick={() => handleNewSelected(value)} key={index}>{value.buttonText}</TopBarButton>;
		})}
	</div>);
};

export { TopBar, TopBarStates };