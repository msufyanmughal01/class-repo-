// export default async function Home() {
//   const data = await fetch('http://localhost:3000/api/hello',{
//     method:'GET'
//   })
//   const data2= await data.json()
//   return (
//     <div>
//       {data2.message}
//     </div>
//   );

import Life from "./lifecycle";

// }
export default async function Home() {
  const data = await fetch('http://localhost:3000/api/hello',{
    method:'POST',
    body: JSON.stringify({name:"sufyan",age:"32"})
  })
  const data2= await data.json()
  return (
    <div>
      {data2.message}
      <Life></Life>
    </div>
  );
}

