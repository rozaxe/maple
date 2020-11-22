import React, { useState } from 'react'
import { Dialog } from '../src/index'

export default function App() {
    const [isOpen, setIsOpen] = useState(true)

    return (
        <div className="or-app--padded or-theme--light">
            <button className="or-button" onClick={() => setIsOpen(true)}>Open Dialog</button>
            <Dialog isOpen={isOpen} className="w-8/12g" onClose={() => setIsOpen(false)}>
                <div>Hello</div>
            </Dialog>
        </div>
    )
}
