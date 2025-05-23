"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { usePathname } from "@/lib/navigation";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

export function Navigation() {
  const pathname = usePathname();
  
  const menuItems = [
    { href: "/", label: "Inicio" },
    { href: "/ticketing", label: "Ticketing" },
    { href: "/loyalty", label: "Loyalty" },
  ];

  return (
    <NavigationMenu>
      <NavigationMenuList>
        {menuItems.map((item) => (
          <NavigationMenuItem key={item.label}>
            <NavigationMenuLink asChild>
              <a
                href={item.href}
                className={cn(
                  navigationMenuTriggerStyle(),
                  "text-gray-600 hover:text-[#013B79]",
                  pathname === item.href && "text-[#013B79] font-semibold bg-blue-50"
                )}
              >
                {item.label}
              </a>
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
