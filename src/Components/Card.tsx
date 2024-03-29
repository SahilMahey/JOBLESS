import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/joy/Typography';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

export default function OverflowCard(props: any) {
  
  const remove_card = async(id: any)=>
  {
    

    try {
      const response = await fetch('../../.netlify/functions/delete', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({id}),
      });

      if (!response.ok) {
        throw new Error('Failed to delete post');
      }

      // If you want to remove the post from the UI upon successful deletion,
      // you can do so here by removing the corresponding DOM element

      console.log('Post deleted successfully');
      props.fetchData();
    } catch (error) {
      console.error(error); // Handle error, show error message to the user, etc.
    }

  };

  const update_card = async(id: any) =>
  {
    props.setModal(true);
    props.setUpdate(true);

    try {
      const response = await fetch('../../.netlify/functions/get_by_id', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({id}),
      });
      const data = await response.json();
      
      props.setModaldata({
        
        'name':data.details.name,
        'company': data.details.company,
        'date': data.details.date
      })
      props.setId( data.details._id)
      console.log(data.details)
      if (!response.ok) {
        throw new Error('Failed to delete post');
      }

      // If you want to remove the post from the UI upon successful deletion,
      // you can do so here by removing the corresponding DOM element

      console.log('Post fetched successfully');
    } catch (error) {
      console.error(error); // Handle error, show error message to the user, etc.
    }
  }
  
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
  <CardContent sx={{ display: 'flex', flexDirection:'column', justifyContent: 'center', alignItems:'center' }}>
    <Typography level="title-md">{props.element.name}</Typography>
    <Typography level="body-sm">{props.element.company}</Typography>
  </CardContent>
  <CardOverflow  sx={{ bgcolor: 'background.level1' , display: 'flex', flexDirection:'row', justifyContent:'space-around'}}>
    <Typography level="body-xs" fontWeight="md" textColor="text.secondary" sx={{mt:1}}>
        {props.element.date}
    </Typography>
    <IconButton aria-label="edit" size="small" onClick={()=>update_card(props.element._id) }>
    <EditIcon fontSize="small" />
   </IconButton>
<IconButton aria-label="delete" size="small" onClick={()=>remove_card(props.element._id) }>
<DeleteIcon fontSize="small" />
</IconButton>
  </CardOverflow>
</Card>

  );
}


