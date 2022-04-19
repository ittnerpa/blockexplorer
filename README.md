# Getting Started with Blockexplorer from Regen Network

---

## Run Project on localhost

`npm start`

## Description

The project is a responsive webapp, which is connected via cosmos client to the regen network and build with the component library MUI and typescript. You will only see a minimal implementation of all available data provided by the cosmos network.
It is inspired by https://redwood.regen.aneka.io/ block explorer.

## Used Libraries

- MUI - Component Library
- Cosmos Client - Blockchain access
- React Query - Request Handling
- Prettier/Linter/Typescript - Code Style
- React-Router-Dom - Routing

## Project Structure

    .                            # Routing and App Setup
    ├── components               # Reusable components 
    ├── icons                    # Reusable icons as SVG
    ├── services                 # Blockchain access via cosmos client
    ├── store                    # Used to store blockchain data
    ├── tests                    # Automated tests (no tests were added)
    ├── theme                    # Global with theme with most of the CSS 
    ├── utils                    # Helper functions
    └── views                    # Views/pages of the web app
