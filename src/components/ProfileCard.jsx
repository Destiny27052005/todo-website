import { } from "lucide-react";
import { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaTiktok } from "react-icons/fa";
import { GiNigeria } from "react-icons/gi";

function ProfileCard() {
    const [time, setTime] = useState(Date.now());

    useEffect(() => {
        const interval = setInterval(() => setTime(Date.now()), 1000)
        return () => clearInterval(interval)
    }, [])

    return (
        <>
            <article className="bg-[#1f1f1f] w-80 rounded-2xl p-4 space-y-2 shadow-lg border border-[#3d82f6]" data-testid="test-profile-card">
                <figure>
                    <img src="https://avatars.githubusercontent.com/u/146554573?s=400&u=4ed67a2689c120eba19373d04046ff0345f56777&v=4" alt="User Avatar" className="rounded-full w-48 flex justify-self-center border-2 border-[#3d82f6]" />
                </figure>
                <h2 className="text-white font-bold text-lg" data-testid="test-user-name">Adekunle Oluwatobiloba Destiny</h2>
                <p className="text-[#9ca3af]" data-testid="test-user-bio">Frontend Developer & Engineering Student | Turning ideas into web reality| Solving probems with code and logic.</p>
                <p className="text-[#9ca3af]" data-testid="test-user-time" aria-live="polite">Current Time: {time}</p>
                <section className="text-[#9ca3af]">
                    <h3 className="underline-offset-2 underline text-white">Hobbies</h3>
                    <ul className="grid grid-cols-2 space-x-1.5 space-y-2 mt-2" data-testid="test-user-hobbies">
                        <li className="rounded-2xl px-1.5 border text-center" data-testid="test-user-hobbies-reading">Reading</li>
                        <li className="rounded-2xl px-1.5 border text-center" data-testid="test-user-hobbies-coding">Coding</li>
                        <li className="rounded-2xl px-1.5 border col-span-2 w-fit" data-testid="test-user-hobbies-music">Listening to musics</li>
                    </ul>
                </section>
                <section className="text-[#9ca3af] border-b border-[#3d82f6] my-4 pb-4">
                    <h3 className="underline-offset-2 underline text-white">Dislike</h3>
                    <ul className="grid grid-cols-2 space-x-1.5 space-y-2 my-2" data-testid="test-user-deslikes">
                        <li className="rounded-2xl px-1.5 border text-center" data-testid="test-user-deslikes-noise">Noise</li>
                    </ul>
                </section>

                <nav className="flex justify-self-center space-x-2 text-2xl" data-testid="test-user-social-links">
                    <a href="https://github.com/Destiny27052005" target="_blank" rel="noopener noreferrer" data-testid="test-user-social-github" className="text-[#3d82f6]"><FaGithub /></a>
                    <a href="https://www.tiktok.com/@tobiayo6?_r=1&_t=ZS-95XiBj8P8TK" target="_blank" rel="noopener noreferrer" data-testid="test-user-social-tiktok" className="text-[#3d82f6]"><FaTiktok /></a>
                    <a href="https:///www.linkedin.com/in/adekunle-oluwatobiloba-destiny-06480227a?utm_source=share_via&utm_content=profile&utm_meduim+member_android" target="_blank" rel="noopener noreferrer" data-testid="test-user-social-linkedin" className="text-[#3d82f6]"><FaLinkedin /></a>
                </nav>
            </article>
        </>
    );
}

export default ProfileCard;