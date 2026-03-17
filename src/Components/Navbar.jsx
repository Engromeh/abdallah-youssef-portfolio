import { Disclosure } from "@headlessui/react"
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline"

const navigation = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
]

export default function Navbar() {
  return (
    <Disclosure
      as="nav"
      className="fixed w-full z-50 bg-softBeige/90 backdrop-blur-md shadow-sm"
    >
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-6">
            <div className="flex h-16 items-center justify-between">

              {/* Mobile Button */}
              <div className="sm:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-richBlack hover:text-terracotta transition">
                  <Bars3Icon className={`${open ? "hidden" : "block"} h-6 w-6`} />
                  <XMarkIcon className={`${open ? "block" : "hidden"} h-6 w-6`} />
                </Disclosure.Button>
              </div>

              {/* Logo */}
              <h1 className="text-2xl font-extrabold tracking-wide text-richBlack">
                Abdallah Youssef
                <span className="block h-[2px] w-16 bg-mutedGold mt-1"></span>
              </h1>

              {/* Desktop Menu */}
              <div className="hidden sm:flex space-x-6 text-richBlack">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="hover:text-terracotta transition-colors duration-300"
                  >
                    {item.name}
                  </a>
                ))}
              </div>

            </div>
          </div>

          {/* Mobile Menu */}
          <Disclosure.Panel className="sm:hidden bg-softBeige/95">
            <div className="px-2 pt-2 pb-3 space-y-1 text-richBlack">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 rounded-md hover:bg-lightSand hover:text-dustyBlue transition"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}