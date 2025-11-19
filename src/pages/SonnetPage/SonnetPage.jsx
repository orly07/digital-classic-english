import React, { useState, useEffect, useCallback } from "react";
import { useParams, Link } from "react-router-dom";
import { motion as Motion, AnimatePresence } from "framer-motion";
import LoadingFallback from "../../components/Loading/LoadingFallback";
import { useSonnet } from "../../utils/hooks/useSonnet";
import { useSpeechSynthesis } from "../../utils/helpers/useSpeechSynthesis";
import PlaybackButtonGroup from "./PlaybackButtonGroup";
import VoiceSettingsPanel from "./VoiceSettingsPanel";
import {
  SonnetDetailWrapper,
  SonnetContent,
  SonnetText,
  AudioControls,
  PlaybackControls,
  TopControlsContainer,
} from "./SonnetPage.styled";

const SonnetPage = () => {
  const { slug } = useParams();
  const { sonnets, loading, error } = useSonnet();
  const [sonnet, setSonnet] = useState(null);
  const [showSettings, setShowSettings] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [slug]);

  useEffect(() => {
    if (!loading && sonnets.length > 0) {
      const found = sonnets.find((s) => s.slug === slug);
      console.log("Looking for slug:", slug, "Found:", found);
      setSonnet(found || null);
    }
  }, [loading, sonnets, slug]);

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

  const toggleSettings = useCallback(
    () => setShowSettings((prev) => !prev),
    []
  );

  if (loading) return <LoadingFallback />;
  if (error) return <div>Error: {error.message}</div>;
  if (!sonnet) return <div>Sonnet not found</div>;

  return (
    <SonnetDetailWrapper>
      <SonnetContent>
        <Motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          {sonnet.title}
        </Motion.h1>
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
            <Motion.p
              key={i}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
            >
              {line}
            </Motion.p>
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
};

export default SonnetPage;
