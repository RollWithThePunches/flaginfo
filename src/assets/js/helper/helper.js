// Filter container sticky on desktop
export default function stickyFilt(filterName) {
    const stickyFilter = document.querySelector(filterName)
    const stickyFunction = () => {
        const top = stickyFilter.getBoundingClientRect().top;
        if (window.scrollY + window.innerHeight > top) {
            stickyFilter.classList.add('sticky');
        }
    }
    window.addEventListener('scroll', stickyFunction(stickyFilter));
}