import { Stack } from '@mantine/core'
import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
    return (
        <Stack w={200} bg='yellow' p={20}>
            <Link to="positions">Positions</Link>
            <Link to="users">Users</Link>
            <Link to="employee">Employee</Link>
            <Link to="rules">Rules</Link>
        </Stack>
    )
}

export default Sidebar