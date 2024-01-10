import Container from "@/components/ui/container";
import Link from "next/link";
import MainNav from "@/components/main-nav";
import getCategories from "@/actions/get-categories";
import Image from 'next/image';
import logo from "@/app/logo.png";
import NavbarActions from "@/components/navbar-actions";

export const revalidate = 0;

const Navbar = async () => {
    const categories = await getCategories();

    return (
        <div className="border-b">
            <Container>
                <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center">
                    <Link href="/" className="ml-4 flex lg:ml-0 gap-x-2">
                    <Image src={logo} alt="logo" className="h-8 w-8"/>
                        <p className="font-bold text-xl store-title ">   
                            eshop-obchod</p>
                    </Link>
                    <MainNav data={categories} />
                    <NavbarActions />
                </div>
            </Container>
        </div>
    )
}
export default Navbar;