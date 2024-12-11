// plugins/scroll-to-top.js
export default function ({ app }) {
  if (process.client) {
    app.router.afterEach((to, from) => {
      const scrollToTop = () => {
        console.log('================================================')
        console.log('================================================')
        console.log('================================================')
        console.log('================================================')
        console.log('================================================')
        if (window) {
          window.scrollTo(0, 0)
        }
      }

      // Usa setTimeout per assicurarti che il DOM sia completamente renderizzato
      setTimeout(scrollToTop, 800)
    })
  }
}
