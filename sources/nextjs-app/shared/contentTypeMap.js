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

const map = {
  '/page/entry': import('../pages/Home'),
  '/page/about': import('../pages/About'),
  '/page/contact': import('../pages/Contact'),
  '/page/category': import('../pages/Category'),
  '/page/search': import('../pages/Search'),
  '/component/header': import('../components/Header'),
  '/component/footer': import('../components/Footer'),
  '/component/bio': import('../components/Bio'),
  '/component/image': import('../components/Image'),
  '/component/responsive_columns': import('../components/ResponsiveColumns'),
  '/component/rich_text': import('../components/RichText'),
  '/component/slider': import('../components/Slider'),
  '/component/post': import('../pages/Post')
};

export default map;
