import Link from 'next/link'
import { useRef } from 'react';
import Notification from '../components/Notification';
import { useState } from 'react';

export default function SignUpNow() {
const[notif,setNotif] = useState();
const[msg,setMsg] = useState();

    const FnameRef = useRef(null)
    const LnameRef = useRef(null)
    const EmailRef = useRef(null)
    const PassRef = useRef(null)

    async function submitter(e) {
        e.preventDefault();
        let name = FnameRef.current.value + ' ' + LnameRef.current.value;
        let email = EmailRef.current.value;
        let password = PassRef.current.value;

        const resp = await fetch('/api/addUser', {
            method: "POST",
            body: JSON.stringify({
                name,
                email,
                password
            }),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(data => data.json());
        console.log(resp.message)

        if (resp.message === "ok") {
            setNotif('success');
        }
        else if (resp.message === "Empty Credentials") {
            setNotif('failed');
            setMsg("Credentials are empty!")
        }else if(resp.message === "Email already Exists!"){
            setNotif("failed");
            setMsg("Email ID already exists!")
        } else {
            setNotif('pending');
        }

    }

    if(notif === "success" || notif === "failed"){
        setTimeout(()=>{
            setNotif(false)
        },3000)
    };
    return (
        <div className=' font-nunito h-[560px] bg-gradient-to-t from-white to-[#6f2232] pt-11 lg:pl-0'>
            <div className="bg-white flex flex-col max-w-md px-4 py-8 rounded-lg dark:bg-gray-800 sm:px-6 md:px-8 lg:px-10 mx-auto shadow-2xl">
                <div className="self-center mb-2 text-xl font-light text-gray-800 sm:text-2xl dark:text-white">
                    Create a new account
                </div>
                <span className="justify-center text-sm text-center text-gray-500 flex-items-center dark:text-gray-400">
                    Already have an account ?
                    <a className="text-sm text-blue-500 underline hover:text-blue-700">
                        <Link href="/login">
                            Sign in
                        </Link>
                    </a>
                </span>
                <div className="p-6 mt-8">
                    <form action="#" onSubmit={submitter}>

                        <div className="flex gap-4 mb-2">
                            <div className=" relative ">
                                <input type="text" id="create-account-first-name" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-[#7e3443aa]  focus:border-transparent" name="First name" placeholder="First name" ref={FnameRef} />
                            </div>
                            <div className=" relative ">
                                <input type="text" id="create-account-last-name" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-[#7e3443aa] focus:border-transparent" name="Last name" placeholder="Last name" ref={LnameRef} />
                            </div>
                        </div>
                        <div className="flex flex-col mb-2">
                            <div className=" relative ">
                                <input type="text" id="create-account-email" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-[#7e3443aa]  focus:border-transparent" placeholder="Email" ref={EmailRef} />
                            </div>
                        </div>
                        <div className="flex flex-col mb-2">
                            <div className=" relative ">
                                <input type="text" id="create-account-pseudo" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-[#7e3443aa] focus:border-transparent" name="password" placeholder="Password" ref={PassRef} />
                            </div>
                        </div>
                        <div className="flex w-full my-4">
                            <button type="submit" className="py-2 px-4 bg-[#851c31]  hover:bg-[#6f2232]  focus:ring-[#7e3443aa]  focus:ring-offset-purple-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg " >
                                Sign up
                            </button>
                        </div>
                    </form>

                </div>
            </div>
            <div className='absolute right-8 bottom-5 z-50'>
                {notif && <Notification situation={notif} messageProp ={msg} />}
            </div>
        </div>
    )
}
