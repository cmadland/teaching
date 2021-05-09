---
alert_style: alert-primary
title: 'How Grav Saved the Day'
published: false
visible: true
header_image_alt_text: ''
header_image_credit: ''
header_image_creditlink: ''
feed:
    skip: true
---

On the morning of Saturday, June 1, I received an email from a keen Saturday morning learner letting me know that the course site was down and asking whether there was another way to access the materials because they wanted to keep working on Blog Post #3.

Fortunately, the way I have this course built, the content that you are reading isn't even in WordPress at edtechuvic.ca/edci335.

Normally, I would include a screenshot of what my WP admin looks like right now, but not even I can access it. If I could get there, you wold see in (almots) every post and page on that site, the following code:

```
<iframe scrolling="yes" style="border: 0px #ffffff none;" src="https://edtechuvic.madland.ca/edci335/[PAGE]/chromeless:true/hidepagetitle:true" allowfullscreen="allowfullscreen" width="100%" height="1000">
</iframe>
```

What that means is that WP is only displaying the content from my own site at edtechuvic.madland.ca/edci335. So when I got a request for an alternate way to access the site, I was able to reply within 20 minutes with exactly that, and then send out a message through CourseSpaces (another FLOSS) to all of you that you could access the course materials at an alt site.
