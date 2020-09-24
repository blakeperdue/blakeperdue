
const ConsoleByline = () => {
  if (typeof window !== 'undefined' && window.console) {
    setTimeout(
      () => {
        console.log('%c(ʘ‿ʘ)╯', 'color: #FF004B; font-size: 52pt')
        console.log('%c' + atob('aGlAYmxha2VwZXJkdWUuY29t'), 'color: #FF004B; font-size: 32pt')
      },
      1000
    )
  }

  return null
}

export default ConsoleByline
