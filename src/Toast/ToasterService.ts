import { BehaviorSubject, Observable } from "rxjs"
import { v4 as uuidv4 } from 'uuid'

const TOAST_DURATION = 45000

type Intent = 'info' | 'danger'

type Toast = {
    id: string
    message: string
    intent: Intent
}

class ToasterService {
    private toasts$ = new BehaviorSubject<Toast[]>([])

    getToasts$ = (): Observable<Toast[]> => {
        return this.toasts$
    }

    create = (intent: Intent, message: string) => {
        const toast = { id: uuidv4(), message, intent }
        this.toasts$.next([
            ...this.toasts$.value,
            toast,
        ])
        setTimeout(() => this.remove(toast.id), TOAST_DURATION)
    }

    info = (message: string) => {
        this.create('info', message)
    }

    danger = (message: string) => {
        this.create('danger', message)
    }

    remove = (id: string) => {
        this.toasts$.next(
            this.toasts$.value.filter(
                toast => toast.id !== id
            )
        )
    }
}

export default new ToasterService()
