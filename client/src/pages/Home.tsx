import { Button } from "@/components/ui/button";
import { DownloadCloud } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-background p-4">
      <div className="text-center">
        <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
          Kasm Installer Download
        </h1>
        <Button 
          size="lg"
          className="gap-2"
          asChild
        >
          <a href="https://github.com/alexrollin/kasm/releases/download/v1.1/kasm.deb" download>
            <DownloadCloud className="w-5 h-5" />
            Download Kasm Installer
          </a>
        </Button>
      </div>
    </div>
  );
}