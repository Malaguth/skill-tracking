import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const header = styled.header({
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#1c9bbc',
    alignItems: 'center',
    gap: 20,
    paddingRight: 10,
    paddingLeft: 10
});

export const CustomLink = styled(Link)({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    textDecoration: 'none',
    color: 'inherit',

    '&:visited, &:active': {
        color: 'inherit',
    }
});
