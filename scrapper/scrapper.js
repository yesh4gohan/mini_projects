const puppeteer = require('puppeteer');
const scrollPageToBottom = require('puppeteer-autoscroll-down');
const fs = require('fs');
(async () =>{
    try{
    const browser = await puppeteer.launch({
         headless: false 
    });

    const page = await browser.newPage();
    await page.setViewport({
        width:1440,
        height:1356
    })
    //menu-item-40545
    await page.goto('https://indiahikes.com/');     
    //await scrollPageToBottom(page,250,150);
    await page.waitForSelector('#menu-item-40545');
    const state_data = await page.evaluate(()=>{
        let state_names = []
        const elem = document.querySelector('#menu-item-40545').getElementsByTagName('ul')[0].getElementsByTagName('li');
        for(let i= 0;i<elem.length;i++){
            const a_tag = elem[i].getElementsByTagName('a')[0];
            state_names.push(a_tag.innerHTML)
        }
        return state_names;
    })
    const correct_state_data = state_data.map(state=>{
        if(state == "Jammu And Kashmir"){
            return "Jammu-Kashmir"
        }
        return state.split(' ').join('-');
    })
    let article_links = [];
    for(let i = 0;i<state_data.length;i++){
        let flag =true;
        let count = 0;
        while(flag){
            count++;
            await page.goto(`https://indiahikes.com/regions/${correct_state_data[i]}/page/${count}`)
            await page.waitForSelector('.ih-article-readmore');
            let page_data = await page.evaluate(()=>{
                let flag = document.querySelector('.nav-previous')?true:false;
                if(!flag) return [];
                const article_links = [];
                const elems = document.querySelectorAll('.ih-article-readmore')
                for(let i = 0;i<elems.length;i++){
                    article_links.push(elems[i].getAttribute('href'));
                }
                return {article_links,flag};
            })
            article_links = page_data.article_links?[...article_links,...page_data.article_links]:article_links;
            flag = page_data.flag;
        }
    }
    const all_trek_pages = article_links.toString().split(',').join('\n').toString();
    fs.writeFileSync('all_trek_list.csv',all_trek_pages)
    await page.close();
}
    catch(e){
        console.log(e.toString())
    }
})();
//nnK0zc