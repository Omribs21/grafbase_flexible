import Link from "next/link";
import React from "react";
import Image from "next/image";
import { NavLinks } from "@/constants";
import { link } from "fs";
import AuthProviders from "./AuthProviders";
const Navbar = () => {
    const session = false;
  return (
    <nav className="flexBetween navbar">
      <div className="flex-1 flexStart gap-10">
        <Link href="/">
          <Image src="/logo.svg" width={115} height={45} alt="flexi" />
        </Link>
        <ul className="xl:flex hidden text-medium gap-10">
          {NavLinks.map((link) => (
            <Link href={link.href} key={link.key}>
              {link.text}
            </Link>
          ))}
        </ul>
      </div>

        <div className="flexCenter gap-4">
            {session ? (
                <>
                user photo

                <Link href='/create-project '>
                    share work
                    
                    </Link>
                
                </>
            ):(
                <AuthProviders/>

            )}
        </div>

    </nav>
  );
};

export default Navbar;
