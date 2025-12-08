import { Card, CardContent, CardDescription, CardTitle } from './ui/card';

type HeroCardProps = {
    title: string;
    description: string;
    imageUrl: string;
};

export default function HeroCard({
    title = 'lorem ipsum dolor sit amet',
    description = 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    imageUrl = 'https://placehold.co/400x600/png?text=Hero+Image',
}: HeroCardProps) {
    return (
        <Card className="group w-full cursor-pointer p-2 transition-shadow duration-300 hover:shadow-lg">
            <CardContent className="flex flex-row gap-4 overflow-hidden p-0">
                <div id="heroCardImage" className="h-[280px] w-[200px]">
                    <img
                        title={title}
                        src={imageUrl}
                        alt={title}
                        className="h-full w-full -translate-x-7 translate-y-5 scale-125 -rotate-20 rounded-sm object-cover transition-transform duration-300 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:scale-100 group-hover:rotate-0"
                    />
                </div>
                <div className="flex translate-y-5 flex-col gap-1 p-4 transition-transform duration-300 group-hover:translate-y-0">
                    <CardTitle
                        className="line-clamp-1 -translate-x-10 -rotate-20 text-left text-2xl font-bold transition-transform duration-300 group-hover:translate-x-0 group-hover:rotate-0"
                        title={title}
                    >
                        {title}
                    </CardTitle>
                    <CardDescription
                        className="max-w-xs -translate-x-5 -rotate-20 text-left text-sm text-muted-foreground transition-transform duration-300 group-hover:translate-x-0 group-hover:rotate-0 md:line-clamp-4 lg:line-clamp-6"
                        title={description}
                    >
                        {description}
                    </CardDescription>
                </div>
            </CardContent>
        </Card>
    );
}
