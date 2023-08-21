# Etikettskrivare

## What to solve?
This system is meant to be used as a computer touchscreen on the wall next to the gate out of which whole orders of wagons and pallets are loaded onto Frigoscandias trucks at Skånemejerier in Malmö, Sweden.
A historical problem has been for a long time several different markings on a common A4-paper telling where the pallets/packages/wagons are bound after omex (redistribution, goods coming to one place packaged as on shipping getting split up to several adressees). These papers have either gone missing (from blowing away from the pallets/packages/wagons) or are forgotten by the packagers to be put on the goods. If EVERY pallets/packages/wagons always has to have a printed label from this system it is much easier to teach new packagers to remember doing it.

**The label HAS to contain at least the recieptients address.**

Other good to have, sorted in need-grades. Having this in consideration from the start means the label area needs to be bigger, thus being easier to stick to the pallets/packages/wagons. One problem to solve already is the glue cannot get stuck on the metal or the goods and has to be firm enough to not blow away. That kind of label does exist, according to IT-personell at Frigoscandia.
1. Sender adress (for this system to be applied to other Frigoscandia Customers)
1. Barcode for waybill number
1. Barcode with packageNumber

2. gMaps QR-code link with recieptients adress (when omex-personell are unsure of where it is bound for, meaning on which next truck to load it at omex)
2. QR-code with complete label info

## General
This setup includes a Docker LAMP and a web tool for printing labels on a labelwriter. The first has to be manually installed because of local configuration demands. Purpose is to write travel labels for goods. Configuration right now is goods from Skånemejerier to clients.

## Setup
* A touchscreen (prefered)
  * For choosing which adressee and sender to be used
    * Waybill number is fetched (TODO from where and how?)
    * Package number (CCNR(?)) is generated automatically or fetched (from where) and availble for external systems.
      * TODO If more than one label is printed for the same pallets/packages/wagons it has to be a way to count it as only one.
      * TODO if two pallets/packages/wagons are merged then the system has to find out
   * TODO Weight and other meta data is greatly appreciated but not available at the moment.
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
   setfacl -mR g:devFirmB:rw .
   ```
   m for modify and R for recursive.

## TODO - list
1. Sätta upp en lokal servermiljö med:
   - php (för att ändra och lägga till data lokalt, gäller adresserna)
   - html, css (för att presentera på touchscreen)
   - js