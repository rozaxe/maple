import React, { useState } from 'react'
import { Dialog, Spinner, Toaster } from '../src/index'
import ToasterService from '../src/Toast/ToasterService'

export default function App() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="or-app--padded or-theme--light">
            <Toaster />
            <button className="or-button" onClick={() => setIsOpen(true)}>Open Dialog</button>
            <Dialog isOpen={isOpen} className="w-8/12g" onClose={() => setIsOpen(false)}>
                <div>Hello</div>
            </Dialog>
            <Spinner />
            <button className="or-button" onClick={() => ToasterService.info('Hello world')}>Info</button>
            <button className="or-button" onClick={() => ToasterService.danger('Some danger')}>Danger</button>
        </div>
    )
}
