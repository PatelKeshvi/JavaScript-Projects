const likeButton = document.getElementById('likeButton');
const shareButton = document.getElementById('shareButton');
const followButton = document.getElementById('followButton');
const subscribeButton = document.getElementById('subscribeButton');

const likeCount = document.getElementById('likeCount');
const shareCount = document.getElementById('shareCount');
const followCount = document.getElementById('followCount');
const subscribeCount = document.getElementById('subscribeCount');

const updateCounts = () => {
    likeCount.textContent = localStorage.getItem('likeCount') || 0;
    shareCount.textContent = localStorage.getItem('shareCount') || 0;
    followCount.textContent = sessionStorage.getItem('followCount') || 0;
    subscribeCount.textContent = sessionStorage.getItem('subscribeCount') || 0;
};

likeButton.addEventListener('click', () => {
    let count = localStorage.getItem('likeCount');
    localStorage.setItem('likeCount', ++count);
    updateCounts();
});

shareButton.addEventListener('click', () => {
    let count = localStorage.getItem('shareCount');
    localStorage.setItem('shareCount', ++count);
    updateCounts();
});

followButton.addEventListener('click', () => {
    let count = sessionStorage.getItem('followCount');
    sessionStorage.setItem('followCount', ++count);
    updateCounts();
});

subscribeButton.addEventListener('click', () => {
    let count = sessionStorage.getItem('subscribeCount');
    sessionStorage.setItem('subscribeCount', ++count);
    updateCounts();
});

updateCounts();
