import React, { memo } from "react";
import PropTypes from "prop-types";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { ScrollButtonContainer } from "./ScrollButton.styled";

const ScrollButton = memo(({ direction = "right", onClick, ariaLabel, ...props }) => {
  const Icon = direction === "left" ? FaChevronLeft : FaChevronRight;

  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <ScrollButtonContainer
        onClick={onClick}
        aria-label={ariaLabel}
        {...props}
      >
        <Icon aria-hidden="true" />
      </ScrollButtonContainer>
    </motion.div>
  );
});

ScrollButton.displayName = "ScrollButton";

ScrollButton.propTypes = {
  direction: PropTypes.oneOf(["left", "right"]),
  onClick: PropTypes.func.isRequired,
  ariaLabel: PropTypes.string.isRequired,
};

export default ScrollButton;
