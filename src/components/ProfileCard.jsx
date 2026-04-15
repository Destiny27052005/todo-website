import { } from "lucide-react";
import { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaTiktok } from "react-icons/fa";

function ProfileCard() {
    const [time, setTime] = useState(Date.now());

    useEffect(() => {
        const interval = setInterval(() => setTime(Date.now()), 1000)
        return () => clearInterval(interval)
    }, [])

    return (
        <>
            <article className="bg-[#1f1f1f] w-80 rounded-2xl p-4 space-y-2" data-testid="test-profile-card">
                <figure>
                    <img src="https://photos.app.goo.gl/u15utF9uvLLKidsN6" alt="User Avatar" className="rounded-full w-50 " />
                </figure>
                <h2 className="text-white font-bold" data-testid="test-user-name">Adekunle Oluwatobiloba Destiny</h2>
                <p className="text-[#9ca3af]" data-testid="test-user-bio">Frontend Developer & Engineering Student | Turning ideas into web reality| Solving probems with code and logic.</p>
                <p className="text-[#9ca3af]" data-testid="test-user-time">Current Time: {time}</p>
                <section className="text-[#9ca3af]">
                    <h3 className="underline-offset-2 underline text-white">Hobbies</h3>
                    <ul data-testid="test-user-hobbies">
                        <li data-testid="test-user-hobbies-reading">Reading</li>
                        <li data-testid="test-user-hobbies-coding">Coding</li>
                        <li data-testid="test-user-hobbies-music">Listening to musics</li>
                    </ul>
                </section>
                <section className="text-[#9ca3af]">
                    <h3 className="underline-offset-2 underline text-white">Dislike</h3>
                    <ul data-testid="test-user-deslikes">
                        <li data-testid="test-user-deslikes-noise">Noise</li>
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