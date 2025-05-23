import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { usePathname } from "@/lib/navigation";
import { cn } from "@/lib/utils";

export function MobileMenu() {
  const pathname = usePathname();
  
  const menuItems = [
    { href: "/", label: "Inicio" },
    { href: "/ticketing", label: "Ticketing" },
    { href: "/loyalty", label: "Loyalty" },
  ];

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
            <img src="/favicon.svg" className="h-8 mx-auto" alt="Fan Logo" />
          </SheetTitle>
          <SheetDescription className="py-5">
            Bienvenid@ a +FAN
          </SheetDescription>
        </SheetHeader>
        <div className="w-full grid gap-5 my-10">
          {menuItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={cn(
                "text-gray-600 hover:text-[#013B79] transition-colors",
                pathname === item.href && "text-[#013B79] font-semibold"
              )}
            >
              {item.label}
            </a>
          ))}
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button className="w-full">
              <a href="#contact">Contactar</a>
            </Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
