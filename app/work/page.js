import React from "react";
import { BentoGrid, BentoCard } from "@/components/ui/bento-grid";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import styles from "./work.module.css"; // Import your CSS module



const MyComponent = () => {
    return (
        <BentoGrid className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:grid-rows-4 auto-rows-[14rem] sm:auto-rows-[18rem] px-5 gap-4s mb-[10rem]">

            {/* Big Card (First Box - Large on Desktop) */}
            <BentoCard
                name="Spotify API"
                description="Easy Integration of Spotify API for your website"
                href="https://github.com/hemendran-py/spotify-status-api"
                cta={
                    <div className="text-xl font-semibold ">
                        View in Github
                    </div>
                }
                
                className="col-span-1 sm:col-span-1 lg:col-span-2 row-span-2 lg:row-span-4 h-[28rem] sm:h-[40rem] lg:h-[40rem] group text-2xl  "
                Icon={ArrowRightIcon}
                background={
                    <div className="">
                        <img
                            src="/work/spotify.jpg"
                            alt="Spotify API"
                            className="absolute bottom-0 right-0 w-full h-full object-cover transition-all duration-500 ease-out transform group-hover:scale-110 group-hover:origin-bottom-right"
                        />
                    </div>
                }
                index={0}
            />

            {/* Two Small Cards (2nd & 3rd Boxes) */}
            <BentoCard
                name="Portfolio Website "
                description="A minimal, fast, and responsive personal website built with Next.js."
                href="/webdev"
                cta={
                    <div className=" font-semibold">
                        View
                    </div>
                }
                className="col-span-1 sm:col-span-1 lg:col-span-2 row-span-2 text-xl "
                Icon={ArrowRightIcon}
                background={
                    <div className="">
                        <img
                            src="/work/portfolio.jpg"
                            alt="Spotify API"
                            className="absolute top-0 right-0 w-full h-full object-cover transition-all duration-500 ease-out transform group-hover:scale-110 group-hover:origin-right"
                        />
                    </div>
                }
                index={1}
                
            />

            {/* <BentoCard
                name="App Development"
                description="Browse my mobile and desktop applications built with Java and Kotlin."
                href="/appdev"
                cta="See Apps"
                className="col-span-1 sm:col-span-1 lg:col-span-1 row-span-2"
                Icon={ArrowRightIcon}
            /> */}

            {/* Medium Card (4th Box - Spans 2 Columns on Desktop) */}
            <BentoCard
                name="Phishing URL Detection"
                description="A command-line tool that detects phishing URLs based on machine learning techniques ."
                href="https://github.com/hemendran-py/detect-phishing-url"
                cta={
                    <div className=" font-semibold">
                        View in Github
                    </div>
                }
                className="col-span-1 sm:col-span-2 lg:col-span-2 lg:row-span-2 min-h-[18rem] text-2xl"
                Icon={ArrowRightIcon}
                background={
                    <div className="bg-gray-600 min-h-100vh absolute top-0 right-0 w-full h-full object-cover">
                        

                    </div>
                }
                index={2}
            />
        </BentoGrid>

    );
};

export default MyComponent;
