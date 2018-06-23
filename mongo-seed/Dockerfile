FROM mongo

COPY init.json /init.json

CMD mongoimport --host mongodb --db audiodata --collection recordsData --type json --file /init.json --jsonArray