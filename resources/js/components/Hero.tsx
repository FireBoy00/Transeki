import HeroCard from './HeroCard';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from './ui/carousel';

const manga = [
    {
        title: 'One Punch Man',
        description:
            'Saitama is a hero who became so powerful that he can defeat any opponent with a single punch. Bored by the lack of challenge, he searches for meaning and excitement in a world full of monsters and heroes.',
        imageUrl: 'https://cdn.myanimelist.net/images/anime/12/76049.jpg',
    },
    {
        title: 'Naruto',
        description:
            'Naruto Uzumaki, a young ninja with a sealed demon fox spirit within him, dreams of becoming the strongest ninja and leader of his village, the Hokage. Alongside his friends, he embarks on thrilling adventures, facing formidable foes and uncovering hidden truths about his past.',
        imageUrl: 'https://cdn.myanimelist.net/images/anime/13/17405.jpg',
    },
    {
        title: 'Attack on Titan',
        description:
            'In a world where humanity is on the brink of extinction due to giant humanoid creatures known as Titans, Eren Yeager joins the military to fight back and uncover the truth behind their existence. As he battles alongside his friends, he discovers shocking secrets that challenge everything he thought he knew about their world.',
        imageUrl: 'https://cdn.myanimelist.net/images/anime/10/47347.jpg',
    },
];

export default function Hero() {
    return (
        <section className="flex min-h-100 flex-col items-center justify-center bg-primary/5 p-20 text-center">
            <Carousel className="w-full">
                <CarouselContent className="-ml-0">
                    {manga.map((mangaItem, index) => (
                        <CarouselItem
                            key={index}
                            className="flex w-full justify-center px-4 pl-0 sm:basis-full md:basis-1/2 lg:basis-1/3"
                        >
                            <HeroCard
                                title={mangaItem.title}
                                description={mangaItem.description}
                                imageUrl={mangaItem.imageUrl}
                            />
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </section>
    );
}
