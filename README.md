# React Portfolio

# Our Task

Our job here is to convert our previous portfolio from an HTML application into a single page react application with the same functionality

# Install dependencies

We'll first need to install react with npx create-react-app (AppName) with the name of our App. We'll also want to use react router for switching our pages, so we'll also run
npm install react-router-dom

Once that's done we'll need to think about how we want to structure our project

# Structure

A react application will dynamically render the parts of our page that need to change, while leaving unchanged elements like headers and footers in place. 
To do so, we'll first create a components folder, and add our separate elements as .js files in here. For this project those will be:

header.js
footer.js
contact.js
portfolio.js
about.js

We'll also want to add in a folder (called assets) that will contain everything else we need, like pictures etc

Because we'll be doing all our page switching from our header, we'll use code like the following for our route switching, which gets called by our router. (More on the router later). Here's an example

`<Link to="/Contact" className={location.pathname === "/Contact" ? "nav-link active" : "nav-link"}>`

App.js will dictate how the page is actually displayed, and call the router as well. Besides having all its dependencies imported, here's the structure of our app

            <Router>
                    <div>
                    <Header/>
                <Route exact path="/" component={About}/>
                <Route exact path="/Contact" component={Contact}/>
                <Route exact path="/Portfolio" component={Portfolio}/>
                <Footer/>
                </div>
                    
            </Router>

Since our Header and Footer are remaining onscreen, they don't need to have different paths per page, once they're rendered, they stay in place. However, the about, contact, and portfolio pages change, so once they're called they route to their component items and get rendered between the header and the footer.