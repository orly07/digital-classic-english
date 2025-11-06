import { useState, useRef, useEffect, useCallback } from "react";

export const useSpeechSynthesis = (text) => {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [voices, setVoices] = useState([]);
  const [selectedVoice, setSelectedVoice] = useState(null);
  const [rate, setRate] = useState(0.9);
  const [pitch, setPitch] = useState(1);
  const [isSupported, setIsSupported] = useState(true);

  const synthRef = useRef(null);
  const utteranceRef = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined" || !window.speechSynthesis) {
      setIsSupported(false);
      return;
    }

    synthRef.current = window.speechSynthesis;
    setIsSupported(true);

    const loadVoices = () => {
      const allVoices = synthRef.current.getVoices();
      setVoices(allVoices);

      if (!selectedVoice && allVoices.length > 0) {
        const preferred =
          allVoices.find(v =>
            /female|Samantha|Google UK English Female/i.test(v.name)
          ) || allVoices[0];
        setSelectedVoice(preferred);
      }
    };

    loadVoices();
    synthRef.current.onvoiceschanged = loadVoices;

    return () => {
      synthRef.current.onvoiceschanged = null;
      synthRef.current.cancel();
    };
  }, [selectedVoice]);

  const speak = useCallback(() => {
    if (!isSupported || !text || !selectedVoice) return;

    const synth = synthRef.current;
    if (isSpeaking) {
      synth.cancel();
      setIsSpeaking(false);
      return;
    }

    const utter = new SpeechSynthesisUtterance(text);
    utter.voice = selectedVoice;
    utter.rate = rate;
    utter.pitch = pitch;
    utter.volume = 1;

    utter.onstart = () => setIsSpeaking(true);
    utter.onend = () => setIsSpeaking(false);
    utter.onerror = () => setIsSpeaking(false);

    utteranceRef.current = utter;
    synth.speak(utter);
  }, [text, selectedVoice, rate, pitch, isSpeaking, isSupported]);

  return {
    isSpeaking,
    voices,
    selectedVoice,
    rate,
    pitch,
    isSupported,
    setSelectedVoice,
    setRate,
    setPitch,
    speak,
  };
};
