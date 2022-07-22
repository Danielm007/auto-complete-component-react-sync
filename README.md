# AutoComplete Component

AutoComplete component that uses an API for fetching data called dummyJSON, the endpoint used is https://dummyjson.com/users
Project uses typescript

# **Important**

Assesment asks to filtering data on an asynchronous function (simulating API calls) but I don't think this is a good practice based on my experience, because in real world this is going to make an api request everytime the user types, this is not an ideal way to work because the API it's going to receive many requests at a time just for one user and for more users this is going to be a hell for the API to handle all the requests, but I know how to do it, that's why I decided to make a one-time API call and save data in state, of course it's asynchronous and uses fetch and promises and then filter data using the data that we already have. If it's required to filter in an asynchronous way I can do it without problems so let me know if something needs to be changed.

# Run Project

Next steps are going to guide you on how to run the project locally and how can you take it to production.

## Development

For running this project locally, first you have to clone this repo using HTTPS or SSH, once you clone this project please open folder in your terminal or VSCode terminal and run command `npm install` to install dependencies and once it's completed you can run command `npm start` for starting the project, automatically your default browser will open a window with the application, if this doesn't happen please open ypur browser and navigate to [http://localhost:3000](http://localhost:3000)

## Production

You can run the command `npm run build` this is going to generate a build folder inside your directory and you can use this folder to deploy the app on your preferred host provider.
