import { CarouselSize } from './components/Carousel';
import SectionTitle from '@/components/SectionTitle';

const Destinations: React.FC = () => {
    return (
        <div>
            <SectionTitle title='Destinations' subtitle='Choose Your Desired Destination' />
            <CarouselSize />
        </div>
    );
}

export default Destinations;
