import styled from 'styled-components';

export const ModalStyle = styled.div`
    .modal {
        width: 45%;
        height: 90%; 
        background: #F7F7F7;
        position: fixed;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        .modal-body {
            display: flex;
            width: 100%;
            height: 100%;
            border-radius: 5px;
            box-shadow: 0 4px 8px 0 rgba(102, 102, 102, 0.8);
            img {
                padding: 12px;
                max-height: 100%;
                max-width: 22%;
                float: left;
            }
            .header {
                color: orange !important;
                font-size: 1.2rem;
                font-weight: 600;
                font-family: 'Roboto';
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
                padding-right: 10px; 
                margin-bottom: 0;
            }
            .content {
                margin: 10px;
                text-align: justify;
                font-family: 'Times New Roman' ;
                color: #6c6c6c;
                font-size: 1.2rem;
                .ingredient {
                    span {
                        font-family: 'Roboto';
                        font-weight: 600;
                        text-transform: uppercase;
                        color: #9c9c9c;
                    }
                }
                .tagline {
                    color: #6C6C6C;
                    font-size: 1.15rem;
                    font-weight: 500; 
                }
                .description {
                    
                }
                .serve {
                    font-family: 'Roboto';
                    color: #9c9c9c;
                    margin-top: 50px;
                }
                ul li.lists {
                    margin-right: 10px
                }
            }
            
        }
    }
`;