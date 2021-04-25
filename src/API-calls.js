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
