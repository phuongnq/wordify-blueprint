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
import Link from 'next/link';

export default function Bio(props) {
  const {
    ice,
    model: {
      bio_t,
      name_s,
      profilePic_s,
      linkButtonText_s,
      linkButtonUrl_s,
      showLinkButton_b,
      facebookLink_s,
      twitterLink_s,
      instagramLink_s,
      youTubeLink_s
    }
  } = props;
  return (
    <>
      <div className="bio text-center" {...ice}>
        <img src={profilePic_s} alt="" className="img-fluid"  />
        <div className="bio-body">
          <h2>{name_s}</h2>
          <p>{bio_t}</p>
          {
            showLinkButton_b &&
            <p>
              <Link href={linkButtonUrl_s}>
                <a className="btn btn-primary btn-sm rounded">
                  {linkButtonText_s}
                </a>
              </Link>
            </p>
          }
          <p className="social">
            {
              facebookLink_s &&
              <Link href={facebookLink_s}>
                <a className="p-2" target="_blank" rel="noreferrer noopener">
                  <span className="fa fa-facebook" />
                </a>
              </Link>
            }
            {
              twitterLink_s &&
              <Link href={twitterLink_s}>
                <a className="p-2" target="_blank" rel="noreferrer noopener">
                  <span className="fa fa-twitter" />
                </a>
              </Link>
            }
            {
              instagramLink_s &&
              <Link href={instagramLink_s}>
                <a className="p-2" target="_blank" rel="noreferrer noopener">
                  <span className="fa fa-instagram" />
                </a>
              </Link>
            }
            {
              youTubeLink_s &&
              <Link href={youTubeLink_s}>
                <a className="p-2" target="_blank" rel="noreferrer noopener">
                  <span className="fa fa-youtube-play" />
                </a>
              </Link>
            }
          </p>
        </div>
      </div>
    </>
  );
}
