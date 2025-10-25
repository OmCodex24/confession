import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Heart, Sparkles, Gift, Star } from 'lucide-react';
import { ImageWithFallback } from './components/figma/ImageWithFallback';
import { Button } from './components/ui/button';

const loveShayaries = [
  {
    text: "तुम्हारी हंसी में मेरी जन्नत है,\nतुम्हारे साथ में मेरी राहत है।",
    translation: "In your smile lies my paradise,\nIn your company lies my peace.",
    icon: Heart
  },
  {
    text: "तुम्हारे बिना अधूरी है ये कहानी,\nतुम ही हो मेरी जिंदगानी।",
    translation: "Without you this story is incomplete,\nYou are my life, my heartbeat.",
    icon: Sparkles
  },
  {
    text: "चाँद सितारों से कहूं क्या,\nमेरी दुनिया तो बस तुम ही हो।",
    translation: "What shall I say to the moon and stars,\nYou are my entire world.",
    icon: Star
  },
  {
    text: "तुम्हारे प्यार में है जादू कुछ ऐसा,\nदिल को लगे सुकून कुछ वैसा।",
    translation: "Your love has such magic,\nThat brings peace to my heart.",
    icon: Gift
  },
  {
    text: "हर दिन तुम्हारे साथ है एक नया सफर,\nतुम्हीं हो मेरी मंजिल, मेरा हमसफर।",
    translation: "Every day with you is a new journey,\nYou are my destination, my companion.",
    icon: Heart
  }
];

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentStage, setCurrentStage] = useState(0);
  const [showConfetti, setShowConfetti] = useState(false);

  const handleClick = () => {
    if (!isOpen) {
      setIsOpen(true);
      setCurrentStage(0);
    } else if (currentStage < loveShayaries.length) {
      setCurrentStage(prev => prev + 1);
      if (currentStage === loveShayaries.length - 1) {
        setShowConfetti(true);
      }
    }
  };

  const currentShayari = loveShayaries[currentStage];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-100 via-red-50 to-purple-100 p-4 relative overflow-hidden">
      {/* Floating hearts background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-pink-300 opacity-20"
            initial={{ 
              x: Math.random() * window.innerWidth,
              y: window.innerHeight + 100
            }}
            animate={{
              y: -100,
              x: Math.random() * window.innerWidth
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              delay: Math.random() * 5
            }}
          >
            <Heart size={Math.random() * 30 + 20} fill="currentColor" />
          </motion.div>
        ))}
      </div>

      {/* Confetti effect */}
      <AnimatePresence>
        {showConfetti && (
          <>
            {[...Array(50)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-3 h-3 rounded-full"
                style={{
                  backgroundColor: ['#ff69b4', '#ff1493', '#ff6347', '#ffd700', '#ff69b4'][i % 5],
                  left: `${Math.random() * 100}%`,
                  top: '50%'
                }}
                initial={{ scale: 0, y: 0 }}
                animate={{
                  scale: [0, 1, 1, 0],
                  y: [0, -200 - Math.random() * 300],
                  x: Math.random() * 200 - 100
                }}
                transition={{
                  duration: 2,
                  ease: "easeOut"
                }}
                exit={{ opacity: 0 }}
              />
            ))}
          </>
        )}
      </AnimatePresence>

      {/* Main Card */}
      <div className="relative z-10">
        <AnimatePresence mode="wait">
          {!isOpen ? (
            // Closed Card
            <motion.div
              key="closed"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="cursor-pointer"
              onClick={handleClick}
            >
              <motion.div
                className="bg-gradient-to-br from-red-500 via-pink-500 to-red-600 rounded-3xl shadow-2xl p-8 w-80 h-96 flex flex-col items-center justify-center relative overflow-hidden"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAzMCBRIDEwIDIwIDIwIDIwIFQgMzAgMzAgUSAzMCA0MCAyMCA0MCBUIDEwIDMwIiBmaWxsPSJub25lIiBzdHJva2U9InJnYmEoMjU1LDI1NSwyNTUsMC4xKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30" />
                
                <motion.div
                  animate={{ 
                    scale: [1, 1.2, 1],
                    rotate: [0, 5, -5, 0]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: 1
                  }}
                >
                  <Heart size={80} className="text-white fill-white mb-6" />
                </motion.div>
                
                <h1 className="text-white text-center mb-4">For My Love</h1>
                <p className="text-white/90 text-center">Click to open your heart... ❤️</p>
                
                <motion.div
                  className="absolute bottom-4 left-1/2 -translate-x-1/2"
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <Sparkles className="text-yellow-200" size={24} />
                </motion.div>
              </motion.div>
            </motion.div>
          ) : (
            // Opened Card
            <motion.div
              key="open"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="w-[90vw] max-w-2xl"
            >
              <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
                {/* Header with image */}
                <div className="relative h-48 overflow-hidden">
                  <ImageWithFallback
                    src={currentStage === 0 
                      ? "https://images.unsplash.com/photo-1706515125223-60b401bf6dde?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb21hbnRpYyUyMGhlYXJ0cyUyMGxvdmV8ZW58MXx8fHwxNzYxMzkwMjczfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                      : currentStage < 3 
                      ? "https://images.unsplash.com/photo-1706369672484-6cb9f4bb2a20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb3NlJTIwZmxvd2VycyUyMHJvbWFudGljfGVufDF8fHx8MTc2MTQwNjYxMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                      : "https://images.unsplash.com/photo-1694618564673-f9f0d47c47e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3VwbGUlMjBsb3ZlJTIwc3Vuc2V0fGVufDF8fHx8MTc2MTMzNDA0N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    }
                    alt="Love"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <motion.div
                    className="absolute top-4 right-4 text-white"
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ type: "spring", duration: 0.6 }}
                  >
                    {currentShayari && <currentShayari.icon size={40} />}
                  </motion.div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentStage}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.5 }}
                    >
                      {currentStage < loveShayaries.length ? (
                        <>
                          <div className="bg-gradient-to-r from-pink-50 to-red-50 rounded-2xl p-6 mb-6">
                            <p className="text-pink-900 text-center mb-4 leading-relaxed whitespace-pre-line">
                              {currentShayari.text}
                            </p>
                            <div className="h-px bg-gradient-to-r from-transparent via-pink-300 to-transparent my-4" />
                            <p className="text-pink-700 text-center italic">
                              {currentShayari.translation}
                            </p>
                          </div>

                          {/* Progress indicator */}
                          <div className="flex gap-2 justify-center mb-6">
                            {loveShayaries.map((_, idx) => (
                              <div
                                key={idx}
                                className={`h-2 rounded-full transition-all duration-300 ${
                                  idx <= currentStage 
                                    ? 'w-8 bg-pink-500' 
                                    : 'w-2 bg-pink-200'
                                }`}
                              />
                            ))}
                          </div>

                          <Button
                            onClick={handleClick}
                            className="w-full bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600"
                          >
                            {currentStage < loveShayaries.length - 1 
                              ? '💕 Next Surprise' 
                              : '🌹 Final Message'}
                          </Button>
                        </>
                      ) : (
                        <div className="text-center">
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ type: "spring", duration: 0.8 }}
                          >
                            <Heart size={60} className="text-red-500 fill-red-500 mx-auto mb-6" />
                          </motion.div>
                          <h2 className="text-red-600 mb-4">I Love You! ❤️</h2>
                          <p className="text-gray-700 mb-6">
                            You mean the world to me. Every moment with you is a treasure, 
                            and I'm so grateful to have you in my life. You make every day brighter! 
                          </p>
                          <div className="flex gap-4 justify-center">
                            <Heart className="text-pink-500 fill-pink-500" size={24} />
                            <Sparkles className="text-yellow-500 fill-yellow-500" size={24} />
                            <Star className="text-purple-500 fill-purple-500" size={24} />
                            <Gift className="text-red-500 fill-red-500" size={24} />
                          </div>
                        </div>
                      )}
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
