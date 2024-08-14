import Link from "next/link";
import Button from "../elements/button";

const NavBar = () => {

  const cta = {
    link: '/demo',
    title: 'Get in touch',
    size: 'sm'
  }

  return (
    <div className="bg-mintDark py-4 px-8">
      <div className="container mx-auto">
        <div className="flex justify-between">
          <div className="flex items-center gap-12">
            <Link href="/" className="text-white">
              <img src="https://joyful-egg-6af1fd8511.media.strapiapp.com/Logo_63c267b672.svg" alt="" />
            </Link>
            <div className="text-white hidden md:block">
              <ul className="text-sm flex gap-8">
                <li className="pt-1"><Link href="#">Features</Link></li>
                <li className="pt-1"><Link href="/we-are">We Are</Link></li>
                <li className="pt-1"><Link href="#">Why Mint</Link></li>
                <li className="pt-1"><Link href="#">Careers</Link></li>
              </ul>
            </div>
          </div>
          <div className="flex gap-x-6 items-center">
            <Link className="text-white" href="#">EN</Link>
            <Button cta={cta} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;