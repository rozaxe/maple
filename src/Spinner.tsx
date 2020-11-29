import React from "react";

type SpinnerProps = {
    className?: string
}

export function Spinner({ className }: SpinnerProps): JSX.Element {
    return (
        <div className={`${className} m-1`}>
            <svg width="24" height="24" viewBox="-25 -25 400 400">
                <circle stroke="var(--ui-text, #000)" strokeOpacity="0.1" cx="175" cy="175" r="175" strokeWidth="50" fill="none"></circle>
                <circle stroke="var(--ui-text, #000)" strokeOpacity="0.3" transform="rotate(-90 175 175)" cx="175" cy="175" r="175" strokeDasharray="1100" strokeWidth="50" strokeDashoffset="1100" strokeLinecap="round" fill="none" style={{ strokeDasharray: '748px', transition: 'stroke-dashoffset 1s ease-out 0s'}}>
                    <animateTransform attributeName="transform" type="rotate" from="0 175 175" to="360 175 175" dur="0.50s" repeatCount="indefinite"></animateTransform>
                </circle>
            </svg>
        </div>
    )
}
