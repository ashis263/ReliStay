import Container from '@/components/container';
import { CarouselSize } from './components/Carousel';
import SectionTitle from '@/components/SectionTitle';

const Destinations: React.FC = () => {
    return (
        <Container>
            <SectionTitle title='Destinations' subtitle='Choose Your Desired Destination' />
            <CarouselSize />
        </Container>
    );
}

export default Destinations;
