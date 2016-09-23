# Grunt Tasks

## Settings

Change the files/directories that Grunt will be waching on Gruntfile.

## Creating image

`docker build -t grunt-tasks .`

Then

` docker run -it --name grunt -v $(pwd):/app grunt-tasks grunt dev `

## (OR) Using my images and just run 

` docker run -it --name grunt -v $(pwd):/app delete21/grunt-tasks:1 grunt dev `


[Docker hub link](https://hub.docker.com/r/delete21/grunt-tasks/)