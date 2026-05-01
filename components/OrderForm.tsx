"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { useLang } from "./LanguageProvider";

const schema = z.object({
  name: z.string().min(2, "Required"),
  phone: z.string().min(7, "Required"),
  email: z.string().email("Invalid email"),
  date: z.string().min(1, "Required"),
  time: z.string().min(1, "Required"),
  method: z.enum(["pickup", "delivery"]),
  address: z.string().optional(),
  products: z.array(z.string()).min(1, "Select at least one"),
  size: z.string().optional(),
  flavor: z.string().optional(),
  filling: z.string().optional(),
  finish: z.string().optional(),
  theme: z.string().optional(),
  colors: z.string().optional(),
  cakeText: z.string().optional(),
  decoration: z.array(z.string()),
  allergies: z.string().optional(),
  notes: z.string().optional(),
});

type FormValues = z.infer<typeof schema>;

export function OrderForm() {
  const { t } = useLang();
  const [submitState, setSubmitState] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      method: "pickup",
      products: [],
      decoration: [],
    },
  });

  const method = watch("method");

  const onSubmit = async (data: FormValues) => {
    setSubmitState("submitting");
    try {
      const res = await fetch("/api/order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Submission failed");
      setSubmitState("success");
      reset();
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch {
      setSubmitState("error");
    }
  };

  if (submitState === "success") {
    return (
      <div className="text-center py-16 px-6 border border-gold/30 bg-cream-soft">
        <CheckCircle2 className="text-gold mx-auto mb-5" size={48} />
        <h3 className="h-display text-3xl text-ink mb-3">
          {t.order.successTitle}
        </h3>
        <p className="text-ink/70 max-w-md mx-auto leading-relaxed">
          {t.order.successBody}
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-12">
      {/* Client Information */}
      <Section title={t.order.sections.client}>
        <Field label={t.order.fields.name} error={errors.name?.message}>
          <input className="brand-input" {...register("name")} />
        </Field>
        <div className="grid sm:grid-cols-2 gap-5">
          <Field label={t.order.fields.phone} error={errors.phone?.message}>
            <input className="brand-input" {...register("phone")} />
          </Field>
          <Field label={t.order.fields.email} error={errors.email?.message}>
            <input
              type="email"
              className="brand-input"
              {...register("email")}
            />
          </Field>
        </div>
        <div className="grid sm:grid-cols-2 gap-5">
          <Field label={t.order.fields.date} error={errors.date?.message}>
            <input
              type="date"
              className="brand-input"
              {...register("date")}
            />
          </Field>
          <Field label={t.order.fields.time} error={errors.time?.message}>
            <input
              type="time"
              className="brand-input"
              {...register("time")}
            />
          </Field>
        </div>

        <Field label={t.order.fields.method}>
          <div className="brand-checkbox flex gap-6 pt-1">
            <label className="flex items-center gap-2 cursor-pointer text-sm">
              <input
                type="radio"
                value="pickup"
                {...register("method")}
                className="!rounded-full"
              />
              {t.order.fields.pickup}
            </label>
            <label className="flex items-center gap-2 cursor-pointer text-sm">
              <input
                type="radio"
                value="delivery"
                {...register("method")}
                className="!rounded-full"
              />
              {t.order.fields.delivery}
            </label>
          </div>
        </Field>

        {method === "delivery" && (
          <Field label={t.order.fields.address}>
            <input className="brand-input" {...register("address")} />
          </Field>
        )}
      </Section>

      {/* Order Details */}
      <Section title={t.order.sections.details}>
        <Field
          label={t.order.fields.product}
          error={errors.products?.message}
        >
          <div className="brand-checkbox grid grid-cols-2 sm:grid-cols-4 gap-3 pt-1">
            {[
              { v: "Cake", l: t.order.fields.cake },
              { v: "Cupcakes", l: t.order.fields.cupcakes },
              { v: "Desserts", l: t.order.fields.desserts },
              { v: "Floral Cake", l: t.order.fields.floralCake },
            ].map((p) => (
              <label
                key={p.v}
                className="flex items-center gap-2 cursor-pointer text-sm"
              >
                <input
                  type="checkbox"
                  value={p.v}
                  {...register("products")}
                />
                {p.l}
              </label>
            ))}
          </div>
        </Field>

        <Field label={t.order.fields.size}>
          <input className="brand-input" {...register("size")} />
        </Field>
        <div className="grid sm:grid-cols-2 gap-5">
          <Field label={t.order.fields.flavor}>
            <input className="brand-input" {...register("flavor")} />
          </Field>
          <Field label={t.order.fields.filling}>
            <input className="brand-input" {...register("filling")} />
          </Field>
        </div>
        <Field label={t.order.fields.finish}>
          <input className="brand-input" {...register("finish")} />
        </Field>
      </Section>

      {/* Design Concept */}
      <Section title={t.order.sections.design}>
        <div className="grid sm:grid-cols-2 gap-5">
          <Field label={t.order.fields.theme}>
            <input className="brand-input" {...register("theme")} />
          </Field>
          <Field label={t.order.fields.colors}>
            <input className="brand-input" {...register("colors")} />
          </Field>
        </div>
        <Field label={t.order.fields.cakeText}>
          <input className="brand-input" {...register("cakeText")} />
        </Field>

        <Field label={t.order.fields.decoStyle}>
          <div className="brand-checkbox grid grid-cols-2 gap-3 pt-1">
            {[
              { v: "Sugar flowers", l: t.order.fields.sugarFlowers },
              { v: "Chocolate flowers", l: t.order.fields.chocFlowers },
              { v: "Minimal", l: t.order.fields.minimal },
              { v: "Luxury floral", l: t.order.fields.luxuryFloral },
            ].map((d) => (
              <label
                key={d.v}
                className="flex items-center gap-2 cursor-pointer text-sm"
              >
                <input
                  type="checkbox"
                  value={d.v}
                  {...register("decoration")}
                />
                {d.l}
              </label>
            ))}
          </div>
        </Field>
      </Section>

      {/* Allergies & Notes */}
      <Section title={t.order.sections.allergies}>
        <Field label="">
          <input
            className="brand-input"
            placeholder={t.order.fields.allergiesPlaceholder}
            {...register("allergies")}
          />
        </Field>
      </Section>

      <Section title={t.order.sections.notes}>
        <Field label="">
          <textarea
            className="brand-input min-h-[120px] resize-y"
            placeholder={t.order.fields.notesPlaceholder}
            {...register("notes")}
          />
        </Field>
      </Section>

      {/* Submit */}
      <div className="border-t border-gold/20 pt-10">
        <p className="text-xs text-ink/50 mb-6 italic">
          {t.order.sections.privacy}
        </p>
        {submitState === "error" && (
          <div className="flex items-start gap-3 mb-6 p-4 bg-rose/20 border border-rose/40">
            <AlertCircle className="text-ink mt-0.5 flex-shrink-0" size={18} />
            <div>
              <p className="font-medium text-ink text-sm">
                {t.order.errorTitle}
              </p>
              <p className="text-ink/70 text-sm mt-1">{t.order.errorBody}</p>
            </div>
          </div>
        )}
        <button
          type="submit"
          disabled={submitState === "submitting"}
          className="btn-gold w-full sm:w-auto disabled:opacity-50"
        >
          {submitState === "submitting" ? (
            <>
              <Loader2 size={14} className="animate-spin" />
              {t.order.submitting}
            </>
          ) : (
            t.order.submit
          )}
        </button>
      </div>
    </form>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h2 className="font-display italic text-2xl text-ink mb-6 pb-3 border-b border-gold/30">
        {title}
      </h2>
      <div className="space-y-5">{children}</div>
    </div>
  );
}

function Field({
  label,
  children,
  error,
}: {
  label: string;
  children: React.ReactNode;
  error?: string;
}) {
  return (
    <label className="block">
      {label && (
        <span className="block text-[12px] tracking-[0.18em] uppercase text-ink/70 mb-2">
          {label}
        </span>
      )}
      {children}
      {error && <span className="block text-xs text-rose mt-1.5">{error}</span>}
    </label>
  );
}
