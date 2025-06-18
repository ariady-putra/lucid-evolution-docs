"use client";

import Image from "next/image";
import { Link, Footer as NextraFooter } from "nextra-theme-docs";

export default function Footer() {
  return <NextraFooter className="flex-col items-center">
    <div className="footer-content flex min-w-[75%]">
      <div className="footer-section logo-section max-w-fit">
        <Link href="https://anastasialabs.com" className="hover:opacity-75">
          <Image
            src="/lucid-evolution/al-logo.png"
            alt="Anastasia Labs Logo"
            className="footer-logo brightness-0 invert-75 not-dark:invert-50"
            width={180}
            height={42}
          />
        </Link>
      </div>
      <div className="grow" />
      <div className="footer-links">
        <div className="footer-section min-w-max">
          <h3 className="cursor-default">Quick Links</h3>
          <ul>
            <li>
              <Link href="https://www.npmjs.com/package/@lucid-evolution/lucid">
                NPM Package
              </Link>
            </li>
            <li>
              <Link href="https://anastasialabs.com">Anastasia Labs</Link>
            </li>
          </ul>
        </div>
        <div className="footer-section min-w-max">
          <h3 className="cursor-default">Community</h3>
          <ul>
            <li>
              <Link href="https://discord.gg/s89P9gpEff">Discord</Link>
            </li>
            <li>
              <Link href="https://x.com/AnastasiaLabs">X (formerly Twitter)</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div className="footer-bottom min-w-full">
      <p className="items-center font-bold cursor-default">
        MIT {new Date().getFullYear()} ©{" "}
        <a href="https://anastasialabs.com" className="text-gray-[450] no-underline hover:underline" target="_blank" rel="noopener noreferrer">
          Anastasia Labs
        </a>
      </p>
    </div>
  </NextraFooter>;
}
