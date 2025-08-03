import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

interface TelegramButtonProps {
  playSound?: () => void;
}

export default function TelegramButton({ playSound }: TelegramButtonProps) {
  const handleTelegramClick = () => {
    playSound?.();
    window.open('https://t.me/+4bHUBb06GC1jYjEy', '_blank', 'noopener,noreferrer');
  };

  return (
    <Button
      onClick={handleTelegramClick}
      className="
        relative overflow-hidden
        bg-gradient-to-r from-fun-blue to-fun-yellow
        hover:from-fun-yellow hover:to-fun-blue
        text-white font-bold
        px-6 py-3 rounded-full
        shadow-lg hover:shadow-xl
        transform transition-all duration-300
        hover:scale-105 active:scale-95
        animate-bounce hover:animate-none
        border-2 border-white/20
        group
      "
      size="lg"
    >
      {/* Светящийся эффект */}
      <div className="absolute inset-0 bg-white/20 rounded-full blur-sm group-hover:bg-white/30 transition-all duration-300"></div>
      
      {/* Контент кнопки */}
      <div className="relative flex items-center gap-2 z-10">
        <Icon name="Send" size={20} className="group-hover:rotate-12 transition-transform duration-300" />
        <span className="text-sm font-bold">Телеграм канал</span>
      </div>
      
      {/* Анимированные частицы */}
      <div className="absolute top-1 right-1 w-2 h-2 bg-white/60 rounded-full animate-ping"></div>
      <div className="absolute bottom-1 left-1 w-1 h-1 bg-white/40 rounded-full animate-ping delay-300"></div>
    </Button>
  );
}