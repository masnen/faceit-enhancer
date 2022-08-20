import React from 'react'
import capitalize from 'lodash/capitalize'
import { detect } from 'detect-browser'
import * as manifestInfo from '../../manifest.json'
import ListSubheader from '../components/list-subheader.js'
import ListItemLink from '../components/list-item-link.js'

const userBrowser = detect()

export const HELP = 'Help'
const version = manifestInfo.version

export default function Help() {
  return (
    <React.Fragment>
      <ListSubheader>Issues?</ListSubheader>
      <ListItemLink
        primary="Report an Issue"
        subreddit={encodeURI(
          `submit?selftext=true&text=\n\n\n---\n\nVersion: ${version}\nBrowser: ${capitalize(
            userBrowser.name
          )} (${userBrowser.version})`
        )}
      />
      <ListSubheader divider>Questions?</ListSubheader>
      <ListItemLink primary="Ask on Reddit" subreddit="submit?selftext=true" />
      <ListItemLink primary="Tweet Us" href="https://twitter.com/timche_" />
    </React.Fragment>
  )
}
