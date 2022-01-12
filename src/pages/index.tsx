import Image from 'next/image'
import { FaViber as VibeCheckIco, FaTwitch as TwitchIco, FaGithub as GitHubIco } from 'react-icons/fa'
import cls from 'classnames'
import * as React from 'react'

export default function Index() {
  return (
    <main className="flex flex-col flex-1 h-full">
      <TopBar />
      <Hero />
      <Content />
      <Footer />
    </main>
  )
}

function SignUpButton({ className, ...props }: React.HTMLProps<HTMLAnchorElement>) {
  return (
    <a
      href="/api/auth/twitch"
      {...props}
      className={cls(
        'flex flex-row gap-2 items-center bg-purple-700 px-3 py-1 rounded-md justify-center text-sm text-white cursor-pointer transform hover:translate-y-0.5 transition',
        className
      )}
    >
      <TwitchIco /> Sign up <span className="hidden md:block md:-ml-1">with Twitch</span>
    </a>
  )
}

function TopBar() {
  return (
    <section className="bg-indigo-500 bg-opacity-25 mb-10">
      <div className="flex flex-row max-w-5xl mx-auto items-center py-5">
        <div className="flex flex-row gap-2 flex-1 items-center text-3xl uppercase font-bold text-white">
          <VibeCheckIco /> Vibe Check
        </div>
        <SignUpButton />
      </div>
    </section>
  )
}

function Hero() {
  return (
    <section className="flex flex-row max-w-6xl mx-auto gap-20 w-full">
      <div className="flex-1 flex flex-col gap-5">
        <h2 className="text-xl font-bold text-white">The best way to find stream collab partners!</h2>
        <p>Sign up, enter some info, start swiping, and find other content creators to do collaborations with!</p>
        <p>Interested? It's being built now, but go ahead and sign up with Twitch to let us know.</p>
        <div className="flex flex-col items-center gap-1 mt-1">
          <SignUpButton className="text-lg" />
          <small className="opacity-60 text-xs mt-1">We'll let you know when we launch, and that's it, no spam</small>
        </div>
      </div>
      <div className="flex-1 relative shadow-fuchsia-700 shadow-lg rounded-md">
        <Image src="/images/hero.jpg" layout="fill" objectFit="cover" className="rounded-md" />
      </div>
    </section>
  )
}

function Content() {
  return (
    <section className="flex-1 flex-col items-center max-w-xl mx-auto w-full text-center gap-7 flex pt-20">
      <div>
        <h2 className="text-3xl font-bold text-white">For Streamers</h2>
        <p>As easy as 4 steps</p>
      </div>
      <div>
        <h3 className="text-2xl font-bold text-white">Sign up</h3>
        <p>Just log in with your Twitch account</p>
      </div>
      <div>
        <h3 className="text-2xl font-bold text-white">Add info</h3>
        <p>
          Important things, like your streaming times, a short bio, and some highlights to let others get an idea about
          what you're like
        </p>
      </div>
      <div>
        <h3 className="text-2xl font-bold text-white">Swipe</h3>
        <p>
          Vibe Check will start suggesting streamers that seem like a good fit, and you can mark whether you'd be open
          to collaborating with them
        </p>
      </div>
      <div>
        <h3 className="text-2xl font-bold text-white">Connect</h3>
        <p>
          If two streamers are both interested in collaborating, we'll make contact information available, so they can
          reach out and collab
        </p>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <section className="py-1 text-rose-200 opacity-50 hover:opacity-100 flex flex-row gap-1 items-center justify-center text-xs">
      Made by{' '}
      <a href="https://github.com/maael" className="flex flex-row gap-1 items-center hover:text-fuchsia-400">
        <GitHubIco /> maael
      </a>
    </section>
  )
}
