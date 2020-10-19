type State = {
  isHamburgerOpened: boolean
}

const initialState = {
  isHamburgerOpened: false,
}

export const state = (): State => initialState

export const mutations = {
  openHamburger(state: State) {
    state.isHamburgerOpened = true
  },
  closeHamburger(state: State) {
    state.isHamburgerOpened = false
  },
}
