/*
 * Copyright (C) 2007-2021 Crafter Software Corporation. All Rights Reserved.
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

import React from 'react';
import { IntlProvider } from 'react-intl';
import { useGlobalContext } from './context';
import en from '../assets/locales/en';
import es from '../assets/locales/es';

const Locales = {
  en,
  es
};

const AppIntl = (props) => {
  const [{ locale }] = useGlobalContext();
  return <IntlProvider {...props} locale={locale} messages={Locales[locale]}/>;
};

export default AppIntl;
