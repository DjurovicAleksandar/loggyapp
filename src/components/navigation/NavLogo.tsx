import Link from "next/link";
import LogyyLogo from "@/assets/images/nav/logyy-logo.png";
import Image from "next/image";

const NavLogo = () => {
  return (
    <Link href="/">
      <Image src={LogyyLogo} width={150} height={150} alt="logyy-logo" />
    </Link>
  );
};
export default NavLogo;
