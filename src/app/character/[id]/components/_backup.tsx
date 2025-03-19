// return (
//   <Container className="my-8 grid gap-6">
//     <Panel>
//       <article className="flex gap-6">
//         <Image
//           className="rounded-md"
//           src={character.image}
//           alt={character.name}
//           width={225}
//           height={225}
//           priority
//         />
//         <div className="flex-1 flex flex-col gap-3">
//           <h1 className="text-3xl font-bold">{character.name}</h1>

//           <div className="flex items-baseline gap-2">
//             <StatusIndicator size={12} status={character.status} />
//             <div className="text-lg font-semibold">
//               {character.species}
//             </div>
//           </div>

//           <ul className="grid gap-1 bg-gray-100 px-6 py-4 rounded-lg">
//             <li className="flex gap-2 ">
//               <span className="font-bold">Gender:</span>
//               {character.gender}
//             </li>
//             <li className="flex gap-2 ">
//               <span className="font-bold">Status:</span>
//               {character.status}
//             </li>
//             <li className="flex gap-2 ">
//               <span className="font-bold">Origin:</span>
//               {character.origin.name}
//             </li>
//             <li className="flex gap-2 ">
//               <span className="font-bold">Last seen on :</span>
//               {character.location.name}
//             </li>
//           </ul>
//         </div>
//       </article>
//     </Panel>
//     <Panel>
//       <h2 className="text-3xl font-bold">List of episodes with {character.name}</h2>
//       {character.episode.map(episode => (
//         <li>{episode}</li>
//       ))}
//     </Panel>
//   </Container >
// );
