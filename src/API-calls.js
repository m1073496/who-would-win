// export const getQuotes = (allNames) => {
//
//  console.log(allNames)
//
//  return allNames.reduce((accu, currentName) => {
//    accu.push(
//      fetch(`https://animechan.vercel.app/api/quotes/character?name=${currentName}`)
//        .then(response => response.json())
//    )
//
//    return accu;
//  }, [])
//
// }





// let allQuotes = charactersWithQuotes.reduce((accu, currentName) => {
//       fetch(`https://animechan.vercel.app/api/quotes/character?name=${currentName}`)
//         .then(response => response.json())
//         .then(data => accu.push(data))
//     console.log(accu)
//     return accu;
//   }, []);


// this.setState({ quotes: allQuotes });
// localStorage.setItem('quotes', allQuotes);
// console.log(this.state.quotes)






// fetch(`https://animechan.vercel.app/api/quotes/character?name=goku`)
//   .then(response => response.json())
//   .then(data => console.log(data))
