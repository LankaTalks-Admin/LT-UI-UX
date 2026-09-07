import { ArrowRight, Handshake } from 'lucide-react'

export default function IntelligencePromo() {
  return (
    <div className="border-2 border-secondary-900 bg-secondary-900 p-5">
      <div className="flex items-center gap-2">
        <Handshake className="size-4 text-amber-400" aria-hidden="true" />
        <h3 className="text-[11px] font-black uppercase tracking-widest text-amber-400">
          Partner With Us!
        </h3>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-slate-300">
        Co-produce sector reports, data dashboards and industry events with the
        LankaTalks research desk.
      </p>
      <a
        href="#"
        className="group mt-4 inline-flex items-center gap-1.5 border-2 border-amber-400 px-4 py-2 text-[12px] font-bold uppercase tracking-wider text-amber-400 transition-colors hover:bg-amber-400 hover:text-secondary-900"
      >
        Talk to Us
        <ArrowRight
          className="size-4 transition-transform group-hover:translate-x-0.5"
          aria-hidden="true"
        />
      </a>
    </div>
  )
}
