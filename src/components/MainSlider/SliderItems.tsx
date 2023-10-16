import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import GroupIcon from '@mui/icons-material/Group';
import AgricultureIcon from '@mui/icons-material/Agriculture';
import SliderDefinition from './SliderDefinition';

const SliderItems = [
    SliderDefinition(
        "/projects/project_1.jpg",
        "/projects",
        "Organic farm",
        "Information about organic farm",
        <AgricultureIcon />,
        "LearnMore"
    ), SliderDefinition(
        "/projects/project_5.jpg",
        "/about",
        "Label image 5",
        "Information about this slide 5",
        <GroupIcon />,
        "AboutUs"
    ), SliderDefinition(
        "/projects/project_3.jpg",
        "/help",
        "Amahoro children",
        "Partner children program",
        <VolunteerActivismIcon />,
        "HelpNow"
    ),
];

export default SliderItems;
