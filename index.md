---
layout: default
---

<article class="photos">
  {% assign item = site.work | first %}
  {% for photo in site.static_files %}
    {% assign path = 'assets/photos/' | append: item.name | append: '/01' %}
    {% if photo.path contains path %}
      <a href="/work/{{ item.name }}/#images-1">
        <img src="{{ photo.path }}" alt="{{ site.title }} - {{ item.name | capitalize  }} {{ photo.basename }}">
      </a>
    {% endif %}
  {% endfor %}
</article>
