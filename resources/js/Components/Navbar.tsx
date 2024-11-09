import { Link } from '@inertiajs/react';

export default function Navbar() {
    return (
        <nav className="bg-white shadow-md w-full">
            <div className="container mx-auto px-6 py-4 flex items-center justify-between">
                <div className="text-xl font-bold text-indigo-600">
                    NEMC EyeCare Clinic
                </div>

                <div className="space-x-6 flex items-center">
                    <Link href="/" className="text-gray-700 hover:text-indigo-600">
                        Home
                    </Link>
                    <Link href="/about" className="text-gray-700 hover:text-indigo-600">
                    About Us
                    </Link>
                    <Link href="/login" className="text-gray-700 hover:text-indigo-600">
                        Login
                    </Link>
                    <Link href="/register" className="text-gray-700 hover:text-indigo-600">
                        Register
                    </Link>
                    <Link
                        href="/appointment"
                        className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                        Make an Appointment
                    </Link>
                </div>
            </div>
        </nav>
    );
}

