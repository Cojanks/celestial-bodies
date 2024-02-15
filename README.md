# Celestial Bodies Tracker

Ayo Beltalowda!
Looking to travel the system? Space is big but its also packed with aimless pieces of mass. Use this interface to view all JPL-tagged asteroids and meteors in any region of the Sol system.

To use this tool:

- Clone this repo
- run `npm install`
- run `npm run dev` within the new directory
- View project at [http://localhost:5173/](http://localhost:5173/)

UI:

- Use the Range slider to determine the area of space to query (A new API request is made when the slider is changed)
- Use the quick view buttons to change your view of the Sol system

### Notes

- This project was built in **React** using React Query, Styled Components, and utilizes an Ant Design table.
- Data is collected via JPL's [SBDB (Small-Body DataBase) API](https://ssd-api.jpl.nasa.gov/doc/sbdb.html)
- This project uses a proxy to query the API for local use. _Do not make excessive API calls (please)_ (CORS issue with localhost)
- Built in... ~ 10hrs?

### Current bugs:

- No refresh after slider change

### TODO:

- Invalidate Query cache on slider change in order to rehydrate the table data
- Add visual indicators for au distance on the slider (perhaps a ruler underlay?)
- Add definitionas for Orbit Classifications
- Add more information about current slider values (in au)
- Build cool and amazing things because why not
