import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const header = styled.header({
    display:'flex',
    padding:'0.2rem',
    backgroundColor: '#1c9bbc',
});

export const ul = styled.ul({
    display:'flex',
    gap:'2rem',
    alignItems:'center'
});

export const CustomLink = styled(NavLink)({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    textDecoration: 'none',
    color: 'inherit',
    '&.active': {
        color: '#ffffff'
    }
});
