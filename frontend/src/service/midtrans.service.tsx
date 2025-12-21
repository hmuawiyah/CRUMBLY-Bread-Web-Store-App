import { useEffect, useState } from 'react'

declare global {
    interface Window {
        snap: {
            pay: (
                transactionToken: string,
                callbacks: {
                    onSuccess?: (result: any) => void
                    onPending?: (result: any) => void
                    onError?: (result: any) => void
                    onClose?: () => void
                }
            ) => void
        }
    }
}


export const useMidtransSnap = () => {
    const [isReady, setIsReady] = useState(false)

    useEffect(() => {
        if (window.snap) {
            setIsReady(true)
            return
        }

        const script = document.createElement('script')
        const clientKey =
            import.meta.env.VITE_MIDTRANS_ENV === 'production'
                ? import.meta.env.VITE_MIDTRANS_CLIENT_KEY_PRODUCTION
                : import.meta.env.VITE_MIDTRANS_CLIENT_KEY_SANDBOX

        script.src =
            import.meta.env.VITE_MIDTRANS_ENV === 'production'
                ? 'https://app.midtrans.com/snap/snap.js'
                : 'https://app.sandbox.midtrans.com/snap/snap.js'

        script.setAttribute('data-client-key', clientKey)
        script.async = true
        script.onload = () => setIsReady(true)

        document.body.appendChild(script)
    }, [])

    return isReady
}
