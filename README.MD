# Etikettskrivare
This system is meant to be used as a computer touchscreen connected to a glue labeler, on the wall next to the gate out of which whole orders of wagons and pallets are loaded onto *Frigoscandias* trucks at *Skånemejerier* in Malmö, Sweden.

## What to solve?
Individual labels on each package are mandatory for functioning resorting at OMEX in Frigoscandia Helsingborg. Previously used A4 printed papers are blown away or thrashed making the package unsendable.

## How to solve it?  
1. **The label HAS to contain at least the receptients address.**
1. Sender adress (for this system to be applied to other Frigoscandia Customers)
1. Barcode for waybill number
1. Barcode with packageNumber
1. gMaps QR-code link with recieptients adress (when omex-personell are unsure of where it is bound for, meaning on which next truck to load it at omex)
1. QR-code with complete label info

  `TODO` The glue on the labels cannot get stuck on the wagon metal or the goods but still has to be firm enough to not blow away. That kind of label does exist, according to IT-personell at Frigoscandia HQ/IT.

## General
This setup includes a Docker LAMP and a web tool for printing labels on a labelwriter. The first has to be manually installed because of local configuration demands. Purpose is to write travel labels for goods. Configuration right now is goods from Skånemejerier to clients.
   The different techniques used:
   php (changing and adding addressees)
   html, css, js (displaying on touchscreen)
   js (printer function)

## Setup
* A touchscreen (prefered)
  * For choosing which adressee and sender to be used
    * Waybill number is fetched (`TODO` from where and how?)
    * Package number (CCNR(?)) is generated automatically or fetched (from where) and availble for external systems.
      * `TODO` If more than one label is printed for the same pallets/packages/wagons it has to be a way to count it as only one.
      * `TODO` if two pallets/packages/wagons are merged then the system has to find out
   * `TODO` Weight and other meta data is greatly appreciated but not available at the moment.
     * Perhaps a scale included in scanning of label before loading? that means each pallets/packages/wagon is getting its actual weight including tare
* A label printer.

## Manual settings
1. Install Docker LAMP from [this](https://github.com/sprintcube/docker-compose-lamp) location.
   - configure .env file or copy the one included here
   - Follow install instructions. If .env-file is up for change, just run
      ´´´
      docker-compose -d up
      ´´´
      in the same directory as you cloned the lamp-server
2. Make sure the apache server has accessrights to this folder recursively
   - for Linux, use 
   ```console
   setfacl -R -m g:devFirmB:rw .
   ```
   m for append change and R for recursive.

## `TODO` - list
- [ ] Set up a local server developer environment including php, css, html, js
- [ ] Clean up amongst files.
  Example, each json file is used while creating each micro part of this project. One is for displaying the list of receptients, one is for writing a new recieptient etc. It is therefor not possible to just delete a file since its configuration is a part of that particular solution.