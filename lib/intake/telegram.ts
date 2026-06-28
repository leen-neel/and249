type IntakePayload = {
  name: string
  email: string
  projectDetails: string
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
}

export async function notifyTelegram(payload: IntakePayload): Promise<void> {
  const token = process.env.TELEGRAM_BOT_TOKEN
  const chatId = process.env.TELEGRAM_CHAT_ID

  if (!token || !chatId) {
    throw new Error('Telegram credentials are not configured')
  }

  const text = [
    '<b>New intake submission</b>',
    '',
    `<b>Name:</b> ${escapeHtml(payload.name)}`,
    `<b>Email:</b> ${escapeHtml(payload.email)}`,
    '',
    '<b>Project details:</b>',
    escapeHtml(payload.projectDetails.slice(0, 3500)),
  ].join('\n')

  const res = await fetch(
    `https://api.telegram.org/bot${token}/sendMessage`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: chatId,
        text,
        parse_mode: 'HTML',
        disable_web_page_preview: true,
      }),
    }
  )

  if (!res.ok) {
    const body = await res.text()
    console.error('[intake] Telegram send failed:', body)
    throw new Error('Telegram notification failed')
  }
}
