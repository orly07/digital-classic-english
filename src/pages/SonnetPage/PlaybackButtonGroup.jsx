import { memo } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { FaPlay, FaStop, FaCog } from "react-icons/fa";
import Button from "../../components/Buttons/Button";
import { ControlButtonsTop, ButtonContent } from "./SonnetPage.styled";

const PlaybackButtonGroup = memo(({ isSpeaking, showSettings, onPlay, onToggleSettings }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.2 }}
  >
    <ControlButtonsTop>
      <Button onClick={onPlay} variant="primary" size="large">
        <ButtonContent>
          {isSpeaking ? <><FaStop /> Stop</> : <><FaPlay /> Listen</>}
        </ButtonContent>
      </Button>

      <Button
        onClick={onToggleSettings}
        variant={showSettings ? "primary" : "outline"}
        size="large"
      >
        <ButtonContent>
          <FaCog /> Settings
        </ButtonContent>
      </Button>
    </ControlButtonsTop>
  </motion.div>
));

PlaybackButtonGroup.displayName = "PlaybackButtonGroup";
export default PlaybackButtonGroup;
