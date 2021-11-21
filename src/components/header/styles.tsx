import styled from 'styled-components'

export const HeaderStyle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: orange;
    .container {
        .title {
            color: #FFF;
            font-size: 1.8rem;
            font-family: Roboto;
            font-weight: 600;
            margin-top : 10px;
        }
        .subtitle {
            color: #FFF;
            font-family: Roboto;
            font-weight: 300;
            margin-top: 5px;
        }
    }
`;