export const smoothScroll = (e: any) => {
    e.preventDefault();
    let element = window.document.querySelector(e.target.getAttribute('href'));
    element && element.scrollIntoView({behavior: "smooth", block: "start"});
}