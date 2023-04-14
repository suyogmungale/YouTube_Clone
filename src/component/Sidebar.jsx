import React from 'react'
import { Button, Stack } from '@mui/material'
import { Category, categories } from '../utils/constants'

const Sidebar = () => {
    return (
        <Stack direction='row'
            sx={{
                overflowY: 'auto',
                height: { sx: 'auto', md: '95%' },
                flexDirection: { md: 'column' }
            }}
        >
            {categories.map((category) => (
                <button>
                    <span>{category.icon}</span>
                    <span>{category.name}</span>
                </button>
            ))}
        </Stack>
    )
}

export default Sidebar