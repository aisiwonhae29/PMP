# chatgpt

### key press 
```
let parent          = document.querySelectorAll('.flex-1.overflow-hidden')[1]
let scrollDomName   = parent.firstChild.firstChild.firstChild.className
document.addEventListener('keydown', function(event) {
    var element = document.querySelector('.'+scrollDomName);
    
    if (!element) return; // Exit if the element is not found

    // Define the scroll amount for arrow keys
    var scrollAmount = 100; // pixels

    switch(event.key) {
        case 'PageDown':
            // Scroll down one viewport height
            element.scrollBy(0, element.clientHeight);
            break;
        case 'PageUp':
            // Scroll up one viewport height
            element.scrollBy(0, -element.clientHeight);
            break;
        case 'ArrowDown':
            // Scroll down by a smaller amount
            element.scrollBy(0, scrollAmount);
            break;
        case 'ArrowUp':
            // Scroll up by a smaller amount
            element.scrollBy(0, -scrollAmount);
            break;
    }
});
```