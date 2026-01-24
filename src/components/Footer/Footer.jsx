import React from 'react';

const Footer = () => {
    return (
        <div className='bg-black mt-10 text-white'>
            <div className='grid grid-cols-1 mx-auto md:grid-cols-5 items-start p-10  gap-12 border-b border-gray-500'>
                <div className='flex flex-col gap-2 '>
                    <a className="flex flex-col text-xl font-semibold  text-left ">CS — Ticket System</a>
                    <p className='text-sm'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>
                <div className='flex flex-col gap-2 text-left '>
                    <a className="text-xl font-semibold">Company</a>
                    <a className='text-sm' href="">About Us</a>
                    <a className='text-sm' href="">Our Mission</a>
                    <a className='text-sm' href="">Contact Saled</a>
                </div>
                <div className='flex flex-col gap-2 text-left '>
                    <a className="text-xl  font-semibold ">Services</a>
                    <a className='text-sm' href="">Products & Services</a>
                    <a className='text-sm' href="">Customer Stories</a>
                    <a className='text-sm' href="">Download Apps</a>
                </div>
                <div className='flex flex-col gap-2 text-left '>
                    <a className="text-xl font-semibold ">Information</a>
                    <a className='text-sm' href="">Privacy Policy</a>
                    <a className='text-sm' href="">Terms & Conditions</a>
                    <a className='text-sm' href="">Join Us</a>
                </div>
                <div className='flex flex-col gap-2 text-left '>
                    <a className="text-xl  font-semibold ">Social Links</a>
                    <a className='text-sm' href="">@CS — Ticket System</a>
                    <a className='text-sm' href="">@CS — Ticket System</a>
                    <a className='text-sm' href="">support@cst.com</a>
                </div>

            </div>
            <div>
                <p className='text-center py-2'>© 2025 CS — Ticket System. All rights reserved.</p>
            </div>
        </div>
    );
};

export default Footer;