'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import Button from '../Common/Button';

const Navbar = () => {
	const [isClick, setIsClick] = useState(false);

	const toggleNavbar = () => {
		setIsClick(!isClick);
	};

	return (
		<nav
			className={`bg-azul ${
				isClick ? 'fixed' : 'relative'
			} overflow-auto w-full`}
		>
			<div
				className={`max-w-7xl mx-auto px-4 py-2 sm:px-6 lg:px-8 ${
					isClick ? 'fixed' : 'sticky'
				} top-0 w-full`}
			>
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
						<div className='ml-4 flex items-center space-x-10'>
							<a href='/' className='text-blanco hover:underline'>
								Sobre DonáClick
							</a>
							<a href='/' className='text-blanco hover:underline'>
								Conocé el programa
							</a>
							<a href='/' className='text-blanco hover:underline'>
								ONG&apos;s
							</a>
							<Button bgColor='naranja'>Ingresar</Button>
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
