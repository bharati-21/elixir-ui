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
        <li><a href="#how-to-contribute">How to Contribute</a></li>
        <li><a href="#social-links">Social Links</a></li>
    </ol>
</details>

<br />

<!-- Project Introduction -->

## **Introduction**

<p>
    Elixir UI is an open source CSS library aimed at quick, responsive, and simple development of webites.
    With Elixir, you can leave your design worries and get started with a completely logic-driven development for your websites!
<!--   <img width="100%" src="https://raw.githubusercontent.com/VishalPatil18/VISPA-UI-Docs/development/assets/LandingPage.gif" alt="vispa-ui walkthrough"/>
  <img width="100%" src="https://raw.githubusercontent.com/VishalPatil18/VISPA-UI-Docs/development/assets/DocsPage.gif" alt="vispa-ui walkthrough"/> -->
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
    - To add alerts to your project, use the following url-
    - Import using HTML
    ```HTML

        <link rel="stylesheet" href="https://elixir-ui.netlify.app/Components/alerts/alert.css" />

    ```
    - OR, Import using CSS
    ```CSS

    @import "https://elixir-ui.netlify.app/Components/alerts/alert.css";

    ```
    
- [Avatar](https://elixir-ui.netlify.app/docs/avatar/)
    - Elixir offers the following range of avatars - Circle Avatars, Square Avatars, and Text Avatars in 5 different sizes - extra small, small, medium, large, and extra large.
    - To add avatars to your project, use the following url-
    - Import using HTML
    ```HTML

        <link rel="stylesheet" href="https://elixir-ui.netlify.app/Components/avatars/avatar.css" />

    ```
    - OR, Import using CSS
    ```CSS

    @import "https://elixir-ui.netlify.app/Components/avatars/avatar.css";

    ```
    
- [Badge](https://elixir-ui.netlify.app/docs/badge/)
    - Elixir offers the following range of badges - Status badges, Notification/ Number badges, and Text Badges.
    - Status badges come with 4 different status - available, idle, do not disturb, and away.
    - Notification badges work with icons/ buttons of small sizes and come with 2 themes- primary and secondary
    - Text badges can be of 2 types - square or pill shaped.
    - To add badges to your project, use the following url-
    - Import using HTML
    ```HTML

        <link rel="stylesheet" href="https://elixir-ui.netlify.app/Components/badges/badge.css" />

    ```
    - OR, Import using CSS
    ```CSS

    @import "https://elixir-ui.netlify.app/Components/badges/badge.css";

    ``` 
    
- [Button](https://elixir-ui.netlify.app/docs/button/)
    - Elixir offers the following range of buttons - Solid buttons, Outlined buttons, Button with icon, Link buttons, Buttons with text and icon, and Floating action buttons.
    - Buttons can be of the following themes- dark, light, primary, and secondary.
    - To add buttons to your project, use the following url-
    - Import using HTML
    ```HTML

        <link rel="stylesheet" href="https://elixir-ui.netlify.app/Components/buttons/button.css" />

    ```
    - OR, Import using CSS
    ```CSS

    @import "https://elixir-ui.netlify.app/Components/buttons/button.css";

    ``` 
- [Card](https://elixir-ui.netlify.app/docs/card/)
    - Elixir offers the following range of cards - vertical card, horizontal card, card with badge, card with dismiss button, card with overlay text, card with only text, and card with shadow.
    - To add cards to your project, use the following url-
    - Import using HTML
    ```HTML

        <link rel="stylesheet" href="https://elixir-ui.netlify.app/Components/cards/card.css" />

    ```
    - OR, Import using CSS
    ```CSS

    @import "https://elixir-ui.netlify.app/Components/cards/card.css";

    ``` 
- [Grid](https://elixir-ui.netlify.app/docs/grid/)
    - Elixir offers the following grid layouts as classes - 2 column grid, 3 column grid, and 4 column grid.
    - To create grid layouts in your project, use the following url-
    - Import using HTML
    ```HTML

        <link rel="stylesheet" href="https://elixir-ui.netlify.app/Components/grid/grid.css" />

    ```
    - OR, Import using CSS
    ```CSS

    @import "https://elixir-ui.netlify.app/Components/grid/grid.css";

    ``` 
- [Image](https://elixir-ui.netlify.app/docs/image/)
    - Elixir offers the following types of image components - Responsive image, Image with rounded corners, and Round images.
    - To add image component to your project, use the following url-
    - Import using HTML
    ```HTML

        <link rel="stylesheet" href="https://elixir-ui.netlify.app/Components/images/image.css" />

    ```
    - OR, Import using CSS
    ```CSS

    @import "https://elixir-ui.netlify.app/Components/images/image.css";

    ``` 
- [Input](https://elixir-ui.netlify.app/docs/input/)
    - Elixir offers the following types of input components - Default Inputs, Inline Inputs, Inputs with success validations, Inputs with warning validations, Inputs with error validations, and Textbox.
    - To add input component to your project, use the following url-
    - Import using HTML
    ```HTML

        <link rel="stylesheet" href="https://elixir-ui.netlify.app/Components/input/input.css" />

    ```
    - OR, Import using CSS
    ```CSS

    @import "https://elixir-ui.netlify.app/Components/input/input.css";

    ``` 

- [List](https://elixir-ui.netlify.app/docs/list/)
    - Elixir offers the following type of lists - Spaced List, Stacked List, and Inline List.
    - To add list component to your project, use the following url-
    - Import using HTML
    ```HTML

        <link rel="stylesheet" href="https://elixir-ui.netlify.app/Components/lists/list.css" />

    ```
    - OR, Import using CSS
    ```CSS

    @import "https://elixir-ui.netlify.app/Components/lists/list.css";

    ``` 
    
- [Modal](https://elixir-ui.netlify.app/docs/modal/)
    - Elixir offers a simple modal with text and action buttons.
    - To add a modal to your project, use the following url-
    - Import using HTML
    ```HTML

        <link rel="stylesheet" href="https://elixir-ui.netlify.app/Components/modal/modal.css" />

    ```
    - OR, Import using CSS
    ```CSS

    @import "https://elixir-ui.netlify.app/Components/modal/modal.css";

    ``` 
    
- [Navigation](https://elixir-ui.netlify.app/docs/navigation/)
     - Elixir offers a simple, responsive navigation that contains the following parts - a logo/ brand name, search bar, and navbar actions/ navigation links.
    - To add a navbar to your project, use the following url-
    - Import using HTML
    ```HTML

        <link rel="stylesheet" href="https://elixir-ui.netlify.app/Components/navigation/navigation.css" />

    ```
    - OR, Import using CSS
    ```CSS

    @import "https://elixir-ui.netlify.app/Components/navigation/navigation.css";

    ``` 
    
- [Toast](https://elixir-ui.netlify.app/docs/toast/)
    - Elixir offers a simple toast with some text and a close icon which disappears after 5 seconds.
    - To add a snackbar/ toast to your project, use the following url-
    - Import using HTML
    ```HTML

        <link rel="stylesheet" href="https://elixir-ui.netlify.app/Components/toast/toast.css" />

    ```
    - OR, Import using CSS
    ```CSS

    @import "https://elixir-ui.netlify.app/Components/toast/toast.css";

    ``` 
    
- [Typography](https://elixir-ui.netlify.app/docs/typography/)
    - Elixir offers the following typography utilities - Heading Utilities, Text Utilities, Colored Text Utilities, and Aligned Text Utilities.
    - To create text content with the typograpgy utility to your project, use the following url-
    - Import using HTML
    ```HTML

        <link rel="stylesheet" href="https://elixir-ui.netlify.app/Components/typography/typography.css" />

    ```
    - OR, Import using CSS
    ```CSS

    @import "https://elixir-ui.netlify.app/Components/typography/typography.css";

    ``` 
<br />
- Other utilities for - Flexbox layout, margin, padding, and variables.

<br />

<!-- BUILT WITH -->
## **Technology/ Languages Used**

- HTML
- CSS
- JavaScript

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
Copyright (c) 2022 [Bharati Subramanian](https://github.com/bharati-21) 👩‍💻
