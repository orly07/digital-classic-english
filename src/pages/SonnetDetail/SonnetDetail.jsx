import React, { memo, useState, useRef, useEffect, useCallback } from "react";
import { useParams, Link } from "react-router-dom";
import { sonnetsData } from "../../data"; // Updated import path
import Button from "../../components/Buttons/Button";
import {
  SonnetDetailWrapper,
  SonnetContent,
  SonnetText,
  AudioControls,
  PlaybackControls,
  VoiceSettings,
  SettingsPanel,
  ControlButtonsTop,
  TopControlsContainer,
  ButtonContent,
} from "./SonnetDetail.styled";
import { FaPlay, FaStop, FaCog } from "react-icons/fa";

const SonnetDetail = memo(() => {
  const { id } = useParams();
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [voices, setVoices] = useState([]);
  const [selectedVoice, setSelectedVoice] = useState(null);
  const [rate, setRate] = useState(0.8);
  const [pitch, setPitch] = useState(1);
  const [showSettings, setShowSettings] = useState(false);
  const [isSpeechSupported, setIsSpeechSupported] = useState(true);

  const speechSynthRef = useRef(null);
  const utteranceRef = useRef(null);

  const sonnet = sonnetsData.find((s) => s.id === id);

  // Check if speech synthesis is supported
  useEffect(() => {
    if (typeof window === "undefined" || !window.speechSynthesis) {
      setIsSpeechSupported(false);
      return;
    }

    setIsSpeechSupported(true);
    speechSynthRef.current = window.speechSynthesis;
  }, []);

  // Cleanup speech synthesis
  useEffect(() => {
    return () => {
      if (speechSynthRef.current?.speaking) {
        speechSynthRef.current.cancel();
      }
    };
  }, []);

  // Load available voices
  useEffect(() => {
    if (!isSpeechSupported) return;

    const loadVoices = () => {
      try {
        const availableVoices = speechSynthRef.current.getVoices();
        setVoices(availableVoices);

        if (availableVoices.length > 0) {
          const preferredVoice =
            availableVoices.find(
              (voice) =>
                voice.name.includes("Female") ||
                voice.name.includes("Karen") ||
                voice.name.includes("Samantha")
            ) || availableVoices[0];

          setSelectedVoice(preferredVoice);
        }
      } catch (error) {
        console.error("Error loading voices:", error);
        setIsSpeechSupported(false);
      }
    };

    loadVoices();

    // Some browsers load voices asynchronously
    if (speechSynthRef.current) {
      speechSynthRef.current.onvoiceschanged = loadVoices;
    }

    return () => {
      if (speechSynthRef.current) {
        speechSynthRef.current.onvoiceschanged = null;
      }
    };
  }, [isSpeechSupported]);

  const speakSonnet = useCallback(() => {
    if (!isSpeechSupported || !sonnet?.content || !selectedVoice) return;

    const synth = speechSynthRef.current;

    // If already speaking, stop and reset completely
    if (isSpeaking) {
      synth.cancel();
      setIsSpeaking(false);
      utteranceRef.current = null;
      return;
    }

    try {
      // Create new utterance for fresh start
      const utterance = new SpeechSynthesisUtterance(sonnet.content);
      utterance.voice = selectedVoice;
      utterance.rate = rate;
      utterance.pitch = pitch;
      utterance.volume = 1;

      // Event handlers
      utterance.onstart = () => setIsSpeaking(true);
      utterance.onend = () => {
        setIsSpeaking(false);
        utteranceRef.current = null;
      };
      utterance.onerror = () => {
        setIsSpeaking(false);
        utteranceRef.current = null;
      };

      utteranceRef.current = utterance;
      synth.speak(utterance);
    } catch (error) {
      console.error("Speech synthesis error:", error);
      setIsSpeaking(false);
    }
  }, [sonnet, selectedVoice, rate, pitch, isSpeaking, isSpeechSupported]);

  const handleVoiceChange = useCallback(
    (event) => {
      const voiceName = event.target.value;
      const voice = voices.find((v) => v.name === voiceName);
      setSelectedVoice(voice);
    },
    [voices]
  );

  const handleRateChange = useCallback((event) => {
    setRate(parseFloat(event.target.value));
  }, []);

  const handlePitchChange = useCallback((event) => {
    setPitch(parseFloat(event.target.value));
  }, []);

  const toggleSettings = useCallback(() => {
    setShowSettings((prev) => !prev);
  }, []);

  if (!sonnet) {
    return (
      <div style={{ textAlign: 'center', padding: '2rem', marginTop: '80px' }}>
        <h2>Sonnet not found!</h2>
        <Link to="/">Go back to home</Link>
      </div>
    );
  }

  return (
    <SonnetDetailWrapper>
      <SonnetContent>
        <h1>{sonnet.title}</h1>
        <p className="author">By {sonnet.author}</p>

        {/* Top controls section with buttons and settings */}
        <TopControlsContainer>
          <ControlButtonsTop>
            <Button
              onClick={speakSonnet}
              variant="primary"
              size="large"
              aria-label={isSpeaking ? "Stop" : "Play"}
            >
              <ButtonContent>
                {isSpeaking ? (
                  <>
                    <FaStop /> Stop
                  </>
                ) : (
                  <>
                    <FaPlay /> Listen Now
                  </>
                )}
              </ButtonContent>
            </Button>

            <Button
              onClick={toggleSettings}
              variant={showSettings ? "primary" : "outline"}
              size="large"
              aria-label="Voice settings"
            >
              <ButtonContent>
                <FaCog /> Settings
              </ButtonContent>
            </Button>
          </ControlButtonsTop>

          {showSettings && (
            <SettingsPanel>
              <VoiceSettings>
                <div className="setting-group">
                  <label htmlFor="voice-select">Voice:</label>
                  <select
                    id="voice-select"
                    value={selectedVoice?.name || ""}
                    onChange={handleVoiceChange}
                    disabled={isSpeaking}
                  >
                    {voices.map((voice) => (
                      <option key={voice.name} value={voice.name}>
                        {voice.name} ({voice.lang})
                      </option>
                    ))}
                  </select>
                </div>

                <div className="setting-group">
                  <label htmlFor="rate-slider">Speed: {rate.toFixed(1)}x</label>
                  <input
                    id="rate-slider"
                    type="range"
                    min="0.5"
                    max="2"
                    step="0.1"
                    value={rate}
                    onChange={handleRateChange}
                    disabled={isSpeaking}
                  />
                </div>

                <div className="setting-group">
                  <label htmlFor="pitch-slider">
                    Pitch: {pitch.toFixed(1)}
                  </label>
                  <input
                    id="pitch-slider"
                    type="range"
                    min="0.5"
                    max="2"
                    step="0.1"
                    value={pitch}
                    onChange={handlePitchChange}
                    disabled={isSpeaking}
                  />
                </div>
              </VoiceSettings>
            </SettingsPanel>
          )}
        </TopControlsContainer>

        <SonnetText>
          {sonnet.content.split("\n").map((line, index) => (
            <p key={index} className="sonnet-line">
              {line}
            </p>
          ))}
        </SonnetText>

        <AudioControls>
          <PlaybackControls>
            <div className="browser-support">
              <small>
                🔊 Using Web Speech API. Works best in Chrome, Edge, and Safari.
              </small>
            </div>
          </PlaybackControls>
        </AudioControls>
      </SonnetContent>
    </SonnetDetailWrapper>
  );
});

SonnetDetail.displayName = "SonnetDetail";
export default SonnetDetail;