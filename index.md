---
layout: home
backLink: false
---

<section class="flex h-screen bg-gray-900 items-center justify-center">

    <div class="w-1/2 justify-center px-24">
        <img class="object-cover object-center w-full" src="/images/logo.svg">
    </div>
    <div class="w-1/2" id="globeContainer">
        <div id="globeViz"></div>
    </div>

</section>

<section class="text-gray-400 bg-gray-900 body-font">
  <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    
    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mb-0 mb-10">
      <img class="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600">
    </div>
    <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">What is Global DevOps Bootcamp</h1>

      <p class="mb-8 leading-relaxed">Global DevOps Bootcamp is a worldwide community event that has now been organized for three years in a row. Each year, we create a full-day experience around a central theme. The day starts with a keynote (of a famous speaker!), a local keynote (by you!), and a challenging yet inspiring hackathon focusing on DevOps practices and Modern Software practices. People also learn about the latest trends and will be sharing their DevOps experiences. It’s a great opportunity to learn hands-on and network with others locally working in this space, and also get to hear all about some real-world DevOps experiences.</p>

        <p class="mb-8 leading-relaxed">
        The event is held globally on the same day. The great thing for you as an organizer, is that you only have to worry about a good location and skilled people that can proctor during the day. We will take care of the rest. We will provide you all materials for the keynote and hackathon, provide you with marketing materials and during the day we provide a fully-fledged infrastructure so that your participants can get started right away! The last edition, we had around 90 venues and 10.000 people joining worldwide.</p>

      <!-- <div class="flex justify-center">
        <button class="inline-flex text-white bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded text-lg">Button</button>
        <button class="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">Button</button>
      </div> -->
    </div>
  </div>
</section>

<section class="text-gray-400 bg-gray-900 body-font overflow-hidden">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-wrap -m-12">

   {% for post in site.posts limit: 2 %}
        <div class="p-12 md:w-1/2 flex flex-col items-start">
        <span class="inline-block py-1 px-2 rounded bg-gray-800 text-gray-400 text-opacity-75 text-xs font-medium tracking-widest">{{post.category}}</span>
        <h2 class="sm:text-3xl text-2xl title-font font-medium text-white mt-4 mb-4">{{post.title}}</h2>
        <p class="leading-relaxed mb-8">{{post.excerpt}}</p>
        <div class="flex items-center flex-wrap pb-4 mb-4 border-b-2 border-gray-800 border-opacity-75 mt-auto w-full">
          <a class="text-yellow-400 inline-flex items-center" href="{{ site.baseurl  }}/{{ post.url }}">Read more
            <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </a>
         
        </div>
     
      </div>

   {% endfor %}
      
    </div>
  </div>
</section>

<section class="text-gray-400 bg-gray-900 body-font">
  <div class="container px-5 py-24 mx-auto">

    <div class="flex flex-col">
      <div class="h-1 bg-gray-800 rounded overflow-hidden">
        <div class="w-24 h-full bg-yellow-500"></div>
      </div>
      <div class="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
        <h1 class="sm:w-2/5 text-white font-medium title-font text-2xl mb-2 sm:mb-0">Our team</h1>
        <p class="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0">Global Devops Bootcamp would not be possible without these wonderful people:</p>
      </div>
    </div>

    <div class="flex flex-wrap -m-2">   
    {% for member in site.data.members %}
        <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
            <div class="h-full flex items-center border-gray-800 border p-4 rounded-lg">
                <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://github.com/{{ member.github }}.png?size=100">
                <div class="flex-grow">
                <h2 class="text-white title-font font-medium"> {{ member.name }}</h2>
                <p class="text-gray-600">https://github.com/{{ member.github }}</p>
                </div>
            </div>
        </div>
    {% endfor %}
    </div>

  </div>
</section>

<section class="text-gray-400 bg-gray-900 body-font">
  <div class="container px-5 py-24 mx-auto">
      
    <div class="flex flex-col">
      <div class="h-1 bg-gray-800 rounded overflow-hidden">
        <div class="w-24 h-full bg-yellow-500"></div>
      </div>
      <div class="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
        <h1 class="sm:w-2/5 text-white font-medium title-font text-2xl mb-2 sm:mb-0">Sponsors</h1>
        <p class="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0">A big thanks to our sponsors:</p>
      </div>
    </div>

    <div class="flex flex-wrap -m-4">
    {% for sponsor in site.data.sponsors %}
      <div class="p-4 lg:w-1/4 md:w-1/2">
        <div class="h-full flex flex-col items-center text-center">
          <img alt="team" class="flex-shrink-0 h-56 object-cover object-center mb-4" src="{{ site.baseurl  }}/images/sponsors/{{ sponsor.image}}">
          <div class="w-full">
            <h2 class="title-font font-medium text-lg text-white">{{ sponsor.name}}</h2>
            
          </div>
        </div>
      </div>
    {% endfor %}
    </div>

  </div>
</section>

<section class="text-gray-400 bg-gray-900 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-col">
      <div class="h-1 bg-gray-800 rounded overflow-hidden">
        <div class="w-24 h-full bg-yellow-500"></div>
      </div>
      <div class="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
        <h1 class="sm:w-2/5 text-white font-medium title-font text-2xl mb-2 sm:mb-0">Testimonials</h1>
        <p class="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0">What our participants are saying:</p>
      </div>
    </div>

    <div class="flex flex-wrap -m-4">

{% for testimonial in site.data.testimonials %}

     <div class="lg:w-1/3 lg:mb-0 mb-6 p-4">
        <div class="h-full text-center">         
          <p class="leading-relaxed">{{ testimonial.text }}</p>
          <span class="inline-block h-1 w-10 rounded bg-yellow-500 mt-6 mb-4"></span>
        </div>
      </div>

{% endfor %}
      
    </div>
  </div>
</section>

<script src="//unpkg.com/three"></script>
<script src="//unpkg.com/three/examples/js/controls/TrackballControls.js"></script>
<script src="//unpkg.com/three-globe"></script>
<script src="{{ site.baseurl }}/javascripts/globe.js"></script>
