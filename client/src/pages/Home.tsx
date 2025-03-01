import RainbowContainer from "@/components/RainbowContainer";
import AnimatedButton from "@/components/AnimatedButton";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { DownloadCloud } from "lucide-react";

export default function Home() {
  const [showDownload, setShowDownload] = useState(false);

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-background p-4">
      <RainbowContainer>
        <div className="flex flex-col items-center gap-8 p-8 text-center">
          <h1 className="text-2xl md:text-3xl font-bold text-foreground">
            Click the button to reveal the kasm installer download!
          </h1>

          {!showDownload ? (
            <AnimatedButton onClick={() => setShowDownload(true)}>
              Reveal Download
            </AnimatedButton>
          ) : (
            <div className="flex flex-col items-center gap-4">
              <h2 className="text-xl font-semibold text-foreground">
                Kasm Installer
              </h2>
              <Button 
                size="lg"
                className="gap-2"
                asChild
              >
                <a href="https://github.com/alexrollin/kasm/releases/download/v1.1/kasm.deb" download>
                  <DownloadCloud className="w-5 h-5" />
                  Download
                </a>
              </Button>
            </div>
          )}
        </div>
      </RainbowContainer>
    </div>
  );
}