export default function Home() {
  return (
    <div class=''>
      <Searchbar/>
      <div class='w-screen h-screen flex  '>
        <Whiteside/>
        <Blackside/>
        

      </div>
    </div>
  );
}
{/* <div class='w-screen flex' >
<div class="bg-gray-100 w-1/2 h-screen">
  <input class=" m-[20px] rounded-full p-4   " placeholder="Search" >
  </input>
  <div class='   w-[414px] h-[828px]  bg-black left-[34px] p-12  '>
               
    </div>
</div>
<div class='bg-slate-950 w-1/2 '>




</div>

</div> */}

function Searchbar() {
   return (
    <input placeholder="Search" class=" m-[20px] rounded-full h-[45px] w-[250px] bg-pink-600">
    </input>
    )
}
function Blackside () {
  return(
    <div class='bg-gray-600 w-1/2 h-full'>

    </div>
  )
}
function Whiteside () {
  return(
    <div class='bg-white w-1/2 h-full'>

    </div>
  )
}