import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import Image from "next/image";
import { TypewriterEffect } from "./ui/type-writer";
const navigation = [
  { name: "Facebook", href: "https://www.facebook.com/rata.surithpinyo/" },
  { name: "Linkedin", href: "https://www.linkedin.com/in/rata-surithpinyo-3b7100245" },
  { name: "Instagram", href: "https://www.instagram.com/rtss_pr/" },
];
const name = [
  {
    text: "Rata",
  },
  {
    text: "Surithpinyo",
  }
];
const bio = "Nice to meet you! Welcome to my portfolio. 💼 I'm a current senior studying Computer Engineering at Chulalongkorn University."
export default function Intro() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <div className="bg-white">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav
          className="flex items-center justify-between p-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <a className="-m-1.5 p-1.5">
              <span className="sr-only"></span>
            <Image
      src="/image/pancake.svg"
      width={40}
      height={40}
      alt="pancake"
    />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                {item.name}
              </a>
            ))}
          </div>
        </nav>
        <Dialog
          as="div"
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                  className="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                  alt=""
                />
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6">
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Log in
                  </a>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>

      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[20deg] bg-gradient-to-tr from-[#f1bbff] to-[#ca44ff] opacity-60 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <div className="mx-auto max-w-2xl pt-20">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="bg-white relative rounded-full px-3 py-1 text-sm leading-6 text-gray-900 ring-1 ring-gray-900/10 hover:ring-gray-900">
              📝 See my github page{" "}
              <a
                href="https://github.com/RataSurithpinyo"
                className="font-semibold"
              >
                <span className="absolute inset-0" aria-hidden="true" />
                <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
          <div className="text-center">
            <TypewriterEffect words={name} />
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Nice to meet you! Welcome to my portfolio. 💼 I'm a current senior 
              at Computer Engineering, Chulalongkorn University.
            </p>
            
            <div className="mt-10 flex items-center justify-center gap-x-6">
            <div className="bg-slate relative rounded-full px-3 py-1 text-sm leading-6 text-gray-900 ring-1 ring-gray-900/10 hover:ring-gray-900 hover:bg-white hover:cursor-pointer">
                <a href="https://warehouseofheart.coachbychamp.com/">Visit WOH website</a>
                </div>
              <a
                href="https://www.zipeventapp.com/e/Warehouse-of-Heart"
                className="text-sm font-semibold leading-6 text-gray-900 hover:underline"
              >
                What is WOH <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ffe53c] to-[#ff8b51] opacity-50 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
      </div>
    </div>
  );
}
