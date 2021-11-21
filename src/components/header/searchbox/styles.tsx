import styled from 'styled-components';   
export const SearchBoxStyle = styled.div`
    display: block;
    margin: 10px auto;
    height: 50px;
    input {
        width: 40%;
        color: #999b84;
        font-weight: 400;
        &:focus {
            outline: none;
        }
        &::placeholder {
            color: #687980
        }
    }
`;