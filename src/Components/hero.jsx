// eslint-disable-next-line no-unused-vars
import React from "react";

import { logo } from "../assets";

const Hero = () => {
    return (
        <>
            <header className='w-full flex justify-center items-center flex-col'>
                <nav className='flex justify-between items-center w-full mb-10 pt-3'>
                    <img src={logo} alt='sumz_logo' className='w-28 object-contain' />
                        <p className="text-center text-black text-lg max-w-2xl">
                            <br />Powered by Open AI API
                        </p>
                    </nav>

                    <h1 className="head_text">
                        Summarize your Articles with <br className="max-md:hidden"/>
                        <span className="blue_gradient">BaseBot</span>
                    </h1>
                    <h2 className="desc">
                        Simplify  your reading experience with BaseBot, an open-source
                        article summarizer that transforms lengthy articles to clean and
                        crisp summaries <br className="max-md:hidden"/>
                    </h2>
            </header>
        </>
    );
};
export default Hero;
