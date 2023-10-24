import { Button, Card, CardActions, CardContent, CardMedia } from '@mui/material';
import { useTranslations } from 'next-intl';

export interface TeamMember {
  name: string;
  role: string;
}

interface TeamCardProps {
  teamMember: TeamMember;
}

export default function TeamCard({ teamMember }: TeamCardProps) {
  const t = useTranslations('AboutPage.Team');

  function getImageUrl(name: string): string {
    return `/team/${name.toLocaleLowerCase().replaceAll(' ', '_')}.jpg`;
  }

  function getDescription(name: string): string {
    return t(name.replaceAll(' ', ''));
  }

  return (
    <Card className="m-3" variant="outlined" sx={{ width: 345 }}>
      <CardMedia
        sx={{ height: 200 }}
        image={getImageUrl(teamMember.name)}
        title={teamMember.name}
      />
      <CardContent>
        <h3 className="text-3xl pb-1 text-center">{teamMember.name}</h3>
        <p className="text-md text-slate-500 pb-2 text-center">{t(teamMember.role)}</p>
        <p className="text-md">{getDescription(teamMember.name)}</p>
      </CardContent>
    </Card>
  );
}
