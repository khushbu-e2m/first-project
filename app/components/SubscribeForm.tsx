"use client";

import { FormEvent, useState } from "react";

export default function SubscribeForm() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitted(true);
    setEmail("");
    setTimeout(() => setSubmitted(false), 3000);
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2 w-full max-w-md mx-auto">
      <input
        type="email"
        required
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="flex-1 px-5 py-3.5 rounded-lg bg-white/10 border border-white/15 text-white placeholder-white/40 outline-none focus:border-indigo-400 transition-colors"
      />
      <button
        type="submit"
        className="px-7 py-3.5 rounded-lg bg-indigo-500 hover:bg-indigo-600 text-white font-semibold transition-colors cursor-pointer"
      >
        Notify Me
      </button>
      {submitted && (
        <p className="absolute mt-16 sm:mt-14 text-sm text-indigo-300">
          Thanks! We&apos;ll notify you when we launch.
        </p>
      )}
    </form>
  );
}
