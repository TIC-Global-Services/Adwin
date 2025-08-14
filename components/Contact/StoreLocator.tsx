"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Phone, Search, Store, Clock } from 'lucide-react';
import Image from 'next/image';

// Define TypeScript interface for store data
interface Store {
    state: string;
    city: string;
    name: string;
    address: string;
    phone: string;
    image: string;
    hours?: string;
    services?: string[];
}

// Sample store data (removed duplicate Coimbatore entry)
const storeData: Store[] = [
    {
        state: "Tamil Nadu",
        city: "Chennai",
        name: "Adwin Battery Store - Chennai",
        address: "123 4th Street, Chennai-600001",
        phone: "03 5432 1234",
        image: "/StorePlaceholder.jpg",
        hours: "9:00 AM - 8:00 PM",
        services: ["Car Batteries", "Inverter Batteries", "Installation"],
    },
    {
        state: "Tamil Nadu",
        city: "Coimbatore",
        name: "Adwin Battery Store - Coimbatore",
        address: "456 Avinashi Road, Coimbatore-641018",
        phone: "0422 9876543",
        image: "/StorePlaceholder.jpg",
        hours: "9:00 AM - 8:00 PM",
        services: ["Car Batteries", "Solar Batteries", "Repair Services"],
    },
    {
        state: "Karnataka",
        city: "Bangalore",
        name: "Adwin Battery Store - Bangalore",
        address: "789 MG Road, Bangalore-560001",
        phone: "080 12345678",
        image: "/StorePlaceholder.jpg",
        hours: "9:00 AM - 9:00 PM",
        services: ["All Battery Types", "Quick Installation", "24/7 Support"],
    },
    {
        state: "Karnataka",
        city: "Mysore",
        name: "Adwin Battery Store - Mysore",
        address: "101 Chamundi Road, Mysore-570001",
        phone: "0821 87654321",
        image: "/StorePlaceholder.jpg",
        hours: "9:00 AM - 7:00 PM",
        services: ["Car Batteries", "Inverter Batteries", "Consultation"],
    },
    {
        state: "Maharashtra",
        city: "Mumbai",
        name: "Adwin Battery Store - Mumbai",
        address: "321 Marine Drive, Mumbai-400020",
        phone: "022 34567890",
        image: "/StorePlaceholder.jpg",
        hours: "9:00 AM - 10:00 PM",
        services: ["Premium Batteries", "Express Service", "Warranty Support"],
    },
];

// State-city mapping for dropdowns
const stateCityMap: { [key: string]: string[] } = {
    "Tamil Nadu": ["Chennai", "Coimbatore", "Madurai"],
    "Karnataka": ["Bangalore", "Mysore", "Hubli"],
    "Maharashtra": ["Mumbai", "Pune", "Nagpur"],
};

const StoreLocator: React.FC = () => {
    const [selectedState, setSelectedState] = useState<string>('');
    const [selectedCity, setSelectedCity] = useState<string>('');
    const [stores, setStores] = useState<Store[]>([]);
    const [isSearched, setIsSearched] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const handleStateChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedState(e.target.value);
        setSelectedCity('');
        setStores([]);
        setIsSearched(false);
    };

    const handleCityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedCity(e.target.value);
        setIsSearched(false);
    };

    const handleSearch = async () => {
        if (!selectedState || !selectedCity) {
            setStores([]);
            setIsSearched(true);
            return;
        }

        setIsLoading(true);
        await new Promise(resolve => setTimeout(resolve, 800));
        const filteredStores = storeData.filter(
            (store) => store.state === selectedState && store.city === selectedCity
        );
        setStores(filteredStores);
        setIsSearched(true);
        setIsLoading(false);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-blue-50 px-4 md:px-20 py-20">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `radial-gradient(circle at 25px 25px, #005F20 2px, transparent 0), radial-gradient(circle at 75px 75px, #005F20 2px, transparent 0)`,
                        backgroundSize: '100px 100px',
                    }}
                ></div>
            </div>

            <div className="relative ">
                <div className="max-w-7xl mx-auto">
                    {/* Header Section */}
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-10 sm:mb-12 md:mb-16"
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs sm:text-base font-medium mb-4">
                            <span>Dealer / Store Locator</span>
                        </div>
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 md:mb-4 leading-tight">
                            Locate the Nearest
                            <span className="block text-[#005F20]">Dealers</span>
                        </h1>
                        <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-xl md:max-w-2xl mx-auto">
                            Discover authorized Adwin Battery dealers in your area for expert service and genuine products.
                        </p>
                    </motion.div>

                    {/* Search Section */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="bg-white rounded-xl p-6 sm:p-8 mb-10 sm:mb-12 border border-gray-100"
                    >
                        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-end">
                            {/* State Dropdown */}
                            <div className="flex-1 w-full">
                                <label className="block text-sm font-semibold text-gray-700 mb-2" htmlFor="state-select">
                                    Select State
                                </label>
                                <div className="relative">
                                    <select
                                        id="state-select"
                                        value={selectedState}
                                        onChange={handleStateChange}
                                        className="w-full p-3 sm:p-4 pr-10 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-gray-900 appearance-none transition-all duration-300 hover:bg-gray-100"
                                        aria-label="Select your state"
                                    >
                                        <option value="" disabled>
                                            Choose your state
                                        </option>
                                        {Object.keys(stateCityMap).map((state) => (
                                            <option key={state} value={state}>
                                                {state}
                                            </option>
                                        ))}
                                    </select>
                                    <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                                        <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            {/* City Dropdown */}
                            <div className="flex-1 w-full">
                                <label className="block text-sm font-semibold text-gray-700 mb-2" htmlFor="city-select">
                                    Select City
                                </label>
                                <div className="relative">
                                    <select
                                        id="city-select"
                                        value={selectedCity}
                                        onChange={handleCityChange}
                                        className="w-full p-3 sm:p-4 pr-10 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-gray-900 appearance-none transition-all duration-300 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
                                        disabled={!selectedState}
                                        aria-label="Select your city"
                                    >
                                        <option value="" disabled>
                                            Choose your city
                                        </option>
                                        {selectedState &&
                                            stateCityMap[selectedState].map((city) => (
                                                <option key={city} value={city}>
                                                    {city}
                                                </option>
                                            ))}
                                    </select>
                                    <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                                        <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            {/* Search Button */}
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={handleSearch}
                                disabled={isLoading}
                                className="w-full sm:w-auto bg-emerald-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-sm sm:text-base hover:bg-emerald-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                                aria-label="Search for stores"
                            >
                                {isLoading ? (
                                    <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-white"></div>
                                ) : (
                                    <>
                                        <Search size={18} />
                                        Search
                                    </>
                                )}
                            </motion.button>
                        </div>
                    </motion.div>

                    {/* Loading State */}
                    {isLoading && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-center py-10 sm:py-12"
                        >
                            <div className="inline-flex items-center gap-3 text-emerald-600">
                                <div className="animate-spin rounded-full h-6 w-6 border-t-2 border-emerald-600"></div>
                                <span className="text-base sm:text-lg font-medium">Searching for stores...</span>
                            </div>
                        </motion.div>
                    )}

                    {/* Store Results */}
                    <div className="mt-6 sm:mt-8">
                        <AnimatePresence>
                            {isSearched && stores.length === 0 && !isLoading && (
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    className="text-center py-12 sm:py-16"
                                >
                                    <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <Store size={32} className="text-gray-400" />
                                    </div>
                                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">No Stores Found</h3>
                                    <p className="text-sm sm:text-base text-gray-600 max-w-md mx-auto">
                                        We couldn't find any stores in {selectedCity}, {selectedState}. Try selecting a different location or contact us for assistance.
                                    </p>
                                </motion.div>
                            )}

                            {stores.length > 0 && !isLoading && (
                                <div>
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="mb-6 sm:mb-8"
                                    >
                                        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                                            {stores.length} Store{stores.length > 1 ? 's' : ''} Found in {selectedCity}, {selectedState}
                                        </h2>
                                        <div className="w-16 h-1 bg-emerald-600 rounded-full"></div>
                                    </motion.div>

                                    <div className="grid grid-cols-1 lg:grid-cols-2  gap-6">
                                        {stores.map((store, index) => (
                                            <motion.div
                                                key={`${store.name}-${index}`}
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                                className="bg-white rounded-lg border border-gray-100 overflow-hidden hover:border-emerald-200 transition-all duration-300 flex flex-col sm:flex-row"
                                            >
                                                {/* Store Image - left on desktop */}
                                                <div className="w-full sm:w-1/2 h-48 sm:h-auto relative p-4">
                                                    <Image
                                                        src={store.image}
                                                        alt={store.name}
                                                        fill
                                                        className="object-cover object-center rounded-2xl p-4"
                                                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                                    />
                                                </div>

                                                {/* Store Content */}
                                                <div className="p-4 sm:p-5 flex flex-col flex-grow">
                                                    <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 hover:text-emerald-600 transition-colors">
                                                        {store.name}
                                                    </h3>

                                                    {/* Address */}
                                                    <div className="flex items-start gap-2 mb-2">
                                                        <MapPin size={16} className="text-gray-400 mt-0.5 flex-shrink-0" />
                                                        <p className="text-gray-600 text-sm">{store.address}</p>
                                                    </div>

                                                    {/* Phone */}
                                                    <div className="flex items-center gap-2 mb-2">
                                                        <Phone size={16} className="text-gray-400 flex-shrink-0" />
                                                        <a
                                                            href={`tel:${store.phone}`}
                                                            className="text-emerald-600 hover:text-emerald-700 text-sm font-medium transition-colors"
                                                            aria-label={`Call ${store.name} at ${store.phone}`}
                                                        >
                                                            {store.phone}
                                                        </a>
                                                    </div>

                                                    {/* Hours */}
                                                    {store.hours && (
                                                        <div className="flex items-center gap-2 mb-2">
                                                            <Clock size={16} className="text-gray-400 flex-shrink-0" />
                                                            <p className="text-gray-600 text-sm">{store.hours}</p>
                                                        </div>
                                                    )}

                                                    {/* Services */}
                                                    {Array.isArray(store.services) && store.services.length > 0 && (
                                                        <div className="mt-3">
                                                            <h4 className="text-sm font-medium text-gray-800 mb-2">Services</h4>
                                                            <div className="flex flex-wrap gap-2">
                                                                {store.services.map((service, i) => (
                                                                    <span
                                                                        key={i}
                                                                        className="px-2 py-1 bg-emerald-50 text-emerald-700 text-xs rounded-full font-medium"
                                                                    >
                                                                        {service}
                                                                    </span>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    )}

                                                    {/* Action Buttons */}
                                                    <div className="flex flex-col sm:flex-row gap-3 mt-4">
                                                        <motion.a
                                                            whileHover={{ scale: 1.02 }}
                                                            whileTap={{ scale: 0.98 }}
                                                            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(store.address)}`}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="flex-1 bg-emerald-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-emerald-700 transition-colors text-center"
                                                            aria-label={`Get directions to ${store.name}`}
                                                        >
                                                            Directions
                                                        </motion.a>
                                                        <motion.a
                                                            whileHover={{ scale: 1.02 }}
                                                            whileTap={{ scale: 0.98 }}
                                                            href={`tel:${store.phone}`}
                                                            className="flex-1 bg-white text-emerald-600 px-4 py-2 rounded-lg text-sm font-medium border border-emerald-600 hover:bg-emerald-600 hover:text-white transition-colors text-center"
                                                            aria-label={`Call ${store.name}`}
                                                        >
                                                            Call Now
                                                        </motion.a>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StoreLocator;