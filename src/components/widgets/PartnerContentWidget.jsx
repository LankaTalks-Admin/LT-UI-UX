import { Check, ShieldCheck } from 'lucide-react'
import { verificationLevels, verificationNote } from '@/data/verification'

function PartnerBox() {
  return (
    <div className="border border-amber-500 bg-[#FAEEDA] p-5 shadow-sm">
      <p className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-amber-600">
        <ShieldCheck className="size-4" aria-hidden="true" />
        Partner Content
      </p>
      <h3 className="mt-2.5 font-serif text-lg font-bold text-[#633806]">
        Adfactors PR
      </h3>
      <p className="mt-2 text-[13px] leading-relaxed text-[#8c5614]">
        A leading full-service public relations and communications firm
        originally founded in India in 1997, and now also operating in Sri
        Lanka as <strong>Adfactors PR Lanka</strong>. It's one of the largest
        PR consultancies in the region, offering strategic counsel across
        corporate communications, reputation and crisis management, financial
        &amp; IPO communications, media relations, public affairs, brand
        building, digital PR, and events for local and multinational clients.
      </p>
      <p className="mt-3 text-[12px] font-semibold text-[#633806]">
        Verified partner since January 2026.
      </p>
    </div>
  )
}

function VerificationBox() {
  return (
    <div className="border border-slate-200 bg-white">
      <div className="flex items-center gap-2 border-b-2 border-secondary-900 bg-secondary-900 px-4 py-2.5">
        <ShieldCheck className="size-4 text-amber-400" aria-hidden="true" />
        <h3 className="text-[11px] font-black uppercase tracking-widest text-white">
          Verification
        </h3>
      </div>
      <div className="divide-y divide-slate-100">
        {verificationLevels.map((item) => (
          <div key={item.level} className="flex gap-3 p-3.5">
            <span
              className={`flex h-8 w-9 shrink-0 items-center justify-center font-mono text-[11px] font-bold text-white ${
                item.status === 'verified' ? 'bg-emerald-500' : 'bg-yellow-400'
              }`}
            >
              {item.level}
            </span>
            <div className="min-w-0 flex-1">
              <p className="text-[13px] font-bold text-slate-900">
                {item.title}
              </p>
              <p className="mt-0.5 text-[12px] leading-relaxed text-slate-500">
                {item.description}
              </p>
            </div>
            {item.status === 'verified' ? (
              <span
                className="flex size-6 shrink-0 items-center justify-center rounded-full bg-emerald-500 text-white"
                aria-label={`${item.level} verified`}
              >
                <Check className="size-4" strokeWidth={3} aria-hidden="true" />
              </span>
            ) : (
              <span
                className="flex size-6 shrink-0 items-center justify-center rounded-full bg-yellow-400 text-sm font-black text-white"
                aria-label={`${item.level} pending`}
              >
                !
              </span>
            )}
          </div>
        ))}
      </div>
      <div className="border-t-2 border-slate-200 bg-amber-50 px-4 py-3">
        <p className="flex items-center gap-2 text-[12px] font-semibold text-amber-800">
          <span
            className="flex size-5 shrink-0 items-center justify-center rounded-full bg-yellow-400 text-[11px] font-black text-white"
            aria-hidden="true"
          >
            !
          </span>
          {verificationNote}
        </p>
      </div>
    </div>
  )
}

export default function PartnerContentWidget({ story }) {
  const isPartner = Boolean(story?.partner)

  return (
    <div className="border border-slate-200 bg-white p-3">
      {isPartner ? <PartnerBox /> : <VerificationBox />}
    </div>
  )
}
