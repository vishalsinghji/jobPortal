import styled from 'styled-components';

export const CardStyle = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: center;

    .card {
        width: 25%;
        margin: 5px;
        .card-body {
            width: 100%;
            height: 100%;
            box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
            transition: 0.3s;
            border-radius: 5px;
            img {
                width: auto;
                height: 200px;
                padding: 10px !important;
            }
            p {
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
                padding: 0 20px 0 20px;
            }
            &:hover {
                box-shadow: 0 4px 8px 0 rgba(0,0,0,0.5);
                transition: 0.3s;
            }
            .title {
                text-transform: uppercase;
                color: orange;
                font-size: 1.1rem;
                font-weight: 600;
            }
            .subtitle {
                color: #6C6C6C
            }
            .icon {
                
                float: right;
                margin: 10px;
            }
        }
        &:hover {
            cursor: pointer;
        }
    }
     
`;