'use client';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const PartnerWithUs = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();

    const [isLoading, setIsLoading] = useState(false);
    const [status, setStatus] = useState('');

    const onSubmit = async (data: any) => {
        setIsLoading(true);
        setStatus('');

        try {
            const response = await fetch(
                'https://script.google.com/macros/s/AKfycbzTY4DMHNfFwFe2S93r9WM8PKVbp6_QF8nm6Sgnx8vhzEPQXxceNuM1TjHJru4851Tj/exec',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data),
                    mode: 'no-cors', // Use no-cors to bypass CORS restrictions
                }
            );

            // With no-cors, we can't read the response body, but if the request doesn't throw, assume success
            setStatus('Message sent successfully!');
            reset(); // Reset form after successful submission
        } catch (error) {
            console.error('Form submission error:', error);
            setStatus('Error: Unable to send message. Please try again later.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="px-4 md:px-20 py-12 md:py-20">
            <div className="mx-auto text-center max-w-lg">
                <h2 className="text-4xl font-bold mb-8">
                    Partner <span className="text-[#005F20]">with Us</span>
                </h2>
                <p className="mb-8">
                    We welcome inquiries from distributors, bulk buyers, and OEM clients looking for reliable energy and lighting solutions.
                </p>
            </div>

            <div className="max-w-2xl mx-auto">
                {status && (
                    <p className={`mb-4 text-center ${status.includes('Error') ? 'text-red-600' : 'text-green-600'}`}>
                        {status}
                    </p>
                )}
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">

                    <div className=' flex flex-col md:flex-row w-full gap-4 justify-between'>
                        <div className=' w-full'>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                Name
                            </label>
                            <input
                                id="name"
                                type="text"
                                placeholder='Your Name'
                                {...register('name', { required: 'Name is required' })}
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md  focus:outline-none focus:ring-[#005F20] focus:border-[#005F20]"
                            />
                            {errors.name?.message && (
                                <p className="mt-1 text-sm text-red-600">{String(errors.name.message)}</p>
                            )}
                        </div>

                        <div className=' w-full'>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                Email
                            </label>
                            <input
                                id="email"
                                type="email"
                                placeholder='Your Email'
                                {...register('email', {
                                    required: 'Email is required',
                                    pattern: {
                                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                        message: 'Invalid email address',
                                    },
                                })}
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md  focus:outline-none focus:ring-[#005F20] focus:border-[#005F20]"
                            />
                            {errors.email?.message && (
                                <p className="mt-1 text-sm text-red-600">{String(errors.email.message)}</p>
                            )}
                        </div>

                    </div>

                    <div className=' flex flex-col md:flex-row w-full gap-4 justify-between'>
                        <div className=' w-full'>
                            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                                Phone Number
                            </label>
                            <input
                                id="phone"
                                type="tel"
                                placeholder='Your Phone Number'
                                {...register('phone', {
                                    required: 'Phone number is required',
                                    pattern: {
                                        value: /^\+?[\d\s-]{10,}$/,
                                        message: 'Invalid phone number',
                                    },
                                })}
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md  focus:outline-none focus:ring-[#005F20] focus:border-[#005F20]"
                            />
                            {errors.phone?.message && (
                                <p className="mt-1 text-sm text-red-600">{String(errors.phone.message)}</p>
                            )}
                        </div>

                        <div className=' w-full'>
                            <label htmlFor="company" className="block text-sm font-medium text-gray-700">
                                Company
                            </label>
                            <input
                                id="company"
                                type="text"
                                placeholder='Company Name'
                                {...register('company', { required: 'Company name is required' })}
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md  focus:outline-none focus:ring-[#005F20] focus:border-[#005F20]"
                            />
                            {errors.company?.message && (
                                <p className="mt-1 text-sm text-red-600">{String(errors.company.message)}</p>
                            )}
                        </div>

                    </div>

                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                            Message
                        </label>
                        <textarea
                            id="message"
                            placeholder='Write your message here...!'
                            rows={5}
                            {...register('message', { required: 'Message is required' })}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md  focus:outline-none focus:ring-[#005F20] focus:border-[#005F20]"
                        ></textarea>
                        {errors.message?.message && (
                            <p className="mt-1 text-sm text-red-600">{String(errors.message.message)}</p>
                        )}
                    </div>

                    <div>
                        <button
                            type="submit"
                            disabled={isLoading}
                            className={`w-full px-4 py-2 bg-[#005F20] text-white font-semibold rounded-md  hover:bg-[#004d1a] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#005F20] ${isLoading ? 'opacity-50 cursor-not-allowed' : ''
                                }`}
                        >
                            {isLoading ? 'Sending...' : 'Submit'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default PartnerWithUs;