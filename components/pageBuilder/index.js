import React from 'react'

import {Campuses} from '../locations'
import {CurrentSeries} from '../currentSeries'
import {SideBySide} from '../sideBySide'
import {Video} from '../video'
import {Body} from '../body'

export const PageBuilder = (props) =>
  <>
    {props.content.map((item, i) => {
      switch (item.__typename) {
        case 'Locations':
          return (
            <Campuses key={i} {...item} />
          )
        case 'CurrentSeries':
          return (
            <CurrentSeries key={i} {...item} />
          )
        case 'SideBySide':
          return (
            <SideBySide key={i} {...item} />
          )
        case 'Video':
          return (
            <Video key={i} {...item} />
          )
        case 'Body':
          return (
            <Body key={i} {...item} />
          )
    }})}
  </>
