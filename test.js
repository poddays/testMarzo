async function fetchName() {
    const response = await fetch('https://cataas.com/api/tags')
    const tags = await response.json()
    const name = tags.slice(4,9)
    const name2 = tags.slice(9,14)
    const newArr = name.concat(name2)
    const select = document.querySelector('#dropdown')

    newArr.forEach(element => {
        let option = document.createElement('option')
        option.textContent = element;
        option.value = element;
        select.appendChild(option)
        
    });
    select.addEventListener('change', async()=>{
        const newFetch = await fetch(`https://cataas.com/cat/${select.value}?json=true`);
        const catImg = await newFetch.json();
        console.log(catImg);
        const img = document.createElement('img')
        img.src = `https://cataas.com${catImg.url}`
        const container = document.querySelector('#immagine')
        container.append(img)
    })
    
}

fetchName()