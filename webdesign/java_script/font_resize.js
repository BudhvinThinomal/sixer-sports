function fontIncrease() {
    content = document.getElementById("btn_font_add");
    style = window.getComputedStyle(content, null).getPropertyValue('font-size');
    currentSize = parseFloat(style);
    content.style.fontSize = (currentSize + 1) + 'px';
}