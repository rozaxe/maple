import React from "react"
import classNames from 'classnames'

type ToastProps = {
    message: string
    intent?: string
    className?: string
}

export function Toast({ className, message, intent = 'info' }: ToastProps): JSX.Element {
    const cx = classNames(className, {
        'or-toast': intent === 'info',
        'or-toast--danger': intent === 'danger'
    })
    return (
        <div className={cx}>
            <div className="or-text text-white">{message}</div>
        </div>
    )
}
