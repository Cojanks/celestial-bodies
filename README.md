# Celestial Bodies Tracker

Ayo Beltalowda!
Looking to travel the system? Space is big but its also packed with rocks. Use this system to view all JPL tagged asteroids and meteors in any reagion of the Sol system.

To use this tool:

- Clone this repo
- Run `npm install`
- run `npm run dev` within the new directory

UI:

- Use the Range slider to determine the area of space to query (A new API request is made when the slider is changed)
- Use the quick view buttons to change your view of the Sol system

### Notes

- This project was built in **React** using React Query, Styled Components, and utilizes an Ant Design table.
- Data is collected via JPL's SBDB (Small-Body DataBase) API
- Due to CORS, this project uses a proxy to query the API for local use. _Do not make excessive API calls (please)_

### TODO:

- Invalidate Query cache on change in order to rehydrate the table data
- Add new features?
- Build cool and amazing things because why not
