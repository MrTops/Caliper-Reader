import { useEffect, useState } from "react";

const ContentWrapper = props => {
	const [render, setRender] = useState(props.isActive);

	useEffect(() => {
		if (props.isActive === true) {
			setRender(true);
			return;
		}
		
		setTimeout(() => setRender(false), 1000);
	});

	return render === true ? (<div>{props.children}</div>) : null;
};

export default ContentWrapper;