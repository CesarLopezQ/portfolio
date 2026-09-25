import { useEffect, useRef, useState } from 'react'
import style from '../styles/Terminal.module.css'
import handleEnter from '../utils/functions/handleEnter'

export type TerminalEntry = {
  command: string
  output: string
}

type TerminalProps = {
  onToggleShadowCycle: () => void
}

export default function Terminal({ onToggleShadowCycle }: TerminalProps) {
  const cliRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const [command, setCommand] = useState('')
  const [history, setHistory] = useState<TerminalEntry[]>([])

  useEffect(() => {
    const cli = cliRef.current

    if (cli) {
      cli.scrollTop = cli.scrollHeight
    }
  }, [history])

  return (
    <div className={style.mainWindow}>
      <div className={`${style.subWindow} ${style.title}`}>
        <p>cesarq@portfolio</p>
      </div>
      <div
        ref={cliRef}
        className={`${style.CLI} ${style.text}`}
        onClick={() => inputRef.current?.focus()}
      >
        <p>Welcome to cesarq@portfolio</p>
        <p>Type 'help' to see available commands.</p>
        {history.map((item, i) => (
          <div key={i}>
            <p>cesarq@portfolio:~$ {item.command}</p>
            <p>{item.output}</p>
          </div>
        ))}
        <div className={style.commandLine}>
          <span>cesarq@portfolio:~ $ </span>
          <input
            ref={inputRef}
            className={style.input}
            value={command}
            onChange={(event) => setCommand(event.target.value)}
            onKeyDown={(event) =>
              handleEnter(event, command, setCommand, setHistory, onToggleShadowCycle)
            }
          />
        </div>
      </div>
    </div>
  )
}
