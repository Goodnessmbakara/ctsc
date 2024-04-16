const dropdownLinks = document.getElementsByClassName("dropdownLink");
const dropdownMenus = document.getElementsByClassName("dropdownMenu");

console.log(dropdownLinks)
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
dropdownMenus.addEventListener('mouseover', ()=> {
    console.log('here')
})
