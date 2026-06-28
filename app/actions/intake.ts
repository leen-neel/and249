'use server'

import { notifyTelegram } from '@/lib/intake/telegram'
import { verifyTurnstile } from '@/lib/intake/turnstile'

export async function submitIntake(formData: FormData) {
  const honeypot = formData.get('company')
  if (honeypot) {
    return { success: true, timestamp: Date.now() }
  }

  const turnstileToken = formData.get('cf-turnstile-response')
  if (!turnstileToken || typeof turnstileToken !== 'string') {
    return { success: false, message: 'Verification required.' }
  }

  const valid = await verifyTurnstile(turnstileToken)
  if (!valid) {
    return { success: false, message: 'Verification failed. Please try again.' }
  }

  const name = formData.get('name')
  const email = formData.get('email')
  const projectDetails = formData.get('projectDetails')

  if (
    !name ||
    !email ||
    !projectDetails ||
    typeof name !== 'string' ||
    typeof email !== 'string' ||
    typeof projectDetails !== 'string'
  ) {
    return { success: false, message: 'Required fields missing.' }
  }

  const trimmed = {
    name: name.trim(),
    email: email.trim(),
    projectDetails: projectDetails.trim(),
  }

  if (!trimmed.name || !trimmed.email || !trimmed.projectDetails) {
    return { success: false, message: 'Required fields missing.' }
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed.email)) {
    return { success: false, message: 'Please enter a valid email address.' }
  }

  try {
    await notifyTelegram(trimmed)
  } catch {
    return {
      success: false,
      message: 'Something went wrong. Please try again or email me directly.',
    }
  }

  return { success: true, timestamp: Date.now() }
}
