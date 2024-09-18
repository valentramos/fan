import { Button } from "@/components/ui/button"
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Menu } from 'lucide-react';

export function MobileMenu() {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button variant="ghost" size="sm" className="-mr-4">
                    <Menu />
                </Button>
            </SheetTrigger>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle>
                        <img src="/favicon.svg" className="h-8 mx-auto" alt="Valent Logo" />                        
                    </SheetTitle>
                    <SheetDescription className="py-5">
                        Bienvenid@ a mi sitio web.
                    </SheetDescription>
                </SheetHeader>
                <div className="w-full grid gap-5 my-10">                    
                    <a href="/">Inicio</a>
                    <a href="/maintenance">Solución</a>
                    <a href="/maintenance">Precios</a>
                </div>

                <SheetFooter>
                    <SheetClose asChild>
                        <Button>
                            <a href="https://wa.link/1uwt2q">
                                Contáctame
                            </a>
                        </Button>                                
                    </SheetClose>
                </SheetFooter>
            </SheetContent>
        </Sheet>
    )
}
