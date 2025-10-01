import Image from "next/image";
import Link from "next/link";

export const Header = () => {
  return (
    <header>
      <Link href="/">
        <Image
          src="/goatius.png"
          height={60}
          width={60}
          alt="logo"
          className="rounded-full"
          priority
        ></Image>
      </Link>
    </header>
  );
};
