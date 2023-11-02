import Link from "next/link";
import { FaShoppingCart } from "react-icons/fa";
import Container from "./Container";


const Navbar: React.FC = () => {
  
    return (
          <div className="sticky top-0 w-full bg-slate-200 z-30 shadow-sm">
            <div className="py-4 border-b-[1px]">
              <Container>
                <div className="flex items-center justify-between gap-3 md-gap-0">
                  <Link href="/" className="font-bold text-2xl">Monostore</Link>
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