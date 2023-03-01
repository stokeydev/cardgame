# Top Trumps: British Politics (1945-2023 edition)

[View live project here on GitHub](https://stokeydev.github.io/cardgame/)

Top Trumps: British Politics (1945-2023 edition) is a fun game for those who enjoy politics or wish to find out more about British politics via a fun game such as Top Trumps. The game features 30 cards, including all the political leaders from 1945 till 2023. There are 8 politically-themed attributes. 

<br>  
  
![screenshot of landing page](./images/readme/homepage.png)
![screenshot of landing page](./images/readme/homepage2.png)

---

## CONTENTS  
  
* [UXD (User Experience Design)](#user-experience-ux)
  * [User Stories](#user-stories) 
* [Creation process (Strategy -> Surface)](#creation-process)
  * [Wireframes](#wireframes)
* [Design](#design)
  * [Colour Scheme](#color-scheme)
  * [Typography](#typography)
  * [Imagery](#imagery)
* [Page Features](#page-features)
  * [Title](#title)
  * [Hero-Image](#hero-image) 
* [Tablet & Mobile View](#tablet--mobile-view)
  * [Desktop, Tablet & Mobile Differences](#desktop-tablet--mobile-differences)
  * [Tablet View](#tablet-view-ipad-miniipad-prosurface-pro)
  * [Mobile View](#mobile-view-iphone-5iphone-seiphone-xriphone-12-pro)
* [Future Features](#future-features)
* [Technologies Used](#technologies-used)
  * [Languages Used](#languages-used)
  * [Frameworks, Libraries, Technologies & Programs Used](#frameworks-libraries-technologies--programs-used)
* [Deployment](#deployment)
  * [How to deploy](#how-to-deploy)
* [Testing](#testing)
  * [HTML Validation using W3C Validation](#html-validation-using-w3c-validation)
  * [CSS Validation using W3C Validation](#css-validation-using-w3c-validation)
  * [JS Validation using Beautify Tools](#js-validation-using-beautify-tools)
  * [Lighthouse scores via Chrome Developer Tools](#lighthouse-scores-via-chrome-developer-tools)
  * [Bugs & Fixes](#bugs--fixes)
  * [Unsolved Bugs](#unsolved-bugs)
* [Credits](#credits) 

  
---    

## User Experience (UX)  
  
### **User Stories**  

### **Primary Goal**  
  
Top Trumps: British Politics (1945-2023 edition) aims to be a fun game for those who either love politics or want a fun way to learn key figures of modern British politics.

### **Visitor Goals** 

Visitors will be from all different backgrounds, and thus it is a goal of the website to be straight to the point and easy to use for those who wish to play the game. The site is designed to be responsive to allow visitors to view it from a range of devices. The basic information is easily accessible.  

### **First Time Visitor**
  - A user can read the instructions of the game as it is located at the top of the page, and is one of the first things a user will see.
  - Directly below the instructions is the actual game so users can get stuck in as soon as they wish.

### **Returning & Frequent Visitor**  
  - A user can check the attributes of each card after doing some research and guess why the attribute was given.

--- 

## Creation Process  
  
### **1. Strategy**  


- I wanted a fun political-themed game. Top Trumps was selected as you can compare a number of politicians and their attributes; Top Trumps not only allows, but requires a lot of "characters" to be added into the game or else the game won't function. 
- As 30 cards - and therefore 30 people or "characters" were required, I added all the political leaders from 1945 till 2023, which is the year when the game was made. This includes all the party leaders of the Conservative Party and Labour Party as they have been the two political parties in power in Britain since 1945. I've also added the three reiging Monarchs during this period. I left out any 'acting' leader (those who lead a political party while a new, permanenet leader was found - an example is Margaret Beckett, who was acting leader of the Labour Party when the previous leader, John Smirth, died suddenly of a heart attack in 1994 - Beckett was replaced by Tony Blair after a leadership contest that same year. Though she was leader, she was only 'defacto' leader, hence left out).
- The attributes are based on the politician's record to date, rather than at the height of their career. One of the attributes has been rounded up in most cases - those who were in power and the attribute 'Years in Office'.   
- Information about this site is to be transparent and simple.  

  

### **2. Scope**  

The site will be available on a wide range of devices due to the varied range of people visiting the site. A range of visitors will be there for different reasons, but will want the same information - how to play the game. The site provides a comfortable, no-fuss approach which doesn't have endless amounts of information. The instructions are there and then the game is just below.

- The site is to contain only essential information, presented in a similar fashion and layout.   
- Text is clear and legible on any sized device. 
- For future development, the attributes on the cards can be updated, as some of the politicans age and perhaps have success or failure in their political careers.
  

### **3. Structural**  

The structure was simple:
- The instructions at the top of the and the game belwo the instructions.

  
### **4. Skeleton**  

The site was developed to be simple, clear, and familiar.  

- For the landing page, you have the page title at the top, just below that the instructions, and then the actual game, with two cards next to each other.  


### Wireframes  
<details open>
<summary>Wireframe - Homepage & Mobile Desktop</summary>  

![homepage wireframe-mobile & desktop](./images/readme/wireframe.png)
</details> 



### **5. Surface**  

 A design was created that allowed players to read the instruction and play the game.   
 - A red and blue gradient linear background was added to contrast with the cards - red and blue was chosen because red is the colour of the Labour Party, blue being the colour of the Conservative Party.  
- The cards are white to contract with the background. Every other line in the attributes section is a light yellow to make them more distinguished.  
- The font is Gill Sans. This was chosen for asthetic reasons, it suites the site.  

Overall, the design intends to make the website seem welcoming, non-threatening and easily accessible.  
 
---   
  
  
## Design  

### **Color Scheme**  

The website is dominated by the background color scheme, which is red and blue to represent the Labour party and the Conservative Party - the red was given matching brown and the blue was given turqoise to give each colour more of a slow gradient transision. The cards are white to contrast with the background.
  
![colour theme palette](./images/readme/colourtheme.png)  
  
The contrast ratio for my cards were acceptable according to the [WCAG](https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html) contrast ratio.
  
![Colour contrast ratio for cards](./images/readme/contrast.png)  

  
[Adobe Color](https://color.adobe.com/create/color-contrast-analyzer) provided this fantastic resource for checking how accessible your colours are. I submitted my palette to the [Color Blind Safe](https://color.adobe.com/create/color-accessibility) check to find they passed this test also.  
  
![Color Blind Safe Check](./images/readme/adobecontrast.png)
  
### **Typography**  
  
The font is Gill Sans. This was chosen for asthetic reasons, it suites the site.  
        
### **Imagery**  
  
The images of the website are the politicians included in the game.

---  
  

## Page Features  

### **Title**   
<details open>
<summary></summary>  

![screenshot of hero image](./images/readme/title.png)   
</details>
This remains the same across the three pages, in portrait/landscape and mobile/tablet/desktop view.
  
<br>  

### **Hero Image**  
<details open>  
<summary></summary>

![screenshot of hero image](./images/readme/heroimage.png)  
</details>
The hero image is the character randomly generated for the user to start the game.
---   


## Tablet & Mobile View  
 
### **Desktop, Tablet & Mobile Differences**  
  
Below is what the game looks like on a on. different devices. Users will have to scroll down ever so slightly to click the compare button on tablet and mobile view.
  
### **Tablet View (iPad Mini/iPad Pro/Surface Pro)**  
  
![screenshots of home page on tablet](./images/readme/tablet1.png)
![screenshots of home page on tablet scrolled down slightly](./images/readme/tablet2.png)



### **Mobile View (iPhone 5/iPhone SE/iPhone XR/iPhone 12 Pro)**  
  
![screenshot of home page on iPhone 12 Pro](./images/readme/mobileview.png)


---  
                              

## Future Features  

- For future development, I would like to include an extra page dedicated to ongoing events.
- A section on how to get to Stoke Newington such as a list of underground/overground stations and what buses get there.
  
---   
  

## Technologies Used    

### **Languages Used**   

- HTML5
- CSS3
- JavaScript

### **Frameworks, Libraries, Technologies & Programs Used**  

- GitHub - used to save and store all files for this website  
- Git - used for version control
- Google Dev Tools - to debug and for testing responsiveness 
- Google Lighthouse - for auditing the website
- W3C Validator - for validating the HTML and CSS code 
---   
 

## Deployment

### **How to deploy**  

GitHub was used to deploy the website. These were the steps taken to acheive this:  

1. Login to GitHub account
2. Navigate to the project repository, stokeydev_pa1
3. Click the Settings button near the top of the page
4. In the left-hand menu, find and click on the Pages button
5. In the Source section, choose 'main' from the drop-down, select branch menu
6. Select 'root' from the drop-down folder menu
7. Click 'Save' and after a few moments the project will have been made live and a link is visible at the top of the page

![screenshot of how to deploy site on github](./images/readme/github.png) 

---  
    

## Testing  

### **Initial testing plan**

I had planned for this site to be accessible and legible on all screen sizes. The user is viewing the site primarily for the menu options and parlour location and they needed to access this information with one click. I used Chrome Dev Tools to test, tweak and debug in the early stages. I deployed my site halfway through to test on real-world devices. These devices included:  
- HP Elite Desk 800
- iPad Pro 2022
- Huawei P30 Pro 
- iPhone 13
- Samsung Galaxy a8 tablet 
  
### **Testing**    

Testing took place throughout the entire build using Dev Tools on Chrome and on the above real-world devices. The browsers used were:  
- Chrome  
- Firefox   
- Safari  
  
The results of feature testing are as follows:  
  
| Page | Test | Pass/Fail |
| :----| :----| :--------:|
| All  | Logo links back to homepage | Pass |
| All  | Correct page name highlighted in navigation | Pass |
| All  | Navigation links bring the user to relevant page | Pass |
| All  | Footer social media list in the footer brings the user to relevant sites via a new tab | Pass |
| All  | Useful links list in footer links to correct page | Pass |
| All  | Images and sections are responsive in different media sizes | Pass |
| Index| Hero image loads and carousel works | Pass |
| Index| Youtube video works | Pass | 
| What to do | All buttons scroll to desired place | Pass |
| What to do | Google Maps works and shows correct information | Pass |
| History| Timeline is lined up correctly | Pass |
| Support us | Contact form required elements are responsive | Pass |
| Support us | Form submit button applies validation | Pass |

Further device testing took place in Dev Tools on:
  - iPhone 4/5/6/7/8
  - iPhone XR/ iPhone 12 Pro
  - Surface Pro 7
  - Nest Hub

 
### **HTML Validation using W3C Validation**  
<details open>
<summary>Index/landing page HTML validation</summary>  

![screenshot of index page w3c html validation](./images/readme/htmlcheck.png)
</details>   

<br>  

### **CSS Validation using W3C Validation** 

<details open>
<summary>CSS validation</summary>  

![screenshot of CSS validation](./images/readme/cssgood.png)
</details>   

<br>  

### **JS Validation using Beautify Tools** 

<details open>
<summary>CSS validation</summary>  

![screenshot of CSS validation](./images/readme/jsgood.png)
</details>   

<br>  

### **Lighthouse scores via Chrome Developer Tools**   
  
For Desktop   
<details open>
<summary>Lighthouse audit for Index page</summary>  

![screenshot of lighthouse audit for index page](./images/readme/lighthousedesktop.png)
</details> 

<br>
  
For Mobile   
<details open>
<summary>Lighthouse audit for Index page - Mobile</summary>  

![screenshot of lighthouse audit for index page](./images/readme/lighthousemobile.png)
</details> 
    
  
### **Bugs & Fixes**  
  
| Bug | Section | Fix |
| :----| :----| :--------:|
| Capition in carousel on smaller screens | Index/Home page | On smaller screens, the caption didn't look good. In order to resolve this, via bootstrap I hid the caption when the size screen reduced - this was part of making it responsive. |
| Youtube video size | Index/Home page | When I embedded a Youtube video onto the homepage, it would spill over the size of the screen and it wasn't responsive. I found a solution online via CSS rather than solely relying on Bootstrap, and the problem was resolved. |
| Navbar responsiveness | All pages | As I created a bespoke navbar, when I tried to make it responsive, it wasn't working, or in other words, it wasn't doing the desired aim. In order to resolve this, I created two separate navbars: one that that would only appear on larger screens, and the other on smaller screens. |
| Google Maps responsiveness  | What to do page |  The Google Maps 'walking tour' I embbeded in the the What to do page, much like the youtube video, wasn't responsive, so rather than trying to use Bootstrap I used CSS and created two separate versions, one for big screens, one for small screens to make it responsive. |
| Button on card | What to do page | Because I created two versions of the Google Maps feature (for responsiveness, as explained above), I therefore had to create to separate buttons for both versions of the Google Maps section of the website. This was done via Bootstrap. |
| Order of image and text | What to do page | I made the What to do page responsive, however, on the mobile screen version, some images would place themselves under the text rather than above. To fix this I changed the ordering via CSS so that all images would appear above the text, so as to keep a consistent theme and look. |

### **Unsolved Bugs** 

- The text sticks to half the page when on mobile view. I wasnt able to resolve this issue. It's awkard but doesn't get in the way of playing the game.
- When I added bootstrap the card structure would overflow and I wasn't able to resolve this issue, hence why bootstrap wasn't added.


---  

## Credits  
  
### **Content References**
- All content written for the website is by myself, is for educational purposes only.
- [Code Institute](https://codeinstitute.net/ie/) for their HTML/CSS and Javascript learning material.
- [W3Schools](https://www.w3schools.com/) for additional learning material.
- [MD Boostrap](https://mdbootstrap.com/docs/standard/navigation/footer/) for the footer, history timeline, and the hamburger navigation bar.
- [Peter Bonnett](http://www.jacobites.org.uk/iwb/top_trumps/index.html) for the fisher yates shuffle method.
- [Kera Cudmore - Creating your First README](https://github.com/kera-cudmore/readme-examples) for README structure and Markdown guidance. 
  

### **Media References**  
  
- [Google](https://google.com/) for all images used for the cards. 


### **Acknowledgements** 
- I would like to acknowledge my mentor, Richey Malhotra, for his support, guidance and encouragement on this project.
- I would also like to thank my family and friends for testing my work and offering positive thoughts throughout the project.