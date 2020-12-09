import { ReactNode } from "react"
import { BehaviorSubject, Observable } from "rxjs"

type Current = {
    title: string
    message: ReactNode
}

class WindowServiceImpl {

    private isOpen$ = new BehaviorSubject<boolean>(false)
    current: Current = {
        title: '',
        message: '',
    }

    getIsOpen$ = (): Observable<boolean> => {
        return this.isOpen$
    }

    close = () => {
        this.isOpen$.next(false)
    }

    alert = (title: string, message: ReactNode) => {
        // One window only at a time
        if (this.isOpen$.value) return

        this.current = { title, message }
        this.isOpen$.next(true)
    }
}

export const WindowService = new WindowServiceImpl()
