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
    { 
      href: "https://solunes.cl/crm", 
      label: "CRM",
      isExternal: true
    },
    { 
      href: "https://solunes.cl/chat-bot", 
      label: "Whatsapp bot",
      isExternal: true
    },
    { 
      href: "https://solunes.cl/real-estate", 
      label: "Real Estate",
      isExternal: true
    }
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
        <div className="w-full grid gap-4 my-10">
          {menuItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.isExternal ? "_blank" : undefined}
              rel={item.isExternal ? "noopener noreferrer" : undefined}
              className={cn(
                "text-gray-600 hover:text-[#013B79] transition-colors py-1",
                pathname === item.href && "text-[#013B79] font-semibold"
              )}
            >
              {item.label}
            </a>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
}
