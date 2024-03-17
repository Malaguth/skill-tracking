import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import theme from '../../assets/theme';

export const header = styled.header({
    display:'flex',
    padding:'0.2rem',
    backgroundColor: theme.colors.tial[100],
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
        color: theme.colors.singleton.white,
    }
});
