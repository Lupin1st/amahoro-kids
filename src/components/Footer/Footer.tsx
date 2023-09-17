'use client';

import './styles.css';
import Newsletter from '../Newsletter/Newsletter';
import SocialMedia from '../SocialMedia/SocialMedia';
import { FooterNavigation } from '../Navigation/FooterNavigation/FooterNavigation';
import Contact from './Contact';
import Link from 'next-intl/link';
import VerticalDivider from '../VerticalDivider/VerticalDivider';
import HelpNow from './HelpNow';
import { ProjectNavigation } from '../Navigation/ProjectNavigation/ProjectNavigation';
import { useTranslations } from 'next-intl';

export default function Footer() {
  const t = useTranslations('Navigation');

  const year = new Date().getFullYear();
  return (
    <footer className="footer w-full flex flex-col items-center bg-neutral-50">
      <div className="flex lg:flex-row flex-col w-full justify-center lg:space-x-16 max-w-7xl p-8">
        <HelpNow />
        <Contact />
        <ProjectNavigation />
        <FooterNavigation />
        {/* <div className="lg:w-2/5 lg:pt-0 pt-5 w-full flex flex-col items-center">
            <Newsletter />
          </div> */}
      </div>
      <div className="w-full flex flex-col justify-center bg-neutral-200 p-5 pt-8">
        <div className="flex flex-row justify-center space-x-3">
          <div>&copy; {year} AmahoroKids</div>
          <VerticalDivider />
          <Link href="/legal-notice" className="hover:text-sky-600">
            {t('LegalNotice')}
          </Link>
          <VerticalDivider />
          <Link href="/privacy-policy" className="hover:text-sky-600">
            {t('PrivacyPolicy')}
          </Link>
        </div>
        <SocialMedia />
      </div>
    </footer>
  );
}
