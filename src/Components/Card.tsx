import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import Divider from '@mui/joy/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/joy/Typography';
import DeleteIcon from '@mui/icons-material/Delete';

export default function OverflowCard(props) {
  return (
  <Card variant="outlined" sx={{ width: 320, mb: 2 }}>
  <CardOverflow>
    <AspectRatio ratio="2">
      <img
        src="https://images.unsplash.com/photo-1532614338840-ab30cf10ed36?auto=format&fit=crop&w=318"
        srcSet="https://images.unsplash.com/photo-1532614338840-ab30cf10ed36?auto=format&fit=crop&w=318&dpr=2 2x"
        loading="lazy"
        alt=""
      />
    </AspectRatio>
  </CardOverflow>
  <CardContent style={{ textAlign: 'center' }}>
    <Typography level="title-md">{props.element.name}</Typography>
    <Typography level="body-sm">{props.element.company}</Typography>
  </CardContent>
  <CardOverflow variant="soft" sx={{ bgcolor: 'background.level1' , display: 'flex', flexDirection:'row',justifyContent: 'space-between' }}>
    <Typography level="body-xs" fontWeight="md" textColor="text.secondary" sx = {{mt:1}}>
        {props.element.date}
    </Typography>
    <IconButton aria-label="delete" size="small" >
  <DeleteIcon fontSize="small" />
</IconButton>
  </CardOverflow>
</Card>

  );
}


