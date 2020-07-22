import styled from 'styled-components';
import colors from '../../constants/colors';

export const Button = styled.button`
  opacity: ${(props) => (props.loading ? '0.2' : '1')};
  opacity: ${(props) => (props.active ? '1' : '0.2')};
  height: 50px;
  background: ${colors.warmBlack};
  border: 0;
  border-radius: 5px;
  font-size: 16px;
  color: #fff;
  cursor: pointer;
`;
