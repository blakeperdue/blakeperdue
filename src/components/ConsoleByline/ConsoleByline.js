
const ConsoleByline = () => {
  if (typeof window !== 'undefined' && window.console) {
    setTimeout(
      () => {
        console.log('%c(ʘ‿ʘ)╯', 'color: #FF004B; font-size: 56px;')
        console.log('%c' + atob('aGlAYmxha2VwZXJkdWUuY29t'), 'color: #fff; background-color:#FF004B; padding:8px 12px; border-radius: 5px; font-size: 24px; line-height:30px;')
      },
      1000
    )
  }
}

export default ConsoleByline
