import styled from 'styled-components';

export const NavbarStyle = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    background-color: orange;
    li {
        display: inline;
        text-transform: uppercase;
        margin: auto 10px;
        font-family: Roboto;
        .link {
            text-decoration: none;
            color: #FFF;
            &:hover {
                cursor: pointer;
                color: red;
            }
        }
    }
`;