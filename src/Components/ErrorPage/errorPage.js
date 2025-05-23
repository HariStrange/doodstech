import React from 'react';


const ErrorPage = () => {
    return (
     
<div class="h-screen w-screen bg-white flex items-center">
	<div class="container flex flex-col md:flex-row items-center justify-center px-5 text-gray-700">
   		<div class="max-w-md">
      		<div class="text-5xl font-dark font-bold">404</div>
            <p
              class="text-2xl md:text-3xl font-light leading-normal"
            >Sorry we couldn't find this page. </p>
          <p class="mb-8">But dont worry, you can find plenty of other things on our homepage.</p>
          
          <button class="px-4 inline py-2 text-sm font-medium leading-5 shadow text-white transition-colors duration-150 border border-transparent rounded-lg focus:outline-none focus:shadow-outline-blue bg-blue-600 active:bg-blue-600 hover:bg-blue-700">back to homepage</button>
    </div>
      <div class="max-w-lg">
     <img src="https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif" alt="404" />
    </div>
    
  </div>
</div>
    );
};

export default ErrorPage;