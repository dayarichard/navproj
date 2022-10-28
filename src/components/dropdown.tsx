import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react'
import Select from '@mui/material/Select';

interface IProps extends Omit<unknown, 'children'> {
    children: any;
    options: string[];
}

const ITEM_HEIGHT = 48;

const DropdownMenu = ({ children, options }: IProps) => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const [value, setValue] = useState('');
    const handleChange = (event: any) => {
        setValue(event.target.value);
        console.log(value)
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <IconButton
                aria-label="more"
                id="long-button"
                aria-controls="long-menu"
                aria-expanded={open ? 'true' : undefined}
                aria-haspopup="true"
                onClick={handleClick}
            >
                {children}
            </IconButton>
            <Menu
                id="long-menu"
                MenuListProps={{
                    'aria-labelledby': 'long-button'
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                PaperProps={{
                    style: {
                        maxHeight: ITEM_HEIGHT * 4.5,
                        width: '20ch'
                    }
                }}
            >
                <Select value={value} onChange={handleChange}>
                    {options.map(option => (
                        <MenuItem key={option} onClick={handleClose} >
                            {option}
                        </MenuItem>
                    ))}
                </Select>
            </Menu>
        </div>
    );
};

export default DropdownMenu;