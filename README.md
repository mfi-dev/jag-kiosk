# jag-kiosk
Touch-screen kiosk app for Air Force JAG offices

### Installation Instructions (Windows) 
1. Install [NodeJS](https://nodejs.org)
2. Download and unzip [Cmder Mini](http://cmder.net)
3. Install [Github Desktop](https://desktop.github.com/)
5. Open Cmder, navigate to folder you'd like to contain this software, clone this repository.
   ```
   cd MyProjectFolderGoesHere
   git clone https://github.com/mfi-dev/jag-kiosk.git .
   ```
6. Install Electron globally
   ```
   npm i -g electron
   ```
7. Close your shell (cmder) window and open a new one.
8. Navigate to where you placed the repository
   ```
   cd MyProjectFolderGoesHere/jag-kiosk
   ```
9. Install dependencies needed for app.
   ```
   npm i 
   ```
9. Run the app by typing:
   ```
   electron .
   ```
  
** This app was made for and should be ran at 1080p resolution **


### To Add/Remove Images from the App
- Images exist in the jag-kiosk/images directory. There are three separate directories, (early_years, modern_era, and todays_force) which hold all the images related to that category. At the top level of the images folder, there is an images.json file. 

- To remove an image from the app, just delete it's reference in this `images.json` file.

- To add an image, put it in the correct directory (early_years, etc.) and then modify the `images.json` file to include it. ** you must get the filename exactly correct **

- If the image is in portrait, add `"format": "tall"` to the json for that image.

- WARNING: Correct JSON format must remain in tact. Missing a comma or adding an unnecessary one will break the app! Refer to the format already used in the file and just remember not to add a trailing comma if the image is the last entry for a section.
