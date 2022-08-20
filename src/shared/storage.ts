import OptionsSync from 'webext-options-sync'
import { DEFAULTS } from './settings'

export default new OptionsSync({
  // @ts-ignore
  defaults: DEFAULTS,
  migrations: [
    savedOptions => {
      if (
        savedOptions.matchRoomAutoVetoMapItems &&
        // @ts-ignore
        savedOptions.matchRoomAutoVetoMapItems.includes('de_cache')
      ) {
        // @ts-ignore
        savedOptions.matchRoomAutoVetoMapItems = savedOptions.matchRoomAutoVetoMapItems.filter(
          // @ts-ignore
          map => map !== 'de_cache'
        )
        // @ts-ignore
        savedOptions.matchRoomAutoVetoMapItems.push('de_ancient')
      }
    },
    OptionsSync.migrations.removeUnused
  ]
})
