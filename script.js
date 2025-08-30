document.getElementById('learn-more').addEventListener('click', () => {
    const moreInfo = document.getElementById('more-info');
    if (moreInfo.style.display === 'none') {
        moreInfo.style.display = 'block';
    } else {
        moreInfo.style.display = 'none';
    }
});

document.getElementById('contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name-input').value;
    const email = document.getElementById('email-input