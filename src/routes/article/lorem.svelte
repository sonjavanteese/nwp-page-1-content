<script>
  export let large = false;
</script>

<div>
  So bad, I’m so good that I’m so bad. Guarantee I’ll be the greatest thing you
  ever had. ‘Cause you ain't never met nobody like me. And you ain't gonna wanna
  fuck nobody else again. I'ma make you learn to appreciate me, differentiate
  me. From these phony, little fishy and sissy fake G’s. Skip over the "huggy
  bear," and all the "kissy face," please.
</div>

<div>
  And I am whatever you say I am. If I wasn't, then why would I say I am?. In
  the paper, the news, every day I am. Radio won't even play my jam. ‘Cause I am
  whatever you say I am. If I wasn't, then why would I say I am?. In the paper,
  the news, every day I am. I don't know, it's just the way I am.
</div>

{#if large}
  <div class="italic">
    Will the real Slim Shady please stand up?. I repeat, will the real Slim
    Shady please stand up?. We're gonna have a problem here. Y'all act like you
    never seen a white person before. Jaws all on the floor like Pam like Tommy
    just burst in the door. And started whoopin' her ass worse than before.
    <footer><span>Eminem</span></footer>
  </div>

  <div class="smol-box">
    Bagpipes from Baghdad. What's going through my mind. Half the time, when I
    rhyme, or blowing up like. Bagpipes from Baghdad. Somebody turn the vacancy
    sign on. 'Cause I'm gone, blowing on my. Bagpipes from Baghdad. I run the
    streets. And act like a madman holding a Glad.
    <footer><span>Eminem</span></footer>
  </div>

  <div class="smol-box">
    My tea's gone cold. I'm wondering why I got out of bed at all. The morning
    rain clouds up my window. And I can't see at all. And even if I could it'd
    all be gray. But your picture on my wall. It reminds me that it's not so
    bad, it's not so bad.
    <footer><span>Eminem</span></footer>
  </div>

  <div class="smol-box">
    Feminist women love Eminem. "Chicka, chicka, chicka, Slim Shady, I'm sick of
    him. Look at him, walkin' around, grabbin' his you-know-what. Flippin' the
    you-know-who," "Yeah, but he's so cute though.". Yeah, I probably got a
    couple of screws up in my head loose. But no worse than what's goin' on in
    your parents' bedrooms.
    <footer><span>Eminem</span></footer>
  </div>
{/if}

<style>
  div:not(.smol-box) {
    @apply text-lg py-4  mb-4 text-gray-600;
  }
  .smol-box {
    --color-light: #f8f8f8;
    --color-dark: #454545;
    margin: 2rem auto;
    color: var(--color-dark);
    background-color: var(--color-light);
    font-size: 1.2rem;
    padding: clamp(1rem, 3%, 2rem); /* Smol Responsive Padding FTW! */
    width: min(48rem, 90%); /* Provide a max-width and prevent overflow */
    word-break: break-word; /* Help prevent overflow of long words/names/URLs */
    hyphens: auto; /* Optional, not supported for all languages */
  }

  .smol-box footer > * {
    margin-top: 1rem; 
    padding: 0.25em 0.5em;
    margin-top: 1rem;
    color: var(--color-light);
    background-color: var(--color-dark);
    font-size: 0.9rem;
    width: fit-content;
  }
</style>
