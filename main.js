const nowResponse= async() => {
 const fetchNow= await fetch('https://randomuser.me/api/1.2/?nat=us')
 console.log( await fetchNow.json());
}


nowResponse();