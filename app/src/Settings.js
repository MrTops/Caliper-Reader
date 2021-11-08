import ContentWrapper from "./ContentWrapper";

const Settings = props => {
	return (<ContentWrapper isActive={props.isActive}>
		<div className="big-container">
			<p>Settings</p>
		</div>
	</ContentWrapper>);
};

export default Settings;