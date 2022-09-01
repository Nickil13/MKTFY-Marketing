import React, { useState } from "react";
import { ImLocation2 } from "react-icons/im";
import { MdCheckCircle } from "react-icons/md";
import FormInput from "../components/Input/FormInput";
import { formatPhoneNumber } from "../utils/helpers";

export default function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [message, setMessage] = useState("");
    const [messageSent, setMessageSent] = useState(false);
    const [emailError, setEmailError] = useState("");
    const [phoneError, setPhoneError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(
            `Name: ${name}, Email: ${email}, Number: ${phoneNumber}, Message: ${message}`
        );
        setMessageSent(true);
        setName("");
        setEmail("");
        setPhoneNumber("");
        setMessage("");
    };

    const checkValidEmail = (value) => {
        if (!value || value.match(/^[^\s@]+@[^\s@].[^\s@]+$/) == null) {
            setEmailError("Your email is incorrect");
        } else {
            setEmailError("");
        }
    };

    const checkPhoneNumber = (val) => {
        if (val) {
            const formattedNumber = formatPhoneNumber(val);
            if (formattedNumber) {
                setPhoneNumber(formattedNumber);
                phoneError && setPhoneError("");
            } else {
                setPhoneError("Invalid phone number");
            }
        } else {
            setPhoneError("Invalid phone number");
        }
    };

    return (
        <div>
            <div className="h-banner bg-contact-banner bg-no-repeat bg-cover"></div>
            <div className="relative pt-10 xlg:pt-0 xlg:h-[800px]">
                <div className="xlg:absolute max-w-[1378px] w-4/5 mx-auto xlg:left-1/2 xlg:-translate-x-1/2 -top-16">
                    <div className="bg-white px-10 2xl:px-[121px] py-[47px] pt-20 shadow-form">
                        <h1 className="text-gray-600 text-lg font-bold mb-3">
                            Let&apos;s start a conversation!
                        </h1>
                        <p className="text-base font-semibold text-gray-footer mb-6">
                            At MKTFY your ideas generate real change and
                            concrete action. We&apos;re here to listen,
                            collaborate and act together. If you have a problem
                            on our app, interested in working with us, are a
                            business or want to donate let us know. There are no
                            limits to what we can do together.
                        </p>
                        <form
                            onSubmit={handleSubmit}
                            className="flex flex-col xlg:flex-row"
                        >
                            <div className="basis-1/2 mr-4">
                                <FormInput
                                    name="name"
                                    value={name}
                                    setValue={setName}
                                    capitalize
                                />
                                <FormInput
                                    name="email"
                                    value={email}
                                    setValue={setEmail}
                                    placeholderText="Your email address"
                                    onBlur={() => checkValidEmail(email)}
                                    hasError={emailError}
                                />
                                <FormInput
                                    name="mobile number"
                                    value={phoneNumber}
                                    setValue={setPhoneNumber}
                                    onBlur={() => checkPhoneNumber(phoneNumber)}
                                    hasError={phoneError}
                                />
                            </div>
                            <div className="basis-1/2">
                                <div className="flex flex-col-reverse max-w-input w-full">
                                    <textarea
                                        name="message"
                                        id="message"
                                        className={`peer px-6 py-5 rounded border font-semibold 
                            text-base placeholder:text-gray-200 border-gray-100 resize-none h-[212px] focus:outline-purple-200 focus:outline-2  ${
                                !message && "bg-[#D7C7DB0D]"
                            }`}
                                        value={message}
                                        onChange={(e) =>
                                            setMessage(e.target.value)
                                        }
                                        placeholder="Your message for MKTFY..."
                                    ></textarea>
                                    <label
                                        htmlFor="message"
                                        className="text-gray-400 font-semibold text-sm-16 mb-3 capitalize peer-focus:text-purple-600"
                                    >
                                        Your Message
                                    </label>
                                </div>
                                {!messageSent ? (
                                    <button
                                        type="submit"
                                        className="btn-gold max-w-btn xlg:ml-auto mt-[73px]"
                                        disabled={
                                            !name ||
                                            !email ||
                                            !phoneNumber ||
                                            !message ||
                                            emailError ||
                                            phoneError
                                        }
                                    >
                                        Send Message
                                    </button>
                                ) : (
                                    <div className="flex items-center ml-auto mt-[73px] text-base font-bold text-purple-400">
                                        <MdCheckCircle className="mr-2 text-base-lg" />
                                        <p>Message sent successfully!</p>
                                    </div>
                                )}
                            </div>
                        </form>
                        <p className="text-gray-footer text-sm-17 max-w-input mt-10 xlg:mt-0">
                            At MKTFY we respect your privacy and do not tolerate
                            spam, and will never sell, rent, lease or give away
                            your information. We only buy, sell or donate your
                            stuff here at MKTFY.
                        </p>
                    </div>
                </div>
            </div>
            <div className="container flex flex-wrap pt-20 xlg:pt-0 pb-[120px]">
                <div className="flex py-6">
                    <ImLocation2 className="text-gold-200 text-[60px] 2xl:text-[94px]" />
                    <ul className="max-w-[272px]">
                        <li className="flex flex-col text-gray-500 font-bold text-base mb-3">
                            <h2>Calgary, Alberta</h2>
                            <span>Our Main Location</span>
                        </li>

                        <li className="font-semibold text-gray-footer text-base mb-6">
                            Suite 9, 123 1st Street SW, Calgary, Alberta T2T 7F7
                        </li>
                        <li className="font-semibold text-gray-footer text-base">
                            +1 888 345 6789
                        </li>
                    </ul>
                </div>
                <div className="flex py-6">
                    <ImLocation2 className="text-gold-200 text-[60px] 2xl:text-[94px]" />
                    <ul className="max-w-[272px]">
                        <li className="flex flex-col text-gray-500 font-bold text-base mb-3">
                            <h2>San Fransisco, California</h2>
                            <span>American Branch</span>
                        </li>

                        <li className="font-semibold text-gray-footer text-base mb-6">
                            346 Spear St, San Francisco, CA 94105, United States
                        </li>
                        <li className="font-semibold text-gray-footer text-base">
                            +1 999 456 7890
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
