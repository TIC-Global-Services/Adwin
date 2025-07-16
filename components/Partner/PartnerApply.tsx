'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';

const PartnerApply = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm();

    const onSubmit = async (data: any) => {
        try {
            const response = await fetch('https://script.google.com/macros/s/AKfycbzfkJyHQlmTDa85hGcfVXuiO0tKNLxczOSWUSaL_PVQdez5P5b9egOFMqLzBR07tCOnxQ/exec', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
                mode: 'no-cors'
            });


            alert('Application submitted successfully!');
            reset();
        } catch (error) {
            console.error('Submission error:', error);
            alert('An error occurred while submitting the form. Please try again.');
        }
    };

    // ---- reusable dropdown data ----
    const yesNoOptions = ['Yes', 'No'];
    const yearsOptions = ['< 1 year', '1-3 years', '3-5 years', '5-10 years', '> 10 years'];
    const firmTypeOptions = [
        'Proprietorship',
        'Partnership',
        'Private Limited',
        'Limited Company',
        'LLP',
    ];
    const applyingForOptions = [
        'Exclusive District Distributor',
        'State Distributor',
        'Regional Distributor',
    ];
    const turnoverOptions = [
        '< 10 Lacs',
        '10-50 Lacs',
        '50 Lacs - 1 Cr',
        '1-5 Cr',
        '5-10 Cr',
        '> 10 Cr',
    ];
    const dealerCountOptions = ['< 10', '10-25', '25-50', '50-100', '> 100'];
    const salesTeamOptions = ['Yes', 'No', 'Planning to hire'];

    const inputClass =
        'w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#005F20]';
    const labelClass = 'block text-sm font-medium text-gray-700 mb-1';

    return (
        <section className="px-4 md:px-20 py-12 md:py-20">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-10 text-center"
                >
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
                        How to Apply
                    </h1>
                    <p className="text-gray-600">
                        A dedicated Business Development Manager will get in touch with you.
                    </p>
                </motion.div>

                {/* Form */}
                <motion.form
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    onSubmit={handleSubmit(onSubmit)}
                    className="bg-white rounded-2xl p-6 md:p-10 grid grid-cols-1 md:grid-cols-2 gap-6"
                >
                    {/* ----- Personal / Company ----- */}
                    <div>
                        <label className={labelClass}>First Name *</label>
                        <input
                            {...register('firstName', { required: true })}
                            className={inputClass}
                        />
                        {errors.firstName && <span className="text-red-500 text-xs">Required</span>}
                    </div>

                    <div>
                        <label className={labelClass}>Last Name *</label>
                        <input
                            {...register('lastName', { required: true })}
                            className={inputClass}
                        />
                        {errors.lastName && <span className="text-red-500 text-xs">Required</span>}
                    </div>

                    <div>
                        <label className={labelClass}>Email *</label>
                        <input
                            type="email"
                            {...register('email', { required: true })}
                            className={inputClass}
                        />
                        {errors.email && <span className="text-red-500 text-xs">Required</span>}
                    </div>

                    <div>
                        <label className={labelClass}>Phone Number *</label>
                        <input
                            type="tel"
                            {...register('phone', { required: true })}
                            className={inputClass}
                        />
                        {errors.phone && <span className="text-red-500 text-xs">Required</span>}
                    </div>

                    <div>
                        <label className={labelClass}>City *</label>
                        <input {...register('city', { required: true })} className={inputClass} />
                        {errors.city && <span className="text-red-500 text-xs">Required</span>}
                    </div>

                    <div>
                        <label className={labelClass}>State *</label>
                        <input {...register('state', { required: true })} className={inputClass} />
                        {errors.state && <span className="text-red-500 text-xs">Required</span>}
                    </div>

                    <div>
                        <label className={labelClass}>ZIP / Pin Code *</label>
                        <input
                            {...register('zip', { required: true })}
                            className={inputClass}
                        />
                        {errors.zip && <span className="text-red-500 text-xs">Required</span>}
                    </div>

                    <div>
                        <label className={labelClass}>Company / Firm Name *</label>
                        <input {...register('company', { required: true })} className={inputClass} />
                        {errors.company && <span className="text-red-500 text-xs">Required</span>}
                    </div>

                    {/* ----- Dropdowns ----- */}
                    <div>
                        <label className={labelClass}>Are you already a distributor? *</label>
                        <select {...register('alreadyDistributor', { required: true })} className={inputClass}>
                            <option value="">Select</option>
                            {yesNoOptions.map((opt) => (
                                <option key={opt} value={opt}>{opt}</option>
                            ))}
                        </select>
                        {errors.alreadyDistributor && <span className="text-red-500 text-xs">Required</span>}
                    </div>

                    <div>
                        <label className={labelClass}>Years in Industry *</label>
                        <select {...register('yearsInIndustry', { required: true })} className={inputClass}>
                            <option value="">Select</option>
                            {yearsOptions.map((opt) => (
                                <option key={opt} value={opt}>{opt}</option>
                            ))}
                        </select>
                        {errors.yearsInIndustry && <span className="text-red-500 text-xs">Required</span>}
                    </div>

                    <div>
                        <label className={labelClass}>Firm / Company Type *</label>
                        <select {...register('firmType', { required: true })} className={inputClass}>
                            <option value="">Select</option>
                            {firmTypeOptions.map((opt) => (
                                <option key={opt} value={opt}>{opt}</option>
                            ))}
                        </select>
                        {errors.firmType && <span className="text-red-500 text-xs">Required</span>}
                    </div>

                    <div>
                        <label className={labelClass}>Applying Distributorship For *</label>
                        <select {...register('applyingFor', { required: true })} className={inputClass}>
                            <option value="">Select</option>
                            {applyingForOptions.map((opt) => (
                                <option key={opt} value={opt}>{opt}</option>
                            ))}
                        </select>
                        {errors.applyingFor && <span className="text-red-500 text-xs">Required</span>}
                    </div>

                    <div>
                        <label className={labelClass}>Annual Turnover *</label>
                        <select {...register('annualTurnover', { required: true })} className={inputClass}>
                            <option value="">Select</option>
                            {turnoverOptions.map((opt) => (
                                <option key={opt} value={opt}>{opt}</option>
                            ))}
                        </select>
                        {errors.annualTurnover && <span className="text-red-500 text-xs">Required</span>}
                    </div>

                    <div>
                        <label className={labelClass}>Number of Existing Dealers *</label>
                        <select {...register('noOfDealers', { required: true })} className={inputClass}>
                            <option value="">Select</option>
                            {dealerCountOptions.map((opt) => (
                                <option key={opt} value={opt}>{opt}</option>
                            ))}
                        </select>
                        {errors.noOfDealers && <span className="text-red-500 text-xs">Required</span>}
                    </div>

                    <div className="md:col-span-2">
                        <label className={labelClass}>Do you have a sales team? *</label>
                        <select {...register('salesTeam', { required: true })} className={inputClass}>
                            <option value="">Select</option>
                            {salesTeamOptions.map((opt) => (
                                <option key={opt} value={opt}>{opt}</option>
                            ))}
                        </select>
                        {errors.salesTeam && <span className="text-red-500 text-xs">Required</span>}
                    </div>

                    <div className="md:col-span-2">
                        <label className={labelClass}>Area of Warehouse (Sq Ft)</label>
                        <input {...register('warehouseArea')} className={inputClass} placeholder="e.g. 2500" />
                    </div>

                    {/* Submit */}
                    <div className="md:col-span-2 mt-4">
                        <button
                            type="submit"
                            className="w-full md:w-auto bg-[#005F20] text-white px-8 py-3 rounded-lg font-semibold
                         hover:bg-[#00461a] transition-colors duration-300"
                        >
                            Submit Application
                        </button>
                    </div>
                </motion.form>
            </div>
        </section>
    );
};

export default PartnerApply;