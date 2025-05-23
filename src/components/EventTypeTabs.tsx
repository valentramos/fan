import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Music, Trophy, PartyPopper } from "lucide-react";
import { Button } from "./ui/button";

export function EventTypeTabs() {
  return (
    <Tabs defaultValue="social" className="w-full max-w-4xl mx-auto">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="social" className="flex items-center gap-2">
          <Music size={20} />{" "}
          <span className="hidden md:inline">Eventos musicales</span>
        </TabsTrigger>
        <TabsTrigger value="deportes" className="flex items-center gap-2">
          <Trophy size={20} />{" "}
          <span className="hidden md:inline">Eventos deportivos</span>
        </TabsTrigger>
        <TabsTrigger value="nocturno" className="flex items-center gap-2">
          <PartyPopper size={20} />{" "}
          <span className="hidden md:inline">Discotecas, bares y más</span>
        </TabsTrigger>
      </TabsList>
      <TabsContent value="social">
        <Card>
          <CardContent className="p-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold text-[#013B79] mb-4">
                  Eventos musicales
                </h3>
                <p className="text-gray-600 mb-6 font-light">
                  Gestiona conciertos, festivales y shows en vivo con una
                  plataforma diseñada para maximizar la experiencia del público
                  y simplificar la operación.
                </p>
                <ul className="space-y-3 font-light mb-4">
                  <li className="flex items-start gap-2">
                    <span className="flex h-2 w-2 translate-y-2 rounded-full bg-[#06E3F4]"></span>
                    <span>
                      Venta de entradas por zonas y categorías de precio
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="flex h-2 w-2 translate-y-2 rounded-full bg-[#06E3F4]"></span>
                    <span>Gestión de paquetes VIP y entradas especiales</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="flex h-2 w-2 translate-y-2 rounded-full bg-[#06E3F4]"></span>
                    <span>Control de accesos multi-etapa para festivales</span>
                  </li>
                </ul>
                <Button variant="secondary" size="lg">
                  <a href="https://balletruso.test.front.solunes.com/home" target="_blank">
                    Explorar demo
                  </a>
                </Button>
              </div>
              <div className="flex justify-center">
                <img
                  src="https://hotelregency.com.co/wp-content/uploads/2023/01/11-ENE-BLOG-REGENCY_BANNER-GENERAL-915x515.jpg"
                  alt="Eventos Musicales"
                  className="rounded-lg shadow-lg object-cover h-64 w-full"
                />
              </div>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="deportes" className="mt-8">
        <Card>
          <CardContent className="p-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold text-[#013B79] mb-4">
                  Eventos deportivos
                </h3>
                <p className="text-gray-600 mb-6 font-light">
                  Solución integral para clubes deportivos, estadios y
                  organizadores de torneos que buscan modernizar su sistema de
                  ticketing y fidelizar a sus hinchas.
                </p>
                <ul className="space-y-3 font-light mb-4">
                  <li className="flex items-start gap-2">
                    <span className="flex h-2 w-2 translate-y-2 rounded-full bg-[#06E3F4]"></span>
                    <span>Sistema de abonos y membresías con beneficios</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="flex h-2 w-2 translate-y-2 rounded-full bg-[#06E3F4]"></span>
                    <span>
                      Venta anticipada para socios y preventa exclusiva
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="flex h-2 w-2 translate-y-2 rounded-full bg-[#06E3F4]"></span>
                    <span>
                      Control de barras y gestión de accesos por sector
                    </span>
                  </li>
                </ul>
                <Button variant="secondary" size="lg">
                  <a href="https://chile.test.front.solunes.com/" target="_blank">
                    Explorar demo
                  </a>
                </Button>
              </div>
              <div className="flex justify-center">
                <img
                  src="https://s.yimg.com/ny/api/res/1.2/c7qPhOuQE9fzcCw1driOrA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTQ4MA--/https://media.zenfs.com/es/forbes_argentina_485/42aa646121d848aacb07350573016399"
                  alt="Eventos Deportivos"
                  className="rounded-lg shadow-lg object-cover h-64 w-full"
                />
              </div>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="nocturno" className="mt-8">
        <Card>
          <CardContent className="p-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold text-[#013B79] mb-4">
                  Discotecas y bares
                </h3>
                <p className="text-gray-600 mb-6 font-light">
                  Automatiza la venta de entradas y reservas para locales
                  nocturnos, optimizando la experiencia de tus clientes y
                  mejorando el control de tu espacio.
                </p>
                <ul className="space-y-3 font-light mb-4">
                  <li className="flex items-start gap-2">
                    <span className="flex h-2 w-2 translate-y-2 rounded-full bg-[#06E3F4]"></span>
                    <span>Sistema de reservas VIP con pago anticipado</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="flex h-2 w-2 translate-y-2 rounded-full bg-[#06E3F4]"></span>
                    <span>Gestión de listas de espera y early birds</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="flex h-2 w-2 translate-y-2 rounded-full bg-[#06E3F4]"></span>
                    <span>
                      Control de aforo y promociones para grupos VIP
                    </span>
                  </li>
                </ul>
                <Button variant="secondary" size="lg">
                  <a href="https://ambar.demo.front.solunes.com/home" target="_blank">
                    Explorar demo
                  </a>
                </Button>
              </div>
              <div className="flex justify-center">
                <img
                  src="https://blog.cofike.com/wp-content/uploads/2023/03/plan-de-empresa-discoteca.jpg"
                  alt="Eventos Nocturnos"
                  className="rounded-lg shadow-lg object-cover h-64 w-full"
                />
              </div>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
}
