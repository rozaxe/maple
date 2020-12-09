import { AnimatePresence, motion } from "framer-motion"
import { useObservable } from "r-use-observable"
import React from "react"
import { Toast } from "./Toast"
import { ToasterService } from "./ToasterService"

type ToasterProps = {
    className?: string
}

export function Toaster({ className }: ToasterProps): JSX.Element {
    const toasts = useObservable(ToasterService.getToasts$, [])

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className={`${className} absolute inset-x-0 flex flex-col-reverse items-center`}>
                <AnimatePresence>
                    {
                        toasts.map(toast => (
                            <motion.div
                                className="flex-shrink-0 flex flex-col-reverse"
                                key={toast.id}
                                initial={{ height: '0px' }}
                                animate={{ height: 'auto' }}
                                exit={{
                                    opacity: 0,
                                    height: '0px',
                                    flexDirection: 'column'
                                }}
                            >
                                <Toast
                                    className="pointer-events-auto"
                                    message={toast.message}
                                    intent={toast.intent}
                                />
                            </motion.div>
                        ))
                    }
                </AnimatePresence>
            </div>
        </div>
    )
}
