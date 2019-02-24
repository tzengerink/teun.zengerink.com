---
layout: page
title: Transhumanism
name: transhumanism
---

{% assign photos = site.static_files %}
{% for photo in photos %}
  {% if photo.image and photo.path contains page.name %}
<img src="{{ photo.path }}" />
  {% endif %}
{% endfor %}
