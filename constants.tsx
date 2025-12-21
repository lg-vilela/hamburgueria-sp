
import React from 'react';
import { Burger } from './types';

export const BURGERS: Burger[] = [
  {
    id: '1',
    name: 'O Clássico',
    description: '180g de carne Angus, cheddar, alface crocante, tomate, maionese da casa no pão brioche.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuANlSPSFtw1_uhT0HD6RRx0eY66RSVsPpX9ZP4fko4gQg29rrwl8EBXRgvtPD9AaW-syENY_I0gIrZGQUcUaATjl818Xwa0wg8mJTMbZChRdkcYX6oooNwX_5pssA5e8qp4xTOdf3ajMk3zYQEThShGmfCTnHgpWHFOHYhdRXayR6AGcTE06kFhDX1Tzx7BxzIpngcHvDEJ_Iol4zSsfY48vCcKl4nsV_4LULup4ZpFfONByuHSKkfv0NQP0TicVGzITOU4KxGPSjg2',
  },
  {
    id: '2',
    name: 'Cogumelos Trufados',
    description: 'Smash burger, azeite trufado, cogumelos salteados, queijo suíço, cebola caramelizada.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBoG1Tm_43kwMjzfl6PRzCMpSMKHNo0OqGEBmUYDkE02Q0uPzRPpVdOk_e_i52tM_unoG55G3ojsp5zyVREwrr0a69eMBFhDPJg622xJlNZLC8S5mxGlZA79lMcBlUCD3aYr6bCH9nF8q7MEcfyik4b1vjIyAa8G47k6FxLSsJ2bhVadiJ4m9wqmrWLpeXddPmTInlOD3WS-ytkwrqS8PXW_c8DgGZ7f0GmdWXw_8uoQbHwYLw8hqmwNqO27Aqyd8PcdoI8l5pfCzQc',
  },
  {
    id: '3',
    name: 'Jalapeño Picante',
    description: 'Duplo smash, queijo pepper jack, jalapeños em conserva, molho chipotle picante.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD4EIiPGxrLS3cpM6hhoy2d5rU2XKeSbbjXrEjeg1sSddZp-h8vuvrDs1N7Wh3WeLSNvT61npkZJt7v75kB6DwcHBrqHvJ-ukgHu62GA8nDiu5_oiKTU1MZPtJEVibEuS--2cGl8fgwBL91oNbNRhmYitN20fE6yCLuaxjwEoPA4cX5JtoYSv2ofSJRrrQ992yZIoR_m3ShEYB-jyG0tAgD3S0dlq-r9D1x8xwLsdwN3oYphkS50cni4KvmnhWjyY5USne9ifHswGdN',
  }
];

export const NAV_LINKS = [
  { label: 'Cardápio', href: '#menu' },
  { label: 'Sobre', href: '#about' },
  { label: 'Localização', href: '#location' },
];
