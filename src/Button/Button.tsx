import React, { ReactNode, MouseEventHandler, Fragment} from "react"

type ButtonProps = {
    children: ReactNode
    onClick: MouseEventHandler<HTMLButtonElement>
    primary?: boolean
    type?: 'button' | 'submit'
    small?: boolean 
    ghost?: boolean
    outline?: boolean
    className?: string
    disabled?: boolean
}

export function Button({
    primary = false,
    type = 'button',
    small = false,
    ghost = false,
    outline = false,
    className = '',
    children = <Fragment />,
    disabled = false,
    onClick = () => {},
}: ButtonProps) {
    const cx = `or-button${ small ? '--sm' : ''}${ primary ? '--primary' : '' }${ ghost ? '--ghost' : '' }${outline ? '--outline' : ''}`
    return (
        <button className={`${className} ${cx}`} type={type} disabled={disabled} onClick={onClick}>
            {children}
        </button>
    )
}
