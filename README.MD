# Etikettskrivare

## General
This setup includes a Docker LAMP and a web tool for printing labels on a labelwriter. The first has to be manually installed because of local configuration demands. Purpose is to write travel labels for goods. Configuration right now is goods from Skånemejerier to clients.

## Setup
* A touchscreen (prefered)
* A label printer.

## Manual settings
1. Install Docker LAMP
   - configure .env file or copy the one included here
2. Make sure the apache server has accessrights to this folder recursively
   - for Linux, use ```console
   setfacl -mR g:devFirmB:rw .
   ```
   m for modify and R for recursive.