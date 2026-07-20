"use client"

import type React from "react"
import { useState } from "react"
import { CalendarDays, ChevronDown, AlertCircle, Loader2, CheckCircle2 } from "lucide-react"

type FormData = {
  name: string
  phone: string
  email: string
  childAge: string
  preferredDate: string
  preferredSlot: string
  message: string
}

const INITIAL_DATA: FormData = {
  name: "",
  phone: "",
  email: "",
  childAge: "",
  preferredDate: "",
  preferredSlot: "",
  message: "",
}

const SLOT_OPTIONS = ["Morning (9 – 11 AM)", "Midday (11 AM – 1 PM)", "Afternoon (2 – 4 PM)"]

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const PHONE_REGEX = /^\d{10}$/

const INPUT_BASE =
  "w-full bg-white border rounded-2xl px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:border-transparent transition-all border-slate-200 focus:ring-purple-300"

const WHATSAPP_URL =
  "https://wa.me/919579534952?text=Hi!%20I%27d%20like%20to%20book%20a%20visit%20to%20Planet%20Master%27s%20Nursery"

export default function BookVisitForm() {
  const [formData, setFormData] = useState<FormData>(INITIAL_DATA)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) {
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
    if (!PHONE_REGEX.test(formData.phone.replace(/\s/g, ""))) nextErrors.phone = "Please enter a valid 10-digit phone number."
    if (!EMAIL_REGEX.test(formData.email)) nextErrors.email = "Please enter a valid email address."
    if (!formData.preferredDate) nextErrors.preferredDate = "Please choose a preferred date."
    if (!formData.preferredSlot) nextErrors.preferredSlot = "Please choose a time slot."
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
          subject: "New Visit Booking — Planet Master's Nursery",
          from_name: "Planet Master's Nursery Website",
          parent_name: formData.name,
          phone: formData.phone,
          email: formData.email,
          child_age: formData.childAge,
          preferred_date: formData.preferredDate,
          preferred_slot: formData.preferredSlot,
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

  const todayStr = new Date().toISOString().split("T")[0]

  if (isSuccess) {
    return (
      <div className="flex flex-col items-center rounded-3xl border border-black/5 bg-white p-10 text-center shadow-xl">
        <CheckCircle2 className="h-16 w-16 text-green-500" aria-hidden="true" />
        <h3 className="mt-4 text-2xl font-bold text-slate-900">Visit Requested! 🚀</h3>
        <p className="mt-3 max-w-sm text-sm leading-relaxed text-slate-600">
          We&apos;ll confirm your visit slot within 24 hours by phone or email.
        </p>
        <button
          type="button"
          onClick={resetForm}
          className="mt-8 rounded-full border border-slate-300 px-6 py-3 text-slate-700 transition-colors hover:bg-slate-50"
        >
          Book Another Visit
        </button>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="space-y-5 rounded-3xl border border-black/5 bg-white p-6 shadow-xl sm:p-10"
    >
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="bv-name" className="mb-1.5 block text-sm font-medium text-slate-600">
            Parent Name
          </label>
          <input
            id="bv-name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="e.g. Priya Sharma"
            className={`${INPUT_BASE} ${errors.name ? "border-red-400 focus:ring-red-300" : ""}`}
          />
          {errors.name && <FieldError message={errors.name} />}
        </div>

        <div>
          <label htmlFor="bv-childAge" className="mb-1.5 block text-sm font-medium text-slate-600">
            Child&apos;s Age <span className="text-slate-400">(optional)</span>
          </label>
          <input
            id="bv-childAge"
            name="childAge"
            value={formData.childAge}
            onChange={handleChange}
            placeholder="e.g. 3 years"
            className={INPUT_BASE}
          />
        </div>

        <div>
          <label htmlFor="bv-phone" className="mb-1.5 block text-sm font-medium text-slate-600">
            Phone Number
          </label>
          <input
            id="bv-phone"
            name="phone"
            type="tel"
            inputMode="numeric"
            value={formData.phone}
            onChange={handleChange}
            placeholder="10-digit mobile number"
            className={`${INPUT_BASE} ${errors.phone ? "border-red-400 focus:ring-red-300" : ""}`}
          />
          {errors.phone && <FieldError message={errors.phone} />}
        </div>

        <div>
          <label htmlFor="bv-email" className="mb-1.5 block text-sm font-medium text-slate-600">
            Email Address
          </label>
          <input
            id="bv-email"
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
          <label htmlFor="bv-date" className="mb-1.5 block text-sm font-medium text-slate-600">
            Preferred Date
          </label>
          <input
            id="bv-date"
            name="preferredDate"
            type="date"
            min={todayStr}
            value={formData.preferredDate}
            onChange={handleChange}
            className={`${INPUT_BASE} ${errors.preferredDate ? "border-red-400 focus:ring-red-300" : ""}`}
          />
          {errors.preferredDate && <FieldError message={errors.preferredDate} />}
        </div>

        <div>
          <label htmlFor="bv-slot" className="mb-1.5 block text-sm font-medium text-slate-600">
            Preferred Time Slot
          </label>
          <div className="relative">
            <select
              id="bv-slot"
              name="preferredSlot"
              value={formData.preferredSlot}
              onChange={handleChange}
              className={`${INPUT_BASE} appearance-none pr-10 ${
                formData.preferredSlot ? "text-slate-900" : "text-slate-400"
              } ${errors.preferredSlot ? "border-red-400 focus:ring-red-300" : ""}`}
            >
              <option value="" disabled>
                Select a slot
              </option>
              {SLOT_OPTIONS.map((slot) => (
                <option key={slot} value={slot}>
                  {slot}
                </option>
              ))}
            </select>
            <ChevronDown
              className="pointer-events-none absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400"
              aria-hidden="true"
            />
          </div>
          {errors.preferredSlot && <FieldError message={errors.preferredSlot} />}
        </div>
      </div>

      <div>
        <label htmlFor="bv-message" className="mb-1.5 block text-sm font-medium text-slate-600">
          Message <span className="text-slate-400">(optional)</span>
        </label>
        <textarea
          id="bv-message"
          name="message"
          rows={2}
          value={formData.message}
          onChange={handleChange}
          placeholder="Anything you'd like us to know?"
          className={`${INPUT_BASE} resize-none`}
        />
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
        className={`flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 py-4 font-bold text-white shadow-lg shadow-pink-500/30 transition-transform ${
          isSubmitting ? "cursor-not-allowed opacity-70" : "hover:scale-[1.02]"
        }`}
      >
        {isSubmitting ? (
          <>
            <Loader2 className="h-5 w-5 animate-spin" aria-hidden="true" />
            Booking...
          </>
        ) : (
          <>
            <CalendarDays className="h-5 w-5" aria-hidden="true" />
            Confirm Visit Request
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
