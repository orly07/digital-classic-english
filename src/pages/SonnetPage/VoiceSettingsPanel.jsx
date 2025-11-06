import { memo } from "react";
// eslint-disable-next-line
import { motion } from "framer-motion";
import { SettingsPanel, VoiceSettings } from "./SonnetPage.styled";

const VoiceSettingsPanel = memo(({ voices, selectedVoice, rate, pitch, isSpeaking, onVoiceChange, onRateChange, onPitchChange }) => (
  <motion.div
    initial={{ opacity: 0, y: -10 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -10 }}
    transition={{ duration: 0.25 }}
  >
    <SettingsPanel>
      <VoiceSettings>
        <div className="setting-group">
          <label htmlFor="voice">Voice</label>
          <select
            id="voice"
            value={selectedVoice?.name || ""}
            onChange={onVoiceChange}
            disabled={isSpeaking}
          >
            {voices.map((v) => (
              <option key={v.name} value={v.name}>
                {v.name} ({v.lang})
              </option>
            ))}
          </select>
        </div>

        <div className="setting-group">
          <label htmlFor="rate">Speed: {rate.toFixed(1)}x</label>
          <input
            id="rate"
            type="range"
            min="0.5"
            max="2"
            step="0.1"
            value={rate}
            onChange={onRateChange}
            disabled={isSpeaking}
          />
        </div>

        <div className="setting-group">
          <label htmlFor="pitch">Pitch: {pitch.toFixed(1)}</label>
          <input
            id="pitch"
            type="range"
            min="0.5"
            max="2"
            step="0.1"
            value={pitch}
            onChange={onPitchChange}
            disabled={isSpeaking}
          />
        </div>
      </VoiceSettings>
    </SettingsPanel>
  </motion.div>
));

VoiceSettingsPanel.displayName = "VoiceSettingsPanel";
export default VoiceSettingsPanel;
