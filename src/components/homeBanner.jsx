import Carousel from 'react-bootstrap/Carousel';
import WelcomeBanner from '../utilities/WelcomeBanner.png';
import WelcomeBanner2 from '../utilities/WelcomeBanner2.jpg';

function HomeBanner() {
    return (
        <Carousel nextIcon={null} prevIcon={null} nextLabel={null} prevLabel={null} fade={true} interval={3000} wrap={true}>
            <Carousel.Item>
                <img src={WelcomeBanner} alt="First slide" />
            </Carousel.Item>
            <Carousel.Item>
                <img src={WelcomeBanner2} alt="Second slide" />
            </Carousel.Item>
        </Carousel>
    );
}

export default HomeBanner;
