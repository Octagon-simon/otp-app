import React, { useState, useEffect, forwardRef } from 'react';
import styles from './otpInputs.module.css'

// Create a single array of refs outside of the component
const inputRefs = Array.from({ length: 6 }, () => React.createRef());

// Parent component
const OTPInputGroup = ({ autoSubmit = false }) => {
    //State to store all input boxes
    const [inputValues, setInputValues] = useState({
        input1: '',
        input2: '',
        input3: '',
        input4: '',
        input5: '',
        input6: '',
    });

    //Update the value of inputValues
    const handleInputChange = (inputId, value) => {
        setInputValues((prevInputValues) => ({
            ...prevInputValues,
            [inputId]: value,
        }));
    };

    //Your custom function to process form submission
    const handleSubmit = (e) => {
        e?.preventDefault();

        const otpCode = `OTP Code is: ${Object.values(inputValues).join('')}`;

        setTimeout(() => {
            alert(otpCode);
        }, 500)
    };

    // Handle paste event for OTP input group
    const handlePaste = (e) => {
        e.preventDefault();
        const pastedData = e.clipboardData.getData('Text').slice(0, 6);

        if (/^[a-zA-Z0-9]{6}$/.test(pastedData)) {
            const newInputValues = {};
            pastedData.split('').forEach((char, index) => {
                newInputValues[`input${index + 1}`] = char;
            });

            setInputValues(newInputValues);

            //move focus to the last input
            inputRefs[5].current.focus();
        } else {
            console.error("Invalid OTP format. Please paste a 6-character alphanumeric code.");
        }
    };

    useEffect(() => {
        const allFilled = Object.values(inputValues).every(val => val !== '');
        if (allFilled && autoSubmit) {
          handleSubmit();
        }
      }, [inputValues, autoSubmit]);

    // Render child components with necessary props
    return (
        <>
            <div id="OTPInputGroup" className={styles.digitGroup} onPaste={handlePaste}>
                {inputRefs.map((ref, index) => (
                    <OTPInput
                        key={`input${index + 1}`}
                        id={`input${index + 1}`}
                        className={styles.digitGroup}
                        ref={ref}
                        value={inputValues[`input${index + 1}`]}
                        onValueChange={handleInputChange}
                        previousRef={inputRefs[index - 1] || null}
                        handleSubmit={handleSubmit}
                        autoSubmit={autoSubmit}
                        nextRef={inputRefs[index + 1] || null}
                    />
                ))}
            </div>
            <div className="btnGroup" onClick={handleSubmit}>
                <button className={styles.button}>Complete action</button>
            </div>
        </>
    );
};

// Child component
const OTPInput = forwardRef((props, ref) => {

    const { id, className, previousRef, nextRef, value, onValueChange } = props;

    const handleKeyUp = (e) => {
        if (e.key === 'Backspace' || e.key === 'ArrowLeft') {
            const prev = previousRef && previousRef.current;
            if (prev) prev.select();
        }
    };

    const handleInput = (e) => {
        const inputChar = e.target.value;
        if (inputChar.match(/^[a-zA-Z0-9]$/)) {
            onValueChange(id, inputChar);
            const next = nextRef && nextRef.current;
            if (next) {
               return next.select();
            }
        }
    };

    return (
        <input
            id={id}
            className={className}
            ref={ref}
            name={id}
            type="text"
            value={value}
            maxLength="1"
            onChange={(e) => onValueChange(id, e.target.value)}
            onInput={handleInput}
            onKeyUp={handleKeyUp}
            inputMode="numeric" //this triggers numeric keypad on mobile
        />
    );
});

export default OTPInputGroup;
