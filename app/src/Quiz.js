import { useEffect, useState } from "react";
import Caliper from "./Caliper";
import ContentWrapper from "./ContentWrapper";

const Quiz = props => {
	const [inputValue, setInputValue] = useState(0);

	const handleValueChange = e => {
		const newValue = e.target.value;
		console.log(parseInt(newValue));
		setInputValue(parseInt(newValue) || 0);
	};

	return (<ContentWrapper isActive={props.isActive}>
		<div className="big-container">
			<Caliper value={inputValue} />
			<form>
				<label>
					Answer:<br/>
					<input type="number" value={inputValue} onChange={handleValueChange} />
				</label>
				<br/>
				<input type="submit" value="Check Answer" />
			</form>
		</div>
	</ContentWrapper>);
};

export default Quiz;