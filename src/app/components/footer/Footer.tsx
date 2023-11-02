import Link from "next/link";
import { AiFillInstagram, AiFillTwitterCircle, AiFillYoutube } from "react-icons/ai";
import { MdFacebook } from "react-icons/md";
import Container from "../Container";
import FooterList from "./FooterList";

const Footer: React.FC = () => {
    return (
        <footer className="bg-slate-700 text-slate-200 text-sm mt-16">
          <Container>
            <div className="flex flex-col- md:flex-row justify-between pt-16 pb-8">
              <FooterList>
                <h3 className="text-base font-bold mb-2">Shop Categories</h3>
                <Link href="#">Monos</Link>
                <Link href="#">Duendes</Link>
                <Link href="#">Matilab</Link>
                <Link href="#">Carlosweed</Link>
                <Link href="#">Diegomain</Link>
              </FooterList>
              <FooterList>
                <h3 className="text-base font-bold mb-2">Customer Service</h3>
                <Link href="#">Contact us</Link>
                <Link href="#">Shipping Police</Link>
                <Link href="#">Returns & Exchanges</Link>
                <Link href="#">FAQs</Link>
              </FooterList>
              <div className="w-full md:w-1/3 mb-6 md:mb-0">
                <h3 className="text-base font-bold mb-2">About us</h3>
                <p className="mb-2">
                Discover enchanting paintings of monkeys and duendes.
                Embrace the magic of art that sparks imagination.
                Handpicked. Captivating. Yours.
                Explore our world of whimsical paintings.
                </p>
                <p>&copy; {new Date().getFullYear()} Monostore. All rights reserverd.</p>
              </div>
              <FooterList>
              <h3 className="text-base font-bold mb-2">Follow us</h3>
              <div className="flex gap-2">
                <Link href="#"><MdFacebook size={24}/></Link>
                <Link href="#"><AiFillTwitterCircle size={24}/></Link>
                <Link href="#"><AiFillInstagram size={24}/></Link>
                <Link href="#"><AiFillYoutube size={24}/></Link>
              </div>
              </FooterList>
            </div>
          </Container>
        </footer>
      );
    }

export default Footer;