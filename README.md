# Before I Go
**Digital Family Memory Platform**

## React + Vite Web Application Project

## Purpose:
- Enable loved ones to remember and learn about their predecessors.
- Provide a focused, private space for cherished memories.
- Avoid cluttered social media threads.

---

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

---

# Running The Application [^1]
1. Open the terminal and navigate (cd) into this project's `api` directory
2. Run command `json-server -p 8088 database.json`
3. You should see the following:
   ```
      Resources
      http://localhost:8088/users
      http://localhost:8088/journals
      http://localhost:8088/photo-memories
      http://localhost:8088/about-me
    
      Home
      http://localhost:8088
   ```
5. While this terminal is running the api, **open a second terminal** and navigate (cd) into this project's top level directory
6. run command `npm run dev`
7. You should see the following:
     ```Local:   http://localhost:5173/```
8. Open your browser (Chrome preferred). In your URL bar, enter http://localhost:5173/login
9. You should now see the login page for the application
10. You should also open a new tab and navigate to the api resource: http://localhost:8088/users for test login credential information
11. Enter the email address of a user within the database to see example use cases or click the Register link and create your own profile
12. Try out some of the CRUD features of the application. Enjoy!
    ## Final Demo Test: Shared Link View
1. Navigate to the `Share My Memories` tab while logged in to a user profile
2. Copy the **shareable link** and paste it into the URL of a new tab
3. You should now see all of the non-editable application views for this profile that a "viewer" with this shared link would see.

---

   [^1]: Remember to make sure any applicable dependencies are installed prior to testing this application.
