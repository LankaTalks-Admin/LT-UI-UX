import { Cloud, CloudLightning, CloudRain, CloudSnow, CloudSun } from 'lucide-react'

const weatherIcons = {
  clear: CloudSun,
  cloud: Cloud,
  rain: CloudRain,
  snow: CloudSnow,
  storm: CloudLightning,
}

export default function WeatherWidget() {
  const weather = {
    condition: 'clear',
    temp: 29,
    location: 'Colombo',
  }

  const Icon = weatherIcons[weather.condition] ?? CloudSun

  return (
    <div className="flex flex-col items-center px-2 leading-none text-slate-600" title={weather.location}>
      <div className="flex items-center gap-1.5">
        <Icon className="size-5" aria-hidden="true" />
        <span className="font-mono text-[13px] font-bold">
          {weather.temp}&deg;C
        </span>
      </div>
      <span className="mt-0.5 text-[9px] font-bold uppercase tracking-wider text-slate-400">
        {weather.location}
      </span>
    </div>
  )
}
