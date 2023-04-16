import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import SettingsIcon from '@mui/icons-material/Settings';
import FavoriteIcon from '@mui/icons-material/Favorite';
import NotificationsIcon from '@mui/icons-material/Notifications';
import RoomServiceIcon from '@mui/icons-material/RoomService';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import AssignmentIcon from '@mui/icons-material/Assignment';

export default function BasicMenu() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        마이페이지
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>
            <SettingsIcon />
            <div className='mypage_category_item'>
                설정
            </div>
        </MenuItem>
        <MenuItem onClick={handleClose}>
            <FavoriteIcon />
            <div className='mypage_category_item'>
                관심상품
            </div>
        </MenuItem>
        <MenuItem onClick={handleClose}>
            <NotificationsIcon />
            <div className='mypage_category_item'>
                알림
            </div>
        </MenuItem>
        <MenuItem onClick={handleClose}>
            <RoomServiceIcon />
            <div className='mypage_category_item'>
                문의
            </div>
        </MenuItem>
        <MenuItem onClick={handleClose}>
            <CalendarMonthIcon />
            <div className='mypage_category_item'>
                주문상품
            </div>
        </MenuItem>
        <MenuItem onClick={handleClose}>
            <CreditCardIcon />
            <div className='mypage_category_item'>
                상품견적
            </div>
        </MenuItem>
        <MenuItem onClick={handleClose}>
            <AssignmentIcon />
            <div className='mypage_category_item'>
                맞춤견적
            </div>
        </MenuItem>
      </Menu>
    </div>
  );
}