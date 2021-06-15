import React, {Component} from 'react';
import '../styles/main.css';
export default class Experience extends Component{
    render(){
        return(
            <React.Fragment>
                <section id="experience" className="text-gray-600 body-font">
                    <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-col text-center w-full mb-20">
                        <h1 className="text-2xl font-medium title-font mb-4 text-gray-900 tracking-widest">MY WORK EXPERIENCE</h1>
                        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">An overview of what I have been working on. Be sure to reach out to me if you wish to know more about my work.</p>
                    </div>
                    <div className="flex flex-wrap -m-2">
                        <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                        <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                            <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://thedesignlove.com/wp-content/uploads/2018/02/Case-Study-The-Microsoft-Logo-Evolution-5.jpg" />
                            <div className="flex-grow">
                            <h2 className="text-gray-900 title-font font-medium">Microsoft Engage 2021</h2>
                            <p className="text-gray-500">Mentee</p>
                            </div>
                        </div>
                        </div>
                        <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                        <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                            <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://pbs.twimg.com/profile_images/710727346148409344/88A6YRY2.jpg" />
                            <div className="flex-grow">
                            <h2 className="text-gray-900 title-font font-medium">MIDAS Labs, IIITD</h2>
                            <p className="text-gray-500">Software Developer</p>
                            </div>
                        </div>
                        </div>
                        <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                        <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                            <img alt="team" className="w-16 h-16 bg-gray-200 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://www.capexmove.io/assets/img/logo_small.png" />
                            <div className="flex-grow">
                            <h2 className="text-gray-900 title-font font-medium">Capexmove</h2>
                            <p className="text-gray-500">Software Development Intern</p>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}