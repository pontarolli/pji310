# Project Integrador em Computação III PJI310 Grupo 12

Simple overview of use/purpose.

## Description

An in-depth paragraph about your project and overview of use.

## Getting Started

### Dependencies

* Describe any prerequisites, libraries, OS version, etc., needed before installing program.
* ex. Windows 10
* Windows 10
* Docker Desktop
* Git

### Installing

* How/where to download your program
* Any modifications needed to be made to files/folders
* Git 
  ```bash
  # Clone  the repository into a local directory
  `https://github.com/pontarolli/pji310`
  ```
  
* InfluxDB 
  ```bash
  # Install influx
  cd pji310\influxdb
  docker-compose up
  ```

* InfluxDB Service
  ```bash
  # Install modules
  npm i
  # run service
  node influx.service.js
  #  temperature,sensor_id=TLM01 value=25 1709570463034176300
  # WRITE FINISHED
  ```

* InfluxDB API
  ```bash
  http://localhost:8086/
  user: user
  password: password
  token: ranChOHd3Bg3Efy8Qv0HlVNIm0fB0McUfk3UOIyySbZLtnfoWUuIh1Hqe_JuwQcOIZWiZuhA-daBiaBIILKTOQ==  
  ```

* Node-RED
  ```bash
  # Install node-red
  cd pji310\node-red 
  docker-compose up
  ```
* Node-RED Flows  
     ```bash
    # Copy the flows and paste it into  
     \\wsl.localhost\docker-desktop-data\data\docker\volumes\node-red_node-red-data\_data\lib\flows
     ```
* Node-RED Module
  * node-red-contrib-bigtimer
  * node-red-contrib-influx
  * node-red-dashboard

### Executing program

* How to run the program
* Step-by-step bullets
```
code blocks for commands
```

## Help

Any advise for common problems or issues.
```
command to run if program contains helper info
```

## Authors

Contributors names and contact info

ex. Dominique Pizzie  
ex. [@DomPizzie](https://twitter.com/dompizzie)

## Version History

* 0.2
    * Various bug fixes and optimizations
    * See [commit change]() or See [release history]()
* 0.1
    * Initial Release

## License

This project is licensed under the [NAME HERE] License - see the LICENSE.md file for details

## Acknowledgments

Inspiration, code snippets, etc.
* [awesome-readme](https://github.com/matiassingers/awesome-readme)
* [PurpleBooth](https://gist.github.com/PurpleBooth/109311bb0361f32d87a2)
* [dbader](https://github.com/dbader/readme-template)
* [zenorocha](https://gist.github.com/zenorocha/4526327)
* [fvcproductions](https://gist.github.com/fvcproductions/1bfc2d4aecb01a834b46)




# Node-RED

# Run
`docker-compose up -d`

# Flows
Copy the flows and paste it into `\\wsl.localhost\docker-desktop-data\data\docker\volumes\my-nodered-project_node-red-data\_data\lib\flows`

## Getting Started
- [Installing Node-RED](https://nodered.org/docs/getting-started)
- [Creating your first flow](https://nodered.org/docs/tutorials/first-flow)
- [Node-RED Concepts](https://nodered.org/docs/user-guide/concepts)
- [Using the Node-RED Editor](https://nodered.org/docs/user-guide/editor)
- [InfluxDB with Node-Red](https://funprojects.blog/2020/02/01/influxdb-with-node-red/).





curl -i -XPOST http://localhost:8086/query --data-urlencode "q=CREATE DATABASE mydb"

curl -i -XPOST http://username:password@localhost:8086/query --data-urlencode "q=CREATE DATABASE mydb"
curl -i -XPOST http://user:password@localhost:8086/query --data-urlencode "q=CREATE DATABASE mydb"

curl -i -XPOST http://localhost:8086/api/v2/write?org=myorg&bucket=mybucket \
  --header "Authorization: Token YOUR_AUTH_TOKEN" \
  --data-raw 'temperature,sensor=1 value=25'

curl -i -XPOST http://localhost:8086/api/v2/write?org=org&bucket=mybucket --header "Authorization: my-super-secret-auth-token" --data-raw 'temperature,sensor=1 value=25'





curl -i -XPOST 'http://localhost:8086/write?db=mydb'
--data-binary 'cpu_load_short,host=server01,region=us-west value=0.64 1434055562000000000'

curl -i -XPOST 'http://localhost:8086/api/v2/write?bucket=db/rp&precision=ns' \
  --header 'Authorization: Token username:password' \
  --data-raw 'cpu_load_short,host=server01,region=us-west value=0.64 1434055562000000000'

