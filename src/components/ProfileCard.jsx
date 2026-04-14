

function ProfileCard() {
    return (
        <>
            <article data-testid="test-profile-card">
                <figure>
                    <img src="" alt="" />
                </figure>
                <h2 data-testid="test-user-name">Adekunle Oluwatobiloba Destiny</h2>
                <p data-testid="test-user-bio"></p>
                <p data-testid="test-user-time">{new Date.now()}</p>

            </article>
        </>
    );
}

export default ProfileCard;