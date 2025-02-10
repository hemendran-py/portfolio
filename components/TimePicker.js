"use client";
import React, { useEffect, useState } from "react";

function TimePicker() {
    const [time, setTime] = useState(null); // Start with null to avoid mismatch

    useEffect(() => {
        setTime(new Date()); // Set correct time immediately on mount
        const intervalId = setInterval(() => setTime(new Date()), 1000);
        return () => clearInterval(intervalId); // Clear interval on component unmount
    }, []);

    if (!time) return null; // Prevent rendering until the correct time is set

    return (
        <div>
            <p className="text-white timepicker-container" style={{ letterSpacing: '1px' }}>
                INDIA / {time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }).toUpperCase()}
            </p>
        </div>
    );
}

export default TimePicker;
