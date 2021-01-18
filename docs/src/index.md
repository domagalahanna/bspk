---
title: Homepage
hero:
  headlines:
    - "Human connections"
    - "elevating customer"
    - "experiences"
  highlighted: "for all"
  ctaCopy: "Request a Demo"
  ctaLink: "contact/"
  video: "videos/HeroVideo.mp4"
testimonials:
  - logo: "images/Forbes.png"
    alt: "Forbes"
    text: "Clienteling 2.0: BSPK Keeps Sales Team Engaged With Customers Despite Store Closures"
  - logo: "images/BOF.png"
    alt: "BOF"
    text: "5 Tech Tools That Should be on Every Fashion Executive's Radar"
  - logo: "images/SiliconValley.png"
    alt: "Silicon Valley Business Journal"
    text: "The brand that is all about helping others making the sale"
intro: "Our technology fosters invaluable human exchanges paving the way to the future of modern commerce."
solutions:
  - headlineFirstPart:
      - "Data-informed"
      - "user journeys"
    highlighted: "beyond"
    headlineSecondPart: "imagination"
    copy: "We power superior digital customer engagement."
    numbers: "50%"
    description: "upselling rate increase"
    image:
      mobile:
        src: "images/homepage/WorkingMan.jpg"
        alt: "Man working on a laptop"
      desktop:
        src: "images/homepage/WorkingManDesktop.jpg"
        alt: "Man working on a laptop"
  - headlineFirstPart:
      - "Emotion-based"
      - "conversions"
    highlighted: " beyond"
    headlineSecondPart: "expectations"
    copy: "We empower customers with informed recommendations."
    numbers: "2X"
    description: "uplift in sales conversions"
    image:
      mobile:
        src: "images/homepage/WomanOnThePhone.jpg"
        alt: "Woman on the phone"
      desktop:
        src: "images/homepage/ManWithCoffeeDesktop.jpg"
        alt: "Woman on the phone"
  - headlineFirstPart:
      - "Loyalty-building"
      - "curations"
    highlighted: " beyond"
    headlineSecondPart: "ambitions"
    copy: "We empower brands with actionnable customer knowledge."
    numbers: "3X"
    description: "growth in customer retention"
    image:
      mobile:
        src: "images/homepage/ShoesAccessories.jpg"
        alt: "Shoes and belt"
      desktop:
        src: "images/homepage/ShoesAccessoriesDesktop.jpg"
        alt: "Shoes and belt"
---

<Homepage-Hero/>
<Homepage-NewsroomDesktop/>
<ClientOnly>
  <Homepage-NewsroomMobile/>
</ClientOnly>
<Homepage-Intro/>
<Homepage-Video/>
<Homepage-Solutions/>