// src/components/Filter/FilterDropdown.styled.js
import styled from "styled-components";
import { breakpoint, color, shadow, typography } from "../../styles/theme";

export const FilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
  align-items: flex-start;
  position: relative;

  ${breakpoint.mobile} {
    align-items: center;
  }
`;

export const DropdownLabel = styled.label`
  font-weight: ${typography.fontWeight.semibold};
  color: ${color.gray[700]};
  font-size: ${typography.fontSize.sm};
  text-align: left;
  letter-spacing: 0.3px;
  transition: color 0.3s ease;

  ${breakpoint.mobile} {
    font-size: ${typography.fontSize.xs};
    text-align: center;
  }
`;

export const Dropdown = styled.select`
  padding: 0.75rem 1rem;
  border: 2px solid ${color.gray[300]};
  border-radius: 10px;
  background-color: ${color.white};
  color: ${color.gray[800]};
  font-size: ${typography.fontSize.base};
  font-weight: ${typography.fontWeight.medium};
  cursor: pointer;
  transition: all 0.25s ease-in-out;
  min-width: 220px;
  box-shadow: ${shadow.xs};

  /* Custom dropdown arrow */
  appearance: none;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e");
  background-position: right 1rem center;
  background-repeat: no-repeat;
  background-size: 1.2em;

  &:hover {
    border-color: ${color.primary};
    box-shadow: ${shadow.sm};
    transform: translateY(-1px);
  }

  &:focus {
    outline: none;
    border-color: ${color.primary};
    box-shadow: 0 0 0 3px ${color.primaryLight};
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    background: ${color.gray[100]};
  }

  option {
    color: ${color.gray[800]};
    background: ${color.white};
  }

  ${breakpoint.mobile} {
    min-width: 180px;
    padding: 0.65rem 0.9rem;
    font-size: ${typography.fontSize.sm};
  }
`;
