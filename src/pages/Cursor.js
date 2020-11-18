import React, { useEffect, useState } from "react";
import classNames from "classnames";

const isMobile = () => {
	const ua = navigator.userAgent;
	return /Android|Mobi/i.test(ua);
};

const Cursor = () => {
	
	const [position, setPosition] = useState({ x: 0, y: 0 });
	const [hidden, setHidden] = useState(false);

	const [clicked, setClicked] = useState(false);

	useEffect(() => {
		addEventListeners();
		return () => removeEventListeners();
	});

	const addEventListeners = () => {
		document.addEventListener("mousemove", onMouseMove);
		document.addEventListener("mouseenter", onMouseEnter);
		document.addEventListener("mouseleave", onMouseLeave);
		document.addEventListener("mousedown", onMouseDown);
		document.addEventListener("mouseup", onMouseUp);
	};

	const removeEventListeners = () => {
		document.removeEventListener("mousemove", onMouseMove);
		document.removeEventListener("mouseenter", onMouseEnter);
		document.removeEventListener("mouseleave", onMouseLeave);
		document.removeEventListener("mousedown", onMouseDown);
		document.removeEventListener("mouseup", onMouseUp);
	};

	const onMouseMove = (e) => {
		setPosition({ x: e.clientX, y: e.clientY });
	};

	const onMouseLeave = () => {
		setHidden(true);
	};

	const onMouseEnter = () => {
		setHidden(false);
	};

	const onMouseDown = () => {
		setClicked(true);
	};

	const onMouseUp = () => {
		setClicked(false);
	};

	const cursorClasses = classNames("cursor", {
		'cursor--clicked': clicked,
		"cursor--hidden": hidden,
	});

	// Prevent cursor from showing on mobile devices
	if (typeof navigator !== 'undefined' && isMobile()) return null;

	return (
		<div
			className={cursorClasses}
			style={{
				left: `${position.x}px`,
				top: `${position.y}px`,
			}}
		/>
	);
};

export default Cursor;
