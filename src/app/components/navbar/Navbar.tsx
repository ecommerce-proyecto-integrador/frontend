'use client';
import Link from "next/link";
import Container from "../Container";
import Image from "next/image";
//import logo from "../../../../public/logo.png";
import CartCount from "./CartCount";
import { CgProfile } from "react-icons/cg";
import { useRouter } from "next/navigation";
import { getCookie } from 'cookies-next'
import { deleteCookie } from 'cookies-next';

const Navbar: React.FC = () => {
  const router = useRouter();
  const token = getCookie("token");

  const handleLogout = () => {
    deleteCookie("token");  // Remove the token
    router.push('/');       // Redirect to homepage
  };

  return (
    <div className="sticky top-0 w-full bg-white z-30 shadow-md">
      <div className="py-4 border-b-[1px]">
        <Container>
          <div className="flex items-center justify-between gap-3 md-gap-0">
            <div className="flex items-center gap-2">
              <Image src="/logo.jpg" width={30} height={40} alt="logo" className="rounded-full"/>
              <Link href="/" className="font-bold text-2xl">MonoStore</Link>
            </div>
            <div className="flex items-center gap-8 md:gap-12">
              {token ? (
                <div onClick={() => router.push('/pages/profileuser')} className="relative cursor-pointer transition hover:scale-105" suppressHydrationWarning={true}>
                  <CgProfile size={30}/>
                </div>
              ) : (<></>)}
              {token ? (
                <button onClick={handleLogout} className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">Close Session</button>
              ) : (<></>)}
              <div><CartCount /></div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default Navbar;