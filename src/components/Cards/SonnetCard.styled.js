import styled from "styled-components";
import { Link } from "react-router-dom";
import {color, shadow, breakpoint } from "../../styles/theme"

export const CardContainer = styled.div`
  min-width: 300px;
  max-width: 340px;
  background: white;
  border-radius: 16px;
  box-shadow: ${shadow.soft};
  overflow: hidden;
  transition: all 0.3s ease;
  border: 1px solid rgba(0, 0, 0, 0.05);

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
  }

  @media ${breakpoint.mobile} {
    min-width: 280px;
    max-width: 300px;
  }
`;

export const CardImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
  object-position: center;
`;

export const CardContent = styled.div`
  padding: 1.5rem;

  h5 {
    font-weight: 700;
    margin-bottom: 0.75rem;
    font-size: 1.25rem;
    color: ${color.gray[700]};
    line-height: 1.3;
  }

  p {
    color: ${color.gray[500]};
    font-size: 0.95rem;
    line-height: 1.5;
    margin-bottom: 1rem;
    height: 68px;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
`;

export const CardAuthor = styled.small`
  color: ${color.green};
  font-weight: 600;
  font-size: 0.85rem;
  display: block;
  margin-bottom: 1rem;
`;

export const ListenButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: ${color.green};
  color: white;
  padding: 10px 24px;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  font-size: 0.9rem;
  transition: all 0.3s ease;
  width: 100%;
  text-align: center;

  &:hover {
    background: ${color.darkGreen};
    transform: translateY(-2px);
    box-shadow: ${shadow.medium};
  }
`;
