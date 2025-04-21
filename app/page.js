
import HomePage from '../components/spotify/homepage';
import ShowPdf from '@/components/resume/showPdf';
import { ConfettiSideCannons } from '@/components/confetti/confetti';
import Link from "next/link"

export default function Home() {



  return (
    <div className=" container">

      <div className="item items-1  ">
        <h1 className="name-title  pt-5 px-4">

          Hemendran (aka " <span className="font-cool "> Aadhi</span>")

        </h1>
        <p className="pronounce px-5 ">

          /hɪˈmɛn.drən/




        </p>

      </div>


      <a href='https://github.com/hemendran-py/' className="item items-2  effects ">
        <img src="/git.svg" alt="github logo" className="git-logo" />
      </a>


      <a href='https://www.instagram.com/not._hxm_/' className="item items-3  effects ">
        <div className="instagram-gradient ">
          <img src="/instagram.svg" className="instagram-logo" />

        </div>
      </a>


      <a href='https://www.snapchat.com/add/aadhi_hemendran' className="item items-4 effects">
        <img src="/snapchat.svg" className="snapchat-logo" />
      </a>


      <div className="item items-5  ">
        <div className="intro px-4   ">
          <div className="font">

            Intro
          </div>
        </div>
        <div className="text-white px-6 he-him  pb-1">
          he/him, 20 <br />

          Cybersecurity student💻 who creates stuff with code for fun. Learning, building, and staying consistent—in both tech and fitness.

        </div>

      </div>


      <a href="mailto:hemendrankumar@gmail.com?subject=Hello&body=Hi Hemendran, I found your portfolio!" className="item items-6  effects">
        < img src="/mail.png" className="mail-logo" />
      </a>

      <a className="item items-7  ">
        <ConfettiSideCannons>

          < img src="/spiderman.jpg" className="spiderman-logo" />
        </ConfettiSideCannons>


      </a>

      <a className="item items-8  effects">
        < img src="/discord.svg" className="discord-logo" />
      </a>



      <ShowPdf />


      <div className="item items-10  ">
        <h2 className="tech-stack-heading px-2 pt-1">Tech Stack</h2>
        <img src="/techstack-icon/jscript.svg" alt="Icon 4" className="grid-icon" />
        <img src="/techstack-icon/nextt.svg" alt="Icon 4" className="grid-icon" />
        <img src="/techstack-icon/wireshark.svg" alt="Icon 4" className="grid-icon" />
        <img src="/techstack-icon/burpsuite.svg" alt="Icon 2" className="grid-icon" />
        <img src="/techstack-icon/py.svg" alt="Icon 4" className="grid-icon" />
        <img src="/techstack-icon/mysql.svg" alt="Icon 4" className="grid-icon" />
        <img src="/techstack-icon/java.svg" alt="Icon 4" className="grid-icon" />
        <img src="/techstack-icon/html.svg" alt="Icon 2" className="grid-icon" />
        <img src="/techstack-icon/css.svg" alt="Icon 3" className="grid-icon" />
        <img src="/techstack-icon/tailwind.svg" alt="Icon 4" className="grid-icon" />
        <img src="/techstack-icon/aws.svg" alt="Icon 1" className="grid-icon" />
        <img src="/techstack-icon/git.svg" alt="Icon 4" className="grid-icon" />
        <img src="/techstack-icon/github.svg" alt="Icon 4" className="grid-icon" />
        <img src="/techstack-icon/vscode.svg" alt="Icon 4" className="grid-icon" />
      </div>

      <a href='https://pin.it/3W9JMQMiD' className="item items-11  effects">
        < img src="/pinterest.svg" alt="pinterest logo" className="discord-logo" />
      </a>

      <a className="item items-12  effects">
        < img src="/x.svg" className="x-logo" />
      </a>

      <a className="item items-13  ">

        <h2 className="about-me px-2 py-1">
          about me
        </h2>
        <p className="px-6 about-text">

          I’m a guy who’s into design, tech, and and music. Not super active on socials, but I’m lowkey chill and just enjoy
          doing my thing.

        </p>

      </a>

      <Link href='https://www.youtube.com/@hemendrans1195' className="item items-14  effects ">
        <img src="/youtube.svg" className="yt-icon" />
      </Link>

      <a href='https://www.chess.com/member/hemendran0411' className="item items-15  effects">
        <img src="chess.svg" className="yt-icon" />
      </a>

      <Link href="/gallery" className=" item items-16  temp-fill effects flex justify-center items-center text-center">
        <img src="/gallery.png" className="max-h-full p-1 object-cover" />
      </Link>

      <div className="item items-17 ">
        <HomePage />


      </div>

      <div className='item items-18  w-full text-center py-4 text-gray-500 text-sm bg-gray-900'>
        © {new Date().getFullYear()} Hemendran. All rights reserved.
      </div>
      <div className='foot'></div>
      <div>

      </div>



    </div>


  )

}
