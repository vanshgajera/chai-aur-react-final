import React from 'react'

function Card({username, btnText="visit me"}) {
    console.log(username);
    
    
  return (
    <figure className="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
    <img className="w-24 h-24 rounded-full mx-auto" src="https://images.pexels.com/photos/16229189/pexels-photo-16229189/free-photo-of-ave.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" width="384" height="512" />
    <div className="pt-6 tex space-y-4">
      <blockquote>
        <h1 className='text-lg font-semibold text-white'>{username}</h1>
        <p className="text-lg font-medium">
          “Tailwind CSS is the only framework that I've seen scale
          on large teams. It’s easy to customize, adapts to any design,
          and the build size is tiny.”
        </p>
      </blockquote>
      <figcaption className="font-medium">
        <div className="text-sky-500 dark:text-sky-400">
          Sarah Dayan
        </div>
        <div className="text-slate-700 dark:text-slate-500">
          Staff Engineer, Algolia
        </div>
        <button className="mt-2 inline-flex cursor-pointer items-center text-sm front-semibold text-white">
          {btnText}
        </button>
      </figcaption>
    </div>
    </figure> 
  )
}

export default Card






