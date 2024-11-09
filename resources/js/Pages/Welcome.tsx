import Navbar from '@/Components/Navbar';
import { PageProps } from '@/types';
import { Head, Link } from '@inertiajs/react';

export default function Welcome({
    auth,
    laravelVersion,
    phpVersion,
}: PageProps) {
    return (
        <>
            <Navbar />
            <main className="min-h-screen bg-gray-100 flex flex-col items-center">
                <Head title="Welcome" />
                <div className="max-w-lg p-8 bg-white rounded-lg shadow-md text-center">
                    <h1 className="text-4xl font-bold text-indigo-600 mb-4">
                        Welcome to NEMC EyeCare Clinic!
                    </h1>

                    <p className="text-gray-700 mb-6">
                        Thank you for choosing NEMC EyeCare Clinic. We are dedicated to providing
                        the best eye care services to meet your needs.
                    </p>

                    <Link
                        href={route('login')}
                        className="inline-block px-6 py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                        Get Started
                    </Link>
                </div>
            </main>
        </>
    );
}

