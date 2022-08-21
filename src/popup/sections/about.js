import React from 'react'
import changelogs from '../../changelogs.json'
import * as manifestInfo from '../../manifest.json'
import ListSubheader from '../components/list-subheader.js'
import ListItemLink from '../components/list-item-link.js'

export const ABOUT = 'About'

const version = manifestInfo.version

export default function About() {
  return (
    <React.Fragment>
      <ListSubheader>About</ListSubheader>
      <ListItemLink
        primary="Version"
        secondary={version}
        href={changelogs[version]}
      />
      <ListItemLink
        primary="Website"
        secondary="faceit-enhancer.com"
        href="https://faceit-enhancer.com"
      />
      <ListItemLink
        primary="Source Code"
        secondary="GitHub"
        href="https://github.com/faceit-enhancer/faceit-enhancer"
      />
      <ListSubheader divider>Community & Social</ListSubheader>
      <ListItemLink primary="Reddit" secondary="r/FACEITEnhancer" subreddit />
      <ListItemLink primary="Twitter" href="https://twitter.com/timche_" />
      <ListItemLink primary="Steam" steamCommunity="groups/FACEITEnhancer" />
      <ListSubheader divider>Team</ListSubheader>
      <ListItemLink primary="azn" secondary="Creator" faceit="azn" />
      <ListItemLink
        primary="poacher2k"
        secondary="Developer"
        faceit="poacher2k"
      />
    </React.Fragment>
  )
}
