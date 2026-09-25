import type React from 'react'
import commandHandler from './commandHandler'
import type { TerminalEntry } from '../../modules/Terminal'

export default function handleEnter(
  event: React.KeyboardEvent,
  command: string,
  setCommand: React.Dispatch<React.SetStateAction<string>>,
  setHistory: React.Dispatch<React.SetStateAction<TerminalEntry[]>>,
  onToggleShadowCycle: () => void,
) {
  const modifiedCommand = command.trim().toLowerCase()

  if (event.key === 'Enter') {
    const output = commandHandler(modifiedCommand, onToggleShadowCycle)

    if (modifiedCommand === 'clear') {
      setHistory([])
      setCommand('')
      return
    }

    setHistory((prev) => [
      ...prev,
      {
        command: modifiedCommand,
        output: output,
      },
    ])
    setCommand('')
  }
}
