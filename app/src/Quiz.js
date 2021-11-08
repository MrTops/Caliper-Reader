import { useEffect } from "react";
import ContentWrapper from "./ContentWrapper";

const Quiz = props => {
	return (<ContentWrapper isActive={props.isActive}>
		<div className="big-container">
			<p>Quiz</p>
		</div>
	</ContentWrapper>);
};

export default Quiz;