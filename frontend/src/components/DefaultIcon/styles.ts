import styled from 'styled-components';

export const IconContainer = styled.div({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
});

export const IconImage = styled.img<{ size: 'small' | 'medium' | 'large' }>((props) => ({
    width: '100%', 
    maxWidth: props.size === 'small' ? '80px' : props.size === 'medium' ? '120px' : '150px', 
    height: 'auto', 
  }));
