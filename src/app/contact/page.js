"use client";

import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) return;

    const subject = encodeURIComponent(`New enquiry from ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    );

    window.location.href = `mailto:info@themajestichomes.com?subject=${subject}&body=${body}`;
    setStatus("sent");
  };

  return (
    <section className="relative min-h-[calc(100vh-4rem)] w-full bg-zinc-950 text-white">
      <div className="mx-auto w-full max-w-[1500px] px-5 pt-8 pb-16 sm:px-6 md:px-12 md:pt-16 md:pb-28 lg:px-20">
        <header className="max-w-3xl">
          <p className="text-base italic text-zinc-200 sm:text-lg md:text-xl">
            Get in Touch
          </p>
          <h1 className="mt-1 text-4xl italic leading-[1.1] text-white sm:mt-2 sm:text-5xl md:text-6xl lg:text-7xl">
            Begin a Conversation
          </h1>
          <p className="mt-4 text-sm italic text-zinc-300 sm:mt-5 sm:text-base md:text-lg">
            Every extraordinary space starts with a conversation. Tell us about your vision.
          </p>
        </header>

        <div className="mt-12 grid gap-12 sm:mt-16 sm:gap-14 md:mt-24 md:grid-cols-2 md:gap-20">
          <div className="text-zinc-200">
            <h2 className="text-2xl font-normal italic tracking-wider text-white sm:text-3xl md:text-4xl">
              MAJESTIC HOMES
            </h2>

            <div className="mt-8 space-y-1 text-sm italic sm:mt-10 sm:text-base">
              <p>160/9 Freedom City,</p>
              <p>Madapatha 10300, Sri Lanka.</p>
            </div>

            <p className="mt-6 text-sm italic sm:mt-8 sm:text-base">
              <span className="text-zinc-200">Phone:&nbsp;&nbsp;</span>
              <a
                href="tel:+94714223408"
                className="text-zinc-200 transition hover:text-white"
              >
                +94 71 422 3408
              </a>
            </p>

            <div className="mt-6 space-y-2 text-sm italic sm:mt-8 sm:text-base">
              <p className="break-words">
                <span className="text-zinc-200">Email:&nbsp;</span>
                <a
                  href="mailto:info@themajestichomes.com"
                  className="underline decoration-zinc-400 underline-offset-4 transition hover:text-white hover:decoration-white"
                >
                  info@themajestichomes.com
                </a>
              </p>
              <p className="break-words">
                <span className="text-zinc-200">Web:&nbsp;</span>
                <a
                  href="https://www.themajestichomes.com"
                  target="_blank"
                  rel="noreferrer"
                  className="underline decoration-zinc-400 underline-offset-4 transition hover:text-white hover:decoration-white"
                >
                  www.themajestichomes.com
                </a>
              </p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-8 sm:gap-10">
            <Field
              label="Name"
              name="name"
              type="text"
              value={form.name}
              onChange={handleChange}
            />
            <Field
              label="Email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
            />
            <Field
              label="Message"
              name="message"
              type="text"
              value={form.message}
              onChange={handleChange}
            />

            <div className="mt-2">
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center bg-white px-8 py-3 text-lg italic text-zinc-950 transition hover:bg-zinc-200 sm:w-auto sm:min-w-[140px] sm:text-xl"
              >
                {status === "sent" ? "Sent" : "Send"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({ label, name, type, value, onChange }) {
  return (
    <label className="block">
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={label}
        className="peer w-full border-b border-zinc-600 bg-transparent pb-2 text-lg italic text-white placeholder-zinc-500 outline-none transition focus:border-white sm:text-xl"
      />
    </label>
  );
}
