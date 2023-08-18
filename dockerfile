FROM php:7.2-apache

## To mount a volume not compressed into a tar to be used in the container then use this syntax:
## docker run -v [relative or absolute directory on host folder]:[container folder]
## COPY /home/joakim/code/projects/etikettprinter/system/web/ /usr/local/apache2/htdocs/

# Add `www-data` to group `appuser`
#RUN addgroup --gid 1000 appuser; \
#  adduser --uid 1000 --gid 1000 --disabled-password appuser; \
#  adduser www-data appuser;

RUN setfacl -m g:www-data:rwx ./resources/json/addresses.json
