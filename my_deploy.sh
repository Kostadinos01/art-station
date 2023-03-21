#!/bin/bash

npm run build

sudo rm -r /var/www/html

sudo cp -r build /var/www/html

sudo service nginx restart
