---
layout: default
---

<article class="home">
  {% for item in site.work %}
    {% for photo in site.static_files %}
      {% assign path = 'assets/photos/' | append: item.name | append: '/01' %}
      {% if photo.path contains path %}
        <a href="/work/{{ item.name }}">
          <img src="{{ photo.path }}" alt="{{ page.title  }} {{ forloop.index }}">
        </a>
      {% endif %}
    {% endfor %}
  {% endfor %}
</article>
