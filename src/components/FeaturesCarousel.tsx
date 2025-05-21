import { Card } from "@/components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

interface FeaturesCarouselProps {
    items: { title: string; desc: string; img: string }[];
}

export function FeaturesCarousel({ items }: FeaturesCarouselProps) {
    return (
        <section className="mt-14">
            <Carousel className="w-full" opts={{ loop: false }}>
                <CarouselContent>
                    {items.map((item, idx) => (
                        <CarouselItem key={idx} className="basis-full md:basis-1/2 lg:basis-1/3 pl-2 first:pl-8">
                            <Card className="flex flex-col items-center justify-center p-6 gap-4 h-screen lg:h-auto">
                                <h3 className="text-lg font-semibold text-center text-[#013B79]">{item.title}</h3>
                                <p className="text-gray-600 text-center text-sm">{item.desc}</p>
                                <img src={item.img} alt={item.title} width={300} height={300} className="" />
                            </Card>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <div className="flex justify-center gap-4 mt-4">
                    <CarouselPrevious />
                    <CarouselNext />
                </div>
            </Carousel>
        </section>
    );
} 