// import React from 'react'

// const Users = async () => {
//     const res = await fetch("https://jsonplaceholder.typicode.com/users",{
//         cache:"no-store"
//     },)
//     if(!res.ok){
//         throw new Error("failed to fetch data")
//     }
//     const req = await res.json()
//     console.log(req)
//   return (
//     <div>
//       <h2>Users</h2>
//       <div>
//       {
//           Users.map((user)=>{

//           })
//       }
//       </div>
//     </div>
//   )
// }

// export default Users

import React from 'react'

const Users = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users",{
        next:{
            revalidate:100
        }
    })
    if(!res.ok){
        throw new Error("failed to fetch data")
    }
    const req = await res.json()
    console.log(req)
  return (
    <div>
      <h2>Users</h2>
      {/* <div>
      {
          Users.map((user)=>{

          })
      } */}
      </div>
    // </div>
  )
}

export default Users

