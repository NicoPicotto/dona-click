'use client';
const Button = ({ children, name, bgColor }) => {
	return (
		<button
			aria-label={name}
			className={`bg-${bgColor} hover:bg-opacity-90 text-blanco px-4 py-2 rounded transition-colors`}
		>
			{children}
		</button>
	);
};

export default Button;
