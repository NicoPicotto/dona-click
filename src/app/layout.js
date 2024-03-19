import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/Components/Navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
	title: 'DonáClick',
	description: 'Ayudá a una ONG a elección sin costo extra.',
};

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body className={inter.className}>
				<Navbar />
				<div className='mx-auto max-w-screen-xl px-6 '>{children}</div>
			</body>
		</html>
	);
}
