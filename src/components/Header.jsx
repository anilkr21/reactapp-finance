import { Box , Typography, useTheme } from '@mui/material';
import { tokens } from '../theme';
import React from 'react'

function Header({title, subtitle}) {
    const theme =useTheme();
    const colors = tokens(theme.palette.mode);
  return (
    <Box mb="30px">
        <Typography variant='h4' color={colors.grey[100]} fontWeight="bold" sx={{mb:"5px"}}>
            {title}
        </Typography>
        <Typography  variant='h8' color={colors.greenAccent[400]}>
            {subtitle}
        </Typography>
    </Box>
  )
}

export default Header