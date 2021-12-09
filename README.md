## Water hardness

The thing is that Everdrop products could have some options for water with a different hardness level. Right now the App is missing that functionality and our users can not set their water hardness level to allow us to pick the best suited product for them.

Your goal is to add that functionality. By the way, we would like to have it as much automated process as possible. So, for that we could calculate a water hardness level by ourselves just by users ZIP code. We have an API service where you can send a request with appropriate code to. It will respond you with a numeric hardness level.


## Technical reference

There are 3 levels of water hardness: `soft`, `medium` and `hard`.
If the level is represented in a numeric way, the we consider it as: 
- `soft = level < 9` 
- `medium = level < 14` 
- `hard = level >= 14`.


## API Service

```javascript
// 5-digit zip codes are used in Germany
const zipCode = 86150;
const URL = `https://real-time-sponsor.com/api.v1/hardness?country_code=de&postal_code=${zipCode}`;
```


## The GOAL

The goal is to provide our users 2 options:
- manual water hardness level selection (3 options)
- calculate the water hardness level by provided ZIP Code (no need to use users location, but if you do it will give you some bonus points :))


## Things we are looking for

- Ability to work with an existing code base
- Attention to details
- Design consistency
- UX perspective is important


## Getting Started

Clone the repo, install necessary dependencoes and run the development server:

```bash
npm run dev
# or
yarn dev
```

That's it! Nothing could be simpler :)

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.