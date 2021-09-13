---
layout: default
---

<header>
    {% if page.backLink or page.backLink == nil %}
    <a href="/" class="flex items-center m-5 text-xl hover:underline">
        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clip-rule="evenodd"></path>
        </svg>
        <span>Back</span>
    </a>
    {% endif %}
</header>

<section class="text-gray-400 bg-gray-900 body-font overflow-hidden">
  <div class="container px-5 py-24 mx-auto">
    <div class="-my-8 divide-y-2 divide-gray-800">

{% for post in site.posts %}
      <div class="py-8 flex flex-wrap md:flex-nowrap">
        <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
          <span class="font-semibold title-font text-white">{{ post.category }}</span>
          <span class="mt-1 text-gray-500 text-sm">{{ post.date | date: '%d %B %Y' }}</span>
        </div>
        <div class="md:flex-grow">
          <h2 class="text-2xl font-medium text-white title-font mb-2">{{ post.title }}</h2>
          <p class="leading-relaxed">{{ post.excerpt}}.</p>
          <a class="text-gdbc-orange inline-flex items-center mt-4" href="{{ post.url | relative_url}}">Read more
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


