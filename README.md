<h1 align="center">
  <br />
  <a href="https://elixir-ui.netlify.app/">
      <img src="https://github.com/bharati-21/elixir-ui/blob/9e0021ca0eb8952f6bf408d9f2a119439ac359a2/logo-assets/elixir-logo.png" alt="Elixir UI" width="200"></a>
  <br />
  <br />
  Elixir UI
</h1>
<h3 align="center">
    The perfect library brewed for styling your website.
</h3>

<br />

<!-- TABLE OF CONTENTS -->
<details>
    <summary>Content</summary>
    <ol>
        <li><a href="#introduction">Introduction</a></li>
        <li><a href="#how-to-use">How To Use</a></li>
        <li><a href="#components">Components</a></li>
        <li><a href="#technology-languages-used">Technology/ Languages Used</a></li>
        <li><a href="#how-to-run-locally">How to Run Locally</a></li>
        <li><a href="#how-to-contribute">How to Contribute</a></li>
        <li><a href="#social-links">Social Links</a></li>
    </ol>
</details>

<br />

<!-- Project Introduction -->

## **📌 Introduction**

<p>
    Elixir UI is an open source CSS library aimed at quick, responsive, and simple development of webites.
    With Elixir, you can leave your design worries and get started with a completely logic-driven development for your websites!
</p>

<br />

<!-- HOW TO USE -->

## **How To Use**

Visit [Elixir UI Documentation Website](https://elixir-ui.netlify.app/) and check out the documentation for the library. To use Elixir in your project, include the CSS file in the main stylesheet using `@import` or in the `<head>` of your `index.html` file using `<link>`. 
<br />
Copy-paste the below code in the `<head>` section of your HTML files to load predefined styles, components and utilities. 

### Import in the `<head>` of HTML file:
```HTML

<link rel="stylesheet" href="https://elixir-ui.netlify.app/Components/elixir.css" />

```

### Import in your main CSS stylesheet:
```CSS

@import "https://elixir-ui.netlify.app/Components/elixir.css";

```

<br />

<!-- COMPONENTS -->

## **Components**

- [Alert](https://elixir-ui.netlify.app/docs/alert/)
    - Elixir offers simple alerts and alerts with a close icon in the following themes - primary, secondary, success, warning, and error.
    - To use alerts in your project, add the following URL-
    - in the HTML file
    ```HTML
        <link rel="stylesheet" href="https://elixir-ui.netlify.app/Components/alerts/alert.css" />
    ```
    - OR, in the CSS file
    ```CSS

    @import "https://elixir-ui.netlify.app/Components/alerts/alert.css";

    ```
    - Screenshot - ![Screenshot of Alert component in the documentation page](https://user-images.githubusercontent.com/51514137/154958420-7bca14a1-b30c-42c0-967d-7724435eb765.png)

    
    
- [Avatar](https://elixir-ui.netlify.app/docs/avatar/)
    - Elixir offers the following range of avatars - Circle Avatars, Square Avatars, and Text Avatars in 5 different sizes - extra small, small, medium, large, and extra large.
    - To use avatars in your project, add the folloeing URL in-
    - the HTML file
    ```HTML
        <link rel="stylesheet" href="https://elixir-ui.netlify.app/Components/avatars/avatar.css" />
    ```
    - OR, the CSS file
    ```CSS

    @import "https://elixir-ui.netlify.app/Components/avatars/avatar.css";

    ```
    - Screenshot - ![Screenshot of Avatar component in the documentation page](https://user-images.githubusercontent.com/51514137/154958942-eed023e9-c3cd-4f48-836c-c73eb3abd058.png)

    
- [Badge](https://elixir-ui.netlify.app/docs/badge/)
    - Elixir offers the following range of badges - Status badges, Notification/ Number badges, and Text Badges.
    - Status badges come with 4 different status - available, idle, do not disturb, and away.
    - Notification badges work with icons/ buttons of small sizes and come with 2 themes- primary and secondary
    - Text badges can be of 2 types - square or pill shaped.
    - To use badges in your project, add the following URL in -
    - the  HTML file
    ```HTML
        <link rel="stylesheet" href="https://elixir-ui.netlify.app/Components/badges/badge.css" />
    ```
    - OR, in the CSS file
    ```CSS

    @import "https://elixir-ui.netlify.app/Components/badges/badge.css";

    ``` 
    - Screenshot - ![Screenshot of Badge component in the documentation page](https://user-images.githubusercontent.com/51514137/154960736-208b8f89-a957-460d-9134-98fe23c73d4f.png)

    
- [Button](https://elixir-ui.netlify.app/docs/button/)
    - Elixir offers the following range of buttons - Solid buttons, Outlined buttons, Button with icon, Link buttons, Buttons with text and icon, and Floating action buttons.
    - Buttons can be of the following themes- dark, light, primary, and secondary.
    - To use buttons in your project, add the following URL in-
    - the HTML file
    ```HTML
        <link rel="stylesheet" href="https://elixir-ui.netlify.app/Components/buttons/button.css" />
    ```
    - OR, in the CSS file
    ```CSS

    @import "https://elixir-ui.netlify.app/Components/buttons/button.css";

    ``` 
    - Screenshot - ![Screenshot of Button component in the documentation page](https://user-images.githubusercontent.com/51514137/154966962-8dcaf17f-034f-4ccb-a690-0a1062135ea4.png)

- [Card](https://elixir-ui.netlify.app/docs/card/)
    - Elixir offers the following range of cards - vertical card, horizontal card, card with badge, card with dismiss button, card with overlay text, card with only text, and card with shadow.
    - To use cards in your project, add the following URL in the -
    - HTML file
    ```HTML
        <link rel="stylesheet" href="https://elixir-ui.netlify.app/Components/cards/card.css" />
    ```
    - OR, CSS file
    ```CSS

    @import "https://elixir-ui.netlify.app/Components/cards/card.css";

    ``` 
    - Screenshot - ![Screenshot of Card component in the documentation page](https://user-images.githubusercontent.com/51514137/154971037-a2febafd-0b3e-4345-898f-67c4cdd41d37.png)

- [Grid](https://elixir-ui.netlify.app/docs/grid/)
    - Elixir offers the following grid layouts as classes - 2 column grid, 3 column grid, and 4 column grid.
    - To create grid layouts in your project, add the following URL in the-
    - HTML file
    ```HTML
        <link rel="stylesheet" href="https://elixir-ui.netlify.app/Components/grid/grid.css" />
    ```
    - OR, CSS file
    ```CSS

    @import "https://elixir-ui.netlify.app/Components/grid/grid.css";

    ``` 
    - Screenshot - ![Screenshot of Grid component in the documentation page](https://user-images.githubusercontent.com/51514137/154973992-94b0e463-aebf-4acf-be60-f5c5c1d8cea1.png)


- [Image](https://elixir-ui.netlify.app/docs/image/)
    - Elixir offers the following types of image components - Responsive image, Image with rounded corners, and Round images.
    - To use the image component in your project, add the following URL in the-
    - HTML file
    ```HTML
        <link rel="stylesheet" href="https://elixir-ui.netlify.app/Components/images/image.css" />
    ```
    - OR, CSS file
    ```CSS

    @import "https://elixir-ui.netlify.app/Components/images/image.css";

    ``` 
    - Screenshot - ![Screenshot of Image component on the documentation page](https://user-images.githubusercontent.com/51514137/154971474-3ab13c10-d375-454f-95d2-dc6e472a6d2e.png)


- [Input](https://elixir-ui.netlify.app/docs/input/)
    - Elixir offers the following types of input components - Default Inputs, Inline Inputs, Inputs with success validations, Inputs with warning validations, Inputs with error validations, and Textbox.
    - To use the input component in your project, add the following URL in the-
    - HTML file
    ```HTML

        <link rel="stylesheet" href="https://elixir-ui.netlify.app/Components/input/input.css" />
    ```
    - OR, CSS file
    ```CSS

    @import "https://elixir-ui.netlify.app/Components/input/input.css";

    ``` 
    - Screenshot - ![Screenshot of Input component in the documentation page](https://user-images.githubusercontent.com/51514137/154974328-6f750b10-38a8-4dce-9ff9-6afbaa5d210a.png)


- [List](https://elixir-ui.netlify.app/docs/list/)
    - Elixir offers the following type of lists - Spaced List, Stacked List, and Inline List.
    - To use the list component to your project, add the following URL in the -
    - HTML file
    ```HTML

        <link rel="stylesheet" href="https://elixir-ui.netlify.app/Components/lists/list.css" />
    ```
    - OR, CSS file
    ```CSS

    @import "https://elixir-ui.netlify.app/Components/lists/list.css";

    ``` 
    - Screenshot - ![Screenshot of List componentin the documentation page](https://user-images.githubusercontent.com/51514137/154975132-7a268663-3110-43bb-bc61-1b3eea55286b.png)

    
- [Modal](https://elixir-ui.netlify.app/docs/modal/)
    - Elixir offers a simple modal with text and action buttons.
    - To use a modal in your project, add the following URL in the-
    - HTML file
    ```HTML

        <link rel="stylesheet" href="https://elixir-ui.netlify.app/Components/modal/modal.css" />
    ```
    - OR, CSS file
    ```CSS

    @import "https://elixir-ui.netlify.app/Components/modal/modal.css";

    ``` 
    - Screenshot - ![Screenshot of Modal component in the documentation page](https://user-images.githubusercontent.com/51514137/154975805-bd9d0b1f-7593-48e9-843d-a18be02a38d6.png)

    
- [Navigation](https://elixir-ui.netlify.app/docs/navigation/)
    - Elixir offers a simple, responsive navigation bar that contains the following parts - a logo/ brand name, search bar, and navbar actions/ navigation links.
    - To use the navbar in your project, add the following URL in the-
    - HTML file
    ```HTML

        <link rel="stylesheet" href="https://elixir-ui.netlify.app/Components/navigation/navigation.css" />
    ```
    - OR, CSS file
    ```CSS

    @import "https://elixir-ui.netlify.app/Components/navigation/navigation.css";

    ``` 
    - Screenshot - ![Screenshot of Navigation component in the documentation page](https://user-images.githubusercontent.com/51514137/154979132-6af59822-26a8-4b0a-b659-c2edb7342d46.png)


- [Rating](https://elixir-ui.netlify.app/docs/rating/)
    - Elixir offers 2 types of ratings components - rating badge and star product rating.
    - To use the rating components in your project, add the following URL in the-
    - HTML file
    ```HTML

        <link rel="stylesheet" href="https://elixir-ui.netlify.app/Components/rating/rating.css" />
    ```
    - OR, CSS file
    ```CSS

    @import "https://elixir-ui.netlify.app/Components/rating/rating.css";

    ``` 
    - Screenshot - ![Screenshot of Rating component in the documentation page](https://user-images.githubusercontent.com/51514137/154979750-8176cb44-8ce5-4141-8f62-528c7979bc20.png)


    
- [Slider](https://elixir-ui.netlify.app/docs/slider/)
    - Elixir offers a simple range slider that displays the min value, max value and a customized slider.
    - To use a slider in your project, add the following URL in the-
    - HTML file
    ```HTML

        <link rel="stylesheet" href="https://elixir-ui.netlify.app/Components/slider/slider.css" />
    ```
    - OR, CSS file
    ```CSS

    @import "https://elixir-ui.netlify.app/Components/slider/slider.css";

    ``` 
    - Screenshot - ![Screenshot of Slider component in the documentation page](https://user-images.githubusercontent.com/51514137/154980352-0ce88613-0b7b-4b63-80e7-22240334b854.png)

- [Toast](https://elixir-ui.netlify.app/docs/toast/)
    - Elixir offers one toast - a Simple Toast which is dark themed and appears in the bottom left corner.
    - To use a toast in your project, add the following URL in the -
    - HTML file
    ```HTML

        <link rel="stylesheet" href="https://elixir-ui.netlify.app/Components/toast/toast.css />
    ```
    - OR, CSS file
    ```CSS

    @import "https://elixir-ui.netlify.app/Components/toast/toast.css";

    ``` 
  
  ![Screenshot of Toast component in the documentation page](https://user-images.githubusercontent.com/51514137/154980941-158cefb8-8704-4cdc-bc34-7d295786af16.png)

    
- [Typography](https://elixir-ui.netlify.app/docs/typography/)
    - Elixir offers the following typography utilities - Heading Utilities, Text Utilities, Colored Text Utilities, and Aligned Text Utilities.
    - To create text content with the typograpgy utility to your project, add the following URL in the-
    - HTML file
    ```HTML

        <link rel="stylesheet" href="https://elixir-ui.netlify.app/Components/typography/typography.css" />

    ```
    - OR, CSS file
    ```CSS

    @import "https://elixir-ui.netlify.app/Components/typography/typography.css";

    ``` 
<br />
- Other utilities include - Flexbox layout, margin, padding, and variables.

<br />

<!-- BUILT WITH -->
## **Technology/ Languages Used**

- HTML
- CSS
- JavaScript


<br />
<br />
<!-- HOW TO RUN LOCALLY -->

## **How to Run locally**:
- To run this project locally, use the following command in your CLI:

```bash 
    git clone https://github.com/bharati-21/elixir-ui.git
```
- Open any code editor of your choice and run locally.

<br />
<br />


<!-- CONTRIBUTING -->
## **How to Contribute**

Contributions and ideas to this library are more than welcome! <br />
If you want to contribute or have ideas for this project, just fork the repo and create a PR. If you spot a bug, you are more than welcome to open an issue! Do ⭐ this project! 

### Contribution Guidelines-
1. Fork the Project
2. Creata a branch for your feature/ idea. Please do give a good name for the branch that tells about the feature.
3. Stage your changes
4. Commit your changes
5. Push the changes to your remote branch
6. Open and Create a PR

<br />


## **Social Links**
<!-- SOCIAL LINKS -->
Let's connect and talk about development, music, books and much more 🌠! 
> [GitHub Profile](https://github.com/bharati-21) &nbsp;&middot;&nbsp; 
> [LinkedIn Profile](https://www.linkedin.com/in/bharati-subramanian-29734b152/) &nbsp;&middot;&nbsp;
> [Twitter Profile](https://twitter.com/_girlwhocodes) &nbsp;&middot;&nbsp;
> [Dev.to Blogs](https://dev.to/bharati21) &nbsp;&middot;&nbsp;

<br />

Check out my developer portfolio 🌐-
> [Bharati Subramanian](https://bharati-21.github.io/) 

<hr />
<p align="center">Copyright &copy; 2022 
  <br />
  <a href="https://bharati-21.github.io/">👩‍💻 Bharati Subramanian</a>
</p>
