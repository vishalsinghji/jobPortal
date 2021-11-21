import { ModalStyle } from './styles'

const Modal = (props: any) => {
    console.log(props.info)
    return (
            <ModalStyle>
                <div className="modal">
                    <div className="modal-body">
                        <img src={props.info.Image} alt=""/>
                        <div className="content">
                            <p className="header">{props.info.name}</p>
                            <p className="description">{props.info.id}</p>                          
                        </div>
                    </div>
                </div>
            </ModalStyle>
    )
}

export default Modal
