# Saatchi Art Code Challenge

​

##### Our current App looks like this:

​
![CurrentApp](https://user-images.githubusercontent.com/643526/73705825-c95eb300-46ab-11ea-9f53-a8aaa2080b13.jpg)
​

##### Your task is to make it look like this:

​
![SampleApp](https://user-images.githubusercontent.com/643526/73705331-7e906b80-46aa-11ea-9fa7-e98f37b6319b.gif)
​

##### In order to do this, you will need to complete these steps:

1. Retrieve artwork data from an [api endpoint](http://localhost:3000/api/data) which is provided by the Express app

2. Dispatch/Reduce that data into the Redux Store

3. Display Artworks in `ArtworkList.js`. Instructions are in that file.

4. Hook up the search box so it filters the artworks displayed by the attribute `artworkTitle` on keyup. This should be done using common redux patterns:

   1. Make an action creator

   2. dispatch that action `onChange` in the search box

   3. Add a switch case in the reducer to reduce the global state based on the fired action

   4. ensure the `ArtworksList` receives the filtered `Artwork` data to render components

5. Add some css flexbox or grid styling to display the filtered artworks in a grid layout with a maximum of 4 artworks per row

6. **Bonus**: Add in a feature to favorite and unfavorite an artwork with the heart button. Ensure this also goes through the redux store. Save the favorites to the browser's local storage so the favorites will persist if the user refreshes the page.

As you go, save commits however you think is appropriate for code review. When you're done, please put it on your GitHub account and send us the url.

​
Thank you for taking the coding challenge, and best of luck!
