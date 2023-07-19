import { createCampaign, dashboard, logout, payment, profile, withdraw } from '../assets';

export const navlinks = [
  {
    name: 'Home',
    imgUrl: dashboard,
    link: '/',
    id: 0
  },
  {
    name: 'Start campaign',
    imgUrl: createCampaign,
    link: '/create-campaign',
    id: 1
  },
  {
    name: 'Edit campaign',
    imgUrl: payment,
    link: '/',
    id: 2
  },
  {
    name: 'Withdraw',
    imgUrl: withdraw,
    link: '/',
    id: 3
  },
  {
    name: 'Profile',
    imgUrl: profile,
    link: '/profile',
    id: 4
  },
  {
    name: 'Logout',
    imgUrl: logout,
    link: '/',
    id: 5
  },
];
