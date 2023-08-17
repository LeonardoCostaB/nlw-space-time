import Image from 'next/image'
import Link from 'next/link'
import nlwLogo from '../assets/nlw-spacetime-logo.svg'

export function Hero() {
  return (
    <div className="space-y-5">
      <Image src={nlwLogo} alt="NLW Spacetime" />

      <div className="max-w-[420px] space-y-1">
        <h1 className="mt-5 text-5xl font-bold leading-tight text-gray-50">
          Sua cápsula do tempo
        </h1>

        <p className="text-lg leading-relaxed">
          Colecione momentos marcantes da jornada e compartilhe (se quiser) com
          o mundo
        </p>
      </div>

      <Link
        href="/memories/new"
        className="hover: inline-block rounded-full bg-green-500 px-5 py-3 font-alt text-sm uppercase leading-none text-black transition-all hover:bg-green-600"
      >
        CADASTRAR LEMBRANÇA
      </Link>
    </div>
  )
}
