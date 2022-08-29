import React from "react";

export default function FormInput({
    name,
    value,
    setValue,
    placeholderText,
    capitalize,
}) {
    return (
        <div className="flex flex-col-reverse mb-8 max-w-input">
            <input
                type="text"
                name={name}
                id={name}
                className={`peer px-6 py-5 rounded border font-semibold 
                            text-base text-gray-600 placeholder:text-gray-200 border-gray-100 focus:outline-purple-200 focus:outline-2 ${
                                !value && "bg-[#D7C7DB0D]"
                            } ${
                    capitalize && "capitalize placeholder:normal-case"
                }`}
                value={value}
                onChange={(e) => setValue(e.target.value)}
                placeholder={placeholderText || `Your ${name}`}
            />
            <label
                htmlFor={name}
                className="text-gray-400 font-semibold text-sm-16 mb-3 capitalize peer-hover:text-purple-600"
            >
                {name}
            </label>
        </div>
    );
}
