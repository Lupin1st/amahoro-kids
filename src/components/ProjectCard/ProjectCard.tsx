import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import { ReactNode } from 'react';

type ProjectCardProps = {
  image: string;
  imageTitle: string;
  title: string;
  actionLink: string;
  children: ReactNode;
};

export default function ProjectCard(props: ProjectCardProps) {
  return (
    <Card variant="outlined" sx={{ maxWidth: 345 }}>
      <CardMedia sx={{ height: 200 }} image={props.image} title={props.imageTitle} />
      <CardContent>
        <h3 className="text-3xl pb-3">{props.title}</h3>
        <p className="text-md text-slate-500">{props.children}</p>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
