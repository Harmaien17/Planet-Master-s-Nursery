"use client"

import type React from "react"

import { useState } from "react"
import { Rocket, ChevronDown, AlertCircle, Loader2, CheckCircle2 } from "lucide-react"

type FormData = {
  name: string
  age: string
  phone: string
  email: string
  program: string
  message: string
}

const INITIAL_DATA: FormData = {
  name: "",
  age: "",
  phone: "",
  email: "",
  program: "",
  message: "",
}

const AGE_OPTIONS = [
  { value: "1.5-2.5", label: "1.5 – 2.5 yrs (Playgroup)" },
  { value: "2.5-3.5", label: "2.5 – 3.5 yrs (Nursery)" },
  { value: "3.5-4.5", label: "3.5 – 4.5 yrs (Lower KG)" },
  { value: "4.5-5.5", label: "4.5 – 5.5 yrs (Upper KG)" },
]

const PROGRAM_OPTIONS = ["Playgroup", "Nursery", "Lower KG", "Upper KG"]

const INPUT_BASE =
  "w-full bg-[#0B0B2E] border rounded-2xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:border-transparent transition-all"

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const PHONE_REGEX = /^\d{10}$/

export default function AdmissionForm() {
  const [formData, setFormData] = useState<FormData>(INITIAL_DATA)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [submitError, setSubmitError] = useState(false)

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    // Clear the error for this field as the user corrects it.
    setErrors((prev) => {
      if (!prev[name]) return prev
      const next = { ...prev }
      delete next[name]
      return next
    })
  }

  function validateField(name: string, value: string): string {
    switch (name) {
      case "name":
        return value.trim().length >= 2 ? "" : "Please enter the parent's name."
      case "age":
        return value ? "" : "Please select your child's age range."
      case "phone":
        return PHONE_REGEX.test(value.replace(/\s/g, "")) ? "" : "Please enter a valid 10-digit phone number."
      case "email":
        return EMAIL_REGEX.test(value) ? "" : "Please enter a valid email address."
      case "program":
        return value ? "" : "Please choose a program."
      default:
        return ""
    }
  }

  function validate(): Record<string, string> {
    const nextErrors: Record<string, string> = {}
    ;(["name", "age", "phone", "email", "program"] as const).forEach((field) => {
      const message = validateField(field, formData[field])
      if (message) nextErrors[field] = message
    })
    return nextErrors
  }

  function handleBlur(
    e: React.FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) {
    const { name, value } = e.target
    const message = validateField(name, value)
    if (message) {
      setErrors((prev) => ({ ...prev, [name]: message }))
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitError(false)

    const nextErrors = validate()
    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors)
      return
    }

    setIsSubmitting(true)
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY,
          subject: "New Admission Enquiry — Planet Master's Nursery",
          from_name: "Planet Master's Nursery Website",
          parent_name: formData.name,
          child_age: formData.age,
          phone: formData.phone,
          email: formData.email,
          program: formData.program,
          message: formData.message,
        }),
      })

      const result = await res.json()
      if (res.ok && result.success) {
        setIsSuccess(true)
      } else {
        setSubmitError(true)
      }
    } catch {
      setSubmitError(true)
    } finally {
      setIsSubmitting(false)
    }
  }

  function resetForm() {
    setFormData(INITIAL_DATA)
    setErrors({})
    setIsSuccess(false)
    setSubmitError(false)
  }

  return (
    <section className="relative bg-[#0B0B2E] px-6 py-20 md:px-12">
      {/* Radial glow behind the card */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 40%, rgba(147,51,234,0.12), transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-2xl text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-purple-400/40 bg-purple-400/10 px-4 py-1.5 text-sm font-medium text-purple-200">
          Mission Control
        </span>
        <h2 className="mt-5 text-balance text-3xl font-extrabold leading-tight text-white sm:text-4xl">
          Begin the Countdown to Admission
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-pretty text-base leading-relaxed text-white/70">
          Reserve your little explorer&apos;s seat for the 2026–27 launch. Fill in the details below and our
          admissions crew will be in touch within 24 hours.
        </p>
      </div>

      <div className="relative mx-auto mt-12 max-w-2xl rounded-3xl border border-white/10 bg-[#12123A]/80 p-6 shadow-2xl backdrop-blur-md sm:p-10">
        <Rocket className="absolute right-6 top-6 h-12 w-12 text-white/10" aria-hidden="true" />

        {isSuccess ? (
          <div className="flex flex-col items-center py-10 text-center">
            <div className="relative mb-4">
              <div
                className="absolute inset-0 rounded-full bg-green-400/30 blur-xl"
                aria-hidden="true"
              />
              <CheckCircle2 className="relative h-16 w-16 text-green-400" aria-hidden="true" />
            </div>
            <h3 className="text-2xl font-bold text-white">Liftoff Successful! 🚀</h3>
            <p className="mt-3 max-w-sm text-pretty leading-relaxed text-white/70">
              Our team will contact you within 24 hours.
            </p>
            <button
              type="button"
              onClick={resetForm}
              className="mt-8 rounded-full border border-white/30 px-6 py-3 text-white transition-colors hover:bg-white/10"
            >
              Submit Another Response
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate className="space-y-5">
            {/* Parent Name */}
            <div>
              <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-white/70">
                Parent Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="e.g. Priya Sharma"
                aria-invalid={!!errors.name}
                className={`${INPUT_BASE} ${
                  errors.name
                    ? "border-red-500 focus:ring-red-400"
                    : "border-white/20 focus:ring-purple-400"
                }`}
              />
              {errors.name && <FieldError message={errors.name} />}
            </div>

            {/* Child's Age */}
            <div>
              <label htmlFor="age" className="mb-1.5 block text-sm font-medium text-white/70">
                Child&apos;s Age
              </label>
              <div className="relative">
                <select
                  id="age"
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  aria-invalid={!!errors.age}
                  className={`${INPUT_BASE} appearance-none pr-10 ${
                    formData.age ? "text-white" : "text-white/30"
                  } ${
                    errors.age
                      ? "border-red-500 focus:ring-red-400"
                      : "border-white/20 focus:ring-purple-400"
                  }`}
                >
                  <option value="" disabled className="text-white/30">
                    Select an age range
                  </option>
                  {AGE_OPTIONS.map((opt) => (
                    <option key={opt.value} value={opt.value} className="bg-[#0B0B2E] text-white">
                      {opt.label}
                    </option>
                  ))}
                </select>
                <ChevronDown
                  className="pointer-events-none absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-white/50"
                  aria-hidden="true"
                />
              </div>
              {errors.age && <FieldError message={errors.age} />}
            </div>

            {/* Phone Number */}
            <div>
              <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-white/70">
                Phone Number
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                inputMode="numeric"
                value={formData.phone}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="10-digit mobile number"
                aria-invalid={!!errors.phone}
                className={`${INPUT_BASE} ${
                  errors.phone
                    ? "border-red-500 focus:ring-red-400"
                    : "border-white/20 focus:ring-purple-400"
                }`}
              />
              {errors.phone && <FieldError message={errors.phone} />}
            </div>

            {/* Email Address */}
            <div>
              <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-white/70">
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="you@example.com"
                aria-invalid={!!errors.email}
                className={`${INPUT_BASE} ${
                  errors.email
                    ? "border-red-500 focus:ring-red-400"
                    : "border-white/20 focus:ring-purple-400"
                }`}
              />
              {errors.email && <FieldError message={errors.email} />}
            </div>

            {/* Program Choice */}
            <div>
              <label htmlFor="program" className="mb-1.5 block text-sm font-medium text-white/70">
                Program Choice
              </label>
              <div className="relative">
                <select
                  id="program"
                  name="program"
                  value={formData.program}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  aria-invalid={!!errors.program}
                  className={`${INPUT_BASE} appearance-none pr-10 ${
                    formData.program ? "text-white" : "text-white/30"
                  } ${
                    errors.program
                      ? "border-red-500 focus:ring-red-400"
                      : "border-white/20 focus:ring-purple-400"
                  }`}
                >
                  <option value="" disabled className="text-white/30">
                    Select a program
                  </option>
                  {PROGRAM_OPTIONS.map((program) => (
                    <option key={program} value={program} className="bg-[#0B0B2E] text-white">
                      {program}
                    </option>
                  ))}
                </select>
                <ChevronDown
                  className="pointer-events-none absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-white/50"
                  aria-hidden="true"
                />
              </div>
              {errors.program && <FieldError message={errors.program} />}
            </div>

            {/* Optional Message */}
            <div>
              <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-white/70">
                Message <span className="text-white/40">(optional)</span>
              </label>
              <textarea
                id="message"
                name="message"
                rows={2}
                value={formData.message}
                onChange={handleChange}
                placeholder="Anything you'd like us to know?"
                className={`${INPUT_BASE} resize-none border-white/20 focus:ring-purple-400`}
              />
            </div>

            {/* Submit error banner */}
            {submitError && (
              <div className="mb-4 flex items-center gap-2 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-300">
                <AlertCircle className="h-5 w-5 shrink-0" aria-hidden="true" />
                <span>Something went wrong. Please try again or WhatsApp us directly.</span>
              </div>
            )}

            {/* Submit button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className={`flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 py-4 font-bold text-[#0B0B2E] shadow-lg shadow-orange-500/30 transition-transform ${
                isSubmitting ? "cursor-not-allowed opacity-70" : "hover:scale-[1.02]"
              }`}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="h-5 w-5 animate-spin" aria-hidden="true" />
                  Launching...
                </>
              ) : (
                <>
                  <Rocket className="h-5 w-5" aria-hidden="true" />
                  Launch Application 🚀
                </>
              )}
            </button>
          </form>
        )}
      </div>
    </section>
  )
}

function FieldError({ message }: { message: string }) {
  return (
    <p className="mt-1 flex items-center gap-1 text-xs text-red-400" role="alert">
      <AlertCircle className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
      {message}
    </p>
  )
}
