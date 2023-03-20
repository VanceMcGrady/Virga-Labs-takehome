**START HERE**

I chose to use React and recharts in order to spin up a visualization quickly in the browser

You should be able to run this application in your browser by cloning this repo and then (assuming you have npm installed running: 

npm i 
npm start

https://legacy.reactjs.org/docs/getting-started.html
https://recharts.org/en-US/

The benefits of using React in this case is that it makes it readable and reusable. In our case we only needed to create one component for a line graph
but the architecture is modular and scalable - we can now easily make any variety of componets and process and display them within a robust React application. 

I was able to  get an app up and running on the basic assumption that the most fundamental funtionality was to visualize water over time

I was having CORS issues and did not want to install any further dependencies or spend too long trying to debug the fetch requests. Because of this, the visualizion
I have is based on mock data and is proof of concept. Once the cors issues are resolved and the fetch requests are successfully returning JSON, the application would still work fundamentally the same and you would not need to make any major changes to the architecture of the application. I though that having the scaffolding complete was more important that the single variable of the fetch requests working so I moved forward accordingly. 

Additional functionality would include an element on the page that the user could interact with in order to toggle level of time aggregation. 

