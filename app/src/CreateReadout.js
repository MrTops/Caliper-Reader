import { useEffect, useState } from "react";
import Caliper from "./Caliper";
import ContentWrapper from "./ContentWrapper";

const Readout = props => {
	const [inputValue, setInputValue] = useState(0);

	const handleValueChange = e => {
		const newValue = parseFloat(e.target.value);
		setInputValue(newValue < 0 ? 0 : newValue);
	};

	return (<ContentWrapper isActive={props.isActive}>
		<div style={{display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column",}} className="big-container">
			<Caliper value={inputValue * 1000} /><br/>
			<label>
				Value: (in inches)<br/>
				<input step={0.001} type="number" value={inputValue} onChange={handleValueChange} />
			</label>
		</div>
	</ContentWrapper>);
};

export default Readout;