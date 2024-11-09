import React from 'react';
import Navbar from '@/Components/Navbar';
import { PageProps } from '@/types';
import { Head, Link } from '@inertiajs/react';

export default function OphthalmologyClinic(props: PageProps) {
    return (
        <div className="bg-gray-100 min-h-screen">
            <Head title="About Us - NEMC EyeCare Clinic" />
            <Navbar />

            <div className="container mx-auto px-6 py-12">
                <h1 className="text-3xl font-bold text-indigo-600 mb-6">About Us</h1>
                <p className="text-gray-700 mb-4">
                    Welcome to NEMC EyeCare Clinic! We are dedicated to providing the best in eye care services and helping our patients achieve clear, healthy vision.
                </p>

                {/* Services Section */}
                <h2 className="text-2xl font-semibold text-indigo-600 mt-8 mb-4">Our Services</h2>
                <div className="services grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {[
                        { src: "/img/img1.jpg", title: "Comprehensive Eye Examination", description: "Thorough assessments to ensure optimal eye health." },
                        { src: "/img/pic1.jpg", title: "Cataract Screening and Surgery", description: "Expert evaluation and surgical options for cataracts." },
                        { src: "/img/pic2.jpg", title: "Laser Procedure and Treatment", description: "Advanced laser techniques for various eye conditions." },
                        { src: "/img/pic3.jpeg", title: "Eyeglass Fitting", description: "Personalized fittings for optimal vision correction." },
                        { src: "/img/pic4.png", title: "Diabetic Retinopathy Screening and Surgery", description: "Screening and surgical options for diabetic eye disease." },
                        { src: "/img/pic5.jpg", title: "Glaucoma Screening and Surgery", description: "Early detection and management of glaucoma." },
                        { src: "/img/pic6.jpg", title: "Visual Field Test (Perimetry)", description: "Tests to assess your peripheral vision." },
                        { src: "/img/pic7.jpeg", title: "Ocular Coherence Tomography (OCT)", description: "Advanced imaging for detailed eye structure analysis." },
                        { src: "/img/pic8.jpg", title: "Fluorescein Angiogram (FA)", description: "A test to evaluate blood flow in the retina." }
                    ].map((service, index) => (
                        <div key={index} className="service-card bg-white rounded-lg shadow-md p-4">
                            <img src={service.src} alt={service.title} className="rounded w-full h-48 object-cover mb-4" />
                            <h3 className="font-semibold text-lg">{service.title}</h3>
                            <p className="text-gray-700">{service.description}</p>
                        </div>
                    ))}
                </div>

                <h2 className="text-2xl font-semibold text-indigo-600 mt-8 mb-4">Our Team</h2>
                <div className="team grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {[
                        { src: "/img/dm.png", name: "Dr. Michael Greg DL. Gonzales", title: "General Ophthalmologist", description: "Laser and Microscopic Cataract Surgery. Available Monday to Friday." },
                        { src: "/img/dg.png", name: "Dra. Cel Garcia-Arenal", title: "Ophthalmologist - Retina Specialist", description: "Laser and Microscopic Cataract & Retina Surgery." },
                        { src: "/img/dm.png", name: "Dr. Ivan O’Neill C. Tecson", title: "Ophthalmologist - Glaucoma Specialist", description: "Cataract and Glaucoma Surgery." },
                        // Additional team members can be added here
                    ].map((doctor, index) => (
                        <div key={index} className="doctor-card bg-white rounded-lg shadow-md p-4">
                            <img src={doctor.src} alt={doctor.name} className="rounded-full w-32 h-32 object-cover mb-4 mx-auto" />
                            <h3 className="text-lg font-semibold text-center">{doctor.name}</h3>
                            <p className="text-center text-indigo-600">{doctor.title}</p>
                            <p className="text-gray-700 text-center">{doctor.description}</p>
                        </div>
                    ))}
                </div>

                {/* Equipment Section */}
                <h2 className="text-3xl font-bold text-indigo-600 mt-5">Our Equipment</h2>
                {[
                    {
                        title: "Phaco Machines",
                        items: [
                            { src: "/img/visalis2.png", name: "Visalis V500", description: "A versatile phacoemulsification system for efficient cataract surgery." },
                            { src: "/img/legion2.png", name: "Legion Phaco Machine", description: "Customizable settings for enhanced cataract procedures." },
                            { src: "/img/laureate2.jpg", name: "Laureate Phaco Machine", description: "User-friendly with advanced technologies for cataract surgery." }
                        ]
                    },
                    {
                        title: "Operating Microscopes",
                        items: [
                            { src: "/img/optima.png", name: "Opti Lumera 700", description: "High-performance microscope for eye surgeries with advanced optics." },
                            { src: "/img/oms.jpg", name: "OMS 90", description: "Ergonomic microscope designed for precision ocular procedures." }
                        ]
                    },
                    {
                        title: "Laser Machines",
                        items: [
                            { src: "/img/UQ-gallery1.jpg", name: "Ellex Ultra Q", description: "Dual-wavelength laser system for retinal treatments." },
                            { src: "/img/opthalmic.jpg", name: "Ophthalmic Green Laser", description: "Focused retinal laser treatment with specific wavelengths." }
                        ]
                    },
                    {
                        title: "Diagnostic Machines",
                        items: [
                            { src: "/img/retinalcam.png", name: "Retinal Camera TRC-NW8F Plus", description: "High-resolution retinal imaging device." },
                            { src: "/img/triton.jpg", name: "DRI OCT Triton", description: "Advanced OCT system for retinal imaging." },
                            { src: "/img/hfa.jpg", name: "HFA 30 Perimetry", description: "Visual field analyzer for monitoring peripheral vision." }
                        ]
                    },
                    {
                        title: "Others",
                        items: [
                            { src: "/img/airpuff.jpg", name: "Computerized Airpuff Tonometer", description: "Non-contact tonometry device for intraocular pressure." },
                            { src: "/img/autoref.jpg", name: "Autoref Keratometer KT-80", description: "Automated device for measuring refractive errors." }
                        ]
                    }
                ].map((category, index) => (
                    <div key={index} className="mt-6">
                        <h3 className="text-2xl font-semibold text-indigo-600 mb-3">{category.title}</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                            {category.items.map((item, idx) => (
                                <div key={idx} className="phcard bg-white rounded-lg shadow-md p-4">
                                    <img src={item.src} alt={item.name} className="rounded w-full h-48 object-cover mb-4" />
                                    <h4 className="font-semibold text-lg">{item.name}</h4>
                                    <p className="text-gray-700">{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}

                <div className="text-center mt-8">
                    <Link href="/" className="text-indigo-600 underline">
                        Back to Home
                    </Link>
                </div>
            </div>
        </div>
    );
}
