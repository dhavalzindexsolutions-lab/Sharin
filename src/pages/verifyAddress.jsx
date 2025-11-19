import verificationMobileIcon from "../assets/images/verification-mobile-icon.svg";
import SmallHeader from "../molecules/Header/SmallHeader";
import MainTitle from "../molecules/AllTitles/mainTitle";
import Footer from "../molecules/Footer/Footer";
import { Link } from "react-router";
import CommonButton from "../molecules/Buttons/commonBtn";

const verifyAddress = () => {
    return (
        <>
            <div className="block h-dvh">
                <div className="flex flex-wrap h-full">
                    <div className="block w-full">
                        <div className="flex flex-col gap-5 justify-between w-full h-full">
                            <SmallHeader />

                            {/* Middle Section */}
                            <div className="block max-w-[432px] w-full mx-auto py-8 lg:py-12 px-4">
                                <div className="flex flex-col justify-center items-center h-full">
                                    {/* verifyEmailIcon */}
                                    <div className="block mb-6 lg:mb-8 xl:mb-12">
                                        <img src={verificationMobileIcon} alt="verify-icon" className="max-w-full" />
                                    </div>

                                    <MainTitle titleText="Verifica la tua email" className="!mb-2" />

                                    {/* verifyEmailAddress */}
                                    <div className="block pb-8 font-interregular text-black text-center">
                                        <p>Abbiamo inviato un link per verificare la tua email a <br/><Link to="mailto:matteo@mozestudio.com" className="hover:text-sky-600"><strong>matteo@mozestudio.com</strong></Link></p>
                                    </div>

                                    {/* Resend Buttons */}
                                    <div className="flex flex-col gap-3 mx-auto">
                                        <CommonButton as="link" to="/email-confirmation" size="full" variant="secondary">
                                        Invia di nuovo
                                        </CommonButton>
                                    </div>
                                </div>
                            </div>

                            <Footer />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default verifyAddress
