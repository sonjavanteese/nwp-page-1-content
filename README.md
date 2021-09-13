# Svelte steps component that is compatible to bootstrap

A customizable step component written in Svelte.

![demo](static/demo.png)

## Installation

```sh
npm install --saveDev svelte-steps
```

## Example Usages

Clone this project and run it. Itself is an example. Take a look at the homepage [here](https://svelte-steps.web.app)

### Basic Usage

```javascript
<script>
    import { Steps } from 'svelte-steps';
    let steps = [
        { text: 'step one' }, 
        { text: 'step two' }, 
        { text: 'the last step' }
    ];
</script>

<Steps {steps} />
```

### With Icons

```javascript
let steps = [
    { text: 'step one', icon: IconMoney },
    { text: 'step two', icon: IconPaperClip },
    { text: 'the last step', icon: IconPerson }
]
```

### Square Steps

```javascript
<Steps {steps} borderRadius="0"/>
```

### Custom Color

```javascript
<Steps {steps} primary="#ff0000" secondary="#ffaaaa"/>
```

### Custom Size

```javascript
<Steps {steps} size="2em" lineHeight="2px"/>
```

### No Text

```javascript
let steps = [
    { icon: IconMoney },
    { icon: IconPaperClip },
    { icon: IconPerson }
]
```

### Bar

```javascript
<Steps {steps} size="2rem" lineHeight="2rem"
```

### Events

```javascript
<Steps
    {steps}
    {current}
    on:click={(e) => {
        last = e.detail.last;
        current = e.detail.current;
    }}
/>
```

## Use with Bootstrap

It by default uses `--bs-primary`, `--bs-secondary`, `--bs-light`, and `--bs-dark` css variables if they are defined. These css vars are defined in bootstrap css:

```html
<!-- Include Bootstrap css in app.html <head></head> -->
<link
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
    rel="stylesheet"
    integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
    crossorigin="anonymous"
/>
```

## Props

- `steps`:
  - Array of object. Length has to be more than 1
  - Required
  - Each item is a step object that can have:
    - `text`: The text displayed below each steps.
    - `icon`: A svelte component displayed inside each steps.
    - `iconProps`: An object that will be passed as props to the `icon` component.
- `current`: current step index. Number. Default `0`
- `size`: size of the step buttons. String. Default `"3rem"`
- `lineHeight`: height of the connecting lines between the step buttons. String. Default `"0.3rem"`
- `primary`: Primary color of passed and current steps. String. Default `'var(--bs-primary, #3a86ff)'`
- `secondary`: Secondary color of future steps. String. Default `'var(--bs-secondary, #bbbbc0)'`
- `light`: Primary color of text color in passed anc current steps. String. Default `'var(--bs-light, white)'`
- `dark`: Secondary color of text color in future steps. String. Default `'var(--bs-dark, black)'`
- `borderRadius`: Border radius of the step buttons. String. Default `'50%'` (circle)
- `fontFamily`: Font family of the component. String. Default `"'Helvetica Neue', Helvetica, Arial, sans-serif"`

## Events

- `on:click(e)`: click event with arg as the clicked step index as `e.detail.current` and last step index as `e.detail.last`
    




# Svelte + Vite

This template should help get you started developing with Svelte in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Svelte](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode).

## Need an official Svelte framework?

Check out [SvelteKit](https://github.com/sveltejs/kit#readme), which is also powered by Vite. Deploy anywhere with its serverless-first approach and adapt to various platforms, with out of the box support for TypeScript, SCSS, and Less, and easily-added support for mdsvex, GraphQL, PostCSS, Tailwind CSS, and more.

## Technical considerations

**Why use this over SvelteKit?**

- It brings its own routing solution which might not be preferable for some users.
- It is first and foremost a framework that just happens to use Vite under the hood, not a Vite app.
  `vite dev` and `vite build` wouldn't work in a SvelteKit environment, for example.

This template contains as little as possible to get started with Vite + Svelte, while taking into account the developer experience with regards to HMR and intellisense. It demonstrates capabilities on par with the other `create-vite` templates and is a good starting point for beginners dipping their toes into a Vite + Svelte project.

Should you later need the extended capabilities and extensibility provided by SvelteKit, the template has been structured similarly to SvelteKit so that it is easy to migrate.

**Why `global.d.ts` instead of `compilerOptions.types` inside `jsconfig.json` or `tsconfig.json`?**

Setting `compilerOptions.types` shuts out all other types not explicitly listed in the configuration. Using triple-slash references keeps the default TypeScript setting of accepting type information from the entire workspace, while also adding `svelte` and `vite/client` type information.

**Why include `.vscode/extensions.json`?**

Other templates indirectly recommend extensions via the README, but this file allows VS Code to prompt the user to install the recommended extension upon opening the project.

**Why enable `checkJs` in the JS template?**

It is likely that most cases of changing variable types in runtime are likely to be accidental, rather than deliberate. This provides advanced typechecking out of the box. Should you like to take advantage of the dynamically-typed nature of JavaScript, it is trivial to change the configuration.

**Why is HMR not preserving my local component state?**

HMR state preservation comes with a number of gotchas! It has been disabled by default in both `svelte-hmr` and `@sveltejs/vite-plugin-svelte` due to its often surprising behavior. You can read the details [here](https://github.com/rixo/svelte-hmr#svelte-hmr).

If you have state that's important to retain within a component, consider creating an external store which would not be replaced by HMR.

```js
// store.js
// An extremely simple external store
import { writable } from 'svelte/store'
export default writable(0)
```
