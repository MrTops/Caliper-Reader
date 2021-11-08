import { useEffect, useState } from "react";

const TopBarStates = [
	{
		index: 0,
		buttonText: "Quiz Yourself",
	},
	{
		index: 1,
		buttonText: "Create a Readout",
	},
	{
		index: 2,
		buttonText: "Settings",
	},
];

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
			return <button className={`topbar-item ${value == topbarState.selected ? "topbar-selected" : ""}`} onClick={() => handleNewSelected(value)} key={index}>{value.buttonText}</button>;
		})}
	</div>);
};

export { TopBar, TopBarStates };