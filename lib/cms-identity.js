/* global CMS_PUBLIC_PATH */
import netlifyIdentityWidget from "netlify-identity-widget"

window.netlifyIdentity = netlifyIdentityWidget

const addLoginListener = () =>
  netlifyIdentityWidget.on(`login`, () => {
    document.location.href = `${CMS_PUBLIC_PATH}/`
  })

netlifyIdentityWidget.on(`init`, user => {
  if (!user) {
    addLoginListener()
  } else {
    netlifyIdentityWidget.on(`logout`, () => {
      addLoginListener()
    })
  }
})

netlifyIdentityWidget.init()
