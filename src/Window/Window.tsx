import React from 'react'
import { useObservable } from 'r-use-observable'
import { WindowService } from './WindowService'
import { Dialog } from '../Dialog'
import { Button } from '../Button'

export function Window() {
    const isOpen = useObservable(WindowService.getIsOpen$, null)
    return (
        <Dialog isOpen={isOpen} onClose={WindowService.close} className="max-w-9/12g w-full">
            <div className="or-dialog__header px-1">
                {WindowService.current.title}
            </div>
            <div className="or-dialog__content or-column--padded">
                {WindowService.current.message}
            </div>
            <div className="or-row--reverse--padded">
                <Button primary onClick={WindowService.close} className="w-2/12g">OK</Button>
            </div>
        </Dialog>
    )
}
