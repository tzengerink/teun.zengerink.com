---
layout: page
title: Transhumanism
name: transhumanism
permalink: /work/transhumanism/
---

{% assign photos = site.static_files %}
{% for photo in photos %}
  {% if photo.image and photo.path contains page.name %}
<a data-fancybox="images" href="{{ photo.path }}">
    <img class="center" src="{{ photo.path }}" alt="{{ page.title  }} {{ forloop.index }}">
</a>
  {% endif %}
{% endfor %}
