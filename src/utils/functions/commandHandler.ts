export default function commandHandler(command: string, onToggleShadowCycle: () => void) {
  switch (command) {
    case 'help':
      return `Available commands:
      clear: clears the terminal
      toggle-light: toggles the light flashing effect
      help: displays a list of all available commands`

    case 'toggle-light':
      onToggleShadowCycle()
      return 'Toggled shadow'

    default:
      return ''
  }
}
