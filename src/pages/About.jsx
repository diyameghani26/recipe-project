import React from 'react'

const About = () => {
  return (
    <div className=' h-[80vh]  italic m-10   bg-orange-200 hover:scale-95 duration-100 shadow-md overflow-hidden mr-4 sm:mb-3 
  items-center justify-center text-center gap-10 rounded-xl  
  md:ml-0 md:mt-6   md:mr-0 md:mb-0 md:gap-0  md:text-2xl font-semibold py-3 
'>
     <h1 className='font-[diya] mt-10'>Hey Foodie! 👩‍🍳</h1>
<br />
Welcome to Recipe By User 💖 <br />
We created this project with just one thought — “Cooking should never feel boring or difficult.”
<br />
Here you’ll find:
<br />
🍲 Simple & tasty recipes <br />
🥗 Step-by-step instructions <br />
🍩 Food for every mood (snacks, meals, desserts) <br />
📱 A clean and easy design you’ll love using

This project is also a part of my web development journey — mixing my love for food and coding together.  <br />
So, whether you’re a pro chef or just starting out in the kitchen, this space is for you! 💫

<br /> <br />
<div className='flex justify-center items-center'>
  <img 
  src="https://png.pngtree.com/png-vector/20240727/ourmid/pngtree-3d-kid-girl-cooking-as-a-shef-on-transparent-background-png-image_13242154.png" alt="" 
   className=' w-30 h-40 object-cover'/>
</div>
    </div>
  )
}

export default About
