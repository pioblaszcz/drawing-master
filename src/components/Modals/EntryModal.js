import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import logo from '../../images/logo/logotran.png';

const EntryModal = () => {

    const navigate = useNavigate();

    useEffect(() => {
        navigate('/');
    }, [navigate]);

    return (
        <>
            <div className="modal-container">
                <div className="modal">
                    <div className="modal__header">
                        <img src={logo} alt="" className="modal__logo" />
                    </div>
                    <div className="modal__content">
                        <h2 className="modal__title">access denied!</h2>
                        <p className="modal__description">
                            You have to change your phone orientation
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EntryModal;