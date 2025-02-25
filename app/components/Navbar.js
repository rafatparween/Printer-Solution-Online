"use client";

import Link from "next/link";
import PrintIcon from "@mui/icons-material/Print";

const Navbar = () => {
  return (
    <nav className="border shadow-2xl bg-[#1E3A8A]">
      <div className="flex gap-5 items-center py-3">
        {/* Uncomment if you want the logo */}
        {/* <Link href="/" passHref>
          <PrintIcon sx={{ color: '#3730a3', fontSize: '3rem' }} />
        </Link> */}

        <ul className="flex gap-8 text-white">
          <Link href="/" className="hover:border border-[#3730a3] p-2 rounded">
            Home
          </Link>
          <Link
            href="/printeroffline"
            className="hover:border border-[#3730a3] p-2 rounded"
          >
            Printer Offline
          </Link>
          <Link
            href="/printersetupissue"
            className="hover:border border-[#3730a3] p-2 rounded"
          >
            Printer Setup
          </Link>
          <Link
            href="/printerscannersetup"
            className="hover:border border-[#3730a3] p-2 rounded"
          >
            Scanner Setup
          </Link>
          <Link
            href="/privacypolicy"
            className="hover:border border-[#3730a3] p-2 rounded"
          >
            Privacy Policy
          </Link>
          <Link
            href="/customsoftware"
            className="hover:border border-[#3730a3] p-2 rounded"
          >
            Custom Software
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
