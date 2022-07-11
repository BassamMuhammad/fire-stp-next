import React from 'react'

export const InfoModal = ({ modalId, modalTitle, children }) => {
    return (
        <div className="modal fade modalbox" data-backdrop="static" id={modalId} tabIndex="-1" role="dialog">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">{modalTitle}</h5>
                        <span data-dismiss="modal" className="text-primary">Cerrar</span>
                    </div>
                    <div className="modal-body">
                        { children }
                    </div>
                </div>
            </div>
        </div>
    )
}