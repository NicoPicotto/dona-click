'use client';
const Button = ({ children, name }) => {
	return (
		<button
			aria-label={name}
			className='bg-azul hover:bg-[var(--brand-2)] text-blanco px-4 py-2 rounded transition-colors'
		>
			{children}
		</button>
	);
};

export default Button;
