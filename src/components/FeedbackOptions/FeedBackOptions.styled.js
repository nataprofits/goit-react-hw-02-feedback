import styled from "@emotion/styled";

const color = 'white';

const setBgColor = props => {
    switch (props.name) {
        case 'good':
            return 'green';
        case 'neutral':
            return 'yellow'; 
        case 'bad':
            return 'red'; 
        default:
            return 'black'    
    }
}

export const ButtonList = styled.ul`
display: flex;
gap: 15px;
justify-content: space-around;
`;

export const Item = styled.li``;

export const Button = styled.button`
padding: 5px;
      background-color: ${setBgColor};
      font-size: 24px;
      border-radius: 4px;
      &:hover {
        color: ${color};
      }
`;