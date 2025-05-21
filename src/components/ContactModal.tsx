import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ContactIcon } from "lucide-react";

interface InfoModalProps {
  buttonText: string;
}

export function ContactModal({ buttonText }: InfoModalProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="sm">{buttonText}</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] lg:max-w-screen-md max-w-xs">
        <div className="lg:flex gap-10 items-center">
          <ContactIcon className="w-32 h-32 mx-auto text-[#013B79]" />
          <div className="lg:text-left text-center">
            <DialogHeader>
              <DialogTitle className="mt-6 lg:mt-0">Tu comunidad, tu marca, tu ecosistema.</DialogTitle>
            </DialogHeader>
            <p className="text-sm text-muted-foreground my-4">
              Descubre cómo +FAN puede ayudarte a transformar tu operación de
              eventos en una experiencia digital rentable, escalable y alineada
              con tus objetivos.
            </p>
            <Button size="lg">
              <a
                href="https://wa.link/gakigu"
                target="_blanck"
                rel="noopener noreferrer"
              >
                Chatea con un agente
              </a>
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
