import { FC } from 'react'
import { Navigate, Outlet } from 'react-router-dom'

type ProtectedRouteProps = {
    role?: 'buyer' | 'admin'
}

export const ProtectedRoute: FC<ProtectedRouteProps> = ({ role }) => {
    const token = localStorage.getItem('token')
    const userRole = localStorage.getItem('role') as 'buyer' | 'admin' | null

    if (!token) return <Navigate to="/login" replace />
    if (role && role !== userRole) return <Navigate to="/" replace />

    return <Outlet />
}
