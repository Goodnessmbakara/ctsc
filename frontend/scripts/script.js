document.addEventListener('DOMContentLoaded', () => {
    const dropdownLinks = document.getElementsByClassName("dropdownLink");
    const dropdownMenus = document.getElementsByClassName("dropdownMenu");
    const navToggle = document.getElementsByClassName('menu')[0];
    const navBar = document.getElementsByTagName('nav')[0];

    for (let i = 0; i < dropdownLinks.length; i++) {
        const link = dropdownLinks[i];
        const dropdownMenu = dropdownMenus[i];

        link.addEventListener('mouseover', () => {
            dropdownMenu.style.display = 'block';
            const linkRect = link.getBoundingClientRect(); // Get link position relative to viewport
            dropdownMenu.style.display = "block";
            dropdownMenu.style.top = `${linkRect.bottom}px`;
            dropdownMenu.style.left = `${linkRect.left}px`;
        })
        link.addEventListener('mouseout', () => {
            dropdownMenu.style.display = 'none';
        })
    }

    navToggle.addEventListener('click', switchMenu);

    function switchMenu(event) {
        const bar = `<svg xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
        <path
            d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
    </svg>`;
        const xcross = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>`;
        // console.log(event.target);
        // event.stopPropagation();
        console.log(navToggle.innerHTML === xcross)
        console.log(navToggle.innerHTML, bar)
        navToggle.innerHTML === bar ? xcross : bar;
    }
});
