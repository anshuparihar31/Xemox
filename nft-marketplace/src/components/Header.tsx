import { usePrivy } from '@privy-io/react-auth';
import logo from '../assets/logo.png';
import WalletConnet from './WalletConnect';

export default function Header() {
    const { login } = usePrivy();
    
    return (
        <header className="bg-gray-900 text-white py-4 shadow-lg fixed top-0 left-0 w-full z-50">
            <div className="container mx-auto flex justify-between items-center px-6">
                {/* Logo Section */}
                <div className="flex items-center space-x-3">
                    <img src={logo} alt="logo" className="h-10" />
                    <h1 className="text-xl font-bold">XEMOX</h1>
                </div>
                
                {/* Navigation Links */}
                <nav className="hidden md:flex space-x-6">
                    <a href="#" className="hover:text-gray-400">Home</a>
                    <a href="#" className="hover:text-gray-400">Explore</a>
                    <a href="#" className="hover:text-gray-400">Create</a>
                    <a href="#" className="hover:text-gray-400">Profile</a>
                </nav>
                
                {/* Connect Wallet Button */}
                <div>
                    <WalletConnet />
                </div>
            </div>
        </header>
    );
}
