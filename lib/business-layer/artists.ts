import ArtistsModel from '@/vuex-orm/models/Artist'
import { fireDB } from '../firebase'

export default class Artist {
  private collRef

  constructor() {
    this.collRef = fireDB.collection('artists')
  }

  /**
   * @param cbFunc callback function
   * @return void
   */
  get(cbFunc: (d: firebase.default.firestore.DocumentData) => void) {
    this.collRef.get().then((snapshot) => {
      snapshot.forEach((d) => {
        const data = d.data()
        cbFunc(data)
      })
    })
  }

  create(newArtist: ArtistsModel) {
    this.collRef.add(newArtist.$toJson())
  }

  update(artist: ArtistsModel) {
    this.collRef.doc(artist.id).set(artist)
  }

  softDelete(artist: ArtistsModel) {
    this.collRef.doc(artist.id).set({ ...artist, deletedAt: new Date() })
  }

  delete(artist: ArtistsModel) {
    this.collRef.doc(artist.id).delete()
  }
}
