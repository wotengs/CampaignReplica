function selectOption(option) {
    // Add logic for selecting options here
    console.log(option);
}

function submitForm() {
    // Add logic for submitting the form here
    const submitBtn = document.getElementById('submit-btn');
    submitBtn.classList.add('clicked');

    // Requirement i: Move elements to the left and change text
    document.querySelector('.center-container').style.textAlign = 'left';
    document.querySelector('.welcome-text p:nth-child(2)').textContent = 'Done! Start enjoying your benefits with your upgraded Club account.';
    document.querySelector('.hashtag-text').textContent = '';

    // Requirement ii: Display congratulations message
    const congratulationsMessage = document.createElement('div');
    congratulationsMessage.classList.add('congratulations-message');
    congratulationsMessage.innerHTML = `
        <div class="circle">&#10003;</div>
        <p class="congrats-text">Congratulations!</p>
        <p>Your account has been upgraded successfully</p>
        <p class="fade-text">your account has been upgraded successfully. You will be notified via SMS once your card is ready. I&M We are on your side</p>
        <button class="visit-website-btn" onclick="openWebsite()">Visit Website</button>
    `;
    document.querySelector('.floating-island').appendChild(congratulationsMessage);
}

function openWebsite() {
    // Add logic to open the website in a new tab
    window.open('https://www.imbankgroup.com/ke/', '_blank');
}
