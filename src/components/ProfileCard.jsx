

function ProfileCard() {

    return (
        <>
            <article data-testid="test-profile-card">
                <figure>
                    <img src="" alt="User Avatar" />
                </figure>
                <h2 data-testid="test-user-name">Adekunle Oluwatobiloba Destiny</h2>
                <p data-testid="test-user-bio">Frontend Developer & Engineering Student | Turning ideas into web reality| Solving probems with code and logic.</p>
                <p data-testid="test-user-time">{ }</p>
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
                    <a href="" target="_blank" rel="noopener noreferrer" data-testid="test-user-social-"></a>
                    <a href="" target="_blank" rel="noopener noreferrer" data-testid="test-user-social-"></a>
                    <a href="" target="_blank" rel="noopener noreferrer" data-testid="test-user-social-"></a>
                </nav>
            </article>
        </>
    );
}

export default ProfileCard;