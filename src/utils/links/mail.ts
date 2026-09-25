export default function mail() {
  const to = encodeURIComponent('cesarlopez99@live.com')
  const subject = encodeURIComponent('Portfolio Contact')
  const body = encodeURIComponent('Hello Cesar,')

  const url = `https://outlook.live.com/mail/0/deeplink/compose?to=${to}&subject=${subject}&body=${body}`

  window.open(url, '_blank', 'noopener, noreferrer')
}
