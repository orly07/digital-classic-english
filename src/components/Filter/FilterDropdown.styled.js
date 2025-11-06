import styled from "styled-components";
import { breakpoint, color, shadow, typography } from "../../styles/theme";

export const FilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1.5rem;

  ${breakpoint.mobile} {
    align-items: center;
  }
`;

export const DropdownLabel = styled.label`
  font-weight: ${typography.fontWeight.semibold};
  color: ${color.gray[700]};
  font-size: ${typography.fontSize.sm};
  text-align: center;
  line-height: 1.4;

  ${breakpoint.mobile} {
    font-size: ${typography.fontSize.xs};
  }
`;

export const Dropdown = styled.select`
  padding: 0.75rem 1rem;
  border: 2px solid ${color.gray[300]};
  border-radius: 8px;
  background: ${color.white};
  color: ${color.gray[700]};
  font-size: ${typography.fontSize.base};
  font-weight: ${typography.fontWeight.medium};
  cursor: pointer;
  transition: all 0.3s ease;
  min-width: 200px;
  appearance: none;
  box-shadow: ${shadow.xs};
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e");
  background-position: right 0.75rem center;
  background-repeat: no-repeat;
  background-size: 1.5em 1.5em;

  &:hover {
    border-color: ${color.primary};
    box-shadow: ${shadow.sm};
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

  ${breakpoint.mobile} {
    min-width: 180px;
    padding: 0.65rem 0.9rem;
    font-size: ${typography.fontSize.sm};
  }
`;
