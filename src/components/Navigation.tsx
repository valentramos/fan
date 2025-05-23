"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { usePathname } from "@/lib/navigation";
import { Users2, MessageSquareText, Building2 } from "lucide-react";

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
    {
      label: "Más productos",
      items: [
        {
          title: "CRM",
          href: "https://solunes.cl/crm",
          description: "Contamos con un CRM que tiene el objetivo de ser simple, fácil de usar y práctico para el cliente final. Nos integramos con cualquier plataforma para la obtención y centralización de data.",
          icon: Users2
        },
        {
          title: "Whatsapp bot",
          href: "https://solunes.cl/chat-bot",
          description: "Genera un chatbot a medida que permita realizar conversaciones naturales con tus clientes adaptado a las necesidades de tu empresa.",
          icon: MessageSquareText
        },
        {
          title: "Real Estate",
          href: "https://solunes.cl/real-estate",
          description: "Gestiona de manera eficiente tus propiedades y clientes inmobiliarios con nuestra plataforma especializada en Real Estate. Optimiza procesos y mejora la experiencia del cliente.",
          icon: Building2
        }
      ]
    }
  ];

  return (
    <NavigationMenu>
      <NavigationMenuList>
        {menuItems.map((item) => (
          <NavigationMenuItem key={item.label}>
            {!item.items ? (
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
            ) : (
              <>
                <NavigationMenuTrigger className="text-gray-600 hover:text-[#013B79]">
                  {item.label}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                    {item.items.map((subItem) => (
                      <li key={subItem.title}>
                        <NavigationMenuLink asChild>
                          <a
                            href={subItem.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-blue-50 hover:text-[#013B79]"
                          >
                            <div className="text-sm font-medium leading-none flex items-center gap-2">
                              {subItem.icon && <subItem.icon size={18} className="text-[#013B79]" />}
                              {subItem.title}
                            </div>
                            <p className="line-clamp-2 text-sm leading-snug text-gray-500">
                              {subItem.description}
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </>
            )}
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
