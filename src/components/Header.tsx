import { shadow } from "@/styles/utils";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { DarkModeToggle } from "./DarkModeToggle";
import { LogOutButton } from "./LogOutButton";
import { getUser } from "@/auth/server";
import { SidebarTrigger } from "./ui/sidebar";

 const  Header =async() => {
  const user = await  getUser();
  return (
    <header
      className="bg-popover relative flex h-24 w-full items-center justify-between px-3 sm:px-8"
      style={{
        boxShadow: shadow,
      }}
    >
      <SidebarTrigger className="absolute left-1 top-1"/>
      <Link className="flex items-end gap-2" href="/">
        <Image
          src="/goatius.png"
          height={50}
          width={60}
          alt="logo"
          className="mx-1 mt-2 rounded-full"
          priority
        ></Image>
        <h1 className="flex flex-col pb-1 text-2xl leading-6 font-semibold">
          Samrat <span>Notes</span>
        </h1>
      </Link>

      <div className="flex gap-4">
        {user ? (
          <LogOutButton />
        ) : (
          <>
            {/* asChild makes the Button component render the Link component as its child, inheriting its styles and behavior. */}
            <Button asChild>
              <Link href="/sign-up" className="hidden sm:block">
                Sign Up{" "}
              </Link>
            </Button>

            <Button asChild variant="outline">
              <Link href="/login">Log In </Link>
            </Button>
          </>
        )}
        <DarkModeToggle/>
      </div>
    </header>
  );
};
export default Header;
