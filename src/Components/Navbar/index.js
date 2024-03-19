'use client';
import Image from 'next/image';
import React, { useState } from 'react';

const Navbar = () => {
	const [isClick, setIsClick] = useState(false);

	const toggleNavbar = () => {
		setIsClick(!isClick);
	};

	return (
		<nav className='bg-azul relative overflow-auto'>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 sticky top-0'>
				<div className='flex items-center justify-between h-16'>
					<div className='flex items-center'>
						<div className='flex-shrink-0'>
							<a href='/'>
								<Image
									src='/Navbar/logo.png'
									width='150'
									height='20'
									alt='DonáClick logo'
								/>
							</a>
						</div>
					</div>
					<div className='hidden md:block'>
						<div className='ml-4 flex items-center space-x-4'>
							<a href='/' className='text-blanco hover:underline'>
								Algo
							</a>
							<a href='/' className='text-blanco hover:underline'>
								Algo 2
							</a>
							<a href='/' className='text-blanco hover:underline'>
								Algo 3
							</a>
						</div>
					</div>
					<div className='md:hidden flex items-center'>
						<button
							className='inline-flex items-center justify-center p-2 rounded:md text-blanco hover:text-blanco focus:outline-none'
							onClick={toggleNavbar}
						>
							{isClick ? (
								<svg
									className='h-6 w-6'
									xmlns='http://www.w3.org/2000/svg'
									fill='none'
									viewBox='0 0 24 24'
									stroke='currentColor'
								>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth={2}
										d='M6 18L18 6M6 6l12 12'
									/>
								</svg>
							) : (
								<svg
									className='h-6 w-6'
									xmlns='http://www.w3.org/2000/svg'
									fill='none'
									viewBox='0 0 24 24'
									stroke='currentColor'
								>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth={2}
										d='M4 6h16M4 12h16m-7 6h7'
									/>
								</svg>
							)}
						</button>
					</div>
				</div>
			</div>
			{isClick && (
				<div className='h-screen flex items-center justify-center flex-col gap-10'>
					<a href='/' className='text-blanco hover:underline text-4xl'>
						About
					</a>
					<a href='/' className='text-blanco hover:underline text-4xl'>
						About
					</a>
					<a href='/' className='text-blanco hover:underline text-4xl'>
						About
					</a>
				</div>
			)}
		</nav>
	);
};

export default Navbar;
