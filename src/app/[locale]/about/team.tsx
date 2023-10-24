'use client';

import SectionHeader from '@/components/Layout/Headers/SectionHeader';
import Section from '@/components/Layout/Section/Section';
import TeamCard, { TeamMember } from '@/components/TeamCard/TeamCard';
import { useTranslations } from 'next-intl';

const TEAM_MEMBERS: TeamMember[] = [
  {
    name: 'Maria Reicht',
    role: 'Chairman',
  },
  {
    name: 'Gottfired Wölfl',
    role: 'ProjectLead',
  },
  {
    name: 'Andrea Rock',
    role: 'Webdesign',
  },
  {
    name: 'Anet Medunova',
    role: 'Webdesign',
  },
];

export default function TeamSection() {
  const t = useTranslations('AboutPage.Team');

  return (
    <Section>
      <SectionHeader title={t('TeamTitle')}></SectionHeader>
      <div className="flex flex-row flex-wrap justify-center">
        {TEAM_MEMBERS.map((teamMember) => {
          return <TeamCard teamMember={teamMember}></TeamCard>;
        })}
      </div>
    </Section>
  );
}
