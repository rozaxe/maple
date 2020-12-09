import React, { useState } from 'react'
import { Button, Dialog, Spinner, Toaster, ToasterService, Window, WindowService } from '../src/index'

export default function App() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="or-app--padded or-theme--light">
            <Toaster />
            <Window />
            <Button onClick={() => setIsOpen(true)}>Open Dialog</Button>
            <Dialog isOpen={isOpen} className="w-8/12g" onClose={() => setIsOpen(false)}>
                <div>Hello</div>
            </Dialog>
            <Spinner />
            <Button onClick={() => ToasterService.info('Hello world')}>Info</Button>
            <Button onClick={() => ToasterService.danger('Some danger')}>Danger</Button>
            <Button onClick={() => WindowService.alert('Attention', <div>Hello world ! <strong>♥</strong> </div>)}>Hello</Button>
        </div>
    )
}
