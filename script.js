async function iceFire(){
   let data = await fetch("https://www.anapioficeandfire.com/api/books?pageSize=30")
   // console.log(data)
   let res = await data.json()
   // console.log(res);
   console.log(res[0].name);
   console.log(res[0].isbn);
   console.log(res[0].numberOfPages);
   console.log(res[0].authors[0]);
   console.log(res[0].publisher);
   console.log(res[0].released);
   console.log(res[0].characters[0]);
   console.log(res[0].characters[1]);
   console.log(res[0].characters[2]);
   console.log(res[0].characters[3]);
   console.log(res[0].characters[4]);
   console.log(res[0].characters[5]);
   result.innerHTML = `
   <h2>${res[0].name}</h2>
   <div class="wrapper">
   <div class="data-wrapper">
   <h4>Book Name:</h4>
   <span>${res[0].name}</span>
   </div>
   </div>
   <div class="wrapper">
   <div class="data-wrapper">
   <h4>ISBN:</h4>
   <span>${res[0].isbn}</span>
   </div>
   </div>
   <div class="wrapper">
   <div class="data-wrapper">
   <h4>Pages:</h4>
   <span>${res[0].numberOfPages}</span>
   </div>
   </div>
   <div class="wrapper">
   <div class="data-wrapper">
   <h4>Author(s):</h4>
   <span>${res[0].authors[0]}</span>
   </div>
   </div>
   <div class="wrapper">
   <div class="data-wrapper">
   <h4>Publisher Name:</h4>
   <span>${res[0].publisher}</span>
   </div>
   </div>
   <div class="wrapper">
   <div class="data-wrapper">
   <h4>Released Date:</h4>
   <span>${res[0].released}</span>
   </div>
   </div>
   <div class="wrapper">
   <div class="data-wrapper">
   <h4>Character 1:</h4>
   <span>${res[0].characters[0]}</span>
   </div>
   </div>
   <div class="wrapper">
   <div class="data-wrapper">
   <h4>Character 2:</h4>
   <span>${res[0].characters[1]}</span>
   </div>
   </div>
   <div class="wrapper">
   <div class="data-wrapper">
   <h4>Character 3:</h4>
   <span>${res[0].characters[2]}</span>
   </div>
   </div>
   <div class="wrapper">
   <div class="data-wrapper">
   <h4>Character 4:</h4>
   <span>${res[0].characters[3]}</span>
   </div>
   </div>
   <div class="wrapper">
   <div class="data-wrapper">
   <h4>Character 5:</h4>
   <span>${res[0].characters[4]}</span>
   </div>
   </div>
   <div class="wrapper">
   <div class="data-wrapper">
   <h4>Character 6:</h4>
   <span>${res[0].characters[5]}</span>
   </div>
   </div>
   `
   result1.innerHTML = `
   <h2>${res[1].name}</h2>
   <div class="wrapper">
   <div class="data-wrapper">
   <h4>Book Name:</h4>
   <span>${res[1].name}</span>
   </div>
   </div>
   <div class="wrapper">
   <div class="data-wrapper">
   <h4>ISBN:</h4>
   <span>${res[1].isbn}</span>
   </div>
   </div>
   <div class="wrapper">
   <div class="data-wrapper">
   <h4>Pages:</h4>
   <span>${res[1].numberOfPages}</span>
   </div>
   </div>
   <div class="wrapper">
   <div class="data-wrapper">
   <h4>Author(s):</h4>
   <span>${res[1].authors[0]}</span>
   </div>
   </div>
   <div class="wrapper">
   <div class="data-wrapper">
   <h4>Publisher Name:</h4>
   <span>${res[1].publisher}</span>
   </div>
   </div>
   <div class="wrapper">
   <div class="data-wrapper">
   <h4>Released Date:</h4>
   <span>${res[1].released}</span>
   </div>
   </div>
   <div class="wrapper">
   <div class="data-wrapper">
   <h4>Character 1:</h4>
   <span>${res[1].characters[0]}</span>
   </div>
   </div>
   <div class="wrapper">
   <div class="data-wrapper">
   <h4>Character 2:</h4>
   <span>${res[1].characters[1]}</span>
   </div>
   </div>
   <div class="wrapper">
   <div class="data-wrapper">
   <h4>Character 3:</h4>
   <span>${res[1].characters[2]}</span>
   </div>
   </div>
   <div class="wrapper">
   <div class="data-wrapper">
   <h4>Character 4:</h4>
   <span>${res[1].characters[3]}</span>
   </div>
   </div>
   <div class="wrapper">
   <div class="data-wrapper">
   <h4>Character 5:</h4>
   <span>${res[1].characters[4]}</span>
   </div>
   </div>
   <div class="wrapper">
   <div class="data-wrapper">
   <h4>Character 6:</h4>
   <span>${res[1].characters[5]}</span>
   </div>
   </div>
   `
   result2.innerHTML = `
   <h2>${res[2].name}</h2>
   <div class="wrapper">
   <div class="data-wrapper">
   <h4>Book Name:</h4>
   <span>${res[2].name}</span>
   </div>
   </div>
   <div class="wrapper">
   <div class="data-wrapper">
   <h4>ISBN:</h4>
   <span>${res[2].isbn}</span>
   </div>
   </div>
   <div class="wrapper">
   <div class="data-wrapper">
   <h4>Pages:</h4>
   <span>${res[2].numberOfPages}</span>
   </div>
   </div>
   <div class="wrapper">
   <div class="data-wrapper">
   <h4>Author(s):</h4>
   <span>${res[2].authors[0]}</span>
   </div>
   </div>
   <div class="wrapper">
   <div class="data-wrapper">
   <h4>Publisher Name:</h4>
   <span>${res[2].publisher}</span>
   </div>
   </div>
   <div class="wrapper">
   <div class="data-wrapper">
   <h4>Released Date:</h4>
   <span>${res[2].released}</span>
   </div>
   </div>
   <div class="wrapper">
   <div class="data-wrapper">
   <h4>Character 1:</h4>
   <span>${res[2].characters[0]}</span>
   </div>
   </div>
   <div class="wrapper">
   <div class="data-wrapper">
   <h4>Character 2:</h4>
   <span>${res[2].characters[1]}</span>
   </div>
   </div>
   <div class="wrapper">
   <div class="data-wrapper">
   <h4>Character 3:</h4>
   <span>${res[2].characters[2]}</span>
   </div>
   </div>
   <div class="wrapper">
   <div class="data-wrapper">
   <h4>Character 4:</h4>
   <span>${res[2].characters[3]}</span>
   </div>
   </div>
   <div class="wrapper">
   <div class="data-wrapper">
   <h4>Character 5:</h4>
   <span>${res[2].characters[4]}</span>
   </div>
   </div>
   <div class="wrapper">
   <div class="data-wrapper">
   <h4>Character 6:</h4>
   <span>${res[2].characters[5]}</span>
   </div>
   </div>
   `
   result3.innerHTML = `
   <h2>${res[3].name}</h2>
   <div class="wrapper">
   <div class="data-wrapper">
   <h4>Book Name:</h4>
   <span>${res[3].name}</span>
   </div>
   </div>
   <div class="wrapper">
   <div class="data-wrapper">
   <h4>ISBN:</h4>
   <span>${res[3].isbn}</span>
   </div>
   </div>
   <div class="wrapper">
   <div class="data-wrapper">
   <h4>Pages:</h4>
   <span>${res[3].numberOfPages}</span>
   </div>
   </div>
   <div class="wrapper">
   <div class="data-wrapper">
   <h4>Author(s):</h4>
   <span>${res[3].authors[0]}</span>
   </div>
   </div>
   <div class="wrapper">
   <div class="data-wrapper">
   <h4>Publisher Name:</h4>
   <span>${res[3].publisher}</span>
   </div>
   </div>
   <div class="wrapper">
   <div class="data-wrapper">
   <h4>Released Date:</h4>
   <span>${res[3].released}</span>
   </div>
   </div>
   <div class="wrapper">
   <div class="data-wrapper">
   <h4>Character 1:</h4>
   <span>${res[3].characters[0]}</span>
   </div>
   </div>
   <div class="wrapper">
   <div class="data-wrapper">
   <h4>Character 2:</h4>
   <span>${res[3].characters[1]}</span>
   </div>
   </div>
   <div class="wrapper">
   <div class="data-wrapper">
   <h4>Character 3:</h4>
   <span>${res[3].characters[2]}</span>
   </div>
   </div>
   <div class="wrapper">
   <div class="data-wrapper">
   <h4>Character 4:</h4>
   <span>${res[3].characters[3]}</span>
   </div>
   </div>
   <div class="wrapper">
   <div class="data-wrapper">
   <h4>Character 5:</h4>
   <span>${res[3].characters[4]}</span>
   </div>
   </div>
   <div class="wrapper">
   <div class="data-wrapper">
   <h4>Character 6:</h4>
   <span>${res[3].characters[5]}</span>
   </div>
   </div>
   `
   result4.innerHTML = `
   <h2>${res[4].name}</h2>
   <div class="wrapper">
   <div class="data-wrapper">
   <h4>Book Name:</h4>
   <span>${res[4].name}</span>
   </div>
   </div>
   <div class="wrapper">
   <div class="data-wrapper">
   <h4>ISBN:</h4>
   <span>${res[4].isbn}</span>
   </div>
   </div>
   <div class="wrapper">
   <div class="data-wrapper">
   <h4>Pages:</h4>
   <span>${res[4].numberOfPages}</span>
   </div>
   </div>
   <div class="wrapper">
   <div class="data-wrapper">
   <h4>Author(s):</h4>
   <span>${res[4].authors[0]}</span>
   </div>
   </div>
   <div class="wrapper">
   <div class="data-wrapper">
   <h4>Publisher Name:</h4>
   <span>${res[4].publisher}</span>
   </div>
   </div>
   <div class="wrapper">
   <div class="data-wrapper">
   <h4>Released Date:</h4>
   <span>${res[4].released}</span>
   </div>
   </div>
   <div class="wrapper">
   <div class="data-wrapper">
   <h4>Character 1:</h4>
   <span>${res[4].characters[0]}</span>
   </div>
   </div>
   <div class="wrapper">
   <div class="data-wrapper">
   <h4>Character 2:</h4>
   <span>${res[4].characters[1]}</span>
   </div>
   </div>
   <div class="wrapper">
   <div class="data-wrapper">
   <h4>Character 3:</h4>
   <span>${res[4].characters[2]}</span>
   </div>
   </div>
   <div class="wrapper">
   <div class="data-wrapper">
   <h4>Character 4:</h4>
   <span>${res[4].characters[3]}</span>
   </div>
   </div>
   <div class="wrapper">
   <div class="data-wrapper">
   <h4>Character 5:</h4>
   <span>${res[4].characters[4]}</span>
   </div>
   </div>
   <div class="wrapper">
   <div class="data-wrapper">
   <h4>Character 6:</h4>
   <span>${res[4].characters[5]}</span>
   </div>
   </div>
   `
   result5.innerHTML = `
   <h2>${res[5].name}</h2>
   <div class="wrapper">
   <div class="data-wrapper">
   <h4>Book Name:</h4>
   <span>${res[5].name}</span>
   </div>
   </div>
   <div class="wrapper">
   <div class="data-wrapper">
   <h4>ISBN:</h4>
   <span>${res[5].isbn}</span>
   </div>
   </div>
   <div class="wrapper">
   <div class="data-wrapper">
   <h4>Pages:</h4>
   <span>${res[5].numberOfPages}</span>
   </div>
   </div>
   <div class="wrapper">
   <div class="data-wrapper">
   <h4>Author(s):</h4>
   <span>${res[5].authors[0]}</span>
   </div>
   </div>
   <div class="wrapper">
   <div class="data-wrapper">
   <h4>Publisher Name:</h4>
   <span>${res[5].publisher}</span>
   </div>
   </div>
   <div class="wrapper">
   <div class="data-wrapper">
   <h4>Released Date:</h4>
   <span>${res[5].released}</span>
   </div>
   </div>
   <div class="wrapper">
   <div class="data-wrapper">
   <h4>Character 1:</h4>
   <span>${res[5].characters[0]}</span>
   </div>
   </div>
   <div class="wrapper">
   <div class="data-wrapper">
   <h4>Character 2:</h4>
   <span>${res[5].characters[1]}</span>
   </div>
   </div>
   <div class="wrapper">
   <div class="data-wrapper">
   <h4>Character 3:</h4>
   <span>${res[5].characters[2]}</span>
   </div>
   </div>
   <div class="wrapper">
   <div class="data-wrapper">
   <h4>Character 4:</h4>
   <span>${res[5].characters[3]}</span>
   </div>
   </div>
   <div class="wrapper">
   <div class="data-wrapper">
   <h4>Character 5:</h4>
   <span>${res[5].characters[4]}</span>
   </div>
   </div>
   <div class="wrapper">
   <div class="data-wrapper">
   <h4>Character 6:</h4>
   <span>${res[5].characters[5]}</span>
   </div>
   </div>
   `
   result6.innerHTML = `
   <h2>${res[6].name}</h2>
   <div class="wrapper">
   <div class="data-wrapper">
   <h4>Book Name:</h4>
   <span>${res[6].name}</span>
   </div>
   </div>
   <div class="wrapper">
   <div class="data-wrapper">
   <h4>ISBN:</h4>
   <span>${res[6].isbn}</span>
   </div>
   </div>
   <div class="wrapper">
   <div class="data-wrapper">
   <h4>Pages:</h4>
   <span>${res[6].numberOfPages}</span>
   </div>
   </div>
   <div class="wrapper">
   <div class="data-wrapper">
   <h4>Author(s):</h4>
   <span>${res[6].authors[0]}</span>
   </div>
   </div>
   <div class="wrapper">
   <div class="data-wrapper">
   <h4>Publisher Name:</h4>
   <span>${res[6].publisher}</span>
   </div>
   </div>
   <div class="wrapper">
   <div class="data-wrapper">
   <h4>Released Date:</h4>
   <span>${res[6].released}</span>
   </div>
   </div>
   <div class="wrapper">
   <div class="data-wrapper">
   <h4>Character 1:</h4>
   <span>${res[6].characters[0]}</span>
   </div>
   </div>
   <div class="wrapper">
   <div class="data-wrapper">
   <h4>Character 2:</h4>
   <span>${res[6].characters[1]}</span>
   </div>
   </div>
   <div class="wrapper">
   <div class="data-wrapper">
   <h4>Character 3:</h4>
   <span>${res[6].characters[2]}</span>
   </div>
   </div>
   <div class="wrapper">
   <div class="data-wrapper">
   <h4>Character 4:</h4>
   <span>${res[6].characters[3]}</span>
   </div>
   </div>
   <div class="wrapper">
   <div class="data-wrapper">
   <h4>Character 5:</h4>
   <span>${res[6].characters[4]}</span>
   </div>
   </div>
   <div class="wrapper">
   <div class="data-wrapper">
   <h4>Character 6:</h4>
   <span>${res[6].characters[5]}</span>
   </div>
   </div>
   `
   result7.innerHTML = `
   <h2>${res[7].name}</h2>
   <div class="wrapper">
   <div class="data-wrapper">
   <h4>Book Name:</h4>
   <span>${res[7].name}</span>
   </div>
   </div>
   <div class="wrapper">
   <div class="data-wrapper">
   <h4>ISBN:</h4>
   <span>${res[7].isbn}</span>
   </div>
   </div>
   <div class="wrapper">
   <div class="data-wrapper">
   <h4>Pages:</h4>
   <span>${res[7].numberOfPages}</span>
   </div>
   </div>
   <div class="wrapper">
   <div class="data-wrapper">
   <h4>Author(s):</h4>
   <span>${res[7].authors[0]}</span>
   </div>
   </div>
   <div class="wrapper">
   <div class="data-wrapper">
   <h4>Publisher Name:</h4>
   <span>${res[7].publisher}</span>
   </div>
   </div>
   <div class="wrapper">
   <div class="data-wrapper">
   <h4>Released Date:</h4>
   <span>${res[7].released}</span>
   </div>
   </div>
   <div class="wrapper">
   <div class="data-wrapper">
   <h4>Character 1:</h4>
   <span>${res[7].characters[0]}</span>
   </div>
   </div>
   <div class="wrapper">
   <div class="data-wrapper">
   <h4>Character 2:</h4>
   <span>${res[7].characters[1]}</span>
   </div>
   </div>
   <div class="wrapper">
   <div class="data-wrapper">
   <h4>Character 3:</h4>
   <span>${res[7].characters[2]}</span>
   </div>
   </div>
   <div class="wrapper">
   <div class="data-wrapper">
   <h4>Character 4:</h4>
   <span>${res[7].characters[3]}</span>
   </div>
   </div>
   <div class="wrapper">
   <div class="data-wrapper">
   <h4>Character 5:</h4>
   <span>${res[7].characters[4]}</span>
   </div>
   </div>
   <div class="wrapper">
   <div class="data-wrapper">
   <h4>Character 6:</h4>
   <span>${res[7].characters[5]}</span>
   </div>
   </div>
   `
   result8.innerHTML = `
   <h2>${res[8].name}</h2>
   <div class="wrapper">
   <div class="data-wrapper">
   <h4>Book Name:</h4>
   <span>${res[8].name}</span>
   </div>
   </div>
   <div class="wrapper">
   <div class="data-wrapper">
   <h4>ISBN:</h4>
   <span>${res[8].isbn}</span>
   </div>
   </div>
   <div class="wrapper">
   <div class="data-wrapper">
   <h4>Pages:</h4>
   <span>${res[8].numberOfPages}</span>
   </div>
   </div>
   <div class="wrapper">
   <div class="data-wrapper">
   <h4>Author(s):</h4>
   <span>${res[8].authors[0]}</span>
   </div>
   </div>
   <div class="wrapper">
   <div class="data-wrapper">
   <h4>Publisher Name:</h4>
   <span>${res[8].publisher}</span>
   </div>
   </div>
   <div class="wrapper">
   <div class="data-wrapper">
   <h4>Released Date:</h4>
   <span>${res[8].released}</span>
   </div>
   </div>
   <div class="wrapper">
   <div class="data-wrapper">
   <h4>Character 1:</h4>
   <span>${res[8].characters[0]}</span>
   </div>
   </div>
   <div class="wrapper">
   <div class="data-wrapper">
   <h4>Character 2:</h4>
   <span>${res[8].characters[1]}</span>
   </div>
   </div>
   <div class="wrapper">
   <div class="data-wrapper">
   <h4>Character 3:</h4>
   <span>${res[8].characters[2]}</span>
   </div>
   </div>
   <div class="wrapper">
   <div class="data-wrapper">
   <h4>Character 4:</h4>
   <span>${res[8].characters[3]}</span>
   </div>
   </div>
   <div class="wrapper">
   <div class="data-wrapper">
   <h4>Character 5:</h4>
   <span>${res[8].characters[4]}</span>
   </div>
   </div>
   <div class="wrapper">
   <div class="data-wrapper">
   <h4>Character 6:</h4>
   <span>${res[8].characters[5]}</span>
   </div>
   </div>
   `
   result9.innerHTML = `
   <h2>${res[9].name}</h2>
   <div class="wrapper">
   <div class="data-wrapper">
   <h4>Book Name:</h4>
   <span>${res[9].name}</span>
   </div>
   </div>
   <div class="wrapper">
   <div class="data-wrapper">
   <h4>ISBN:</h4>
   <span>${res[9].isbn}</span>
   </div>
   </div>
   <div class="wrapper">
   <div class="data-wrapper">
   <h4>Pages:</h4>
   <span>${res[9].numberOfPages}</span>
   </div>
   </div>
   <div class="wrapper">
   <div class="data-wrapper">
   <h4>Author(s):</h4>
   <span>${res[9].authors[0]}</span>
   </div>
   </div>
   <div class="wrapper">
   <div class="data-wrapper">
   <h4>Publisher Name:</h4>
   <span>${res[9].publisher}</span>
   </div>
   </div>
   <div class="wrapper">
   <div class="data-wrapper">
   <h4>Released Date:</h4>
   <span>${res[9].released}</span>
   </div>
   </div>
   <div class="wrapper">
   <div class="data-wrapper">
   <h4>Character 1:</h4>
   <span>${res[9].characters[0]}</span>
   </div>
   </div>
   <div class="wrapper">
   <div class="data-wrapper">
   <h4>Character 2:</h4>
   <span>${res[9].characters[1]}</span>
   </div>
   </div>
   <div class="wrapper">
   <div class="data-wrapper">
   <h4>Character 3:</h4>
   <span>${res[9].characters[2]}</span>
   </div>
   </div>
   <div class="wrapper">
   <div class="data-wrapper">
   <h4>Character 4:</h4>
   <span>${res[9].characters[3]}</span>
   </div>
   </div>
   <div class="wrapper">
   <div class="data-wrapper">
   <h4>Character 5:</h4>
   <span>${res[9].characters[4]}</span>
   </div>
   </div>
   <div class="wrapper">
   <div class="data-wrapper">
   <h4>Character 6:</h4>
   <span>${res[9].characters[5]}</span>
   </div>
   </div>
   `
   result10.innerHTML = `
   <h2>${res[10].name}</h2>
   <div class="wrapper">
   <div class="data-wrapper">
   <h4>Book Name:</h4>
   <span>${res[10].name}</span>
   </div>
   </div>
   <div class="wrapper">
   <div class="data-wrapper">
   <h4>ISBN:</h4>
   <span>${res[10].isbn}</span>
   </div>
   </div>
   <div class="wrapper">
   <div class="data-wrapper">
   <h4>Pages:</h4>
   <span>${res[10].numberOfPages}</span>
   </div>
   </div>
   <div class="wrapper">
   <div class="data-wrapper">
   <h4>Author(s):</h4>
   <span>${res[10].authors[0]}</span>
   </div>
   </div>
   <div class="wrapper">
   <div class="data-wrapper">
   <h4>Publisher Name:</h4>
   <span>${res[10].publisher}</span>
   </div>
   </div>
   <div class="wrapper">
   <div class="data-wrapper">
   <h4>Released Date:</h4>
   <span>${res[10].released}</span>
   </div>
   </div>
   <div class="wrapper">
   <div class="data-wrapper">
   <h4>Character 1:</h4>
   <span>${res[10].characters[0]}</span>
   </div>
   </div>
   <div class="wrapper">
   <div class="data-wrapper">
   <h4>Character 2:</h4>
   <span>${res[10].characters[1]}</span>
   </div>
   </div>
   <div class="wrapper">
   <div class="data-wrapper">
   <h4>Character 3:</h4>
   <span>${res[10].characters[2]}</span>
   </div>
   </div>
   <div class="wrapper">
   <div class="data-wrapper">
   <h4>Character 4:</h4>
   <span>${res[10].characters[3]}</span>
   </div>
   </div>
   <div class="wrapper">
   <div class="data-wrapper">
   <h4>Character 5:</h4>
   <span>${res[10].characters[4]}</span>
   </div>
   </div>
   <div class="wrapper">
   <div class="data-wrapper">
   <h4>Character 6:</h4>
   <span>${res[10].characters[5]}</span>
   </div>
   </div>
   `
   result11.innerHTML = `
   <h2>${res[11].name}</h2>
   <div class="wrapper">
   <div class="data-wrapper">
   <h4>Book Name:</h4>
   <span>${res[11].name}</span>
   </div>
   </div>
   <div class="wrapper">
   <div class="data-wrapper">
   <h4>ISBN:</h4>
   <span>${res[11].isbn}</span>
   </div>
   </div>
   <div class="wrapper">
   <div class="data-wrapper">
   <h4>Pages:</h4>
   <span>${res[11].numberOfPages}</span>
   </div>
   </div>
   <div class="wrapper">
   <div class="data-wrapper">
   <h4>Author(s):</h4>
   <span>${res[11].authors[0]}</span>
   </div>
   </div>
   <div class="wrapper">
   <div class="data-wrapper">
   <h4>Publisher Name:</h4>
   <span>${res[11].publisher}</span>
   </div>
   </div>
   <div class="wrapper">
   <div class="data-wrapper">
   <h4>Released Date:</h4>
   <span>${res[11].released}</span>
   </div>
   </div>
   `
}
iceFire();