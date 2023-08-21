# Etikettskrivare
This system is meant to be used as a computer touchscreen connected to a sticky label printer next to the 3-4 gates out of which orders of wagons and pallets are loaded onto *Frigoscandias* trucks at *Skånemejerier* in Malmö, Sweden.

## What to solve?
Individual labels on each package are mandatory for a functioning resorting at OMEX at Frigoscandia, Helsingborg. Previously used A4 printed papers are blown away or thrashed making the package unsendable.

## Inclusion on label  
1. **The label HAS to contain at least the receptients address.**
* Sender adress (for this system to be applied to other Frigoscandia Customers)
* Barcode for waybill number
* Barcode with packageNumber
* gMaps QR-code link with recieptients adress (when omex-personell are unsure of where it is bound for, meaning on which next truck to load it at omex)
* QR-code with complete label info

## General technical information
### The different languages used:
- php (changing and adding addressees)
- html, css, js (displaying on touchscreen)
- js (printer function)
### Physical setup / wishlist
* Touchscreen computer
* Label printer
* Scale
* Barcode scanner

## Manual setup settings for local developing environment
1. Manually install Docker LAMP from [this](https://github.com/sprintcube/docker-compose-lamp) location.
   - copy the .env file included [here](resources/conf/dockerLAMP/.env)
   - Follow [install instructions](https://github.com/sprintcube/docker-compose-lamp#installation).
     If .env-file is up for change, just run
      ```console
      docker-compose up -d
      ```
      in the same directory as you cloned the lamp-server
1. Make sure the apache server has accessrights to this folder recursively
   - for Linux, use 
   ```console
   setfacl -R -m g:www-data:xrw .
   ```
   *m for append change and R for recursive.*

## `TODO` - list
- [ ] Set up a local server developer environment including 
  - [x] php
  - [x] css
  - [x] html
  - [x] js
  - [x] Apache2
  - [ ] MariaDB / Mysql
- [ ] Clean up amongst files.
  - [ ] Use only one JSON-file
    - [ ] Move to use MySQL
  - [ ] Use AJAX and only one page for all functionalities
### Physical World
- [ ] Find out exact quality and size of sticker labels
  - [ ] Brand of available physical printer
    - [ ] Testrun on this printer
- [ ] How to retrieve a new and unique waybill number from Frigoscandias system?
- [ ] Package Unique serial number
  - [ ] How to retrieve
  - [ ] Whats the correct name?
### Enhancements
- [ ] Label handling
  - [ ] The type of package(wood/plastic pallet, wagon, carton etc) has to be included in the metainformation
  - [ ] A printed label might need replacing ~~or reprinting~~.
  - [ ] Package count has to occur at some point before departure.
  - [ ] Two labels might need to be merged thus throwing away one of the labels.
  - [ ] Perhaps final loading should include scanning
- [ ] Weighing?
  - [ ] Generating QR-code with weight information for parcel scanner?
- [ ] Peripheral information about package can be included (weight, containment etc)