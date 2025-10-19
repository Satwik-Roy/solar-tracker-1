import Link from 'next/link';
import { Twitter, Instagram } from 'lucide-react';

const Footer = (): JSX.Element => {
  return (
    <footer className="bg-background text-foreground border-t border-border font-sans">
      <div className="mx-auto max-w-[1600px] px-10 py-8 lg:py-10">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row md:gap-0">
          <div className="order-2 md:order-1">
            <Link
              href="/about"
              className="text-xs font-medium uppercase tracking-[0.08em] text-primary-text transition-colors duration-300 hover:text-muted-foreground"
            >
              ABOUT LQVE
            </Link>
          </div>

          <div className="order-1 flex items-center gap-5 md:order-2">
            <a
              href="https://twitter.com/lqve_jp"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LQVE on Twitter"
              className="text-primary-text transition-colors duration-300 hover:text-muted-foreground"
            >
              <Twitter className="h-4 w-4" />
            </a>
            <a
              href="https://www.instagram.com/lqve.jp/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LQVE on Instagram"
              className="text-primary-text transition-colors duration-300 hover:text-muted-foreground"
            >
              <Instagram className="h-4 w-4" />
            </a>
          </div>

          <div className="order-3">
            <p className="text-xs text-copyright-text">©LQVE</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;