import Link from "next/link";
import { FaShoppingCart } from "react-icons/fa";
import Container from "../Container";
import Image from "next/image";
import logo from "../../../../public/logo.jpg";

const Navbar: React.FC = () => {
  
    return (
          <div className="sticky top-0 w-full bg-slate-200 z-30 shadow-sm">
            <div className="py-4 border-b-[1px]">
              <Container>
                <div className="flex items-center justify-between gap-3 md-gap-0">
                  <div className="flex items-center gap-2">
                    <Image src={logo} width={30} height={40} alt="logo" className="rounded-full"/>
                    <Link href="/" className="font-bold text-2xl">MonoStore</Link>
                  </div>
                  <div className="hidden md:block">Search bar</div>
                  <div className="flex items-center gap-8 md:gap-12">
                    <div>Profile</div>
                    <div>Cart</div>
                  </div>
                </div>
              </Container>
            </div>
          </div>
    );
    }

export default Navbar;