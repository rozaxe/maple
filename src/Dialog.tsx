import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useRef } from 'react'
import { CSSTransition } from 'react-transition-group'
import './Dialog.scss'

type DialogProps = {
    isOpen: boolean
    children: JSX.Element
    onClose?: () => void
    canClose?: boolean
    className?: string
}

export function Dialog({ isOpen, className, children, onClose, canClose = true }: DialogProps): JSX.Element {
    const dialogRef = useRef<HTMLDivElement>()
    
    const handleClose = () => {
        if (!canClose) return
        onClose?.()
    }

    useEffect(() => {
        if (isOpen) {
            document.body.classList.add('overflow-hidden')
        } else {
            document.body.classList.remove('overflow-hidden')
        }
    }, [isOpen])

    return (
        <CSSTransition
            in={isOpen}
            classNames="or-transition-dialog"
            mountOnEnter={true}
            unmountOnExit={true}
            timeout={500}
            nodeRef={dialogRef}
            addEndListener={(done) => {
                dialogRef.current.addEventListener('transitionend', done, false);
            }}
        >
            <div ref={dialogRef} className="or-overlay--backdrop fixed inset-0" onClick={handleClose}>
                <div className={`or-dialog--padded relative mx-auto mt-8 mb-2 ${className}`} onClick={(e) => e.stopPropagation()}>
                    {canClose && (
                        <button onClick={handleClose} className="or-button--ghost absolute top-0 right-0">
                            <FontAwesomeIcon icon={faTimes} />
                        </button>
                    )}
                    {children}
                </div>
            </div>
        </CSSTransition>
    )
}
