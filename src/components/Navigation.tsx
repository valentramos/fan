"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Button } from "./ui/button"

export function Navigation() {
    const [activeSection, setActiveSection] = React.useState('');

    React.useEffect(() => {
        const handleScroll = () => {
            const currentSection = document.body.getAttribute('data-active-section');
            if (currentSection) {
                setActiveSection(currentSection);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const menuItems = [
        { href: "#inicio", label: "Inicio" },
        { href: "#solucion", label: "Solución" },
        { href: "#beneficios", label: "Beneficios" },
        { href: "#precios", label: "Precios" },
    ];

    return (
        <NavigationMenu>
            <NavigationMenuList>
                {menuItems.map((item) => (
                    <NavigationMenuItem key={item.label} className="hidden lg:block">
                        <NavigationMenuLink asChild>
                            <a
                                href={item.href}
                                className={cn(
                                    navigationMenuTriggerStyle(),
                                    activeSection === item.href.slice(1) && "text-primary font-bold"
                                )}
                            >
                                {item.label}
                            </a>
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                ))}
            </NavigationMenuList>
        </NavigationMenu>
    )
}