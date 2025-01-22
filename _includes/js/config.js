var siteTheme = gbifReactComponents.themeBuilder.extend({
  baseTheme: 'light', extendWith: {
    primary: themeStyle.colors.primary
  }
});

var siteConfig = {
  theme: {
    primary: '#176f75',
  },
  "routes": {
    "occurrenceSearch": {
      "route": "/"
    },
    "basename": "/gbif-explorer"
  },
  "locale": "en",
  "occurrence": {
    "mapSettings": {
      "lat": 43.858297,
      "lng": -72.446594,
      "zoom": 7.75
    },
    "rootPredicate": {
      "type": "or",
      "predicates": [
        {
          "type": "and",
          "predicates": [
            {
              "type": "equals",
              "key": "country",
              "value": "US"
            },
            {
              "type": "in",
              "key": "stateProvince",
              "values": [
                "vermont",
                "vermont (state)"
              ]
            },
            {
              "type": "equals",
              "key": "hasCoordinate",
              "value": false
            },
            {
              "type": "equals",
              "key": "occurrenceStatus",
              "value": "PRESENT"
            }
          ]
        },
        {
          "type": "and",
          "predicates": [
            {
              "type": "equals",
              "key": "gadmGid",
              "value": "USA.46_1"
            },
            {
              "type": "equals",
              "key": "occurrenceStatus",
              "value": "PRESENT"
            }
          ]
        }
      ]
    },
    "highlightedFilters": [
      "q",
      "taxonKey",
      "gadmGid",
      "locality",
      "elevation",
      "year",
      "recordedBy",
      "publishingOrg",
      "datasetName"
    ],
    "excludedFilters": [
      "stateProvince",
      "continent",
      "country",
      "publishingCountry",
      "hostingOrganization",
      "networkKey",
      "publishingProtocol"
    ],
    "occurrenceSearchTabs": [
      "GALLERY",
      "MAP",
      "TABLE",
      "DATASETS"
    ],
    "defaultTableColumns": [
      "features",
      "coordinates",
      "locality",
      "year",
      "month",
      "basisOfRecord",
      "dataset",
      "publisher",
      "recordedBy",
      "collectionCode",
      "institutionCode"
    ]
  },
  "apiKeys": {
    "maptiler": "qcDo0JkF6EBKzpW7hlYB"
  },
  "maps": {
    "locale": "en",
    "defaultProjection": "MERCATOR",
    "defaultMapStyle": "SATELLITE",
    "mapStyles": {
      "MERCATOR": [
        "NATURAL",
        "SATELLITE",
        "BRIGHT",
        "DARK"
      ],
      "PLATE_CAREE": [
        "NATURAL",
        "BRIGHT",
        "DARK"
      ]
    }
  }
};

