import { useEffect, useRef, useState } from "react";
import Caliper from "./Caliper";
import ContentWrapper from "./ContentWrapper";

function getRndInteger(min, max) {
	return Math.floor(Math.random() * (max - min) ) + min;
}

const Quiz = props => {
	const [answerValue, setAnswerValue] = useState(getRndInteger(100, 10000));
	const [inputValue, setInputValue] = useState(0);
	const [isCorrect, setCorrect] = useState(null);

	const handleValueChange = e => {
		const newValue = parseFloat(e.target.value);
		setInputValue(newValue < 0 ? 0 : newValue);
	};

	const generateQuestion = () => setAnswerValue(getRndInteger(100, 10000));
	const handleCheckAnswer = () => {setCorrect((inputValue * 1000).toFixed() === answerValue.toFixed()); setTimeout(() => {generateQuestion(); setCorrect(null);}, 2500)};

	return (<ContentWrapper isActive={props.isActive}>
		<div style={{display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column",}} className="big-container">
			<Caliper value={answerValue} /><br/>
			<form onSubmit={e => {e.preventDefault(); handleCheckAnswer();}}>
				<label>
					Answer: (in inches)<br/>
					<input step={0.001} type="number" value={inputValue} onChange={handleValueChange} />
				</label>
				<br/>
				<input type="submit" value="Check Answer" />
			</form>
			{isCorrect !== null ? (<p style={{color: isCorrect ? 'green' : 'red',}}>{isCorrect ? 'Correct!' : `Incorrect, the answer was ${(answerValue / 1000).toFixed(3)}`}</p>) : null}
		</div>
	</ContentWrapper>);
};

export default Quiz;