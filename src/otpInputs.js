import React, { forwardRef, useRef, useState } from "react";
import styles from './otpInputs.module.css'

//Our parent component
const OTPInputGroup = ({ autoSubmit = false }) => {
    //state to store all input boxes    
    const [inputValues, setInputValues] = useState({
        input1: '',
        input2: '',
        input3: '',
        input4: '',
        input5: '',
        input6: '',
        // Add more input values here
    });

    //this function updates the value of the state inputValues
    const handleInputChange = (inputId, value) => {
        setInputValues((prevInputValues) => ({
            ...prevInputValues,
            [inputId]: value,
        }));
    };

    //this function processes form submission
    const handleSubmit = (e) => {
        // ... Your submit logic here
        e?.preventDefault()
        // declare
        const otpCode = `OTPCode is: ${Object.values(inputValues).join('')}`
        //return
        return alert(otpCode)
    };

    //use refs for inputs
    const input1 = useRef()
    const input2 = useRef()
    const input3 = useRef()
    const input4 = useRef()
    const input5 = useRef()
    const input6 = useRef()
    //.....create more refs and assign them to more inputs

    //return child component
    return (
        <>
            <div id='OTPInputGroup' className={styles.digitGroup}>
                <OTPInput
                    id="input1"
                    className={styles.digitGroup}
                    ref={input1}
                    value={inputValues.input1}
                    onValueChange={handleInputChange}
                    previousRef={null}
                    handleSubmit={handleSubmit}
                    autoSubmit={autoSubmit}
                    nextRef={input2}
                />
                <OTPInput
                    id="input2"
                    className={styles.digitGroup}
                    ref={input2}
                    value={inputValues.input2}
                    onValueChange={handleInputChange}
                    previousRef={input1}
                    handleSubmit={handleSubmit}
                    autoSubmit={autoSubmit}
                    nextRef={input3}
                />
                <OTPInput
                    id="input3"
                    className={styles.digitGroup}
                    ref={input3}
                    value={inputValues.input3}
                    onValueChange={handleInputChange}
                    previousRef={input2}
                    handleSubmit={handleSubmit}
                    autoSubmit={autoSubmit}
                    nextRef={input4}
                />
                {/* Seperator */}
                <span className={styles.seperator}>&ndash;</span>
                {/* End of Seperator */}
                <OTPInput
                    id="input4"
                    className={styles.digitGroup}
                    ref={input4}
                    value={inputValues.input4}
                    onValueChange={handleInputChange}
                    previousRef={input3}
                    handleSubmit={handleSubmit}
                    autoSubmit={autoSubmit}
                    nextRef={input5}
                />
                <OTPInput
                    id="input5"
                    className={styles.digitGroup}
                    ref={input5}
                    value={inputValues.input5}
                    onValueChange={handleInputChange}
                    previousRef={input4}
                    handleSubmit={handleSubmit}
                    autoSubmit={autoSubmit}
                    nextRef={input6}
                />
                <OTPInput
                    id="input6"
                    className={styles.digitGroup}
                    ref={input6}
                    value={inputValues.input6}
                    onValueChange={handleInputChange}
                    previousRef={input5}
                    handleSubmit={handleSubmit}
                    autoSubmit={autoSubmit}
                    nextRef={null}
                />
            </div>
            <div className="btnGroup" onClick={handleSubmit}>
                <button className={styles.button}>Complete action</button>
            </div>
        </>
    );
}

//Our child component
const OTPInput = forwardRef((props, ref) => {

    const { id, className, previousRef, nextRef, value, onValueChange, handleSubmit, autoSubmit } = props

    //This callback function only runs when a key is released
    const handleKeyUp = (e) => {

        // Uncomment to debug the component
        // console.log({
        //     current: ref,
        //     next: nextRef,
        //     previous: previousRef
        // })

        function isAlphaNumeric(str) {
            return str && str.match(/[a-zA-Z0-9]/);
        }

        // Check if key is backspace or arrowleft
        if (e.key === 'Backspace' || e.key === 'ArrowLeft') {
            // Find the previous element
            const prev = previousRef && previousRef.current;
            // If previous element exists, select it
            if (prev) {
                // Select the previous element
                return prev.select();
            }
        } else if (
            // Check for alphanumeric character input on desktop or virtual keyboard
            ((e.inputType === "text" || e.inputType === "textInput") && isAlphaNumeric(e.key)) ||
            // Check for mobile keyboard input (including keyCode 229)
            (e.inputType === "physicalKeyboard" && ((e.key && e.key.match(/[a-zA-Z0-9]/)) || e.keyCode === 229)) ||
            // Check if ArrowRight was pressed
            e.key === 'ArrowRight'
        ) {
            // Find the next element
            const next = nextRef && nextRef.current;
            // If next element exists, select it
            if (next) {
                // Select the next element
                return next.select();
            } else if (autoSubmit) {
                // submit the form
                return handleSubmit()
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
            onKeyUp={handleKeyUp}
        />
    );
});

export default OTPInputGroup;