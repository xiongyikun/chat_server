var http_service = require("./http_service")

var config ={
    IP:'127.0.0.1',
    PORT:'7777'
}
http_service.start(config)