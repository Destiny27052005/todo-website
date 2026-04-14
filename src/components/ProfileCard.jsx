import { useState, useEffect } from "react";

function ProfileCard() {
    const [time, setTime] = useState(Date.now());

    useEffect(() => {
        const interval = setInterval(() => setTime(Date.now()), 1000)
        return () => clearInterval(interval)
    }, [])

    return (
        <>
            <article data-testid="test-profile-card">
                <figure>
                    <img src="https://photos.app.goo.gl/u15utF9uvLLKidsN6" alt="User Avatar" />
                </figure>
                <h2 data-testid="test-user-name">Adekunle Oluwatobiloba Destiny</h2>
                <p data-testid="test-user-bio">Frontend Developer & Engineering Student | Turning ideas into web reality| Solving probems with code and logic.</p>
                <p data-testid="test-user-time">Current Time: {time}</p>
                <section>
                    <h3>Hobbies</h3>
                    <ul data-testid="test-user-hobbies">
                        <li data-testid="test-user-hobbies-reading">Reading</li>
                        <li data-testid="test-user-hobbies-coding">Coding</li>
                        <li data-testid="test-user-hobbies-music">Listening to musics</li>
                    </ul>
                </section>
                <section>
                    <h3>Dislike</h3>
                    <ul data-testid="test-user-deslikes">
                        <li data-testid="test-user-deslikes-"></li>
                        <li data-testid="test-user-deslikes-"></li>
                        <li data-testid="test-user-deslikes-"></li>
                    </ul>
                </section>

                <nav data-testid="test-user-social-links">
                    <a href="https://github.com/Destiny27052005" target="_blank" rel="noopener noreferrer" data-testid="test-user-social-github">Github</a>
                    <a href="https://www.tiktok.com/@tobiayo6?_r=1&_t=ZS-95XiBj8P8TK" target="_blank" rel="noopener noreferrer" data-testid="test-user-social-tiktok">Tiktok</a>
                    <a href="https:///www.linkedin.com/in/adekunle-oluwatobiloba-destiny-06480227a?utm_source=share_via&utm_content=profile&utm_meduim+member_android" target="_blank" rel="noopener noreferrer" data-testid="test-user-social-linkedin">Linkedin</a>
                </nav>
            </article>
        </>
    );
}

export default ProfileCard;