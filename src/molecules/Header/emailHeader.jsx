import React from 'react'
import { Link } from 'react-router'
import emailHeaderIcon from "../../assets/images/email-header-icon.svg";


const emailHeader = () => {
    return (
        <>
            <div className="block px-4 lg:px-6">
                <div className="flex flex-wrap justify-between py-4 lg:py-6 gap-y-2 gap-x-4 border-b border-neutral-300">
                    {/* Logo */}
                    <div className="inline-flex flex-wrap items-start gap-2.5">
                        <img
                            src={emailHeaderIcon}
                            alt="logo"
                            className="max-w-full w-10"
                        />

                        <div className="inline-flex flex-wrap flex-col text-sm">
                            <strong>Sharin</strong>
                            <p>Verifica il tuo indirizzo email</p>
                            <p>To: <Link to="mailto:matteo@mozestudio.com" className='text-neutral-500 hover:text-black'>matteo@mozestudio.com</Link></p>
                        </div>
                    </div>

                    {/* Assistance */}
                    <div className="inline-block text-sm md:text-16">
                        <span>January 01, 2023 at 12:00 AM</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default emailHeader
