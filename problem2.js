
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((res)=> res.json())
    .then((res)=>{
        console.log(res)
        let cities = res.filter((ele)=>{
            return ele.address.city === cities
        })
    })
    console.log(cities)

