import Carousel from 'react-bootstrap/Carousel';
import WelcomeBanner from '../utilities/WelcomeBanner.png';

function HomeBanner() {
    return (
        <Carousel nextIcon={null} prevIcon={null} nextLabel={null} prevLabel={null}>
            <Carousel.Item interval={2000}>  
                <img src={WelcomeBanner} alt="First slide" />
            </Carousel.Item>
            <Carousel.Item interval={2000}>
                <img src={WelcomeBanner} alt="Second slide" />
            </Carousel.Item>
            <Carousel.Item interval={2000}>
                <img src={WelcomeBanner} alt="Third slide" />
            </Carousel.Item>
        </Carousel>
    );
}

export default HomeBanner;