/*
 * Copyright (C) 2007-2020 Crafter Software Corporation. All Rights Reserved.
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License version 3 as published by
 * the Free Software Foundation.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */
import dynamic from 'next/dynamic'

const map = {
  '/page/entry': dynamic(() => import('../pages/index')),
  '/page/about': dynamic(() => import('../pages/about')),
  '/page/contact': dynamic(() => import('../pages/contact')),
  '/page/category': dynamic(() => import('../pages/category/[[...slug]]')),
  '/page/search': dynamic(() => import('../pages/Search')),
  '/component/header': dynamic(() => import('../components/Header')),
  '/component/footer': dynamic(() => import('../components/Footer')),
  '/component/bio': dynamic(() => import('../components/Bio')),
  '/component/image': dynamic(() => import('../components/Image')),
  '/component/responsive_columns': dynamic(() => import('../components/ResponsiveColumns')),
  '/component/rich_text': dynamic(() => import('../components/RichText')),
  '/component/slider': dynamic(() => import('../components/Slider')),
  '/component/post': dynamic(() => import('../pages/Post'))
};

export default map;
