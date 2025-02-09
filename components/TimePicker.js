"use client"
import Location from "@/components/location";
import React, { useEffect, useState } from "react";
import { Nunito } from 'next/font/google';

const nunito=Nunito({subset:["latin"]});

function TimePicker() {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => setTime(new Date()), 1000);
        return () => clearInterval(intervalId); // Clear interval on component unmount
    }, []);

    return (
        <div className={`${nunito.variable} `}>
            <div >
                

                <p className=" text-white timepicker-container    " style={{ letterSpacing: '1px' }}>
                

                    
                    INDIA / {time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }).toUpperCase()}
                    
                </p>
            </div>
        </div>
    );
}

export default TimePicker;
