# Etikettskrivare
This system is meant to be used as a computer touchscreen connected to a sticky label printer next to the 3-4 gates out of which orders of wagons and pallets are loaded onto *Frigoscandias* trucks at *Skånemejerier* in Malmö, Sweden.

## What to solve?
Individual labels on each package are mandatory for functioning resorting at OMEX at Frigoscandia, Helsingborg. Previously used A4 printed papers are blown away or thrashed making the package unsendable.

## How to solve it?  
1. **The label HAS to contain at least the receptients address.**
1. Sender adress (for this system to be applied to other Frigoscandia Customers)
1. Barcode for waybill number
1. Barcode with packageNumber
1. gMaps QR-code link with recieptients adress (when omex-personell are unsure of where it is bound for, meaning on which next truck to load it at omex)
1. QR-code with complete label info

## General
The different techniques used:
- php (changing and adding addressees)
- html, css, js (displaying on touchscreen)
- js (printer function)

### Manual setup settings for developing
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
   setfacl -R -m g:www-data:rw .
   ```
   *m for append change and R for recursive.*

## Physical setup / wishlist
* Touchscreen computer
* Label printer
* Scale
* Barcode scanner

## `TODO` - list
- [ ] Set up a local server developer environment including php, css, html, js
- [ ] Clean up amongst files.
  Example, each json file is used while creating each micro part of this project. One is for displaying the list of receptients, one is for writing a new recieptient etc. It is therefor not possible to just delete a file since its configuration is a part of that particular solution.
- [ ] Find out exact quality of sticker labels, including size and physical printer
- [ ] How to retrieve a newand unique waybill number from Frigoscandias system?
- [ ] A printed label might need replacing or reprinting. Package count has to occur at some point before departure.
  Two labels might need to be merged thus throwing away one of the labels.
- [ ] Peripheral information about package can be included (weight, containment etc)
- [ ] Perhaps final loading should include scanning and weighing? Then exact information is available automatically?! "Parcel scanning" is actualised but not yet complete at Frigo.