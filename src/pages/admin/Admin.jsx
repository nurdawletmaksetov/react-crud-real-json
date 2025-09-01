import { Flex, Stack } from '@mantine/core'
import React, { useContext } from 'react'
import Header from '../../components/Header'
import Sidebar from '../../components/Sidebar'
import { Navigate, Outlet } from 'react-router-dom'
import { AuthContext } from '../../context/auth-context'

const Admin = () => {
    const { isAuth } = useContext(AuthContext);

    if (!isAuth) {
        return <Navigate to="/login" replace />;
    }
    return (
        <Stack h='100vh' gap={0}>
            <Header />
            <Flex gap={0}>
                <Sidebar />
                <Outlet />
            </Flex>
        </Stack>
    )
}

export default Admin