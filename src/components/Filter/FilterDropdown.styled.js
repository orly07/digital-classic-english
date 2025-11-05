import styled from 'styled-components';

export const FilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    align-items: center;
  }
`;

export const DropdownLabel = styled.label`
  font-weight: 600;
  color: #4a5568;
  font-size: 0.9rem;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 0.85rem;
  }
`;

export const Dropdown = styled.select`
  padding: 0.75rem 1rem;
  border: 2px solid #e2e8f0;
  border-radius: 8px;
  background: white;
  color: #4a5568;
  font-size: 0.95rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  min-width: 200px;
  appearance: none;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e");
  background-position: right 0.75rem center;
  background-repeat: no-repeat;
  background-size: 1.5em 1.5em;

  &:hover {
    border-color: #00b96b;
    box-shadow: 0 2px 8px rgba(0, 185, 107, 0.1);
  }

  &:focus {
    outline: none;
    border-color: #00b96b;
    box-shadow: 0 0 0 3px rgba(0, 185, 107, 0.1);
  }

  @media (max-width: 768px) {
    min-width: 180px;
    padding: 0.65rem 0.9rem;
    font-size: 0.9rem;
  }
`;