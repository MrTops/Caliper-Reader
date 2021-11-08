import ContentWrapper from "./ContentWrapper";

const CreateReadout = props => {
	return (<ContentWrapper isActive={props.isActive}>
		<div className="big-container">
			<p>Readout</p>
		</div>
	</ContentWrapper>);
};

export default CreateReadout;