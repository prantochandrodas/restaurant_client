import React, { useRef } from 'react';
import image from '../assets/doodle.svg';

import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_3umy9mj', 'template_e6of1b5', form.current, 'FqD8ZBIFTHtTxuI_O')
        .then((result) => {
            console.log(result.text);
            toast.success(' Wow so easy!', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
        }, (error) => {
            console.log(error.text);
            toast.error(error.text, {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
        });
    };
    return (
        <div>
            <div className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 bg-gray-800 text-gray-100">
                <div data-aos="fade-right" data-aos-duration="1000" className="flex flex-col justify-between">
                    <div className="space-y-2">
                        <h2 className="text-4xl font-bold leading-tight lg:text-5xl">Let's talk!</h2>
                        <div className="dark:text-gray-400">Vivamus in nisl metus? Phasellus.</div>
                    </div>
                    <img src={image} alt="" className="p-6 h-52 md:h-64" />
                </div>
                <form data-aos="fade-left" data-aos-duration="1000" novalidate="" className="space-y-6 ng-untouched ng-pristine ng-valid" ref={form} onSubmit={sendEmail}>
                    <div>
                        <label for="name" className="text-sm">Full name</label>
                        <input name='full_name' id="name" type="text" placeholder="" className="w-full p-3 rounded bg-gray-800 border border-white" />
                    </div>
                    <div>
                        <label for="email" className="text-sm">Email</label>
                        <input name='email' id="email" type="email" className="w-full p-3 rounded bg-gray-800 border border-white" />
                    </div>
                    <div>
                        <label for="message" className="text-sm">Message</label>
                        <textarea name="message"  id="message" rows="3" className="w-full p-3 rounded border border-white bg-gray-800"></textarea>
                    </div>
                    <button type="submit" className="w-full p-3 text-sm font-bold tracking-wide uppercase rounded bg-violet-400 dark:text-gray-900">Send Message</button>
                </form>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Contact;