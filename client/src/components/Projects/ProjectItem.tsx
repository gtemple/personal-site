import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function ProjectItem({image, title}: ProjectProps) {

  interface ProjectProps {
    image: string;
    title: string;
  }

  return (
    <div>
      <Card className='project-card'>
        <CardMedia
          image={image}
          title={title}
        />
      </Card>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
      </CardContent>
    </div>
  )
}

export default ProjectItem