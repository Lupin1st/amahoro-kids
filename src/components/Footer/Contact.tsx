'use client';

import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import { useTranslations } from 'next-intl';
import Link from 'next-intl/link';

export default function Contact() {
  const t = useTranslations('Contact');

  return (
    <div className="lg:w-auto lg:pt-0 pt-5 w-full flex flex-col items-center">
      <h4 className=" text-2xl pb-2">{t('Contact')}</h4>
      <table>
        <tbody>
          <tr>
            <td className="text-right pr-2">
              <EmailIcon />
            </td>
            <td>
              <Link className="hover:text-sky-600" href="mailto:info@amahorokids.com">
                info@amahorokids.com
              </Link>
            </td>
          </tr>
          <tr>
            <td className="text-right pr-2">
              <PhoneIcon />
            </td>
            <td>Maria Reicht: +43 664 88 640 723</td>
          </tr>
          <tr>
            <td className="text-right pr-2">
              <WhatsAppIcon />
            </td>
            <td>Gottfied Wölfl: +250 782 4592 91</td>
          </tr>
          <tr>
            <td className="text-right pr-2">
              <b>IBAN</b>
            </td>
            <td>AT09 3843 9000 0382 9199</td>
          </tr>
          <tr>
            <td className="text-right pr-2">
              <b>BIC</b>
            </td>
            <td>RZSTAT2G439</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
