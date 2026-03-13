/**
 * @param {TemplateStringsArray} strings
 * @param {...any} values
 * @returns {HTMLElement}
 */
function html(strings, ...values) {
    const markup = String.raw({ raw: strings }, ...values);
    const t = document.createElement('template');
    t.innerHTML = markup.trim();
    return (
        /** @type {HTMLElement} */ 
        (t.content.firstElementChild)
    );
}
