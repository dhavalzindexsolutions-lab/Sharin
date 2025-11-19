import sharingLogo from "../assets/images/sharing-logo.svg";
import EmailHeader from "../molecules/Header/emailHeader";
import MainTitle from "../molecules/AllTitles/mainTitle";
import Footer from "../molecules/Footer/Footer";
import { Link } from "react-router";
import CommonButton from "../molecules/Buttons/commonBtn";

const emailConfirmation = () => {
    return (
        <>
            <div className="block h-dvh">
                <div className="flex flex-wrap h-full">
                    <div className="block w-full">
                        <div className="flex flex-col gap-5 justify-between w-full">
                            <EmailHeader />

                            {/* Middle Section */}
                            <div className="block max-w-[500px] w-full mx-auto py-8 lg:py-12 px-4">
                                <div className="flex flex-col justify-center text-left h-full">
                                    {/* verifyEmailIcon */}
                                    <div className="block mb-6 lg:mb-8 xl:mb-12">
                                        <img src={sharingLogo} alt="verify-icon" className="max-w-full" />
                                    </div>

                                    <div className="block font-interblack text-2xl text-black mb-2 -tracking-[0.02em]">
                                        <span>Verifica il tuo indirizzo email</span>
                                    </div>

                                    {/* verifyEmailAddress */}
                                    <div className="block font-interregular text-16 text-black -tracking-[0.02em]">
                                        <p>Verifica il tuo indirizzo email cliccando sul seguente link.</p>
                                    </div>

                                    {/* Resend Buttons */}
                                    <div className="flex gap-3 py-8">
                                        <CommonButton size="auto" variant="yellow">
                                        Verifica l’indirizzo email
                                        </CommonButton>
                                    </div>

                                    {/* verifyEmailAddress */}
                                    <div className="flex flex-wrap flex-col gap-8 font-interregular text-sm text-neutral-500 -tracking-[0.02em]">
                                        <p>Se non hai effettuato la richiesta, ignora questa e-mail.</p>
                                        <p>© 2025 Sharin Srl</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default emailConfirmation
