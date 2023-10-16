import { useTranslations } from 'next-intl';
import Carousel from 'react-material-ui-carousel';
import SliderItems from './SliderItems';
function MainSlider() {
    const t = useTranslations('MainPage');
    return (
        <div className='w-full'>

            <Carousel className="max-height-div"
                animation="fade"
                height={500}
                interval={7000}
                duration={2000}
                navButtonsAlwaysVisible={true}
                indicators={true}
                sx={{
                    backgroundColor: 'rgba(33, 123, 179, 0.1)',
                }}
            >
                {SliderItems}
            </Carousel>
        </div>
    );
}
export default MainSlider;