import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { useState } from "react";

interface MemeGalleryProps {
  playSound: () => void;
}

interface Meme {
  emoji: string;
  title: string;
  subtitle: string;
}

export default function MemeGallery({ playSound }: MemeGalleryProps) {
  const [currentMeme, setCurrentMeme] = useState(0);
  const [selectedMeme, setSelectedMeme] = useState<number | null>(null);

  const memes: Meme[] = [
    {
      emoji: "💰",
      title: "Когда увидел процент по депозиту",
      subtitle: "ФиФи банк: где проценты растут быстрее твоих мемов!"
    },
    {
      emoji: "🤑", 
      title: "Когда кэшбэк больше покупки",
      subtitle: "ФиФи банк: покупай мемы, получай деньги!"
    },
    {
      emoji: "😱",
      title: "Когда понял, что банк может быть веселым",
      subtitle: "ФиФи банк: ломаем стереотипы с 2024 года!"
    },
    {
      emoji: "🎯",
      title: "Когда одобрили кредит за анекдот",
      subtitle: "ФиФи банк: смех - наша валюта!"
    },
    {
      emoji: "🚀",
      title: "Когда перевод дошел мгновенно",
      subtitle: "ФиФи банк: быстрее чем твой WiFi!"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-fun-yellow/20 to-fun-pink/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold bg-gradient-to-r from-fun-pink to-fun-purple bg-clip-text text-transparent mb-4">
            Мемная галерея 🖼️
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Коллекция финансовых мемов от наших клиентов! Кликай и смейся! 😂
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Carousel */}
          <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl">
            <div className="text-center">
              <div 
                className="text-8xl mb-6 cursor-pointer transform hover:scale-110 transition-all duration-300 hover:animate-bounce-fun"
                onClick={() => {
                  playSound();
                  setSelectedMeme(currentMeme);
                }}
              >
                {memes[currentMeme].emoji}
              </div>
              <h3 className="text-3xl font-bold text-gray-800 mb-4">
                {memes[currentMeme].title}
              </h3>
              <p className="text-lg text-gray-600 mb-8">
                {memes[currentMeme].subtitle}
              </p>
            </div>

            {/* Navigation */}
            <div className="flex justify-center items-center space-x-4">
              <Button
                onClick={() => {
                  playSound();
                  setCurrentMeme(currentMeme === 0 ? memes.length - 1 : currentMeme - 1);
                }}
                className="bg-fun-blue hover:bg-fun-purple transform hover:scale-110 transition-all hover:animate-bounce-fun"
                size="lg"
              >
                <Icon name="ChevronLeft" className="w-6 h-6" />
              </Button>
              
              <div className="flex space-x-2">
                {memes.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      playSound();
                      setCurrentMeme(index);
                    }}
                    className={`w-3 h-3 rounded-full transition-all duration-300 hover:scale-125 ${
                      index === currentMeme 
                        ? 'bg-fun-pink scale-125' 
                        : 'bg-gray-300 hover:bg-fun-blue'
                    }`}
                  />
                ))}
              </div>

              <Button
                onClick={() => {
                  playSound();
                  setCurrentMeme(currentMeme === memes.length - 1 ? 0 : currentMeme + 1);
                }}
                className="bg-fun-blue hover:bg-fun-purple transform hover:scale-110 transition-all hover:animate-bounce-fun"
                size="lg"
              >
                <Icon name="ChevronRight" className="w-6 h-6" />
              </Button>
            </div>
          </div>

          {/* Expanded Meme Modal */}
          {selectedMeme !== null && (
            <div 
              className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 animate-fade-in"
              onClick={() => setSelectedMeme(null)}
            >
              <div className="bg-white rounded-3xl p-12 max-w-2xl mx-4 transform scale-in">
                <div className="text-center">
                  <div className="text-9xl mb-6 animate-wiggle">
                    {memes[selectedMeme].emoji}
                  </div>
                  <h3 className="text-4xl font-bold text-gray-800 mb-6">
                    {memes[selectedMeme].title}
                  </h3>
                  <p className="text-xl text-gray-600 mb-8">
                    {memes[selectedMeme].subtitle}
                  </p>
                  <p className="text-lg text-fun-blue font-semibold mb-6">
                    🎭 Официальный комментарий ФиФи банка: "Это же гениально!"
                  </p>
                  <Button 
                    onClick={() => {
                      playSound();
                      setSelectedMeme(null);
                    }}
                    className="bg-fun-pink hover:bg-fun-purple text-white hover:animate-bounce-fun"
                    size="lg"
                  >
                    Закрыть с улыбкой 😊
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}