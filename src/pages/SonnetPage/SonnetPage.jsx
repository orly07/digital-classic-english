import React, { memo, useState, useCallback } from "react";
import { useParams, Link } from "react-router-dom";
import { sonnetsData } from "../../data";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import {
  SonnetDetailWrapper,
  SonnetContent,
  SonnetText,
  AudioControls,
  PlaybackControls,
  TopControlsContainer,
} from "./SonnetPage.styled";
import { useSpeechSynthesis } from "../../hooks/useSpeechSynthesis";
import PlaybackButtonGroup from "./PlaybackButtonGroup";
import VoiceSettingsPanel from "./VoiceSettingsPanel";

const SonnetPage = memo(() => {
  const { id } = useParams();
  const sonnet = sonnetsData.find((s) => s.id === id);
  const [showSettings, setShowSettings] = useState(false);

  const {
    isSpeaking,
    voices,
    selectedVoice,
    rate,
    pitch,
    setSelectedVoice,
    setRate,
    setPitch,
    speak,
  } = useSpeechSynthesis(sonnet?.content);

  const toggleSettings = useCallback(() => setShowSettings((prev) => !prev), []);

  if (!sonnet) {
    return (
      <div style={{ textAlign: "center", padding: "2rem", marginTop: "80px" }}>
        <h2>Sonnet not found</h2>
        <Link to="/">Go back home</Link>
      </div>
    );
  }

  return (
    <SonnetDetailWrapper>
      <SonnetContent>
        <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          {sonnet.title}
        </motion.h1>
        <p className="author">By {sonnet.author}</p>

        <TopControlsContainer>
          <PlaybackButtonGroup
            isSpeaking={isSpeaking}
            showSettings={showSettings}
            onPlay={speak}
            onToggleSettings={toggleSettings}
          />

          <AnimatePresence>
            {showSettings && (
              <VoiceSettingsPanel
                voices={voices}
                selectedVoice={selectedVoice}
                rate={rate}
                pitch={pitch}
                isSpeaking={isSpeaking}
                onVoiceChange={(e) =>
                  setSelectedVoice(
                    voices.find((v) => v.name === e.target.value)
                  )
                }
                onRateChange={(e) => setRate(parseFloat(e.target.value))}
                onPitchChange={(e) => setPitch(parseFloat(e.target.value))}
              />
            )}
          </AnimatePresence>
        </TopControlsContainer>

        <SonnetText>
          {sonnet.content.split("\n").map((line, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className="sonnet-line"
            >
              {line}
            </motion.p>
          ))}
        </SonnetText>

        <AudioControls>
          <PlaybackControls>
            <small>🔊 Works best in Chrome, Edge, and Safari.</small>
          </PlaybackControls>
        </AudioControls>
      </SonnetContent>
    </SonnetDetailWrapper>
  );
});

SonnetPage.displayName = "SonnetPage";
export default SonnetPage;
