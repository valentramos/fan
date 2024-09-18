import { LucideCreditCard, Ticket, UserRoundCheck, StoreIcon, Laptop, PlaySquareIcon, Smartphone, Medal, LayoutDashboard, LucideKeyRound } from "lucide-react";
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card"

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"


export function Cards() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 py-10 gap-4">
            <div className="cursor-pointer">
                <HoverCard>
                    <HoverCardTrigger asChild>
                        <Card className="transition ease-in-out hover:-translate-y-2 duration-300">
                            <div className=" flex items-center space-x-4 p-4">
                                <LucideCreditCard color="#08E3F4"/>
                                <div className="flex-1 space-y-1">
                                    <p className="text-md font-medium leading-none">
                                        Membresías
                                    </p>
                                </div>
                            </div>
                        </Card>

                    </HoverCardTrigger>
                    <HoverCardContent className="w-80">
                        <p className="text-sm text-muted-foreground">
                            El módulo de membresías es una solución diseñada para gestionar la inscripción, suscripción y administración de usuarios en diversos servicios o productos basados en membresía.
                        </p>
                    </HoverCardContent>
                </HoverCard>
            </div>
            <div className="cursor-pointer">
                <HoverCard>
                    <HoverCardTrigger asChild>
                        <Card className="transition ease-in-out hover:-translate-y-2 duration-300">
                            <div className=" flex items-center space-x-4 p-4">
                                <Ticket color="#08E3F4"/>
                                <div className="flex-1 space-y-1">
                                    <p className="text-md font-medium leading-none">
                                        Tickets
                                    </p>
                                </div>
                            </div>
                        </Card>

                    </HoverCardTrigger>
                    <HoverCardContent className="w-80">
                        <p className="text-sm text-muted-foreground">
                        El módulo de Tickets y Eventos es una solución diseñada para facilitar la organización, promoción y gestión de eventos de cualquier escala. 
                        </p>
                    </HoverCardContent>
                </HoverCard>
            </div>
            <div className="cursor-pointer">
                <HoverCard>
                    <HoverCardTrigger asChild>
                        <Card className="transition ease-in-out hover:-translate-y-2 duration-300">
                            <div className=" flex items-center space-x-4 p-4">
                                <UserRoundCheck color="#08E3F4"/>
                                <div className="flex-1 space-y-1">
                                    <p className="text-md font-medium leading-none">
                                        CRM
                                    </p>
                                </div>
                            </div>
                        </Card>

                    </HoverCardTrigger>
                    <HoverCardContent className="w-80">
                        <p className="text-sm text-muted-foreground">
                            El servicio de CRM y es una solución diseñada para centralizar y optimizar la gestión de relaciones con clientes. 
                        </p>
                    </HoverCardContent>
                </HoverCard>
            </div>
            <div className="cursor-pointer">
                <HoverCard>
                    <HoverCardTrigger asChild>
                        <Card className="transition ease-in-out hover:-translate-y-2 duration-300">
                            <div className=" flex items-center space-x-4 p-4">
                                <StoreIcon color="#08E3F4"/>
                                <div className="flex-1 space-y-1">
                                    <p className="text-md font-medium leading-none">
                                        E-commerce
                                    </p>
                                </div>
                            </div>
                        </Card>

                    </HoverCardTrigger>
                    <HoverCardContent className="w-80">
                        <p className="text-sm text-muted-foreground">
                            El módulo de E-commerce está diseñado para las operaciones de venta de productos, proporcionando una plataforma robusta para la gestión de productos e inventarios y personalización de pedidos.
                        </p>
                    </HoverCardContent>
                </HoverCard>
            </div>
            <div className="cursor-pointer">
                <HoverCard>
                    <HoverCardTrigger asChild>
                        <Card className="transition ease-in-out hover:-translate-y-2 duration-300">
                            <div className=" flex items-center space-x-4 p-4">
                                <Laptop color="#08E3F4"/>
                                <div className="flex-1 space-y-1">
                                    <p className="text-md font-medium leading-none">
                                        Website
                                    </p>
                                </div>
                            </div>
                        </Card>

                    </HoverCardTrigger>
                    <HoverCardContent className="w-80">
                        <p className="text-sm text-muted-foreground">
                            Plataforma centralizada para comunicar y conectar con los hinchas, fortaleciendo la identidad del club y manteniendo a los aficionados informados.
                        </p>
                    </HoverCardContent>
                </HoverCard>
            </div>
            <div className="cursor-pointer">
                <HoverCard>
                    <HoverCardTrigger asChild>
                        <Card className="transition ease-in-out hover:-translate-y-2 duration-300">
                            <div className=" flex items-center space-x-4 p-4">
                                <PlaySquareIcon color="#08E3F4"/>
                                <div className="flex-1 space-y-1">
                                    <p className="text-md font-medium leading-none">
                                        Multimedia
                                    </p>
                                </div>
                            </div>
                        </Card>

                    </HoverCardTrigger>
                    <HoverCardContent className="w-80">
                        <p className="text-sm text-muted-foreground">
                            Desde noticias y actualizaciones en tiempo real hasta comunicaciones personalizadas, aseguramos que los aficionados reciban la información más relevante de manera oportuna.
                        </p>
                    </HoverCardContent>
                </HoverCard>
            </div>
            <div className="cursor-pointer">
                <HoverCard>
                    <HoverCardTrigger asChild>
                        <Card className="transition ease-in-out hover:-translate-y-2 duration-300">
                            <div className=" flex items-center space-x-4 p-4">
                                <Smartphone color="#08E3F4"/>
                                <div className="flex-1 space-y-1">
                                    <p className="text-md font-medium leading-none">
                                        App iOS / Android
                                    </p>
                                </div>
                            </div>
                        </Card>

                    </HoverCardTrigger>
                    <HoverCardContent className="w-80">
                        <p className="text-sm text-muted-foreground">
                            Ofrece una experiencia personalizada y de fácil acceso, permitiendo a los fans acceder a contenido exclusivo y recibir notificaciones en tiempo real, mejorando el engagement y la lealtad.
                        </p>
                    </HoverCardContent>
                </HoverCard>
            </div>
            <div className="cursor-pointer">
                <HoverCard>
                    <HoverCardTrigger asChild>
                        <Card className="transition ease-in-out hover:-translate-y-2 duration-300">
                            <div className=" flex items-center space-x-4 p-4">
                                <Medal color="#08E3F4"/>
                                <div className="flex-1 space-y-1">
                                    <p className="text-md font-medium leading-none">
                                        Fan-engagement
                                    </p>
                                </div>
                            </div>
                        </Card>

                    </HoverCardTrigger>
                    <HoverCardContent className="w-80">
                        <p className="text-sm text-muted-foreground">
                            Gestión completa de actividades: Administración de encuestas, concursos, sorteos y programas de puntos. Análisis de datos de participación.
                        </p>
                    </HoverCardContent>
                </HoverCard>
            </div>
            <div className="cursor-pointer">
                <HoverCard>
                    <HoverCardTrigger asChild>
                        <Card className="transition ease-in-out hover:-translate-y-2 duration-300">
                            <div className=" flex items-center space-x-4 p-4">
                                <LayoutDashboard color="#08E3F4"/>
                                <div className="flex-1 space-y-1">
                                    <p className="text-md font-medium leading-none">
                                        Admin/ Reportes
                                    </p>
                                </div>
                            </div>
                        </Card>

                    </HoverCardTrigger>
                    <HoverCardContent className="w-80">
                        <p className="text-sm text-muted-foreground">
                            Optimiza la gestión del club, mediante el registro de socios, gestión de eventos, análisis estadísticos, generación de reportes y sobre todo ver el movimiento del club en tiempo real.
                        </p>
                    </HoverCardContent>
                </HoverCard>
            </div>
            <div className="cursor-pointer">
                <HoverCard>
                    <HoverCardTrigger asChild>
                        <Card className="transition ease-in-out hover:-translate-y-2 duration-300">
                            <div className=" flex items-center space-x-4 p-4">
                                <LucideKeyRound color="#08E3F4"/>
                                <div className="flex-1 space-y-1">
                                    <p className="text-md font-medium leading-none">
                                        Control de acceso
                                    </p>
                                </div>
                            </div>
                        </Card>

                    </HoverCardTrigger>
                    <HoverCardContent className="w-80">
                        <p className="text-sm text-muted-foreground">
                            Gestión completa de acceso a espacios deportivos,  administración y configuración de sectores, butacas, áreas comunes. Accesos mediante tarjetas RFC y códigos QR.
                        </p>
                    </HoverCardContent>
                </HoverCard>
            </div>
        </div>    
    )
}