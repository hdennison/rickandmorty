# Yes, another Rick and Morty API page

## Technologies used

- Next.js
- TanStack Query
- Tailwind & CSS Modules

## Deployed version

https://rickandmorty-eight-lilac.vercel.app/

## Features

### Everything is Server-Side Rendered (SSR)

In fact, you can use the app with JavaScript disabled, even the search! (\*)  
Search is stored in the URL, so you can bookmark, copy, and paste, etc.

> (\*) Except for ordering the results, I didn't have time for this one. 🤷

### Responsive and fluid design

Media queries are good, but limiting.  
Fluid grids are a step beyond!

### Dark and light modes

In fact, it looks soooo much nicer in dark mode. ❤️

## Testing

- Components are tested with Vitest _in browser mode_.

  > Usually, components would have screenshot tests with Chromatic, but for now, I'm using only snapshots. (Booo! 👎🏻)

- Pages and user interaction are tested with Playwright.

## Ligthouse report

- 100% in all metrics 🎉

## Other tools

ESLint and Prettier are set up and more-or-less configured, running on save and on staged files for commits.  
The full suite of unit and E2E tests runs when trying to push to `main`.

## Some files to take a look at and why

- `src/components/ui/button/button.tsx` or `src/components/ui/select/select.tsx`  
  Basic examples of how I like to structure reusable components.  
  There's some noise in the Tailwind classes, I need to tweak the config to use cleaner variables, but I didn't have time.

- `src/components/home/home.tsx`  
  A good example of a component inside the app.  
  I think there's a good balance between custom components and Tailwind helper classes, making it easy to read and maintain.

- `tests/playwright/home/render.spec.ts`  
  To be honest, I'm quite proud of how I set up tests for many valid and invalid search cases, and tested with JavaScript on and off.

## What is missing

### Tests are running gainst the real API!

For CI and for developing offline, we should be able to work without a real connection to the API.
I tried to set up Mock Service Worker (MSW), but the combo of NextJS SSR, Vitest in browser mode, and MSW was too much for an easy setup.

### Pagination

It's supposed to be trivial thanks to React Query, but I didn't have time to implement it.

### Time

I spent too much time on this, and I'd spend much more tweaking things, but I have to know when to stop!

Thanks for your time! 🙂
