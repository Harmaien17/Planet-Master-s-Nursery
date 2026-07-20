"use client"

import type React from "react"
import { useState } from "react"
import { Send, AlertCircle, Loader2, CheckCircle2 } from "lucide-react"

type FormData = {
  name: string
  email: string
  phone: string
  message: string
}

const INITIAL_DATA: FormData = { name: "", email: "", phone: "", message: "" }

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const INPUT_BASE =
  "w-full bg-white border rounded-2xl px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:border-transparent transition-all border-slate-200 focus:ring-purple-300"

const WHATSAPP_URL =
  "https://wa.me/919579534952?text=Hi!%20I%27d%20like%20to%20know%20more%20about%20Planet%20Master%27s%20Nursery"

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>(INITIAL_DATA)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    setErrors((prev) => {
      if (!prev[name]) return prev
      const next = { ...prev }
      delete next[name]
      return next
    })
  }

  function validate(): Record<string, string> {
    const nextErrors: Record<string, string> = {}
    if (formData.name.trim().length < 2) nextErrors.name = "Please enter your name."
    if (!EMAIL_REGEX.test(formData.email)) nextErrors.email = "Please enter a valid email address."
    if (formData.message.trim().length < 5) nextErrors.message = "Please add a short message."
    return nextErrors
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitError(null)

    const nextErrors = validate()
    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors)
      return
    }

    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY
    if (!accessKey) {
      setSubmitError(
        "Form isn't fully set up yet (missing Web3Forms access key). Please WhatsApp us directly and we'll get back to you right away.",
      )
      return
    }

    setIsSubmitting(true)
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: accessKey,
          subject: "New Contact Message — Planet Master's Nursery",
          from_name: "Planet Master's Nursery Website",
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
        }),
      })

      const result = await res.json()
      if (res.ok && result.success) {
        setIsSuccess(true)
      } else {
        setSubmitError(result?.message || "Something went wrong. Please try again or WhatsApp us directly.")
      }
    } catch {
      setSubmitError("Network error. Please check your connection and try again, or WhatsApp us directly.")
    } finally {
      setIsSubmitting(false)
    }
  }

  function resetForm() {
    setFormData(INITIAL_DATA)
    setErrors({})
    setIsSuccess(false)
    setSubmitError(null)
  }

  if (isSuccess) {
    return (
      <div className="flex flex-col items-center rounded-3xl border border-black/5 bg-white p-10 text-center shadow-sm">
        <CheckCircle2 className="h-14 w-14 text-green-500" aria-hidden="true" />
        <h3 className="mt-4 text-xl font-bold text-slate-900">Message Sent!</h3>
        <p className="mt-2 text-sm text-slate-600">We&apos;ll get back to you within 24 hours.</p>
        <button
          type="button"
          onClick={resetForm}
          className="mt-6 rounded-full border border-slate-300 px-5 py-2.5 text-sm text-slate-700 hover:bg-slate-50"
        >
          Send Another Message
        </button>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="space-y-5 rounded-3xl border border-black/5 bg-white p-6 shadow-sm sm:p-8"
    >
      <div>
        <label htmlFor="c-name" className="mb-1.5 block text-sm font-medium text-slate-600">
          Your Name
        </label>
        <input
          id="c-name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="e.g. Priya Sharma"
          className={`${INPUT_BASE} ${errors.name ? "border-red-400 focus:ring-red-300" : ""}`}
        />
        {errors.name && <FieldError message={errors.name} />}
      </div>

      <div>
        <label htmlFor="c-email" className="mb-1.5 block text-sm font-medium text-slate-600">
          Email Address
        </label>
        <input
          id="c-email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="you@example.com"
          className={`${INPUT_BASE} ${errors.email ? "border-red-400 focus:ring-red-300" : ""}`}
        />
        {errors.email && <FieldError message={errors.email} />}
      </div>

      <div>
        <label htmlFor="c-phone" className="mb-1.5 block text-sm font-medium text-slate-600">
          Phone Number <span className="text-slate-400">(optional)</span>
        </label>
        <input
          id="c-phone"
          name="phone"
          type="tel"
          inputMode="numeric"
          value={formData.phone}
          onChange={handleChange}
          placeholder="10-digit mobile number"
          className={INPUT_BASE}
        />
      </div>

      <div>
        <label htmlFor="c-message" className="mb-1.5 block text-sm font-medium text-slate-600">
          Message
        </label>
        <textarea
          id="c-message"
          name="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          placeholder="How can we help?"
          className={`${INPUT_BASE} resize-none ${errors.message ? "border-red-400 focus:ring-red-300" : ""}`}
        />
        {errors.message && <FieldError message={errors.message} />}
      </div>

      {submitError && (
        <div className="flex items-start gap-2 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
          <AlertCircle className="mt-0.5 h-5 w-5 shrink-0" aria-hidden="true" />
          <span>
            {submitError}{" "}
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2">
              Chat on WhatsApp
            </a>
          </span>
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className={`flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 py-3.5 font-bold text-white shadow-lg shadow-pink-500/30 transition-transform ${
          isSubmitting ? "cursor-not-allowed opacity-70" : "hover:scale-[1.02]"
        }`}
      >
        {isSubmitting ? (
          <>
            <Loader2 className="h-5 w-5 animate-spin" aria-hidden="true" />
            Sending...
          </>
        ) : (
          <>
            <Send className="h-5 w-5" aria-hidden="true" />
            Send Message
          </>
        )}
      </button>
    </form>
  )
}

function FieldError({ message }: { message: string }) {
  return (
    <p className="mt-1 flex items-center gap-1 text-xs text-red-500" role="alert">
      <AlertCircle className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
      {message}
    </p>
  )
}
