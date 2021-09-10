---
layout: home
backLink: false
---

<section class="flex h-screen bg-black items-center justify-center">

    <div class="w-1/2 justify-center px-24">
        <img class="object-cover object-center w-full" src="/images/logo.svg">
    </div>
    <div class="w-1/2" id="globeContainer">
        <div id="globeViz"></div>
    </div>

</section>


<section class="bg-white">
    <div class="max-w-5xl px-6 py-16 mx-auto">

        <div class="items-center md:flex md:space-x-6">
            <div class="md:w-1/2">
                <h3 class="text-2xl font-semibold text-gray-800">Lorem ipsum dolor sit <br> amet, consectetur</h3>
                <p class="max-w-md mt-4 text-gray-600">
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <a href="#" class="block mt-8 text-indigo-700 underline">Experienced team</a>
            </div>

            <div class="mt-8 md:mt-0 md:w-1/2">

            </div>
        </div>
    </div>
</section>

<section class="text-gray-400 bg-gray-900 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-col text-center w-full mb-20">
      <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">Our Team</h1>
      <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Global Devops Bootcamp would not be possible without these wonderful people</p>
    </div>
    <div class="flex flex-wrap -m-2">   
    {% for member in site.data.members %}
        <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
            <div class="h-full flex items-center border-gray-800 border p-4 rounded-lg">
                <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://github.com/{{ member.github }}.png?size=100">
                <div class="flex-grow">
                <h2 class="text-white title-font font-medium"> {{ member.name }}</h2>
                <p class="text-gray-600"><svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path></svg>https://github.com/{{ member.github }}</p>
                </div>
            </div>
        </div>
    {% endfor %}
    </div>
  </div>
</section>



<script src="//unpkg.com/three"></script>
<script src="//unpkg.com/three/examples/js/controls/TrackballControls.js"></script>
<script src="//unpkg.com/three-globe"></script>
<script src="/javascripts/globe.js"></script>

---
