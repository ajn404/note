export const isElementNotInViewport = (el:HTMLElement) => {
    if (el) {
        let rect = el.getBoundingClientRect();
        return (
            (rect.top) >= (window.innerHeight || document.documentElement.clientHeight) || rect.bottom <= 0
        );
    } return false
}